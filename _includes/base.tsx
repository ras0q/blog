import { siteLocation, siteTitle } from "../_config.ts";

export default (data: Lume.Data) => (
  <html lang={data.lang ?? "ja"}>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{`${data.title} | ${siteTitle}`}</title>
      <link rel="canonical" href={new URL(data.url, siteLocation).toString()} />
      <link rel="stylesheet" href="/style.css" />
    </head>
    {/* FIXME: scrollbar-gutterを使いたい */}
    <body class="prose max-w-full prose-neutral dark:prose-invert bg-neutral-50 dark:bg-neutral-700 px-2xl py-4xl space-y-4xl">
      <nav class="flex justify-between">
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
        class="mx-auto max-w-[min(70ch,100%)]"
        dangerouslySetInnerHTML={{ __html: String(data.content) }}
      >
      </main>
      <footer class="sticky top-100svh">
        <div class="flex justify-end whitespace-pre">
          © 2024 <a href="https://ras0q.com">@ras0q</a>{" "}
          Powered by 🔥<a href="https://lume.land">Lume</a>
        </div>
      </footer>
    </body>
  </html>
);
