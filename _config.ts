import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import pagefind from "lume/plugins/pagefind.ts";
import unocss from "lume/plugins/unocss.ts";
import unoConfig from "./uno.config.ts";

const site = lume();

site
  .use(
    feed({
      info: {
        title: "Ras's diary",
        lang: "ja",
      },
    })
  )
  .use(jsx())
  .use(pagefind())
  .use(
    unocss({
      options: unoConfig,
      transformers: unoConfig.transformers,
      reset: "tailwind-compat",
    })
  );

site.data("layout", "markdown.tsx", "/posts");

site.copy("assets", "assets");

site.parseBasename((basename) => ({ basename }));

export default site;
