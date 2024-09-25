export default (data: Lume.Data) => (
  <html>
    <head>
      <link rel="stylesheet" href="/unocss.css" />
    </head>
    {/* FIXME: scrollbar-gutterを使いたい */}
    <body class="min-h-100svh overflow-y-scroll">
      <nav class="p-8 flex flex-wrap justify-between">
        <a href="/" class="text-xl font-bold">
          Ras's diary
        </a>
        <div class="flex flex-row gap-4">
          <a href="https://github.com/ras0q/diary">GitHub</a>
          <a href="/feed.rss">RSS</a>
        </div>
      </nav>
      <main
        class="mx-auto max-w-2xl"
        dangerouslySetInnerHTML={{ __html: String(data.content) }}
      ></main>
      <footer class="sticky top-100svh p-8">
        <div class="flex justify-end gap-4">
          <div>© 2024 ras0q</div>
          <div>
            Powered by <a href="https://lume.land">🔥Lume</a>
          </div>
        </div>
      </footer>
    </body>
  </html>
);
