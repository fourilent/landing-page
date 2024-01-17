import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import Compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), icon(), Compress()],
});
