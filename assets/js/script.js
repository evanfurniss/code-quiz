var questionBox = document.querySelector("#question");
var answerBox = document.querySelector("#answers");
var timer = document.querySelector("#timer");
var start = document.querySelector("#btnStart");
var secRemaining = 100;
var qIndex = 0;

start.addEventListener("click", function(){
    runningTimer();
    questionCreator();
    start.setAttribute("style", "display: none");
});

function questionCreator() {
    var qAnswers = qList[qIndex].answers;
    questionBox.textContent = qList[qIndex].question;
    answerBox.innerHTML = "";
    for (let j = 0; j < qAnswers.length; j++){
        var buttons = document.createElement("button");
        buttons.innerText = qAnswers[j];
        answerBox.append(buttons);
        buttons.addEventListener("click", checkAnswer);
    }
}

var stopTime;

function runningTimer() { stopTime = setInterval(function(){
    secRemaining--;
    timer.textContent = ("Time: " + secRemaining);
    if (secRemaining <= 0) {
        clearInterval(stopTime);
        questionBox.innerHTML = "<h2>High Scores</h2><br>";
        answerBox.innerHTML = localStorage.getItem("initials") + ": " + localStorage.getItem("score");
    }
}, 1000);
}

function checkAnswer(e){
    if (e.target.innerText === qList[qIndex].correctAnswer) {
        qIndex++;
    }
    else {
        secRemaining = secRemaining - 10;
        qIndex++;
    }

    if (qIndex == qList.length && secRemaining != 0){
        var userInit = prompt("Enter your initials");
        localStorage.setItem("initials", userInit);
        localStorage.setItem("score", secRemaining);
        clearInterval(stopTime);
        questionBox.innerHTML = "<h2>High Scores</h2><br>";
        answerBox.innerHTML = localStorage.getItem("initials") + ": " + localStorage.getItem("score");
    }
    else{
        questionCreator();
    }
}