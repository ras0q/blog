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
      <h1 class="m-0">{data.title}</h1>
      <data.comp.PageData {...data} />
      {data.redirectURL && (
        <span>
          Original:{" "}
          <a href={data.redirectURL}>{new URL(data.redirectURL).host}</a>
        </span>
      )}
    </section>
    <hr class="mt-4" />
    <div
      class="mx-auto"
      dangerouslySetInnerHTML={{
        // FIXME: HTMLではない複数行の文字列が渡された時に改行が無視される
        __html: String(data.content ?? "Empty"),
      }}
    >
    </div>
  </article>
);
