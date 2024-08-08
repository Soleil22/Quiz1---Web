console.log("its working?")
let words = ["Gato", "Mariposa", "Acciones"]

let selectedWord = "";
let scrambledWord = "";

function scrambleWord(word) {
    const scrambledArray = word.split('').sort(() => Math.random() - 0.5);
    return scrambledArray.join('');
}

function newWord() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(selectedWord);
    document.getElementById('scrambledWord').innerText = scrambledWord;
}

document.getElementById('randomWord').addEventListener('click', () => {
    newWord()
})

newWord();