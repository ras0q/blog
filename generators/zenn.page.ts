import RSSParser from "rss-parser";
import { Post } from "./types.d.ts";

export const layout = "external.tsx";
export const renderOrder = -1;

export default async function* () {
  const zennPosts = (
    await new RSSParser().parseURL("https://zenn.dev/ras96/feed")
  ).items
    .map(
      (item) =>
        ({
          title: item.title!,
          url: `/external/zenn/${encodeURIComponent(item.guid!)}/`,
          redirectURL: item.link!,
          tags: ["zenn"],
          date: new Date(item.pubDate ?? ""),
          content: item.contentSnippet ?? "",
          thumbnail: item.enclosure!.url,
        } satisfies Post)
    )
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());

  for (const post of zennPosts) {
    yield post;
  }
}
