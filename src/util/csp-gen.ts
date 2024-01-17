import type { AstroIntegration } from "astro";
import { parse } from "node-html-parser";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const createCspHash = async (s: string) => {
  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(s),
  );
  const hashBase64 = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));

  return `'sha256-${hashBase64}'`;
};

export default (): AstroIntegration => {
  return {
    name: "astro-generate-csp-hash",
    hooks: {
      "astro:build:done": async ({ dir, pages, logger }) => {
        let hashes = "";
        for (let i = 0; i < pages.length; i++) {
          const filePath = fileURLToPath(
            `${dir.href}${pages[i].pathname}index.html`,
          );

          try {
            const root = parse(await readFile(filePath, { encoding: "utf-8" }));
            const scripts = root.querySelectorAll("script");

            for (let j = 0; j < scripts.length; j++) {
              const hash = await createCspHash(scripts[j].textContent);
              hashes += hash + " ";
            }
          } catch (e) {
            logger.error(`Cannot read file ${filePath}: ${e}`);
          }
        }
        logger.info(hashes);
      },
    },
  };
};
