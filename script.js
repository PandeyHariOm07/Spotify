console.log("Welcome To Spotify")
//initialise the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    {songName : "Night Changes", filePath: "song/1.mp3", coverPath: "cover1.jpg"},
    {songName : "Kahanifbxcv Suno", filePath: "song/2.mp3", coverPath: "cover2.jpeg"},
    {songName : "Nightcx sdfg Changes", filePath: "song/1.mp3", coverPath: "cover1.jpg"},
    {songName : "Kahandsgsdi Suno", filePath: "song/2.mp3", coverPath: "cover2.jpeg"},
    {songName : "Nighgjkft Changes", filePath: "song/1.mp3", coverPath: "cover1.jpg"},
    {songName : "Kahsdgsyani Suno", filePath: "song/2.mp3", coverPath: "cover2.jpeg"},
    {songName : "Nigdfhsht Changes", filePath: "song/1.mp3", coverPath: "cover1.jpg"},
    {songName : "Kahasdgni Suno", filePath: "song/2.mp3", coverPath: "cover2.jpeg"},
    {songName : "Nighsgt Changes", filePath: "song/1.mp3", coverPath: "cover1.jpg"},
    {songName : "Kahashdgjni Suno", filePath: "song/2.mp3", coverPath: "cover2.jpeg"},

]
songItems.forEach((elements,i)=>{
    elements.getElementsByTagName("img")[0].src = songs[i].coverPath
    elements.getElementsByClassName("songName")[0].innerText = songs[i].songName
})
//
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-pause-circle')
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-pause-circle')
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    progress =  parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((elements)=>{
        console.log('Hi')
        elements.classList.add('fa-play-circle')
        elements.classList.remove('fa-pause-circle')

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).
forEach((elements)=>{
    elements.addEventListener('click',(e)=>{
         makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('pp')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `song/${songIndex+1}.mp3`
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('pp')
        masterPlay.classList.add('fa-pause-circle')
        })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
