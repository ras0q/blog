export const layout = "search.tsx";
export const tags = ["tag"];

type Data = {
  url: string;
  title: string;
  type: string;
  query: string;
};

export default function* ({ search }: Lume.Data) {
  yield {
    url: "/",
    title: "Home",
    type: "tag",
    query: "url^=/posts",
  } satisfies Data;

  for (const tag of search.values("tags")) {
    yield {
      url: `/tags/${tag}/`,
      title: `Tag - ${tag}`,
      type: "tag",
      query: tag as string,
    } satisfies Data;
  }
}
