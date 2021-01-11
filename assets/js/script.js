var questionBox = document.querySelector("#question");
var answerBox = document.querySelector("#answers");
var timer = document.querySelector("#timer");
var start = document.querySelector("#btnStart");
var secRemaining = 30;
var qIndex = 0;
var stopTime;

questionBox.textContent = "Halo: Combat Evolved Quiz"
answerBox.textContent = "Click start to begin"

start.addEventListener("click", function(){
    runningTimer();
    questionCreator();
    start.setAttribute("style", "display: none");
});

function runningTimer() { stopTime = setInterval(function(){
    secRemaining--;
    timer.textContent = ("Time: " + secRemaining);
    if (secRemaining <= 0) {
        clearInterval(stopTime);
        questionBox.textContent = "High Scores";
        answerBox.innerHTML = localStorage.getItem("initials") + ": " + localStorage.getItem("score");
    }
}, 1000);
}

function questionCreator() {
    var qAnswers = qList[qIndex].answers;
    questionBox.textContent = qList[qIndex].question;
    answerBox.innerHTML = "";
    for (let i = 0; i < qAnswers.length; i++){
        var buttons = document.createElement("button");
        buttons.innerText = qAnswers[i];
        answerBox.append(buttons);
        buttons.addEventListener("click", checkAnswer);
    }
}

function checkAnswer(e){
    if (e.target.innerText === qList[qIndex].correctAnswer) {
        qIndex++;
    }
    else {
        secRemaining = secRemaining - 5;
        qIndex++;
    }

    if (qIndex == qList.length && secRemaining != 0){
        clearInterval(stopTime);
        endOfGame();
    }
    else{
        questionCreator();
    }
}

function endOfGame() {
    var userInit = document.createElement("input");
    var submit = document.createElement("button");
    questionBox.textContent = "New Score"
    submit.textContent = "Submit";
    answerBox.innerHTML = "Please enter your initials" + "<br>";
    answerBox.append(userInit);
    answerBox.append(submit);
    submit.addEventListener("click", showHighscore);
}

function showHighscore() {
    console.log("Hello World");
    // var highscoreObj = {
    //     name: userInit.value,
    //     score: secRemaining
    // }
    // highscoreObj = 
}