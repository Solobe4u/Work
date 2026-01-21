let button = document.querySelector("button");
// button.addEventListener("click", searchFun);
let searchField = document.querySelector("input");
let dictioary = document.querySelector(".dictionary");

let word = 'cook'
const searchFun = async function (word1) {
     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word1}` ;

    let res = await fetch(url);
    let resJason = await res.json();
    //  .then(res => res.json()); anoda way of writing the previous line.

    // console.log(resJason); it will show error at 26 if u use this
     return resJason[0];
}
    button.addEventListener("click", getData);

searchFun(word);

async function getData() {
    const data = await searchFun(searchField.value);
    console.log(data); 

    let partOfSpeechArray = [];
for (let i = 0; i<data.meanings.length-1; i++) {
    partOfSpeechArray.push(data.meanings[i].partOfSpeech);
}

dictioary.innerHTML = `

    <div class="cards">
        <div class="Property">
            <span>Word:</span>
             <span>${data.word}</span>

        </div>

         <div class="Property">
            <span>Phonetics</span>
             <span>${data.phonetic}</span>

        </div>

        <div class="Property">
            <span>
            <audio controls>
                <source src="${data.phonetics[0].audio}" type="audio/mpeg">
            </span>
        </div>

        <div class="Property">
            <span>Definition</span>
                <span>${data.meanings[0].definitions[0].definition}</span>
        </div>

        <div class="Property">
            <span>Example</span>
            <span>${data.meanings[0].definitions[0].example}</span>
        </div>

        <div class="Property">
            <span>${partOfSpeechArray.map(e => e).join(', ')}</span>
        </div> `

}



                    //  <audio controls src="${data.phonetics[0].audio}" type="audio/mpeg"> </audio>
