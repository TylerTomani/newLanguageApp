import { txt } from './speakFocus.js'
import { playBtn } from './speakFocus.js'
const languageH3 = document.querySelector('#selected-lang-h3')
let selectedLanguage
let speedInput = document.querySelector('#speed')
let currentSpeed 
speedInput.addEventListener('change', e => {
    currentSpeed = e.target.value
    
})
speedInput.addEventListener('keydown', e => {
    let key = e.keyCode
    if(e.keyCode === 13){   
        playBtn.focus()
        playBtn.click()
    }
})
speedInput.addEventListener('click', e => {
    playBtn.focus()
    playBtn.click()

})

playBtn.addEventListener('click', e => {
    // Web Dev Simplified function
    playText(txt.value)
})

function playText(text,language){
    // Switch Language
    switch (languageH3.innerText){
        case 'Spanish':
            selectedLanguage = 'es'
            break;
        case 'Chinese':
            selectedLanguage = 'zh-CN'
            break;
        case 'Russian':
            selectedLanguage = 'ru'
            break;
        default:
            console.log('no language selected')
    }
    console.log(language)
    
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = `${selectedLanguage}`
    utterance.rate = currentSpeed || 1
    console.log(currentSpeed)
    speechSynthesis.speak(utterance)
}