// let isOpen = false; not needed in toggle version
let button = document.querySelector('.switch');
button.addEventListener('click', bulbFun);

let bulbTop = document.querySelector(".bulbTop");

let bulbBottom = document.querySelector(".bulbBottom");



function bulbFun() {
    button.classList.toggle('on');
    bulbTop.classList.toggle("bulbOn");
    bulbBottom.classList.toggle("bulbOn");

    // isOpen = !isOpen; is not needed in toggle because toggle flips the switch
}