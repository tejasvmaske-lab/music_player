// 🎧 Get elements
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const progress = document.querySelector(".progress");
const volume = document.querySelector(".volume");

const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const cover = document.querySelector(".cover img");

const playlist = document.getElementById("playlist");

const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

const bg = document.querySelector(".background-image");
const allSongs = document.querySelectorAll(".song");

// 📀 Songs data (you expand this)
const songs = [
    {
    name: "There You Are",
    artist: "ZAYN",
    src: "assets/songs/there_you_are.mp3",
    cover: "assets/images/icarus_falls.png",
    duration: "3:19"
  },
  {
    name: "Nonsense",
    artist: "Sabrina Carpenter",
    src: "assets/songs/nonsense.mp3",
    cover: "assets/images/emails_i_cant_send.png",
    duration: "2:43"
  },
  {
    name: "Friends",
    artist: "Levi Greenberg",
    src: "assets/songs/friends.mp3",
    cover: "assets/images/friends.png",
    duration: "3:15"
  },
  {
    name: "Remember",
    artist: "Liam Payne",
    src: "assets/songs/remember.mp3",
    cover: "assets/images/lp1.png",
    duration: "3:09"
  }
];

// 🎯 Track current song
let currentIndex = 0;

// 🔄 Load song
function loadSong(index) {
  const song = songs[index];

  audio.src = song.src;
  title.textContent = song.name;
  artist.textContent = song.artist;
  cover.src = song.cover;

  bg.style.backgroundImage = `url('${song.cover}')`;
  const allSongs = document.querySelectorAll(".song");
  allSongs.forEach(song => song.classList.remove("active"));
  allSongs[index].classList.add("active");
  audio.load();
  renderPlaylist();
}

// ▶️ Play / Pause
function togglePlay() {
  if (audio.paused) {
    audio.play().catch(error => console.error("Play error:", error));
    playBtn.querySelector("span").textContent = "⏸";
  } else {
    audio.pause();
    playBtn.querySelector("span").textContent = "▶";
  }
}

// ⏭ Next song
function nextSong() {
  currentIndex++;
  if (currentIndex >= songs.length) {
    currentIndex = 0;
  }
  loadSong(currentIndex);
  audio.addEventListener("canplay", autoPlayOnce);
}

function autoPlayOnce() {
  audio.play().catch(err => console.log(err));
  audio.removeEventListener("canplay", autoPlayOnce);
}

// ⏮ Previous song
function prevSong() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = songs.length - 1;
  }
  loadSong(currentIndex);
  audio.addEventListener("canplay", autoPlayOnce);
}

// 🎚 Progress update
function updateProgress() {
  const current = audio.currentTime;
  const duration = audio.duration;

  if (duration) {
    progress.value = (current / duration) * 100;

    currentTimeEl.textContent = formatTime(current);
    durationEl.textContent = formatTime(duration);
  }
}

// 🎚 Seek (when user drags)
function setProgress() {
  const value = progress.value;
  const duration = audio.duration;

  audio.currentTime = (value / 100) * duration;
}

// 🔊 Volume control
function setVolume() {
  audio.volume = volume.value / 100;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

function renderPlaylist() {
  const container = document.querySelector(".songs");
  container.innerHTML = "";

  for (let i = 0; i < songs.length; i++) {
    const index = (currentIndex + i) % songs.length;
    const song = songs[index];

    const div = document.createElement("div");
    div.classList.add("song");

    if (i === 0) {
      div.classList.add("active");
    }

    div.innerHTML = `
      <span class="name">${song.name}</span>
      <span class="time">${song.duration}</span>
    `;

    container.appendChild(div);
  }
}

// 🧠 Event listeners
loadSong(currentIndex);
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", setProgress);
volume.addEventListener("input", setVolume);
audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});
audio.addEventListener("ended", nextSong);