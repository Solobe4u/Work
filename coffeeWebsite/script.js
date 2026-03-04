const menuOpenBtn = document.getElementById('menu-open');
const menuCloseBtn = document.getElementById('menu-close');

menuOpenBtn.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");// Toggle the "menu-open" class on the body element when the menu open button is clicked
})

menuCloseBtn.addEventListener("click", () => menuOpenBtn.click());// Remove the "menu-open" class from the body element when the menu close button is clicked
