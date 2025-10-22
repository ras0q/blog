import { Post } from "../generators/types.d.ts";

export const layout = "base.tsx";

export default (data: Lume.Data) => {
  if (data.query === undefined) {
    return <div>Tag not found!</div>;
  }

  return (
    <div class="flex flex-col gap-4xl">
      <h1 class="text-center m-0">{data.title}</h1>
      <section>
        <div
          id="search"
          class="min-h-51.2px"
          style={{
            "--pagefind-ui-primary": "var(--un-prose-body)",
            "--pagefind-ui-text": "var(--un-prose-body)",
            "--pagefind-ui-background":
              "color-mix(in srgb, var(--un-prose-td-borders) 50%, transparent)",
            "--pagefind-ui-border": "var(--un-prose-td-borders)",
            "--pagefind-ui-tag": "var(--un-prose-td-borders)",
          }}
        >
        </div>
      </section>
      <section class="flex flex-wrap justify-center gap-xs text-2xl">
        {data.search.values<string>("tags").toSorted().map((tag) => (
          <data.comp.Tag key={tag} tag={tag} />
        ))}
      </section>
      <section class="flex flex-col gap-4xl">
        {data.search.pages<Post>(data.query, "date=desc")
          .map((data) => ({
            ...data,
            isExternal: data.url.startsWith("/external"),
          }))
          .map((data) => (
            <article>
              <h2 class="text-2xl m-0">
                <a
                  href={data.url}
                  rel={data.isExternal ? "noopener" : undefined}
                  target={data.isExternal ? "_blank" : undefined}
                >
                  {data.title ?? "Untitled"}
                </a>
              </h2>
              <div class="flex justify-between gap-lg">
                <div>
                  <data.comp.PageData {...data} />
                  <div class="break-all whitespace-pre-wrap line-clamp-3">
                    {data.content
                      ?.replaceAll("\n\n", "\n")
                      .split("\n")
                      .slice(0, 4)
                      .join("\n") ??
                      "Empty"}
                  </div>
                </div>
                {data.thumbnail && (
                  <img
                    src={data.thumbnail}
                    alt="thumbnail"
                    loading="lazy"
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
