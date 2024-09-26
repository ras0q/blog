import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig<object>({
  presets: [presetUno()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
