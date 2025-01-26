const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const resultsContainer = document.getElementById('results');

submitButton.style.display = 'none'; // Initially hide the submit button

function loadQuestion() {
    const question = questions[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${option}
            </label>
        `).join('')}
    `;
    nextButton.disabled = true;
}

function handleOptionChange() {
    nextButton.disabled = false;
}

document.addEventListener('change', handleOptionChange);

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            quizContainer.style.display = 'none';
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block'; // Show the submit button at the end
        }
    }
});

submitButton.addEventListener('click', () => {
    resultsContainer.innerHTML = `
        <h2>Quiz Results</h2>
        <p>Your score: ${score} / ${questions.length}</p>
        <ul>
            ${questions.map((q, index) => `
                <li>
                    ${q.question} <br>
                    Correct answer: ${q.options[q.answer]}
                </li>
            `).join('')}
        </ul>
    `;
    submitButton.style.display = 'none';
});

loadQuestion();
