const languages = document.querySelectorAll('.language')
const iframe = document.querySelector('iframe')
let focusedIframe = false
let currentLanguage


languages.forEach(language => {
    const a = language.querySelector('h2 > a')
    if(a.hasAttribute('autofocus')){
        console.log(a.href)
        iframe.src = a.href
        iframe.focus()
    }

    language.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        iframe.src = e.target.href
        currentLanguage = e.target.id
        if(focusedIframe){
            iframe.focus()
        }
        focusedIframe = !focusedIframe
    })
})

iframe.addEventListener('focusout', e => {
    const languageId = document.querySelector(`#${currentLanguage}`)
    languageId.focus()
    console.log()
})