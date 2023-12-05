export const txt = document.querySelector('#txt')
export const playBtn = document.querySelector('#playBtn')
// Shift + Enter 18,13
let focusPlayBtnArr = []

let textareafocus = false

playBtn.addEventListener('click', e => {
    // animate deanimate play btn
    animateBtn(e.target)
    
    
})
// Shift + Enter Focuses on playBtn
addEventListener('keydown', e => {
    if(!textareafocus){
        let key = e.keyCode
        focusPlayBtnArr.unshift(key)
        if(focusPlayBtnArr.length > 2){
            focusPlayBtnArr.pop()
        }
        if(focusPlayBtnArr[0] === 13 && focusPlayBtnArr[1] === 16){
            playBtn.focus()
        }
    }
})


function animateBtn(el){
    el.classList.remove('deanimate')
    el.classList.add('animate')
    setTimeout(() => {
        el.classList.remove('animate')
        el.classList.add('deanimate')
    }, 500);
}

