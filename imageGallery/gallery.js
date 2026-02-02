let images = document.querySelectorAll('.imageContainer img');
let view = document.querySelector('.view');
let viewImage = view.querySelector('img');
let closeBtn = view.querySelector('span');

for(let image of images){
    image.addEventListener("click", ()=>{
        view.style.display = "flex";// display the view box
        viewImage.src = image.src;// set the clicked image src to view image src

    })
}

closeBtn.addEventListener("click", ()=>{
    view.style.display = "none";// hide the view box on close button click
});