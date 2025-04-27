import { defineConfig, presetTypography, presetWind3 } from "unocss";

export default defineConfig<object>({
  preflights: [
    {
      getCSS: () => `
        /* Minimum Reset CSS */
        * {
          margin: 0;
          box-sizing: border-box;
        }
      `,
    },
  ],
  shortcuts: {
    // override typography max-width
    "prose": "prose max-w-full!",
  },
  presets: [
    presetTypography({
      cssExtend: {
        "a": {
          "text-decoration": "none",
        },
        "a:hover": {
          "text-decoration": "underline",
        },
      },
    }),
    presetWind3({
      dark: "media",
      preflight: "on-demand",
    }),
  ],
});
