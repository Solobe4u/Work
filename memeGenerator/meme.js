// https://meme-api.com/gimme

let img = document.querySelector(".meme img");

async function generateMeme() {
    let api = await fetch("https://meme-api.com/gimme");
    let data = await api.json();
    console.log(data);
    // document.querySelector(".meme img").src = data.url;
    let url = data.url;
    console.log(url);
    img.src = url;// set the src attribute of the img element to the meme URL. Last comment is a shortcut
}
generateMeme();

let timer = setInterval(generateMeme, 5000); // Generate a new meme every 5 seconds 

img.addEventListener('mouseover', () => {
    clearInterval(timer); // Stop generating new memes when mouse is over the image
});

img.addEventListener('mouseout', () => {
    timer = setInterval(generateMeme, 5000); // Resume generating new memes when mouse leaves the image
});