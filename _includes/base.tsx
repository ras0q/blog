import { siteTitle } from "./libs/consts.ts";

export default (data: Lume.Data) => (
  <html lang="ja">
    <head>
      <title>{`${data.title} | ${siteTitle}`}</title>
      <link rel="stylesheet" href="/code_light.css" />
      <link rel="stylesheet" href="/unocss.css" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </head>
    {/* FIXME: scrollbar-gutterを使いたい */}
    <body class="min-h-100svh overflow-y-scroll prose-neutral dark:prose-invert">
      <nav class="p-4xl flex flex-wrap justify-between">
        <a href="/" class="text-xl font-bold">{siteTitle}</a>
        <div class="space-x-xl">
          <a href="https://github.com/ras0q/blog">GitHub</a>
          <a href="/feed.rss">RSS</a>
        </div>
      </nav>
      <main
        class="mx-auto max-w-[min(42rem,80svw)]"
        dangerouslySetInnerHTML={{ __html: String(data.content) }}
      >
      </main>
      <footer class="sticky top-100svh p-4xl">
        <div class="flex justify-end">
          ©&nbsp;2024&nbsp;
          <a href="https://ras0q.com" class="underline">@ras0q</a>&nbsp;Powered
          by&nbsp;🔥<a href="https://lume.land" class="underline">Lume</a>
        </div>
      </footer>
    </body>
  </html>
);
