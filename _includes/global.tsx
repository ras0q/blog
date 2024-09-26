export default (data: Lume.Data) => (
  <html>
    <head>
      <link rel="stylesheet" href="/unocss.css" />
    </head>
    {/* FIXME: scrollbar-gutterを使いたい */}
    <body class="min-h-100svh overflow-y-scroll prose-neutral dark:prose-invert">
      <nav class="p-4xl flex flex-wrap justify-between">
        <a href="/" class="text-xl font-bold">
          Ras's diary
        </a>
        <div class="space-x-xl">
          <a href="https://github.com/ras0q/diary">GitHub</a>
          <a href="/feed.rss">RSS</a>
        </div>
      </nav>
      <main
        class="mx-auto max-w-2xl"
        dangerouslySetInnerHTML={{ __html: String(data.content) }}
      ></main>
      <footer class="sticky top-100svh p-4xl">
        <div class="flex justify-end gap-lg">
          <div>© 2024 ras0q</div>
          <div>
            Powered by <a href="https://lume.land">🔥Lume</a>
          </div>
        </div>
      </footer>
    </body>
  </html>
);
