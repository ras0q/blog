export const layout = "global.tsx";

export default (data: Lume.Data) => {
  return (
    <>
      <div id="search" class="my-8"></div>
      <section class="flex flex-col flex-content-center gap-8">
        {data.search.pages("url!=/", "date=desc").map((page) => (
          <article>
            <h2 class="text-2xl">
              <a href={page.url}>{page.title ?? page.url}</a>
            </h2>
            <p>{page.date}</p>
            <p>{String(page.content).slice(0, 100)}...</p>
          </article>
        ))}
      </section>
    </>
  );
};
