let button = document.querySelector("button");
// button.addEventListener("click", searchFun);
let searchField = document.querySelector("input");
let dictioary = document.querySelector(".dictionary");

    button.addEventListener("click", getData);

let search = 'cook';
const searchFun = async function (word1) {
     let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word1}` ;

    let res = await fetch(url);
    let resJason = await res.json();
    //  .then(res => res.json()); anoda way of writing the previous line.

    // console.log(resJason); it will show error at 26 if u use this
     return resJason[0];

let word = resJason[0].word;
let phonetics = resJason[0].phonetic;
let audio = resJason[0].phonetics[0].audio;
let meanings = resJason[0].meanings[0].definitions[0].definition
let example = resJason[0].meanings[0].definitions[0].example;
let partOfSpeech = resJason[0].meanings[0].partOfSpeech;

updateDisplay(word, phonetics, audio, meanings, example, partOfSpeech); 

};

function updateDisplay(word, phonetics, audio, meanings, example, partOfSpeech) {
    wordy.innerText = word;
    phonet.innerText = phonetics;
    audioe.innerHTML = `<audio controls>    
    <source src="${audio}" type="audio/mpeg">
    </audio>`;
    defin.innerText = meanings;
    exam.innerText = example;
    part.innerText = partOfSpeech;
}   

function getData(e) {
    e.preventDefault(); //to prevent reloading of the page on submit
    let word = searchField.value;
    searchFun(word, e.currentTarget.value);
}
searchFun(word);







                    //  <audio controls src="${data.phonetics[0].audio}" type="audio/mpeg"> </audio>
