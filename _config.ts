import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import wiki from "wiki/mod.ts";

const site = lume();

site.use(
  feed({
    info: {
      title: "Ras's diary",
      lang: "ja",
    },
  })
);
site.use(wiki());

export default site;
