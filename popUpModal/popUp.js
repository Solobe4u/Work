let closeBtn = document.getElementById("closeBtn");;
let whole = document.querySelector(".whole");
let tap = document.querySelector(".tap");


tap.addEventListener("click", () => {
    whole.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    whole.classList.remove("active");
})

