const title = document.getElementById('song-title'),
      current = document.getElementById('current-time'),
      durationTime = document.getElementById('duration'),
      progress = document.getElementById('progress'),
      playerProgress = document.getElementById('player-progress'),
      prev = document.getElementById('prev'),
      play = document.getElementById('play'),
      next = document.getElementById('next'),
      vinyl = document.getElementById('vinyl-container');


const song = new Audio();

const songs = [
   {
    path: './assets/music/Daylight.mp3',
    title: 'Daylight'
  },
   {
    path: './assets/music/Lover.mp3',
    title: 'Lover'
   },
   {
    path: './assets/music/Cruel-Summer.mp3',
    title: 'Cruel Summer'
   }
    ,
    { 
    path: './assets/music/The-Man-Taylor-Swift.mp3',
    title: 'The Man'
    }
]

let musicIndex = 0;
let isPlaying = false;
let currentRotation = 0;

//Funtion to play Music
function playMusic() { 
    isPlaying = true;
    play.classList.replace('fa-play', 'fa-pause');
    play.src = './assets/control-pics/pause.png';
    song.play();
}

//Function to pause Music
function pauseMusic() { 
    isPlaying = false;
    play.classList.replace('fa-pause', 'fa-play');
    song.pause();
}
function stopVinyl() {
        // Get computed style and extract the rotation angle
        let computedStyle = window.getComputedStyle(vinyl);
        let transformMatrix = computedStyle.transform;

        if (transformMatrix !== "none") {
            let values = transformMatrix.split('(')[1].split(')')[0].split(',');
            let a = values[0], b = values[1];
            let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI)); // Convert matrix to degrees
            currentRotation = angle; // Store the last rotation
        }

        // Stop animation and apply last rotation manually
        vinyl.style.animation = "none";
        vinyl.style.transform = `rotate(${currentRotation}deg)`;

}

function startVinyl() { 
    vinyl.style.transform = `rotate(${currentRotation}deg)`;
    console.log(currentRotation);
    vinyl.style.animation = "spin 5s linear infinite";

}
//function to toggle music
function toggleMusic() { 
    if(isPlaying) {
        play.src = './assets/control-pics/play.png';
        stopVinyl();
        pauseMusic();
    } else {
        play.src = './assets/control-pics/pause.png';
        startVinyl();
        playMusic();
    }
}

//function to load song
function loadMusic(music) {
    song.src = music.path;
    title.textContent = music.title;
}

//function to play next song
function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    startVinyl();
    playMusic();    
}

function updateProgressValue() {
  const { duration, currentTime } = song;
  if (isNaN(duration)) return;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
  current.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
  durationTime.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;

}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    song.currentTime = (clickX / width) * song.duration;
}

play.addEventListener('click', toggleMusic);
prev.addEventListener('click', () => changeMusic(-1));
next.addEventListener('click', () => changeMusic(1));
song.addEventListener('timeupdate', updateProgressValue);
song.addEventListener('ended', () => changeMusic(1));
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
