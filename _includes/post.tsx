import { Post } from "../generators/types.d.ts";

export const layout = "base.tsx";

export default (data: Lume.Data & Post) => (
  <article>
    {data.thumbnail && (
      <img
        src={data.thumbnail}
        alt="thumbnail"
        loading="lazy"
        class="w-full min-w-full aspect-ratio-[5/2] object-cover"
      />
    )}
    <section>
      <h1 class="text-4xl">{data.title}</h1>
      <data.comp.PageData {...data} />
      {data.redirectURL && (
        <a class="underline" href={data.redirectURL}>
          {data.redirectURL}
        </a>
      )}
    </section>
    <hr />
    <div
      class="prose mx-auto"
      dangerouslySetInnerHTML={{
        // FIXME: HTMLではない複数行の文字列が渡された時に改行が無視される
        __html: String(data.content ?? "Empty"),
      }}
    >
    </div>
  </article>
);
