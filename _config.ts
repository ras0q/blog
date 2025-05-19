import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import metas, { MetaData } from "lume/plugins/metas.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import remark from "lume/plugins/remark.ts";
import sitemap from "lume/plugins/sitemap.ts";
import unocss from "lume/plugins/unocss.ts";
import unoConfig from "./uno.config.ts";
import { visit } from "unist-util-visit";

export const siteTitle = "1245cal";
const siteLang = "ja";
const isProd = Deno.env.get("DENO_ENV") === "production";

const site = lume();

// Generate HTML files
site
  .use(remark({
    rehypePlugins: [
      () => (tree) => {
        visit(tree, "element", (node) => {
          switch (node.tagName) {
            case "img": {
              node.properties.loading = "lazy";
              break;
            }
            case "a": {
              node.properties.class = "decoration-underline";
              node.properties.target = "_blank";
              node.properties.rel = "noopener";
            }
          }
        });
      },
    ],
  }))
  .use(jsx())
  .use(metas());

// Generate other files
site
  .use(codeHighlight({
    theme: {
      name: "atom-one-light",
    },
  }))
  .use(
    feed({
      query: "type!=tag",
      info: {
        title: siteTitle,
        lang: siteLang,
      },
    }),
  )
  .use(pagefind())
  .use(sitemap())
  .use(
    unocss({
      options: unoConfig,
      transformers: unoConfig.transformers,
    }),
  );

// Optimization
if (isProd) {
  site
    .use(lightningCss({
      options: {
        minify: true,
      },
    }))
    .use(minifyHTML());
}

site.data(
  "metas",
  {
    site: siteTitle,
    title: ({ title }) => `${title} | ${siteTitle}`,
    lang: siteLang,
    description: "Rasによる日記です",
    image: "=image",
    icon: "/favicon.svg",
    twitter: "@ras0q",
    robots: true,
    generator: true,
  } satisfies MetaData,
);

site.data("layout", "post.tsx", "/posts");
site.data("tags", ["Diary"], "/posts");

site.copy("posts/public", "");

site.parseBasename((basename) => ({
  date: basename.match(/^\d{4}-\d{2}-\d{2}/)?.[0] ?? undefined,
  basename,
}));

export default site;
