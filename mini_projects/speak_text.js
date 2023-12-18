const speakBtn=document.querySelector("#playBtn")

const query = document.querySelector("#text")

speakBtn.addEventListener("click",playSpeech)

function playSpeech(){
    const speech = new SpeechSynthesisUtterance(query.value);
    speechSynthesis.speak(speech);
}