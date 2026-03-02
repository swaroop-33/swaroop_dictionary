const PUBLIC_BASE = "https://api.dictionaryapi.dev/api/v2/entries/en";

const USE_PROXY =
  typeof window !== "undefined" &&
  window.location.hostname.endsWith("vercel.app");

export async function fetchWord(word) {
  const url = USE_PROXY
    ? `/api/dict?word=${encodeURIComponent(word)}`
    : `${PUBLIC_BASE}/${encodeURIComponent(word)}`;

  try {
    const res = await fetch(url);

    if (res.status === 404) {
      throw new Error("Word not found");
    }

    if (!res.ok) {
      throw new Error("Dictionary API error");
    }

    return await res.json();
  } catch (err) {
    if (err.message === "Word not found") {
      throw err;
    }
    throw new Error("Failed to fetch dictionary data");
  }
}