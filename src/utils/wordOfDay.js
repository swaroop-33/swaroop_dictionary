// Deterministic Word of the Day (same for all users per date)
// No backend required

const WORDS = [
    "ephemeral",
    "serendipity",
    "eloquent",
    "resilient",
    "ubiquitous",
    "lucid",
    "meticulous",
    "ambiguous",
    "candid",
    "zenith",
    "novice",
    "paradox",
    "vivid",
    "intricate",
    "subtle",
    "tenacious",
    "pragmatic",
    "aesthetic",
    "coherent",
    "transient",
    "astute",
    "benevolent",
    "contemplate",
    "diligent",
    "euphoria",
    "formidable",
    "gregarious",
    "harmony",
    "illuminate",
    "juxtapose"
];

export function getWordOfTheDay() {
    const today = new Date();

    // Create a numeric seed from the date (YYYYMMDD)
    const seed =
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        today.getDate();

    // Use modulo to cycle through words
    return WORDS[seed % WORDS.length];
}