# 🌊 Maro Music Player

A sleek, modern desktop-inspired music player built using pure HTML, CSS, and JavaScript — featuring dynamic backgrounds, rotating queues, smooth animations, synced playback controls, and a premium glassmorphism UI.

> Built from scratch while experimenting with real music-player architecture, UI interactions, playlist systems, and future multi-source music integration ideas.

---

# ✨ Features

## 🎵 Music Playback
- Play / Pause controls
- Next / Previous track navigation
- Automatic next-song playback
- Dynamic duration & current-time sync
- Interactive seek/progress bar
- Volume control support

---

## 🎨 Modern UI / UX
- Glassmorphism-inspired design
- Dynamic blurred background synced with album art
- Smooth hover & click animations
- Responsive player layout
- Queue-style rotating playlist system

---

## 🧠 Smart Playlist Logic

Unlike traditional static playlists, this player uses a rotating queue mechanism:

Current Song  
⬇  
Upcoming Songs  
⬇  
Previously Played Songs rotate to bottom

This creates a more immersive “Now Playing” experience similar to modern streaming platforms.

---

# 🛠 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- HTML Audio API

No frameworks. No libraries. Built completely from scratch.

---

# 📂 Project Structure

```bash
📁 assets
 ┣ 📁 images
 ┣ 📁 songs

📄 index.html
📄 style.css
📄 script.js
```

---

# 🧠 Core Concepts Implemented

## 🎚 Media Synchronization

- Audio playback syncing
- Real-time progress updates
- Dynamic metadata handling

---

## 🎨 UI State Management

- Active playlist highlighting
- Background synchronization
- Dynamic DOM rendering

---

## 🔁 Queue Rotation Logic

```js
const index = (currentIndex + i) % songs.length;
```

This powers the rotating playlist system.

---

# 🔥 Upcoming Features

- [ ] Click playlist item to play
- [ ] 3-panel desktop layout
- [ ] Advanced slider animations
- [ ] Smooth queue transitions
- [ ] Shuffle & Repeat modes
- [ ] Keyboard shortcuts
- [ ] Playlist importing
- [ ] Spotify metadata integration
- [ ] Multi-source playback architecture
- [ ] Universal music aggregation experiments

---

# 🌌 Vision

This project started as a simple music player experiment.

It is slowly evolving into a larger idea:

> A beautiful, modern, universal music experience focused heavily on UI, interaction, and seamless playback.

---

# ⚡ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Open:

```bash
index.html
```

in your browser.

---

# 📸 Screenshots

> Add screenshots/gifs here after uploading.

Suggested screenshots:

- Main Player UI
- Dynamic Background
- Playlist Queue
- Hover Animations

---

# 🤝 Contributing

Suggestions, ideas, and feedback are always welcome.

If you have ideas related to:

- music systems
- UI/UX
- playback architecture
- animations
- playlist logic

feel free to open an issue or fork the project.

---

# ⭐ Support

If you like the project, consider giving it a star ⭐

It genuinely helps and motivates future development.

---

# 👨‍💻 Author

Built with curiosity, experimentation, debugging pain, and late-night ideas by **Tejas Maske** 🚀