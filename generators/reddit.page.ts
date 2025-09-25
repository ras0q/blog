import RSSParser from "rss-parser";
import { Post } from "./types.d.ts";

export const layout = "post.tsx";
export const renderOrder = -1;

export default async function* () {
  const posts = (
    await new RSSParser({
      customFields: {
        item: ["media:thumbnail"],
      },
    }).parseURL(
      "https://www.reddit.com/user/ras0q/submitted/.rss",
    )
  ).items
    .map(
      (item) => ({
        title: `[🔗Reddit] ${item.title}`,
        url: `/external/reddit${new URL(item.link!).pathname}`,
        redirectURL: item.link!,
        tags: ["Reddit"],
        date: new Date(item.pubDate ?? ""),
        content: item.contentSnippet,
        thumbnail: item["media:thumbnail"]?.$.url,
      } satisfies Post),
    )
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());

  for (const post of posts) {
    yield post;
  }
}
