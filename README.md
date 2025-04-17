# 🔐 Hidden Numbers — Number Guessing Game

A fun and interactive number-guessing game built with **React**, **TypeScript**, **SCSS**, and **Vite**.

🎯 **Goal**:  
Uncover 3 hidden numbers (each between **0 and 20**) within **5 attempts**. Use logic and feedback to guess the correct combination.

---

## 🧩 Game Rules

- On game load, 3 random numbers between 0–20 are generated _(duplicates allowed)_.
- The player submits **3 numbers** per guess.
- After each guess:
  - ✅ A number in the **correct position** is **revealed**.
  - 🔄 A number in the **wrong position** gives a **misplaced hint**.
  - ❌ Incorrect numbers remain **hidden**.
- Correct numbers stay revealed across turns.
- Game ends when:
  - All 3 numbers are guessed, or
  - 5 attempts are used up.

### 🎁 Prizes

- **2 correct numbers** → +20 coins
- **3 correct numbers** → +50 coins

---

## 👨‍💻 Features

- 🎴 3 mystery cards that flip to reveal correct guesses
- 🔢 Input for guessing 3 numbers
- 🔁 Attempt counter (max: 5)
- 🧠 Intelligent feedback:
  - ✅ Correct number, correct position
  - 🔄 Correct number, wrong position
  - ❌ Not in the hidden set
- 🏁 End game screen with results and rewards
- 🔁 "Play Again" / Reset option
- ✨ Flip or fade animations for card reveals
- 💰 Track total coins or history using `localStorage`
- 🧠 Unit tests for core logic
- 🔊 Sound or particle effects on win

## 💻 Technical Stack

- **React.js:** A JavaScript library for building user interfaces.
- **TypeScript:** Strongly-typed programming language used to build the app.
- **SCSS (Sass):** CSS preprocessor used for modular and maintainable styling.

---

## 📂 Getting Started

```bash
# Install dependencies
npm install

# Run the app
npm run dev

# Build for production
npm run build
```
