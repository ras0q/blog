import {
  defineConfig,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig<object>({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
