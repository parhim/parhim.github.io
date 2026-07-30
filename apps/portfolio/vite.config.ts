import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * After the client build, SSR-render <App /> into dist/index.html
 * so GitHub Pages can serve meaningful HTML on first paint.
 */
function prerenderPlugin(): Plugin {
  return {
    name: "prerender-spa",
    apply: "build",
    enforce: "post",
    async closeBundle() {
      const { createServer } = await import("vite");
      const vite = await createServer({
        configFile: false,
        root: process.cwd(),
        plugins: [react()],
        server: { middlewareMode: true },
        appType: "custom",
        define: {
          "process.env.NODE_ENV": JSON.stringify("production"),
        },
      });

      try {
        const mod = await vite.ssrLoadModule("/src/entry-server.tsx");
        const appHtml: string = mod.render();
        const indexPath = resolve(process.cwd(), "dist/index.html");
        let html = readFileSync(indexPath, "utf-8");

        if (html.includes('<div id="root"></div>')) {
          html = html.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`,
          );
        } else if (html.includes('<div id="root">')) {
          html = html.replace(
            /<div id="root">[\s\S]*?<\/div>\s*<script/,
            `<div id="root">${appHtml}</div>\n    <script`,
          );
        } else {
          throw new Error('Could not find <div id="root"> in dist/index.html');
        }

        writeFileSync(indexPath, html);
        console.log("Prerendered / into dist/index.html");
      } finally {
        await vite.close();
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), prerenderPlugin()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: true,
    cssCodeSplit: true,
  },
  ssr: {
    noExternal: [/^@fontsource/],
  },
});
