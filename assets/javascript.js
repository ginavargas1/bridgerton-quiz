var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById ('question-container');
var questionElement = document.getElementById('question');
var answerButtonElement = document.getElementById('answer-buttons');
var index = 0;
var questions = [
    {
        question: "Who does the Daphne end up with?",
        choices: ["Simon Basset", "Prince Friedrich", "Nigel Berbrook", "Prince Charles"],
        answer: "Simon Basset"

    },

    {
        question: "What era does the show take place?",
        choices: ["Georgian era", "Regency era", "Victorian era", "Edwardian era"],
        answer: "Regency era"

    },

    {
        question: "What is Simon’s title?",
        choices: ["Duke of Sussex", "Duke of Windsor", "Duke of Hasting", "Duke of Norfolk"],
        answer: "Duke of Hasting"

    },

    {
        question: "What type of music is used throughout the show?",
        choices: ["Contemporary Pop Tunes", "Classic Mozart", "Contempary Jazz", "None of the Above"],
        answer: "Contemporary Pop Tunes"
    }
];
var questionObj = questions[index];

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide')
    startTimer()
};

function setNextQuestion() {
    showQuestion (question)
}

function showQuestion(questions, container) {
    questionElement.innerText = question.question
}

function show

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(countdown)
        }
    }, 1000);
}

window.onload = function () {
    var oneMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinutes, display);
};


