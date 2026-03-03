Swaroop's Dictionary

A production-ready vocabulary intelligence platform built with React and deployed on Vercel.

Swaroop's Dictionary is more than a basic word lookup tool. It is a modular, performance-optimized web application that combines dictionary search, pronunciation, image discovery, streak tracking, and lightweight vocabulary analytics.

🚀 Live Demo

https://swaroopdictionary.vercel.app

✨ Features

Real-time English word search

Definitions with usage examples

Pronunciation with audio playback

Synonyms and antonyms

Related images via Pexels API

Dark / Light theme toggle

Daily vocabulary streak tracker

Vocabulary analytics dashboard

Deterministic "Word of the Day"

Lighthouse performance score 95+

🧠 Product Approach

Traditional dictionary apps are purely lookup-based.
This project adds behavioral mechanics:

Streak tracking to encourage daily learning

Deterministic daily word generation

Lightweight analytics using localStorage

Clean, distraction-free interface

The goal was to turn a utility tool into a vocabulary engagement system.

🏗 Architecture Overview

The project uses a modular, hook-based architecture for separation of concerns.

Custom Hooks

useDictionary → Handles API calls and state management

useTheme → Manages dark/light theme persistence

useKeyboardFocus → "/" shortcut for instant search focus

useVocabStreak → Tracks daily usage streaks

useSearchHistory → Manages local search history

This ensures:

Reusability

Maintainability

Clean logic separation

Scalability

🔐 API & Security Design

Dictionary Data

Source: Free Dictionary API

Images

Source: Pexels API

Implemented via serverless Edge Function proxy

API key stored securely in Vercel environment variables

Not exposed to the client bundle

⚡ Performance Optimization

Production Lighthouse Scores:

Performance: 95+

Accessibility: 96

Best Practices: 100

SEO: 90+

Optimizations applied:

Non-blocking image loading

Lazy loading with decoding="async"

Production build optimization

CSS variable-based theme switching

Memoized components

Reduced unnecessary re-renders

🛠 Tech Stack

React (Vite)

JavaScript (ES6+)

CSS (Custom properties, responsive layout)

Vercel (Deployment + Edge Functions)

Free Dictionary API

Pexels API

📦 Installation (Local Development)

Clone the repository:

git clone https://github.com/swaroop-33/swaroop_dictionary.git

cd swaroop_dictionary

Install dependencies:

npm install

Create a .env file:

VITE_PEXELS_API_KEY=your_key_here

Run development server:

npm run dev

Build for production:

npm run build
npm run preview

🌍 Deployment

Deployed on Vercel with:

Edge Function proxy for secure API calls

Environment variable management

Production performance optimization

🎯 What This Project Demonstrates

Frontend architecture design

Secure API integration

Performance optimization

SEO configuration

Modular React development

Production debugging & deployment workflow

👨‍💻 Author

Swaroop
Frontend Developer | React Builder
