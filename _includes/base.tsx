import { siteLocation, siteTitle } from "../_config.ts";

const standardPublicationDid = "did:plc:ci3d3ax4f4rr3utnlxad7zud";

/**
 * AT Protocol record keys must be ASCII-safe, so encode the site-relative URL
 * into unpadded base64url to get a deterministic identifier for each page.
 */
function generateStandardSiteRkey(url: string): string {
  const bytes = new TextEncoder().encode(url);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll(
    /=+$/g,
    "",
  );
}

/**
 * Builds the Standard.site document record URI for a page.
 * See: https://standard.site/
 *
 * This site derives a deterministic `rkey` from `data.url` and uses it under
 * the publication DID declared in `/.well-known/site.standard.publication`.
 */
function generateStandardSiteDocumentUri(url: string): string {
  return `at://${standardPublicationDid}/site.standard.document/${
    generateStandardSiteRkey(url)
  }`;
}

export default (data: Lume.Data) => (
  <html lang={data.lang ?? "ja"}>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{`${data.title} | ${siteTitle}`}</title>
      <link rel="canonical" href={new URL(data.url, siteLocation).toString()} />
      <link
        rel="site.standard.document"
        href={generateStandardSiteDocumentUri(data.url)}
      />
      <link rel="stylesheet" href="/style.css" />
      <script type="speculationrules">
        {`{ "prefetch": [{"where": {"href_matches": "/*"}, "eagerness": "moderate"}] }`}
      </script>
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
