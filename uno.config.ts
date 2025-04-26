import {
  defineConfig,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig<object>({
  shortcuts: {
    // override typography max-width
    "prose": "prose max-w-full!",
  },
  presets: [
    presetUno({
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
