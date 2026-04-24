# Quiz Leaderboard System

## 📌 Overview

This project simulates a real-world backend system that consumes API data, handles duplicate responses, and generates a final leaderboard.

The system polls quiz data across multiple API calls, processes it reliably, and submits the correct leaderboard.

---

## 🚀 Features

* Polls API 10 times with mandatory delay
* Handles duplicate API responses (idempotency)
* Aggregates participant scores correctly
* Generates sorted leaderboard
* Implements retry logic for unstable APIs (502/503)

---

## ⚙️ Tech Stack

* Node.js
* Axios

---

## 🔄 Workflow

1. Poll API (`poll=0 → 9`)
2. Collect all events
3. Deduplicate using `(roundId + participant)`
4. Aggregate scores per participant
5. Sort leaderboard (descending order)
6. Submit result

---

## 🧠 Key Concepts

### 🔹 Idempotency

Ensures duplicate API responses do not affect final results.

### 🔹 Deduplication

Each event is uniquely identified using:
roundId + participant

### 🔹 Fault Tolerance

Handles API failures using retry logic with exponential backoff.

---

## 📂 Project Structure

```
quiz-leaderboard-system/
├── index.js
├── api/
│   └── fetchdata.js
├── utils/
│   ├── deduplicate.js
│   ├── aggregate.js
│   ├── leaderboard.js
│   └── total.js
├── services/
│   └── submit.js
├── package.json
├── README.md
└── .gitignore
```

---

## ▶️ How to Run

```bash
npm install
node index.js
```

---

## 📊 Sample Output

```
Leaderboard:
Diana → 470
Ethan → 455
Fiona → 440

Total Score: 1365
```

---

## 📌 Notes

* API responses may contain duplicate data
* Proper deduplication is essential for correct results
* Delay between API calls is mandatory

---

## 🎯 Result

Successfully computed leaderboard and submitted correct result.

---

