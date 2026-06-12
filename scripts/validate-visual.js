import { createServer } from 'node:http';
import { mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const root = path.resolve(process.env.VISUAL_SITE_DIR || '_site');
const artifactDir = path.resolve(process.env.VISUAL_ARTIFACT_DIR || 'visual-artifacts');
const pages = ['/', '/sobre/'];
const themes = ['dark', 'light'];
const viewports = [
	{ name: 'desktop', width: 1366, height: 768 },
	{ name: 'mobile', width: 390, height: 844 },
];

const contentTypes = new Map([
	['.html', 'text/html; charset=utf-8'],
	['.js', 'text/javascript; charset=utf-8'],
	['.css', 'text/css; charset=utf-8'],
	['.svg', 'image/svg+xml'],
	['.png', 'image/png'],
	['.jpg', 'image/jpeg'],
	['.jpeg', 'image/jpeg'],
	['.gif', 'image/gif'],
	['.ico', 'image/x-icon'],
]);

const fail = (message) => {
	throw new Error(message);
};

const routePath = (urlPath) => {
	const decoded = decodeURIComponent(urlPath.split('?')[0] || '/');
	const clean = path.normalize(decoded).replace(/^([/\\])+/, '');
	const candidate = path.join(root, clean);
	const target = decoded.endsWith('/') ? path.join(candidate, 'index.html') : candidate;

	const relative = path.relative(root, target);

	if (relative.startsWith('..') || path.isAbsolute(relative)) {
		return null;
	}

	if (existsSync(target)) {
		return target;
	}

	if (existsSync(`${target}.html`)) {
		return `${target}.html`;
	}

	const index = path.join(target, 'index.html');
	return existsSync(index) ? index : null;
};

const startServer = async () =>
	new Promise((resolve) => {
		const server = createServer(async (request, response) => {
			const target = routePath(request.url || '/');

			if (!target) {
				response.writeHead(404);
				response.end('Not found');
				return;
			}

			const body = await readFile(target);
			response.writeHead(200, {
				'content-type': contentTypes.get(path.extname(target)) || 'application/octet-stream',
			});
			response.end(body);
		});

		server.listen(0, '127.0.0.1', () => resolve(server));
	});

const contrastRatio = (foreground, background) => {
	const parse = (value) => {
		const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
		return match ? match.slice(1, 4).map(Number) : null;
	};

	const luminance = (rgb) => {
		const [r, g, b] = rgb.map((channel) => {
			const value = channel / 255;
			return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
		});

		return 0.2126 * r + 0.7152 * g + 0.0722 * b;
	};

	const fg = parse(foreground);
	const bg = parse(background);

	if (!fg || !bg) {
		return 21;
	}

	const lighter = Math.max(luminance(fg), luminance(bg));
	const darker = Math.min(luminance(fg), luminance(bg));
	return (lighter + 0.05) / (darker + 0.05);
};

const validatePage = async (page, url, theme, viewportName) => {
	await page.goto(url, { waitUntil: 'networkidle' });

	if (theme === 'light') {
		await page.locator('label[for="jcem-theme-light"]').click();
	} else {
		await page.locator('label[for="jcem-theme-dark"]').click();
	}

	await page.waitForTimeout(150);

	const result = await page.evaluate(() => {
		const visible = (selector) =>
			Array.from(document.querySelectorAll(selector)).filter((node) => {
				const rect = node.getBoundingClientRect();
				const style = window.getComputedStyle(node);
				return rect.width > 1 && rect.height > 1 && style.display !== 'none' && style.visibility !== 'hidden';
			});

		const readStyle = (selector) => {
			const element = document.querySelector(selector);
			if (!element) return null;
			const style = window.getComputedStyle(element);
			const rect = element.getBoundingClientRect();
			return {
				selector,
				color: style.color,
				backgroundColor: style.backgroundColor,
				width: rect.width,
				height: rect.height,
			};
		};

		const siteTitle = document.querySelector('.site-title')?.getBoundingClientRect();

		return {
			overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
			sidebars: visible('aside, .sidebar, .sidebar__right').length,
			siteTitleWidth: siteTitle ? siteTitle.width : 0,
			siteTitleHeight: siteTitle ? siteTitle.height : 0,
			styles: [
				readStyle('.main_jcem_wrapper'),
				readStyle('.masthead'),
				readStyle('.jcem-theme-toggle'),
				readStyle('.initial-content'),
				readStyle('.jcem-panel, .archive__item, .jcem-sobre'),
			].filter(Boolean),
		};
	});

	if (result.overflowX > 2) {
		fail(`Overflow horizontal em ${url} ${theme} ${viewportName}: ${result.overflowX}px`);
	}

	if (result.sidebars > 0) {
		fail(`Sidebar visivel em ${url} ${theme} ${viewportName}`);
	}

	if (result.siteTitleWidth > 2 || result.siteTitleHeight > 2) {
		fail(`Site title visivel em ${url} ${theme} ${viewportName}`);
	}

	for (const style of result.styles) {
		if (style.width <= 1 || style.height <= 1) {
			fail(`Componente sem dimensao em ${url}: ${style.selector}`);
		}

		const ratio = contrastRatio(style.color, style.backgroundColor);
		if (ratio < 3) {
			fail(`Contraste baixo em ${url} ${theme} ${viewportName}: ${style.selector} (${ratio.toFixed(2)})`);
		}
	}

	await page.screenshot({
		path: path.join(
			artifactDir,
			`${url.replace(/\W+/g, '-') || 'home'}-${theme}-${viewportName}.png`,
		),
		fullPage: true,
	});
};

const server = await startServer();
const address = server.address();
const baseUrl = `http://127.0.0.1:${address.port}`;
const browser = await chromium.launch();

try {
	await mkdir(artifactDir, { recursive: true });

	for (const viewport of viewports) {
		const context = await browser.newContext({ viewport });
		const page = await context.newPage();

		for (const pagePath of pages) {
			for (const theme of themes) {
				await validatePage(page, `${baseUrl}${pagePath}`, theme, viewport.name);
			}
		}

		await context.close();
	}
} finally {
	await browser.close();
	server.close();
}

console.log('visual_validation=ok');
