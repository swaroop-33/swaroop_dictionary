const isDev = import.meta.env.DEV;

export async function fetchImages(query, perPage = 8) {
  try {
    // Use proxy in production
    if (!isDev) {
      const res = await fetch(
        `/api/pexels?query=${encodeURIComponent(query)}&per_page=${perPage}`
      );
      if (!res.ok) throw new Error("Image fetch failed");
      return await res.json();
    }

    // Direct API call in local dev
    const key = import.meta.env.VITE_PEXELS_API_KEY;
    if (!key) return { photos: [] };

    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      { headers: { Authorization: key } }
    );

    if (!res.ok) throw new Error("Image fetch failed");
    return await res.json();
  } catch {
    return { photos: [] };
  }
}