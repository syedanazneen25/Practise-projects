console.log("Welcome To My Music");
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogerssbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Hona Tha Pyar", filepath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Kabh Na Kabhi", filepath: "songs/2.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "Jeena Jeena", filepath: "songs/3.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Tum Se", filepath: "songs/4.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "Sang Rahiyo", filepath: "songs/5.mp3", coverPath: "covers/cover5.jpg"},
]
songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})
// audioElement.play();

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');  
        gif.style.opacity = 1; 
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 0;  
    }
})
// listen to event
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogerssbar.value = progress;
})

myprogerssbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogerssbar.value * audioElement.duration/100;

})
const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
     })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeALLPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex}.mp3`;
        mastersongname.innerText = songs[songindex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1; 
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=5){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})