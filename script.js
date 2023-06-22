console.log("welcome to spotify");


//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("music/4.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let songs = [
    { songName: "Akhiyanu Teri Deed di", filepath: "C:\Users\HAFSA BAHIYAL\Desktop\spotify\music\1.mp3", coverPath: "covers/1.png" },
    { songName: "Calm Down", filepath: "C:\Users\HAFSA BAHIYAL\Desktop\spotify\music\2.mp3", coverPath: "covers/2.png" },
    { songName: "Cheap Thrills", filepath: "C:\Users\HAFSA BAHIYAL\Desktop\spotify\music\3.mp3", coverPath: "covers/3.png" },
    { songName: "Chittiyan Kalaiyan", filepath: "C:\Users\HAFSA BAHIYAL\Desktop\spotify\music\4.mp3", coverPath: "covers/4.png" },
    { songName: "Khairiyat", filepath: "C:\Users\HAFSA BAHIYAL\Desktop\spotify\music\5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Let me Love you", filepath: "C:\Users\HAFSA BAHIYAL\Desktop\spotify\music\6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Who Says", filepath: "C:\Users\HAFSA BAHIYAL\Desktop\spotify\music\7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Salam E Ishq", filepath: "C:\Users\HAFSA BAHIYAL\Desktop\spotify\music\8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Attention", filepath: "C:\Users\HAFSA BAHIYAL\Desktop\spotify\music\9.mp3", coverPath: "covers/9.jpg" },
]


songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }

});

//Listen to Events
audioElement.addEventListener("timeupdate", () => {

    //Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;


})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}
Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `music/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})


