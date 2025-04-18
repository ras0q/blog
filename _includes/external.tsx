import { Post } from "../generators/types.d.ts";
import PageData from "./libs/PageData.tsx";

export const layout = "base.tsx";

export default (data: Lume.Data & Post) => (
  <>
    <article class="space-y-4xl">
      <section class="space-y-2xl">
        {data.thumbnail && (
          <img
            src={data.thumbnail}
            alt="thumbnail"
            class="w-full min-w-full aspect-ratio-[5/2] object-cover"
          />
        )}
        <h1 class="text-4xl">{data.title}</h1>
        <PageData {...data} />
        {data.redirectURL && (
          <a class="underline" href={data.redirectURL}>
            {data.redirectURL}
          </a>
        )}
      </section>
      <hr />
      <div class="break-all whitespace-pre-wrap">
        {data.content?.replaceAll("\n\n", "\n") ?? "Empty"}
      </div>
    </article>
  </>
);
