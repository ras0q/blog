import PageData from "../libs/PageData.tsx";

export const layout = "global.tsx";

export default (data: Lume.Data) => (
  <>
    <link rel="stylesheet" href="/markdown.css" />
    <article>
      <h1 class="text-4xl">{data.title}</h1>
      <PageData {...data} />
      <hr class="my-8" />
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{
          __html: String(data.content),
        }}
      >
      </div>
    </article>
  </>
);
