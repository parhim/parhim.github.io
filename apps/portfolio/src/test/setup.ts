import { afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import { resetAnalyticsBuffer } from "../lib/analytics";

afterEach(() => {
  cleanup();
  resetAnalyticsBuffer();
  document.body.innerHTML = "";
  document.documentElement.removeAttribute("data-theme");
  try {
    localStorage.clear();
  } catch {
    /* ignore */
  }
});
