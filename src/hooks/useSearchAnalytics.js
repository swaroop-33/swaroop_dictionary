import { useEffect, useState } from "react";

const STORAGE_KEY = "vocab-streak-data";

export default function useSearchAnalytics() {
    const [totalUnique, setTotalUnique] = useState(0);
    const [mostSearched, setMostSearched] = useState(null);
    const [avgLength, setAvgLength] = useState(0);
    const [todayCount, setTodayCount] = useState(0);

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        const data = JSON.parse(raw);
        const allWords = {};
        let totalLength = 0;
        let totalWords = 0;

        const today = new Date();
        const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        for (const date in data) {
            data[date].forEach((word) => {
                allWords[word] = (allWords[word] || 0) + 1;
                totalLength += word.length;
                totalWords++;
            });
        }

        const uniqueCount = Object.keys(allWords).length;
        setTotalUnique(uniqueCount);

        if (uniqueCount > 0) {
            const top = Object.entries(allWords).sort((a, b) => b[1] - a[1])[0];
            setMostSearched(top[0]);
        }

        setAvgLength(totalWords ? (totalLength / totalWords).toFixed(1) : 0);

        if (data[todayKey]) {
            setTodayCount(data[todayKey].length);
        }
    }, []);

    return { totalUnique, mostSearched, avgLength, todayCount };
}