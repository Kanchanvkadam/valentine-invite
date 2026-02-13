💖 Valentine Invite 💖

A cute, interactive Valentine’s Day web app built with React + Vite, where you can generate a personalized Valentine link and send it to someone special 💌

👉 The receiver gets a playful Valentine proposal with animations, hearts, confetti, and a fun “YES / NO” interaction.

🌐 Live Demo

Home (Create Link):
🔗 https://kanchanvkadam.github.io/valentine-invite/#/

Example Valentine Link:
💌 https://kanchanvkadam.github.io/valentine-invite/#/view?name=Kadam&sender=Kanchan

✨ Features

💕 Create a personalized Valentine link

🎯 Pass name & sender via URL query params

😈 “NO” button runs away and fades over time

💖 “YES” triggers:

Confetti burst 🎉

Falling hearts animation ❤️

Romantic messages & final “I love you” reveal

🐰 Cute animated GIFs

📋 One-click link copy

🌍 Deployed on GitHub Pages

🛠 Tech Stack

React

Vite

React Router (HashRouter) – GitHub Pages friendly

gh-pages – deployment

canvas-confetti – confetti animation

CSS animations

📂 Project Structure
valentine-invite/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Hearts.jsx
│  │  ├─ Valentine.jsx
│  │  └─ heart.css
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  └─ View.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ App.css
├─ vite.config.js
├─ package.json
└─ README.md

🚀 Getting Started (Local Setup)
1️⃣ Clone the repo
git clone https://github.com/Kanchanvkadam/valentine-invite.git
cd valentine-invite

2️⃣ Install dependencies
npm install

3️⃣ Run locally
npm run dev


Open 👉 http://localhost:5173/valentine-invite/#/

🌍 Deployment (GitHub Pages)
1️⃣ Commit changes
git add .
git commit -m "Update Valentine app"
git push

2️⃣ Deploy
npm run deploy

3️⃣ Enable GitHub Pages

Repo → Settings

Pages

Source: gh-pages branch

Folder: / (root)

⚠️ Important Notes

This app uses HashRouter (#/view) because GitHub Pages does not support SPA routing directly.

All shared links must include /valentine-invite/ in the URL.

✅ Correct:

https://kanchanvkadam.github.io/valentine-invite/#/view?name=Someone&sender=You


❌ Incorrect:

https://kanchanvkadam.github.io/#/view

💌 Author

Made with ❤️ by Kanchan Kadam
GitHub: https://github.com/Kanchanvkadam

🌹 Final Note

This project was built for fun, love, and learning.
If it made someone smile — it already succeeded 💖

Happy Valentine’s Day 💘




