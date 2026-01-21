let currentPage = 0;
const pages = document.querySelectorAll('.page');
let nextBtn = document.querySelector('.nxt');
let prevBtn = document.querySelector('.prev');

nextBtn.addEventListener("click", () => {
    if (currentPage == pages.length - 1) {
        return
    }
    pages[currentPage++].classList.remove("active");
    pages[currentPage].classList.add("active");

})

prevBtn.addEventListener("click", () => {
    if (currentPage == 0) {
        return
    }
    pages[currentPage--].classList.remove("active");
    pages[currentPage].classList.add("active");
})

for(let i=0; i<pages.length; i++){
    pages[i].addEventListener("click", () => {
        if(currentPage == i) return; // If the clicked page is the current page, do nothing
        pages[currentPage].classList.remove("active");
        pages[i].classList.add("active");
        currentPage = i; // Update currentPage to the clicked page index
    })
}
