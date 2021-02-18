var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById ('results');
var submitButton = document.getElementById ('submit');
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
        choices: ["Contemporary Pop Tunes", "Classic Mozart", "Contempary Jazz", "None of the Above"],
        answer: "Contemporary Pop Tunes"

    };
 
    var index = 0;
    var questionObj = questions[index];

    for(var = 0; i<questions[index].choicese.length; i++) {
        var choicesElements =document.createElement('li')
        choicesElements.setAttribute("class", "choices")
        choicesElements.textContent = questionsObj.choices[i]
        document.body.appendChild(choicesElements);
    };

    document.body.addEventListener("click", function(event)) {
        if (event.target)
    }
    
    // add questionElements to html 

    questionElement.textContent = questions[index]

]

// Countdown timer completed
function get(x) {
    return document.getElementById(x);
}


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


