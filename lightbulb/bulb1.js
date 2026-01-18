let isOpen = false
let button = document.querySelector('.switch');
button.addEventListener('click',bulbFunction);
let bottomBulb = document.querySelector('.bulbBottom');
let topBulb = document.querySelector('.bulbTop');

/*
function bulbFunction(){
    if(isOpen){
        button.classList.remove('on')
        topBulb.classList.remove('bulbOn')
        bottomBulb.classList.remove('bulbOn')
        
    }
    else{
        button.classList.add('on')
        topBulb.classList.add('bulbOn')
        bottomBulb.classList.add('bulbOn')

    }
    isOpen = !isOpen//without this ,it will only on without turning off

}
*/

function bulbFunction(){
    isOpen = !isOpen
    button.classList.toggle('on')
    topBulb.classList.toggle('bulbOn')
    bottomBulb.classList.toggle('bulbOn')
}