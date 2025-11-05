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
  /* Ref: https://www.transparenttextures.com/groovepaper.html */
  background-image: url("/groovepaper.png");
}

.linkcard {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 1.25rem 0;

  & > img {
    width: 100%;
    height: auto;
    margin: 0;
    object-fit: contain;
    aspect-ratio: 2 / 1;
  }

  & > div {
    padding: 1rem;

    & > a::after {
      position: absolute;
      inset: 0;
      content: "";
    }

    & > p {
      margin: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
  }
}

@view-transition {
  navigation: auto;
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
        "img": {
          "max-width": "100%",
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
