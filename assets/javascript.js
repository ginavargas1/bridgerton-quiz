var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById ('question-container')
// var shuffledQuestions, currentQuestionIndex
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById ('answer-buttons')


 startButton.addEventListener("click", startGame) 



 function startGame() {
     console.log('Started')
     startButton.classList.add('hide')
     shuffledQuestions = questions.sort (()=> Math.random() - .5)
     currentQuestionIndex = 0
     questionContainerElement.classList.remove('hide')
     setNextQuestion()
 }

 function setNextQuestion(){
    showQuestion (shuffledQuestions[currentQuestionIndex])
 }

 function selectAnswer () {

 }

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
    }:
 
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


