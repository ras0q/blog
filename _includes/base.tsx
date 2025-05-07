import { siteTitle } from "../_config.ts";

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
    <body class="font-sans prose max-w-full prose-neutral dark:prose-invert bg-neutral-50 dark:bg-neutral-800">
      <nav class="p-4xl flex justify-between">
        <a href="/" class="text-xl font-bold decoration-none">{siteTitle}</a>
        <div class="flex gap-xl">
          <a
            href="https://github.com/ras0q/blog"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a href="/feed.rss" target="_blank" rel="noopener">RSS</a>
        </div>
      </nav>
      <main
        class="mx-auto max-w-[min(70ch,80svw)]"
        dangerouslySetInnerHTML={{ __html: String(data.content) }}
      >
      </main>
      <footer class="sticky top-100svh p-4xl">
        <div class="flex justify-end whitespace-pre">
          © 2024 <a href="https://ras0q.com">@ras0q</a>{" "}
          Powered by 🔥<a href="https://lume.land">Lume</a>
        </div>
      </footer>
    </body>
  </html>
);
