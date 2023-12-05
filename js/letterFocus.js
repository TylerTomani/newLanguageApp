const allEls = document.querySelectorAll('body *')

addEventListener('keydown', e => {
    let key = e.key
    allEls.forEach(el => {
        if(key === el.id[0]){
            el.focus()
        }
    })
})