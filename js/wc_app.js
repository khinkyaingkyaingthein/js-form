const inputText = document.querySelector("#text");
const statElem = document.querySelector("#stat");

// create a new instance of WordCounter
new WordCounter(inputText);

const render = (event) => {
  statElem.innerHTML = `<p>You've written <span class="highlight">${event.detail.wordStat.words} </span> words
        and <span class="highlight">${event.detail.wordStat.characters} </span>characters.</p>`;
};

inputText.addEventListener("count", render);
