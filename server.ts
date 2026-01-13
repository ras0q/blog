const HOUR = 1000 * 60 * 60;

export default {
  async fetch(request: Request) {
    const response = await fetch(request, {
      cf: {
        cacheTtl: 5,
        cacheEverything: true,
      },
    });

    const { headers } = response;
    const type = headers.get("Content-Type")?.split(";").shift()?.trim();
    const duration = HOUR;
    if (type === "text/css" || type === "text/javascript") {
      headers.set(
        "Cache-Control",
        `public, max-age=${duration / 1000}, immutable`,
      );
    }

    return response;
  },
};
