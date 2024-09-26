import PageData from "./_includes/libs/PageData.tsx";

export const layout = "global.tsx";
export const title = "Home";

export default (data: Lume.Data) => {
  return (
    <>
      <section class="py-4xl">
        <div id="search" class="min-h-51.2px"></div>
      </section>
      <section class="space-y-4xl">
        {data.search.pages("url^=/posts", "date=desc").map((data) => (
          <article>
            <h2 class="text-2xl">
              <a href={data.url}>{data.title ?? "Untitled"}</a>
            </h2>
            <div class="flex justify-between gap-lg">
              <div>
                <PageData {...data} />
                <p class="break-all">{String(data.content).slice(0, 100)}...</p>
              </div>
              {data.thumbnail && (
                <img
                  src={data.thumbnail}
                  alt="thumbnail"
                  class="w-40% min-w-40% aspect-ratio-[16/9] object-cover"
                />
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
