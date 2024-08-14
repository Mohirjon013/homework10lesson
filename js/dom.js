let speech = new webkitSpeechRecognition()
let audio = new Audio
let elTitle = document.querySelector(".title")
speech.lang = "En-en"

speech.onresult = function(e){
    let result = e.results[0][0].transcript
    elTitle.textContent = result
    if(result == "hello"){
        audio.src = "./mp3/mankeldim.ogg"
        audio.play()
    }
    else if(result == "what"){
        audio.src = "./mp3/liklik.ogg"
        audio.play()
    }
    else if(result == "rich"){
        audio.src = "./mp3/boy-bolay.ogg"
        audio.play()
    }
}


function handleClickBtn(){
    speech.start()
}