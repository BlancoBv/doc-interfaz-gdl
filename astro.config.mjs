// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Interfaz ERP v2",
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },
      social: {
        github: "https://github.com/BlancoBv/interfaz-gdl-v2",
      },
      sidebar: [
        {
          label: "Guías",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Referencias",
          autogenerate: { directory: "reference" },
        },
        { label: "Hooks", autogenerate: { directory: "hooks" } },
        { label: "Componentes", autogenerate: { directory: "components" } },
      ],
    }),
  ],
});
