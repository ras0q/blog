const HOUR = 1000 * 60 * 60;

export default {
  async fetch(request: Request) {
    const response = await fetch(request);
    const { headers } = response;
    const type = headers.get("Content-Type")?.split(";").shift()?.trim();
    const duration = HOUR;
    if (type === "text/css" || type === "text/javascript") {
      const newHeaders = new Headers(headers);
      newHeaders.set(
        "Cache-Control",
        `public, max-age=${duration / 1000}, immutable`,
      );

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }

    return response;
  },
};
