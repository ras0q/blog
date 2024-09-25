export const layout = "global.tsx";

export default (data: Lume.Data) => (
  <>
    <link rel="stylesheet" href="/markdown.css" />
    <article
      class="markdown-body"
      dangerouslySetInnerHTML={{ __html: String(data.content) }}
    ></article>
  </>
);
