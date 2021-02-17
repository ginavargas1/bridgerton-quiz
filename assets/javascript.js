var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById ('results');
var submitButton = document.getElementById ('Submit');
var questions = [
    {
        question: "Who does the Daphne end up with?",
        a: "Simon Basset",
        b: "Prince Friedrich",
        c: "Will Mondrich",
        d: "Nigel Berbrooke",
        answer: "A"

    },

    {
        question: "What era does the show take place?",
        a: "Georgian era",
        b: "Regency era",
        c: "Victorian era",
        d: "Edwardian era",
        answer: "B"

    },

    {
        question: "What is Simon’s title?",
        a: "Duke of Sussex",
        b: "Duke of Windsor",
        c: "Duke of Hasting",
        d: "Duke of Norfolk",
        answer: "C"

    },

    {
        question: "What type of music is used throughout the show?",
        a: "Contemporary Pop Tunes",
        b: "Classic Mozart",
        c: "Contempary Jazz",
        d: "None of the Above",
        answer: "A"

    },


]


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinutes, display);
};


