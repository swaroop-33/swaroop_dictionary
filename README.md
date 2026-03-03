🚀 Swaroop's Dictionary

A production-grade vocabulary intelligence platform built with React, optimized for performance, and deployed on Vercel.

Swaroop's Dictionary transforms a traditional word lookup tool into a habit-forming vocabulary system by combining search, pronunciation, image discovery, streak mechanics, and lightweight analytics — all in a modular, scalable frontend architecture.

🌐 Live Demo:-
https://swaroopdictionary.vercel.app

✨ Core Features

🔎 Real-time English word search

📖 Definitions with contextual examples

🔊 Pronunciation with audio playback

🔁 Synonyms & antonyms

🖼️ Contextual image discovery (Pexels API)

🌙 Dark / Light theme with persistent state

🔥 Daily streak tracking system

📊 Built-in vocabulary analytics dashboard

📅 Deterministic “Word of the Day” logic

⚡ Lighthouse Performance 95+ (Production)

🧠 Product Philosophy

Most dictionary apps are transactional.

This system introduces:

Streak psychology → Encourages daily engagement

Deterministic content logic → Consistent daily word generation

Local analytics engine → Tracks usage without backend storage

Performance-first UI → Fast initial render, deferred image loading

The result:
A lightweight vocabulary engagement platform — not just a lookup tool.

🏗 Architecture & Engineering Decisions
Modular Hook-Based Design
Hook	Responsibility
useDictionary	API orchestration & async state control
useTheme	Persistent theme management
useKeyboardFocus	Productivity shortcut (/ to focus)
useVocabStreak	Daily streak computation engine
useSearchHistory	Local search analytics & insights

Why this architecture?

Clear separation of concerns

Scalable state management

Easier debugging & maintainability

Production-ready structure

🔐 Secure API Design

📘 Dictionary → Free Dictionary API

🖼️ Images → Pexels API

🔒 Serverless Edge Function proxy (Vercel)

🔑 API key stored in environment variables

🚫 No client-side exposure of secrets

This demonstrates real-world secure frontend integration.

⚡ Performance & Optimization

Production Lighthouse Scores:

🟢 Performance: 95+

🟢 Accessibility: 96

🟢 Best Practices: 100

🟢 SEO: 90+

Key optimizations:

Non-blocking image fetch strategy

Lazy loading + decoding="async"

Memoized components

Reduced re-renders

CSS variable-based theming

Optimized production build

🛠 Tech Stack

React (Vite)

JavaScript (ES6+)

Custom CSS (variables + responsive design)

Vercel (Deployment + Edge Functions)

Free Dictionary API

Pexels API

📦 Local Setup

git clone https://github.com/swaroop-33/swaroop_dictionary.git
cd swaroop_dictionary
npm install

Create a .env file:

VITE_PEXELS_API_KEY=your_key_here

Run development server:

npm run dev

Build production:

npm run build
npm run preview


🎯 What This Project Demonstrates

Scalable frontend architecture

Secure third-party API integration

Performance optimization mindset

SEO configuration awareness

Production debugging workflow

Deployment & environment management

👨‍💻 Author

Swaroop
Frontend Developer | React Engineer | Performance-Focused Builder

⭐ If this project was interesting, consider starring the repository.
