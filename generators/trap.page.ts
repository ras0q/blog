import RSSParser from "rss-parser";
import { Post } from "./types.d.ts";

export const layout = "external.tsx";
export const renderOrder = -1;

export default async function* () {
  const trapPosts = (
    await new RSSParser({
      customFields: {
        item: ["media:content"],
      },
    }).parseURL("https://trap.jp/author/Ras/rss")
  ).items
    .map(
      (item) =>
        ({
          title: item.title!,
          url: `/external/trap/${encodeURIComponent(item.guid!)}/`,
          redirectURL: item.link!,
          tags: ["trap"],
          date: new Date(item.pubDate ?? ""),
          content: item.contentSnippet ?? "",
          thumbnail: item["media:content"].$.url,
        } satisfies Post)
    )
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());

  for (const post of trapPosts) {
    yield post;
  }
}
