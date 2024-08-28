// Строгий режим
"use strict"

document.addEventListener('click', documentAction) 

function documentAction (e) {
    const targetElement = e.target
    if(targetElement.closest('.add-toggle-menu')) {
        const currentElement = targetElement.closest('.add-toggle-menu')
        currentElement.closest('.header').classList.toggle('active')
    }
}