const randomTextDisplay = document.getElementById("random-text");
const inputArea = document.getElementById("input-area");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const difficultySelect = document.getElementById("difficulty");

let timer = null;
let startTime = null;
let currentText = "";
let totalTyped = 0;
let correctTyped = 0;
let isTimerRunning = false;

const texts = {
    easy: ["Hello world", "Type this", "Quick brown fox"],
    medium: ["JavaScript is fun", "Coding is awesome", "Practice typing skills"],
    hard: ["Complexity is the enemy", "Optimize your workflow", "Master the art of programming"]
};

function generateText(difficulty) {
    const textArray = texts[difficulty];
    return textArray[Math.floor(Math.random() * textArray.length)];
}

function updatePrompt() {
    currentText = generateText(difficultySelect.value);
    randomTextDisplay.textContent = currentText;
    inputArea.value = "";
    inputArea.style.color = "black";
    isTimerRunning = false;
}

function updateWPM() {
    const elapsedMinutes = (Date.now() - startTime) / 60000;
    const wordsTyped = totalTyped / 5;
    const wpm = Math.round(wordsTyped / elapsedMinutes);
    wpmDisplay.textContent = wpm;
}

function updateAccuracy() {
    const accuracy = correctTyped > 0 ? Math.round((correctTyped / totalTyped) * 100) : 0;
    accuracyDisplay.textContent = `${accuracy}%`;
}

function startTraining() {
    updatePrompt();
    inputArea.disabled = false;
    inputArea.focus();

    totalTyped = 0;
    correctTyped = 0;

    timer = setInterval(() => {
        if (isTimerRunning) {
            updateWPM();
            updateAccuracy();
        }
    }, 1000);
}

function stopTraining() {
    clearInterval(timer);
    inputArea.disabled = true;
}

function restartTraining() {
    stopTraining();
    updatePrompt();
    inputArea.disabled = false;
    inputArea.focus();
}

inputArea.addEventListener("input", () => {
    if (!isTimerRunning) {
        isTimerRunning = true;
        startTime = Date.now();
    }

    const userInput = inputArea.value;
    totalTyped++;

    if (userInput === currentText.slice(0, userInput.length)) {
        correctTyped++;
        inputArea.style.color = "green";
    } else {
        inputArea.style.color = "red";
    }

    if (userInput === currentText) {
        alert("Well done! Training complete.");
        stopTraining();
        updatePrompt();
        inputArea.disabled = false;
        inputArea.focus();
    }
});

difficultySelect.addEventListener("change", () => {
    updatePrompt();
});

startButton.addEventListener("click", startTraining);
restartButton.addEventListener("click", restartTraining);
