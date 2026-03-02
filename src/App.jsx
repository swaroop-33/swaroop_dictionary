import { useRef, useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WordResult from "./components/WordResult";
import ImagesGrid from "./components/ImagesGrid";
import useTheme from "./hooks/useTheme";
import useKeyboardFocus from "./hooks/useKeyboardFocus";
import useDictionary from "./hooks/useDictionary";
import useVocabStreak from "./hooks/useVocabStreak";
import useSearchAnalytics from "./hooks/useSearchAnalytics";
import { getWordOfTheDay } from "./utils/wordOfDay";
import "./index.css";

export default function App() {
  const { dark, setDark } = useTheme();
  const { entry, photos, loading, err, search } = useDictionary();
  const { streak, todayCount: streakToday } = useVocabStreak(entry?.word);
  const { totalUnique, mostSearched, avgLength, todayCount } =
    useSearchAnalytics();

  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useKeyboardFocus(inputRef);

  useEffect(() => {
    const word = getWordOfTheDay();
    setQuery(word);
    search(word);
  }, []);

  const hasImages = photos && photos.length > 0;

  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="brand">
            <h1>Swaroop's Dictionary</h1>
            <p>
              Definitions · Examples · Synonyms · Antonyms · Pronunciation ·
              Images
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {streak > 0 && (
              <div
                style={{
                  background: "rgba(255,120,0,0.15)",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
                title={`You looked up ${streakToday} word(s) today`}
              >
                🔥 {streak}-day streak
              </div>
            )}

            <button className="toggle" onClick={() => setDark((d) => !d)}>
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="search-row">
          <SearchBar
            inputRef={inputRef}
            onSearch={(w) => {
              setQuery(w);
              search(w);
            }}
            loading={loading}
          />
        </div>

        {/* 📊 Analytics Panel */}
        {totalUnique > 0 && (
          <div className="card" style={{ marginBottom: 16 }}>
            <h3 className="section-title">Your Vocabulary Insights</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                fontSize: "0.95rem",
              }}
            >
              <div>📘 Total Unique Words: <strong>{totalUnique}</strong></div>
              {mostSearched && (
                <div>
                  ⭐ Most Searched: <strong>{mostSearched}</strong>
                </div>
              )}
              <div>
                🔤 Avg Word Length: <strong>{avgLength}</strong>
              </div>
              <div>
                📅 Searches Today: <strong>{todayCount}</strong>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <>
            <div className="skel"></div>
            <div className="skel" style={{ marginTop: 12 }}></div>
          </>
        )}

        {err && !loading && (
          <div className="error">
            {err === "Word not found"
              ? `No results for “${query}”. Try another word.`
              : err}
          </div>
        )}

        {!loading && !err && entry && (
          <>
            <div className="card" style={{ marginBottom: 16 }}>
              <WordResult entry={entry} />
            </div>

            {hasImages ? (
              <div className="card" style={{ marginTop: 16 }}>
                <h3 className="section-title">Related Images</h3>
                <ImagesGrid photos={photos} />
              </div>
            ) : (
              <div className="empty" style={{ marginTop: 16 }}>
                No related images found for “{entry?.word}”.
              </div>
            )}
          </>
        )}

        <div className="footer">
          Tip: press <kbd>/</kbd> to focus search • Built with Free Dictionary
          API & Pexels
        </div>
      </div>
    </>
  );
}