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
    query: "type!=tag",
  } satisfies Data;

  for (const tag of search.values<string>("tags")) {
    yield {
      url: `/tags/${tag}/`,
      title: `Tag - #${tag}`,
      type: "tag",
      query: tag,
    } satisfies Data;
  }
}
