import PageData from "./libs/PageData.tsx";

export const layout = "base.tsx";

export default (data: Lume.Data) => (
  <>
    <article class="space-y-4xl">
      <section>
        <h1 class="text-4xl">{data.title}</h1>
        <PageData {...data} />
      </section>
      <hr />
      <div
        class="prose mx-auto"
        dangerouslySetInnerHTML={{
          __html: String(data.content),
        }}
      >
      </div>
    </article>
  </>
);
