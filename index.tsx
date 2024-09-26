import PageData from "./libs/PageData.tsx";

export const layout = "global.tsx";

export default (data: Lume.Data) => {
  return (
    <>
      <div id="search" class="my-8 h-51.2px"></div>
      <section class="flex flex-col flex-content-center gap-8">
        {data.search.pages("url^=/posts", "date=desc").map((data) => (
          <article>
            <h2 class="text-2xl">
              <a href={data.url}>{data.title ?? "Untitled"}</a>
            </h2>
            <PageData {...data} />
            <p>{String(data.content).slice(0, 100)}...</p>
          </article>
        ))}
      </section>
    </>
  );
};
