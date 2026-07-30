import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import App from "../App";

/**
 * Lightweight accessibility critical-path checks.
 * Prefer axe in CI when adding a dedicated a11y runner later.
 */
describe("accessibility critical paths", () => {
  test("document has a single main landmark and skip link", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeTruthy();
    expect(screen.getByRole("link", { name: /skip to content/i })).toBeTruthy();
  });

  test("theme control exposes accessible name and pressed state", () => {
    render(<App />);
    const toggle = screen.getByRole("button", { name: /switch to dark theme/i });
    expect(toggle.getAttribute("aria-pressed")).toBe("false");
  });

  test("mobile menu button exposes expanded state", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /open menu/i });
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(button.getAttribute("aria-controls")).toBe("mobile-nav");
  });

  test("heading hierarchy starts with a single h1 naming the person", () => {
    render(<App />);
    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s.length).toBe(1);
    expect(h1s[0]?.textContent).toMatch(/Sam Parhimchik/i);
  });

  test("images that convey meaning have alt text; decorative logos may be empty", () => {
    render(<App />);
    const portrait = screen.getByAltText(/portrait of sam parhimchik/i);
    expect(portrait).toBeTruthy();
  });
});
