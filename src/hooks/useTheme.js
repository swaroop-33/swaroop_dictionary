import { useEffect, useState } from "react";

export default function useTheme() {
    const [dark, setDark] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("dark-pref") || "true");
        } catch {
            return true;
        }
    });

    useEffect(() => {
        const root = document.documentElement;

        if (dark) {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }

        localStorage.setItem("dark-pref", JSON.stringify(dark));
    }, [dark]);

    return { dark, setDark };
}