// Theme-toggle logic ported from reference/pages/site.js — same key, same
// idempotent apply/toggle behavior. Dark is the unset default; 'light' is
// the only value ever persisted.

export const THEME_KEY = "ektar-theme";
export type Theme = "dark" | "light";

export function getStoredTheme(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
    document.body?.setAttribute("data-theme", "light");
  } else {
    root.removeAttribute("data-theme");
    document.body?.removeAttribute("data-theme");
  }
}

export function toggleTheme(): Theme {
  const next: Theme = getStoredTheme() === "light" ? "dark" : "light";
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    // localStorage unavailable — theme just won't persist across reloads
  }
  applyTheme(next);
  return next;
}

// Inlined into <head> in app/layout.tsx, before hydration, so the page
// never flashes the wrong theme on first paint.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_KEY}')==='light'?'light':'dark';if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`;
