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

        body {
          @apply font-sans line-height-normal min-h-100svh overflow-y-scroll;
          overflow-wrap: anywhere;
          word-break: normal;
          line-break: strict;
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
        "code": {
          "white-space": "normal !important",
        },
      },
    }),
    presetWind3({
      dark: "media",
      preflight: "on-demand",
    }),
  ],
});
