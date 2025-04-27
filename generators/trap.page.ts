import RSSParser from "rss-parser";
import { Post } from "./types.d.ts";

export const layout = "post.tsx";
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
      (item) => ({
        title: `[traP] ${item.title}`,
        url: `/external/trap${new URL(item.link!).pathname}`,
        redirectURL: item.link!,
        tags: ["traP"],
        date: new Date(item.pubDate ?? ""),
        content: item.contentSnippet ?? "",
        thumbnail: item["media:content"].$.url,
      } satisfies Post),
    )
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());

  for (const post of trapPosts) {
    yield post;
  }
}
