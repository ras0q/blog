import { Post } from "../generators/types.d.ts";
import PageData from "./libs/PageData.tsx";
import Tag from "./libs/Tag.tsx";

export const layout = "base.tsx";
export const title = "Home";

export default (data: Lume.Data) => {
  if (data.query === undefined) {
    return <div>Tag not found!</div>;
  }

  return (
    <div class="space-y-4xl">
      <h1 class="text-4xl text-center">{data.title}</h1>
      <section>
        <div id="search" class="min-h-51.2px"></div>
      </section>
      <section class="flex flex-wrap justify-center gap-xs text-2xl">
        {data.search.values<string>("tags").toSorted().map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </section>
      <section class="space-y-4xl">
        {data.search.pages<Post>(data.query, "date=desc").map((
          data,
        ) => (
          <article>
            <h2 class="text-2xl">
              <a href={data.url}>{data.title ?? "Untitled"}</a>
            </h2>
            <div class="flex justify-between gap-lg">
              <div>
                <PageData {...data} />
                <div class="break-all whitespace-pre-wrap line-clamp-3">
                  {data.content?.replaceAll("\n\n", "\n") ?? "Empty"}
                </div>
              </div>
              {data.thumbnail && (
                <img
                  src={data.thumbnail}
                  alt="thumbnail"
                  class="pt-xs w-40% min-w-40% aspect-ratio-[16/9] object-cover"
                />
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
