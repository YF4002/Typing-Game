let textElement = document.getElementById("text");
let countError = document.getElementById("error-count");
let countCorrect = document.getElementById("correct-count");
let restartButton = document.getElementById("restart");

let correctCount = 0;
let errorCount = 0;
let currentIndex = 0;

highlightCurrentCharacter();
document.addEventListener("keydown", handleKeyEvent);
restartButton.addEventListener("click", restartGame);

function highlightCurrentCharacter() {
    let text = textElement.textContent;
    let highlightText = '';

    for (let i = 0; i < text.length; i++) {
        if (i === currentIndex) {
            highlightText += `<span class="highlight">${text[i]}</span>`;
        } else {
            highlightText += text[i];
        }
    }

    textElement.innerHTML = highlightText;
}

function handleKeyEvent(event) {
    let text = textElement.textContent;
    const pressedKey = event.key;

    if (pressedKey.length === 1 && text[currentIndex].match(/(\w|\s|[.,!?;:'"-])/)) {
        if (pressedKey === text[currentIndex]) {
            correctCount++;
            countCorrect.textContent = correctCount;
            currentIndex++;

            if (currentIndex === text.length) {
                textElement.style.color = "green";
            }

        } else {
            errorCount++;
            countError.textContent = errorCount;
        }
        highlightCurrentCharacter();
    }

}

function restartGame() {
    correctCount = 0;
    errorCount = 0;
    currentIndex = 0;
    countCorrect.textContent = correctCount;
    countError.textContent = errorCount;
    highlightCurrentCharacter();
    textElement.style.color = "grey";
}

