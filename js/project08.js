const gameOutput = document.getElementById('game-output');
const gameControls = document.getElementById('game-controls');
const resetButton = document.getElementById('reset-button');
const progressBar = document.getElementById('progress');

let currentScene = null;
let progress = 0;

const scenes = {
    start: {
        text: "You wake up in a dark forest. There are paths leading north and east. What do you do?",
        options: [
            { text: "Go north", nextScene: "cabin", progressValue: 50 },
            { text: "Go east", nextScene: "river", progressValue: 33 }
        ]
    },
    cabin: {
        text: "You arrive at a cabin. The door is slightly open. Do you enter?",
        options: [
            { text: "Enter the cabin", nextScene: "treasure", progressValue: 100 },
            { text: "Go back", nextScene: "start", progressValue: 0 }
        ]
    },
    river: {
        text: "You reach a river. It's too wide to cross. Do you follow the river?",
        options: [
            { text: "Follow the river", nextScene: "waterfall", progressValue: 66 },
            { text: "Go back", nextScene: "start", progressValue: 0 }
        ]
    },
    treasure: {
        text: "You find a chest of gold! You've won the game!",
        options: []
    },
    waterfall: {
        text: "You find a beautiful waterfall. There's no way forward. Do you go back?",
        options: [
            { text: "Go back", nextScene: "river", progressValue: 33 }
        ]
    }
};

function updateProgress(value) {
    progress = value;
    progressBar.style.width = progress + '%';
}

function displayScene(sceneKey) {
    currentScene = sceneKey;
    const scene = scenes[sceneKey];

    gameOutput.textContent = scene.text;
    gameControls.innerHTML = '';

    scene.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => {
            displayScene(option.nextScene);
            updateProgress(option.progressValue);
            saveProgress();
        });
        gameControls.appendChild(button);
    });
}

function resetGame() {
    progress = 0;
    progressBar.style.width = '0';
    displayScene('start');
    localStorage.removeItem('gameProgress');
}

function saveProgress() {
    const gameData = {
        currentScene,
        progress
    };
    localStorage.setItem('gameProgress', JSON.stringify(gameData));
}

function loadProgress() {
    const savedData = localStorage.getItem('gameProgress');
    if (savedData) {
        const gameData = JSON.parse(savedData);
        currentScene = gameData.currentScene;
        progress = gameData.progress;
        progressBar.style.width = progress + '%';
        displayScene(currentScene);
    } else {
        resetGame();
    }
}

resetButton.addEventListener('click', resetGame);

loadProgress();
