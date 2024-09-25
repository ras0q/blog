import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import pagefind from "lume/plugins/pagefind.ts";
import unocss from "lume/plugins/unocss.ts";

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
      reset: "tailwind-compat",
    })
  );

site.data("layout", "global.tsx", "/");

export default site;
