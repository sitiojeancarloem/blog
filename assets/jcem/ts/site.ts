declare global {
	interface Element {
		on(type: string, listener: EventListenerOrEventListenerObject): void;
	}
}

Element.prototype.on = function (
	type: string,
	listener: EventListenerOrEventListenerObject,
): void {
	this.addEventListener(type, listener);
};

const select = <T extends Element>(selector: string): T | null =>
	document.querySelector<T>(selector);

const jcemThemeKey = 'jcem-theme';
const jcemThemeMaxAge = 60 * 60 * 24 * 365;
const jcemThemeValues = ['light', 'dark'] as const;

type JcemTheme = (typeof jcemThemeValues)[number];

const isJcemTheme = (theme: string): theme is JcemTheme =>
	jcemThemeValues.includes(theme as JcemTheme);

const getJcemThemeCookie = (): string => {
	const cookie = document.cookie
		.split('; ')
		.find((row) => row.startsWith(`${jcemThemeKey}=`));

	return cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : '';
};

const getJcemTheme = (): string => {
	try {
		// PROTECAO: localStorage indisponivel nao impede o cookie.
		return localStorage.getItem(jcemThemeKey) || getJcemThemeCookie();
	} catch (error) {
		return getJcemThemeCookie();
	}
};

const saveJcemTheme = (theme: JcemTheme): void => {
	try {
		// PROTECAO: cookie preserva a escolha quando localStorage falha.
		localStorage.setItem(jcemThemeKey, theme);
	} catch (error) {
		document.documentElement.setAttribute('data-jcem-storage', 'blocked');
	}

	document.cookie = `${jcemThemeKey}=${encodeURIComponent(
		theme,
	)}; Path=/; Max-Age=${jcemThemeMaxAge}; SameSite=Lax`;
};

const applyJcemTheme = (theme: JcemTheme): void => {
	const radio = select<HTMLInputElement>(`#jcem-theme-${theme}`);

	if (radio) {
		radio.checked = true;
	}
};

const bindJcemTheme = (): void => {
	const storedTheme = getJcemTheme();
	const theme = isJcemTheme(storedTheme) ? storedTheme : 'dark';

	applyJcemTheme(theme);

	document
		.querySelectorAll<HTMLInputElement>('input[name="jcem-theme"]')
		.forEach((radio) => {
			radio.addEventListener('change', () => {
				if (radio.checked && isJcemTheme(radio.value)) {
					saveJcemTheme(radio.value);
				}
			});
		});
};

const bindJcemNav = (): void => {
	const navState = select<HTMLInputElement>('#jcem-nav-state');

	document.querySelectorAll<HTMLAnchorElement>('#site-nav a').forEach((link) => {
		link.addEventListener('click', () => {
			if (navState) {
				navState.checked = false;
			}
		});
	});
};

const bindJcemScrollTop = (): void => {
	const button = select<HTMLAnchorElement>('.jcem-scroll-top');

	if (!button) {
		return;
	}

	let ticking = false;

	const syncVisibility = (): void => {
		ticking = false;
		const isVisible = window.scrollY > 240;
		const isNearPageEnd =
			window.innerHeight + window.scrollY >=
			document.documentElement.scrollHeight - 96;

		button.classList.toggle('is-visible', isVisible);
		button.setAttribute('aria-hidden', String(!isVisible));
		button.tabIndex = isVisible ? 0 : -1;
		document.documentElement.classList.toggle(
			'jcem-at-page-end',
			isNearPageEnd,
		);
	};

	const requestSync = (): void => {
		if (!ticking) {
			ticking = true;
			window.requestAnimationFrame(syncVisibility);
		}
	};

	button.addEventListener('click', (event) => {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	window.addEventListener('scroll', requestSync, { passive: true });
	syncVisibility();
};

const hideNoScript = (): void => {
	const noScript = select<HTMLElement>('body > noscript');

	if (noScript) {
		noScript.style.display = 'none';
	}

	// PROTECAO: o conteudo permanece visivel mesmo sem JavaScript.
};

document.addEventListener('DOMContentLoaded', () => {
	bindJcemTheme();
	bindJcemNav();
	bindJcemScrollTop();
	hideNoScript();
});

export {};
