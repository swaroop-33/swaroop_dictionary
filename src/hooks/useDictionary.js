import { useState } from "react";
import { fetchWord } from "../services/dictionary";
import { fetchImages } from "../services/pexels";

export default function useDictionary() {
    const [entry, setEntry] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);
    const [err, setErr] = useState("");

    async function search(word) {
        const cleanWord = (word || "").trim();
        if (!cleanWord) return;

        try {
            setLoading(true);
            setErr("");
            setEntry(null);
            setPhotos([]);

            // 🔹 Fetch dictionary first (critical content)
            const [dict] = await fetchWord(cleanWord);
            setEntry(dict);

            // 🔹 Stop main loading here (improves LCP)
            setLoading(false);

            // 🔹 Fetch images in background
            setImageLoading(true);
            fetchImages(cleanWord, 4)
                .then((imgRes) => {
                    setPhotos(imgRes.photos || []);
                })
                .catch(() => {
                    // Silently ignore image errors
                })
                .finally(() => {
                    setImageLoading(false);
                });

        } catch (e) {
            setErr(e.message || "Something went wrong");
            setLoading(false);
        }
    }

    return { entry, photos, loading, imageLoading, err, search };
}