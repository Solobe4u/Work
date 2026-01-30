
let textContainer = document.querySelector('.textContainer');
let keys = document.querySelectorAll('.key');
let enterKey = document.querySelector('.enter');
let spaceKey = document.querySelector('.wide-space');
let deleteKey = document.querySelector('.delete');
let capsLockKey = document.querySelector('.capslock');
let isCapsLock = false;

enterKey.addEventListener("click", () => {
    let content = textContainer.innerHTML;
             let newContent = content + "<br>";
    //  let newContent = content + "\n";// You use innerText to replace innerhtml
    textContainer.innerHTML= newContent;

})
spaceKey.addEventListener("click", () => {
    let content = textContainer.innerHTML;
              let newContent = content + "&nbsp;";
            //  spacing in html includes &nbsp; for non breaking space, &ensp; for two space, &emsp; for four space, <pre> </pre> for preserving spaces
                         // let newContent = content + " "; This goes with innerText
            textContainer.innerHTML= newContent;
            // console.log(newContent);
})

deleteKey.addEventListener("click",() => {
    let content = textContainer.innerText;
    let newContent = content.slice(0, content.length-1);
    textContainer.innerText= newContent;
})


// ... (previous code)

capsLockKey.addEventListener("click", () => {
    isCapsLock = !isCapsLock; // Toggle state first
    
    if (isCapsLock) {
        capsLockKey.classList.add("active");
    } else {
        capsLockKey.classList.remove("active");
    }

    for (let key of keys) {
        // EXCLUDE Functional keys by checking their specific class
        if (key.classList.contains('capslock') || 
            key.classList.contains('delete') || 
            key.classList.contains('enter') || 
            key.classList.contains('wide-space')) {
            continue; // Skip these keys
        }
        
        // Only modify keys that are letters
        if (isCapsLock) {
            key.innerText = key.innerText.toUpperCase();
        } else {
            key.innerText = key.innerText.toLowerCase();
        }
    }
});



/*
still had issues with capslock
capsLockKey.addEventListener("click", () => {
    isCapsLock = !isCapsLock; // Toggle state first
    capsLockKey.classList.toggle("active"); // Toggle CSS class

    for (let key of keys) {
        // Skip specialized keys (like, enter, delete, capslock itself)
        if (key.classList.contains('key-functional')) continue; 

        if (isCapsLock) {
            key.innerText = key.innerText.toUpperCase();
        } else {
            key.innerText = key.innerText.toLowerCase();
        }
    }
});

*/




/*
keys.forEach(key => {
    key.addEventListener("click", () => {
        let keyValue = key.textContent;
        let content = textContainer.innerHTML;
        let newContent = content + keyValue;
        textContainer.innerHTML= newContent;
    })
})
*/

for(let key of keys) {
    if(key.classList.length>1) {
}else {
    key.addEventListener("click", () => {
        textContainer.innerText += key.innerText;
    });
    }   
}

