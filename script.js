const bg=new Audio('music/song.mp3');
bg.loop=true;
const voice=new Audio('music/voice-note.mp3');
function startMusic(){bg.play();}
function playVoice(){
 bg.pause();
 voice.currentTime=0;
 voice.play();
}
voice.addEventListener('ended',()=>bg.play());
