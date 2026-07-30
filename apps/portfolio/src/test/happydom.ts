import { plugin } from "bun";
import { readFileSync } from "node:fs";
import { Window } from "happy-dom";

// CSS Modules stub for bun:test (Vite handles real modules in builds)
plugin({
  name: "css-modules-stub",
  setup(build) {
    build.onLoad({ filter: /\.module\.css$/ }, (args) => {
      const source = readFileSync(args.path, "utf8");
      const classes = new Set<string>();
      for (const match of source.matchAll(/\.([A-Za-z_][\w-]*)\s*[{:,]/g)) {
        const name = match[1];
        if (name) classes.add(name);
      }
      const exports = Object.fromEntries([...classes].map((name) => [name, name]));
      return {
        contents: `export default ${JSON.stringify(exports)};`,
        loader: "js",
      };
    });
    build.onLoad({ filter: /\.css$/ }, () => ({
      contents: "export default {};",
      loader: "js",
    }));
  },
});

const window = new Window({ url: "https://parhim.dev/" });
const document = window.document;

Object.defineProperty(globalThis, "window", { value: window, writable: true });
Object.defineProperty(globalThis, "document", { value: document, writable: true });
Object.defineProperty(globalThis, "navigator", {
  value: window.navigator,
  writable: true,
});
Object.defineProperty(globalThis, "HTMLElement", {
  value: window.HTMLElement,
  writable: true,
});
Object.defineProperty(globalThis, "HTMLInputElement", {
  value: window.HTMLInputElement,
  writable: true,
});
Object.defineProperty(globalThis, "customElements", {
  value: window.customElements,
  writable: true,
});
Object.defineProperty(globalThis, "MutationObserver", {
  value: window.MutationObserver,
  writable: true,
});
Object.defineProperty(globalThis, "requestAnimationFrame", {
  value: (cb: FrameRequestCallback) => setTimeout(() => cb(Date.now()), 0),
  writable: true,
});
Object.defineProperty(globalThis, "cancelAnimationFrame", {
  value: (id: number) => clearTimeout(id),
  writable: true,
});
Object.defineProperty(globalThis, "matchMedia", {
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  }),
  writable: true,
});
Object.defineProperty(globalThis, "IntersectionObserver", {
  value: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
  writable: true,
});
Object.defineProperty(globalThis, "localStorage", {
  value: window.localStorage,
  writable: true,
});
Object.defineProperty(globalThis, "getComputedStyle", {
  value: window.getComputedStyle.bind(window),
  writable: true,
});
