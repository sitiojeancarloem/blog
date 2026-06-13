Element.prototype.on = function (type, listener) {
    this.addEventListener(type, listener);
};
const select = (selector) => document.querySelector(selector);
const jcemThemeKey = 'jcem-theme';
const jcemThemeMaxAge = 60 * 60 * 24 * 365;
const jcemThemeValues = ['light', 'dark'];
const isJcemTheme = (theme) => jcemThemeValues.includes(theme);
const getJcemThemeCookie = () => {
    const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${jcemThemeKey}=`));
    return cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : '';
};
const getJcemTheme = () => {
    try {
        return localStorage.getItem(jcemThemeKey) || getJcemThemeCookie();
    }
    catch (error) {
        return getJcemThemeCookie();
    }
};
const saveJcemTheme = (theme) => {
    try {
        localStorage.setItem(jcemThemeKey, theme);
    }
    catch (error) {
        document.documentElement.setAttribute('data-jcem-storage', 'blocked');
    }
    document.cookie = `${jcemThemeKey}=${encodeURIComponent(theme)}; Path=/; Max-Age=${jcemThemeMaxAge}; SameSite=Lax`;
};
const applyJcemTheme = (theme) => {
    const radio = select(`#jcem-theme-${theme}`);
    if (radio) {
        radio.checked = true;
    }
};
const bindJcemTheme = () => {
    const storedTheme = getJcemTheme();
    const theme = isJcemTheme(storedTheme) ? storedTheme : 'dark';
    applyJcemTheme(theme);
    document
        .querySelectorAll('input[name="jcem-theme"]')
        .forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.checked && isJcemTheme(radio.value)) {
                saveJcemTheme(radio.value);
            }
        });
    });
};
const bindJcemNav = () => {
    const navState = select('#jcem-nav-state');
    document.querySelectorAll('#site-nav a').forEach((link) => {
        link.addEventListener('click', () => {
            if (navState) {
                navState.checked = false;
            }
        });
    });
};
const bindJcemScrollTop = () => {
    const button = select('.jcem-scroll-top');
    if (!button) {
        return;
    }
    let ticking = false;
    const syncVisibility = () => {
        ticking = false;
        const isVisible = window.scrollY > 240;
        const isNearPageEnd = window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 96;
        button.classList.toggle('is-visible', isVisible);
        button.setAttribute('aria-hidden', String(!isVisible));
        button.tabIndex = isVisible ? 0 : -1;
        document.documentElement.classList.toggle('jcem-at-page-end', isNearPageEnd);
    };
    const requestSync = () => {
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
const hideNoScript = () => {
    const noScript = select('body > noscript');
    if (noScript) {
        noScript.style.display = 'none';
    }
};
document.addEventListener('DOMContentLoaded', () => {
    bindJcemTheme();
    bindJcemNav();
    bindJcemScrollTop();
    hideNoScript();
});
export {};
