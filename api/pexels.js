export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const url = new URL(req.url);
    const query = (url.searchParams.get("query") || "").trim();
    let perPage = parseInt(url.searchParams.get("per_page") || "8", 10);

    if (!query || query.length > 60) {
      return new Response(
        JSON.stringify({ error: "Invalid query" }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    // Clamp per_page between 1 and 20
    if (isNaN(perPage)) perPage = 8;
    perPage = Math.max(1, Math.min(perPage, 20));

    const key = process.env.PEXELS_API_KEY;
    if (!key) {
      return new Response(
        JSON.stringify({ error: "Missing PEXELS_API_KEY in environment" }),
        { status: 500, headers: { "content-type": "application/json" } }
      );
    }

    const upstream = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      { headers: { Authorization: key } }
    );

    if (!upstream.ok) {
      return new Response(
        JSON.stringify({ error: "Upstream Pexels error" }),
        { status: upstream.status, headers: { "content-type": "application/json" } }
      );
    }

    const data = await upstream.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, max-age=3600"
      },
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Proxy failure", detail: String(err) }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}