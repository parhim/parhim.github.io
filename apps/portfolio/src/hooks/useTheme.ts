import { useCallback, useEffect, useSyncExternalStore } from "react";
import { track } from "../lib/analytics";

export type Theme = "light" | "dark";

const STORAGE_KEY = "parhim-theme";

const listeners = new Set<() => void>();

function emit(): void {
  for (const listener of listeners) listener();
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "light" || value === "dark") return value;
  } catch {
    /* private browsing */
  }
  return null;
}

function getClientTheme(): Theme {
  return readStoredTheme() ?? getSystemTheme();
}

function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

function subscribe(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onMedia = () => {
    if (readStoredTheme() === null) onStoreChange();
  };
  media.addEventListener("change", onMedia);
  return () => {
    listeners.delete(onStoreChange);
    media.removeEventListener("change", onMedia);
  };
}

/**
 * Theme is read from localStorage / system preference via useSyncExternalStore
 * so SSR always snapshots as "light" and the client hydrates without mismatch.
 * The blocking script in index.html still paints the correct CSS theme early.
 */
export function useTheme() {
  const theme = useSyncExternalStore<Theme>(subscribe, getClientTheme, () => "light");
  const prefersSystem = useSyncExternalStore<boolean>(
    subscribe,
    () => readStoredTheme() === null,
    () => true,
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyTheme(next);
    track("theme_toggle", { theme: next });
    emit();
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(getClientTheme() === "light" ? "dark" : "light");
  }, [setTheme]);

  return { theme, setTheme, toggleTheme, prefersSystem } as const;
}
