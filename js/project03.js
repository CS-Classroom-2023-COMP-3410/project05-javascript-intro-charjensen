const gameBoard = document.getElementById('game-board');
const movesCounter = document.getElementById('moves');
const timeCounter = document.getElementById('time');
const restartButton = document.getElementById('restart');

let cards = [];
let firstCard = null;
let secondCard = null;
let moves = 0;
let timer = null;
let secondsElapsed = 0;

const emojis = ['🍎', '🍌', '🍇', '🍓', '🍍', '🍒', '🥝', '🍑'];

function initializeGame() {
    resetGame();
    const shuffledEmojis = shuffle([...emojis, ...emojis]);
    shuffledEmojis.forEach((emoji) => {
        const card = createCard(emoji);
        gameBoard.appendChild(card);
    });
    cards = document.querySelectorAll('.card');
}

function resetGame() {
    gameBoard.innerHTML = '';
    moves = 0;
    secondsElapsed = 0;
    firstCard = null;
    secondCard = null;
    movesCounter.textContent = moves;
    timeCounter.textContent = formatTime(secondsElapsed);
    clearInterval(timer);
    startTimer();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createCard(emoji) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="card-content">${emoji}</div>`;
    card.addEventListener('click', () => flipCard(card));
    return card;
}

function flipCard(card) {
    if (card.classList.contains('flipped') || secondCard) return;
    card.classList.add('flipped');

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        checkMatch();
    }
}

function checkMatch() {
    moves++;
    movesCounter.textContent = moves;
    
    if (firstCard.innerHTML === secondCard.innerHTML) {
        resetTurn();
        checkWin();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
}

function checkWin() {
    if ([...cards].every(card => card.classList.contains('flipped'))) {
        clearInterval(timer);
        alert(`You won! Moves: ${moves}, Time: ${formatTime(secondsElapsed)}`);
    }
}

function startTimer() {
    timer = setInterval(() => {
        secondsElapsed++;
        timeCounter.textContent = formatTime(secondsElapsed);
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

restartButton.addEventListener('click', initializeGame);

document.addEventListener('DOMContentLoaded', initializeGame);
