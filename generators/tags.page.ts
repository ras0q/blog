export const layout = "global.tsx";

export default function* ({ search }: Lume.Data) {
  for (const tag of search.values("tags")) {
    yield {
      url: `/tags/${tag}/`,
      title: `Tag - ${tag}`,
      type: "tag",
      tag,
    };
  }
}
