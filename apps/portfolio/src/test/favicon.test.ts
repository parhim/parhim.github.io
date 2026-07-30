import { describe, expect, test } from "bun:test";
import { buildFaviconHref, startFaviconBlink } from "../lib/favicon";

describe("favicon", () => {
  test("buildFaviconHref draws prompt and optional cursor", () => {
    const on = decodeURIComponent(buildFaviconHref(true, true));
    expect(on).toContain('stroke="#7ec4b5"');
    expect(on).toContain('<rect x="20.5"');

    const off = decodeURIComponent(buildFaviconHref(false, true));
    expect(off).toContain('stroke="#7ec4b5"');
    expect(off).not.toContain('<rect x="20.5"');

    const light = decodeURIComponent(buildFaviconHref(true, false));
    expect(light).toContain('stroke="#1a4f48"');
    expect(light).toContain('fill="#eef1f2"');
  });

  test("startFaviconBlink replaces the icon link with a data URI", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = "/favicon.svg";
    document.head.append(link);

    startFaviconBlink();

    expect(link.href.startsWith("data:image/svg+xml")).toBe(true);
    expect(decodeURIComponent(link.href)).toContain('<rect x="20.5"');

    link.remove();
  });
});
