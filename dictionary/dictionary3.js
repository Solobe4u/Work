let button = document.querySelector("button");
let searchField = document.querySelector("input");

// Ensure these elements exist in your HTML
let wordy = document.querySelector(".wordy");
let phonet = document.querySelector(".phonet");
let audioe = document.querySelector(".audioe");
let defin = document.querySelector(".defin");
let exam = document.querySelector(".exam");
let part = document.querySelector(".part");

const searchFun = async function (word1) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word1}`;
    
    try {
        let res = await fetch(url);
        if (!res.ok) throw new Error("Word not found"); // Handle 404s
        
        let resJason = await res.json();
        let data = resJason[0]; // Get the first result

        // Extracting data safely
        let word = data.word;
        let phonetics = data.phonetic || "N/A";
        let audio = data.phonetics.find(p => p.audio)?.audio || "";
        let meanings = data.meanings[0].definitions[0].definition;
        let example = data.meanings[0].definitions[0].example || "No example available";
        let partOfSpeech = data.meanings[0].partOfSpeech;

        updateDisplay(word, phonetics, audio, meanings, example, partOfSpeech);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

function updateDisplay(word, phonetics, audio, meanings, example, partOfSpeech) {
    wordy.innerText = word;
    phonet.innerText = phonetics;
    audioe.innerHTML = audio ? `<audio controls src="${audio}"></audio>` : "No audio";
    defin.innerText = meanings;
    exam.innerText = example;
    part.innerText = partOfSpeech;
}

function getData(e) {
    e.preventDefault();
    let word = searchField.value;
    if (word) searchFun(word);
}

button.addEventListener("click", getData);

// Initial call with a valid string
searchFun('cook');