import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import Compress from "astro-compress";
import GenerateCSPHash from "./src/util/csp-gen";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "never",
  },
  integrations: [tailwind(), svelte(), icon(), Compress(), GenerateCSPHash()],
});
