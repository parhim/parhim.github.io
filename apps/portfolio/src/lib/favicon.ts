const BLINK_MS = 550;

export function buildFaviconHref(cursorVisible: boolean, dark: boolean): string {
  const bg = dark ? "#0f1413" : "#eef1f2";
  const prompt = dark ? "#7ec4b5" : "#1a4f48";
  const cursor = dark ? "#eef2f1" : "#141a1c";
  const cursorRect = cursorVisible
    ? `<rect x="20.5" y="9" width="2.25" height="14" rx="0.4" fill="${cursor}"/>`
    : "";

  const markup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="${bg}"/><path d="M8 9 L17 16 L8 23" fill="none" stroke="${prompt}" stroke-width="3.25" stroke-linecap="square" stroke-linejoin="miter"/>${cursorRect}</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(markup)}`;
}

function isDarkTheme(): boolean {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getIconLink(): HTMLLinkElement | null {
  return (
    document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/svg+xml"]') ??
    document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  );
}

/** Blinks the tab favicon cursor; no-ops when reduced motion is preferred. */
export function startFaviconBlink(): void {
  if (typeof document === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const link = getIconLink();
  if (!link) return;

  let cursorVisible = true;

  const paint = () => {
    link.href = buildFaviconHref(cursorVisible, isDarkTheme());
  };

  paint();
  window.setInterval(() => {
    cursorVisible = !cursorVisible;
    paint();
  }, BLINK_MS);

  const observer = new MutationObserver(paint);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
}
