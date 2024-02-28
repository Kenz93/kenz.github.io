//time life
function updateLifetime() {
    var birthDate = new Date("2005-01-01");
    var now = new Date();

    var diff = now - birthDate;

    var seconds = Math.floor(diff / 1000);

    var lifetimeCounter = document.getElementById("alive-time");
    lifetimeCounter.textContent =
        seconds.toLocaleString() + (seconds === 1 ? "" : "s");
}

setInterval(updateLifetime, 1000);

//zoom
// Dapatkan elemen modal
var modal = document.getElementById("myModal");

// Dapatkan elemen gambar dan tombol penutupnya
var img = document.getElementsByClassName("zoomable");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

// Saat gambar diklik, tampilkan modal
for (var i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    };
}

// Saat tombol penutup diklik, sembunyikan modal
span.onclick = function () {
    modal.style.display = "none";
};

//song
function playMusic(songPath) {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.pause();
    document.getElementById("audioSource").src = songPath;
    audioPlayer.load();
    audioPlayer.play();
}
var musicFiles = [
    "assets/song/Ari Abdul - Sinners (Lyric Video) ft. Thomas LaRosa (64K).mp3",
    "assets/song/Ari Abdul - Stay (Lyric Video) (64K).mp3",
    "assets/song/Ari Abdul - Worship (64K).mp3",
    "assets/song/Ari Abdul - You Belong to Me (Visualizer) (64K).mp3",
    "assets/song/Beach Bunny - Prom Queen (Lyrics) (192K).mp3",
    "assets/song/Daun Jatuh - Resah Jadi Luka (Official Audio) (64K).mp3",
    "assets/song/Dean Lewis - Be Alright (Lyrics) (64K).mp3",
    "assets/song/Duvet (Sped Up Version) (64K).mp3",
    "assets/song/Evil Queen (64K).mp3",
    "assets/song/Geisha - Karena Kamu _ Lirik Lagu (64K).mp3",
    "assets/song/HEY-SMITH - Say My Name【OFFICIAL MUSIC VIDEO】 (64K).mp3",
    "assets/song/Hijau Daun - Setiap Detik (Video Clip) (64K).mp3",
    "assets/song/Hijau Daun - Suara (Ku Berharap) (Video Clip) (64K).mp3",
    "assets/song/Joy Crookes - Feet Don't Fail Me Now (Official Video) (128K).mp3",
    "assets/song/Justin Bieber - Beauty And A Beat by KAIX __ 64K.mp3",
    "assets/song/JVKE - this is what space feels like -Official Lyric Video- (64K).mp3",
    "assets/song/Taylor Swift - Love Story (Taylor’s Version) _ Lirik Terjemahan (64K).mp3",
    "assets/song/nadhifbasalamahpenjagahatiOfficialMusicVideo64KMusik.mp3",
    "assets/song/NewJeans 'New Jeans (ft. The Powerpuff Girls)' Lyrics (뉴진스 New Jeans 가사) (Color Coded Lyri (64K).mp3",
    "assets/song/Paramore_ Decode -OFFICIAL VIDEO- (64K).mp3",
    "assets/song/Powfu, Ouse, Snøw - wallflower (64K).mp3",
    "assets/song/Seventeen - Hal Terindah (Lyrics Video) (64K).mp3",
    "assets/song/SEVENTEEN - JKT48 (Lyrics) (64K).mp3",
    "assets/song/Seventeen - Tanpa Pesan Terakhir _ Lirik Lagu (64K).mp3",
    "assets/song/SING-OFF TIKTOK SONGS PART 7 _Purple Raincoat_ vs Ghea Indrawari (64K).mp3",
    "assets/song/SING-OFF TIKTOK SONGS PART VI (Yamet Kudasi, It's Only Me) vs Mirriam Eka (64K).mp3",
    "assets/song/Slipknot - Unsainted -OFFICIAL VIDEO- (64K).mp3",
    "assets/song/Snøw - Another Lie (Lyric Visualizer) (64K).mp3",
    "assets/song/Snøw _ Teqkoi _ I Never Wanna Lose You (64K).mp3",
    "assets/song/Snøw x Skinny Atlas _ A Song For Kaytlyn (64K).mp3",
    "assets/song/Tate McRae - greedy (Lyrics) (64K).mp3"
];
var currentSongIndex = 0;

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % musicFiles.length;
    playMusic(musicFiles[currentSongIndex]);
}

function playPreviousSong() {
    currentSongIndex =
        (currentSongIndex - 1 + musicFiles.length) % musicFiles.length;
    playMusic(musicFiles[currentSongIndex]);
}

function onSongEnded() {
    playNextSong();
}

var audioPlayer = document.getElementById("audioPlayer");
audioPlayer.addEventListener("ended", onSongEnded);

document.querySelector(".fa-forward").addEventListener("click", playNextSong);
document
    .querySelector(".fa-backward")
    .addEventListener("click", playPreviousSong);

let progress = document.getElementById("progress");
let song = document.getElementById("audioPlayer");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

setInterval(() => {
    progress.value = song.currentTime;
}, 500);

progress.onchange = function () {
    song.currentTime = progress.value;
};

function playMusic(songPath, songTitle) {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.pause();
    document.getElementById("audioSource").src = songPath;
    audioPlayer.load();
    audioPlayer.play();

    // Set judul lagu
    document.getElementById("songTitle").innerText = songTitle;
}

var currentSongIndex = 0;

function playMusic(songPath, songTitle) {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.pause();
    document.getElementById("audioSource").src = songPath;
    audioPlayer.load();
    audioPlayer.play();

    // Set judul lagu
    document.getElementById("songTitle").innerText = songTitle;
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % musicFiles.length;
    var nextSongPath = musicFiles[currentSongIndex];
    var nextSongTitle = nextSongPath.split("/").pop().replace(".mp3", "");
    playMusic(nextSongPath, nextSongTitle);
}

function playPreviousSong() {
    currentSongIndex =
        (currentSongIndex - 1 + musicFiles.length) % musicFiles.length;
    var prevSongPath = musicFiles[currentSongIndex];
    var prevSongTitle = prevSongPath.split("/").pop().replace(".mp3", "");
    playMusic(prevSongPath, prevSongTitle);
}
