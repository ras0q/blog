import { defineConfig, presetMini, presetTypography } from "unocss";

export default defineConfig<object>({
  rules: [
    ['object-cover', {'object-fit': 'cover'}],
    [/^line-clamp-(\d+)$/, ([, v]) => ({
      'overflow': 'hidden',
      'display': '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': v,
      'line-clamp': v,
    }), { autocomplete: ['line-clamp', 'line-clamp-<num>'] }],
  ],
  shortcuts: {
    // override typography max-width
    "prose": "prose max-w-full!",
  },
  presets: [
    presetMini({
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
});
