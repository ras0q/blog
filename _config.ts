import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import metas, { MetaData } from "lume/plugins/metas.ts";
import pagefind from "lume/plugins/pagefind.ts";
import unocss from "lume/plugins/unocss.ts";
import unoConfig from "./uno.config.ts";

const isProd = Deno.env.get("DENO_ENV") === "production";

const site = lume();

// Extensions
site.use(jsx()).use(metas());

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
if (isProd) {
  site.use(lightningCss());
}

const siteName = "Ras's diary";
site.data("metas", {
  site: siteName,
  title: ({ title }) => `${title} | ${siteName}`,
  lang: "ja",
  description: "Rasによる日記です",
  image: "=image",
  icon: "/favicon.svg",
  twitter: "@ras0q",
  robots: true,
  generator: true,
} satisfies MetaData);

site.data("layout", "markdown.tsx", "/posts");
site.data("tags", ["diary"], "/posts")

site.copy("public", "");

site.parseBasename((basename) => ({
  date: basename.match(/^\d{4}-\d{2}-\d{2}/)?.[0] ?? undefined,
  basename,
}));

export default site;
