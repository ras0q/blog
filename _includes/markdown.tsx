export const layout = "global.tsx";

export default (data: Lume.Data) => (
  <>
    <link rel="stylesheet" href="/markdown.css" />
    <article
      class="markdown-body"
      dangerouslySetInnerHTML={{
        __html: `<h1>${data.title}</h1>` + String(data.content),
      }}
    ></article>
  </>
);
