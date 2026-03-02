import { useEffect, useState } from "react";

const STORAGE_KEY = "vocab-streak-data";

function getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export default function useVocabStreak(currentWord) {
    const [streak, setStreak] = useState(0);
    const [todayCount, setTodayCount] = useState(0);

    useEffect(() => {
        if (!currentWord) return;

        const today = getTodayKey();
        const raw = localStorage.getItem(STORAGE_KEY);
        const data = raw ? JSON.parse(raw) : {};

        if (!data[today]) {
            data[today] = [];
        }

        // Deduplicate words per day
        if (!data[today].includes(currentWord)) {
            data[today].push(currentWord);
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        setTodayCount(data[today].length);

        // Calculate streak
        let tempStreak = 0;
        const date = new Date();

        while (true) {
            const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            if (data[key] && data[key].length > 0) {
                tempStreak++;
                date.setDate(date.getDate() - 1);
            } else {
                break;
            }
        }

        setStreak(tempStreak);
    }, [currentWord]);

    return { streak, todayCount };
}