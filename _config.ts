import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import pagefind from "lume/plugins/pagefind.ts";
import unocss from "lume/plugins/unocss.ts";
import unoConfig from "./uno.config.ts";

const site = lume();

// Extensions
site.use(jsx());

// Generators
site
  .use(
    feed({
      info: {
        title: "Ras's diary",
        lang: "ja",
      },
    })
  )
  .use(pagefind())
  .use(
    unocss({
      options: unoConfig,
      transformers: unoConfig.transformers,
      reset: "tailwind-compat",
    })
  );

// Bundlers
site.use(lightningCss());

site.data("layout", "markdown.tsx", "/posts");

site.copy("assets", "assets");

site.parseBasename((basename) => ({ basename }));

export default site;
