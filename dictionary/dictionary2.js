let button = document.querySelector("button");
// button.addEventListener("click", searchFun);
let searchField = document.querySelector("input");
let dictioary = document.querySelector(".dictionary");
let wordy = document.querySelector(".wordy");
let phonet = document.querySelector(".phonet");
let audioe = document.querySelector(".audioe");
let defin = document.querySelector(".defin");
let exam = document.querySelector(".exam");
let part = document.querySelector(".part");

    button.addEventListener("click", getData);

let search = 'hello';
const searchFun = async function (word1) {
     let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word1}` ;

    let res = await fetch(url);
    let resJason = await res.json();
    //  .then(res => res.json()); anoda way of writing the previous line.

    // console.log(resJason); it will show error at 26 if u use this

let word = resJason[0].word;
let phonetics = resJason[0].phonetic;
let audio = resJason[0].phonetics[0].audio;
let meanings = resJason[0].meanings[0].definitions[0].definition
let example = resJason[0].meanings[0].definitions[0].example;
let partOfSpeech = resJason[0].meanings[0].partOfSpeech;

updateDisplay(word, phonetics, audio, meanings, example, partOfSpeech); 

     return resJason[0];//this has to be at the end of the function or it will return before fetching the data(below it wont work)

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
searchFun(search);







                    //  <audio controls src="${data.phonetics[0].audio}" type="audio/mpeg"> </audio>
