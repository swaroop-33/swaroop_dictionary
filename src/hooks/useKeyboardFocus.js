import { useEffect } from "react";

export default function useKeyboardFocus(inputRef) {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "/") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [inputRef]);
}