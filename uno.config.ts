import {
  defineConfig,
  presetTypography,
  presetWind3,
  transformerDirectives,
} from "unocss";

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
  min-height: 100svh;
  line-height: 1.5;
  overflow-y: scroll;
  overflow-wrap: anywhere;
  word-break: normal;
  line-break: strict;
}
      `,
    },
  ],
  presets: [
    presetTypography({
      cssExtend: {
        "a": {
          "text-decoration": "none",
        },
        "a:hover": {
          "text-decoration": "underline",
        },
        ":not(pre) > code": {
          "white-space": "normal",
        },
      },
    }),
    presetWind3({
      dark: "media",
      preflight: "on-demand",
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
});
