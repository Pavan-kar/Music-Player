const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.querySelector(".cover");

const songs = [
  {
    title: "Hey Dinakara",
    artist: "Hamsalekha",
    src: "song1.mp3",
    cover: "cover1.jpg",
  },
  {
    title: "Lucia",
    artist: "Poornachandra Tejaswi",
    src: "song5.mp3",
    cover: "cover5.jpg",
  },
  {
    title: "Alemari",
    artist: "Raghu Dixit",
    src: "song3.mp3",
    cover: "cover3.jpg",
  },
  {
    title: "Parasiva",
    artist: "Raghu Dixit",
    src: "song4.mp3",
    cover: "cover4.jpg",
  },
  {
  title: "Poojyaya Raghavendra",
    artist: "V.Harikrishna",
    src: "song2.mp3",
    cover: "cover2.jpg"
  }
];

let songIndex = 0;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
}

function playSong() {
  audio.play();
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
  audio.pause();
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});
prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});

loadSong(songs[songIndex]);
