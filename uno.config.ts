import {
  defineConfig,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig<object>({
  shortcuts: {
    // override typography max-width
    "prose": "prose max-w-full!",
  },
  presets: [
    presetWind3({
      dark: "media",
    }),
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
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
