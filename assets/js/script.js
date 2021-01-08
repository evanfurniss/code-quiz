// create 2 html files
    // game.html
         //qList = [{
                                //        question:"",
                                //        options:[op1,op2,op3,op4],
                                //        correctAns: op1
                                //    },
                                // {
                                    //        question:"",
                                    //        options:[op1,op2,op3,op4],
                                    //        correctAns: op1
                                    //    },
                            // ]
        //timer = 75s;
        //click event on a start btn
            //start the timer
                //if timer === 0 game over
            //start displaying questions one by one
                //create var index = 0
                //if (index < qList.length)
                    //qList[index].question
                    // for loop over qList[index].options > create html element for qList[index].options[i]
                //index++
        //click on options element
            //Find which element user clicked (eg: event.target, matches("element"))
            //capture the value on the element (eg : "data-something", "<button value=''>", event.target)
            //compare the value to the correct answer. > //qList[index].correctAns
            //if (it's correct){
                //whatever time left that is user's  score 
                //display message to the user
            // else time left - penalty 
                    //display message to the user
            //save scores with initials in local storage
            //start displaying questions one by one
              //create index var = 0
            //   if (index < qList.length)
                    //qList[index].question
                    // for loop over qList[index].options > create html element for qList[index].options[i]
    //score.html
      //capture the score form the local storage and display it to user
      //reset the local storage with 0.
var textBox = document.querySelector("#question");
var timer = document.querySelector("#timer");
var btnClick = document.querySelector(".btn");
var secRemaining = 90;

document.querySelector("#btnStart").addEventListener("click", function(e){
    e.preventDefault();

    timerFunc;
});

var timerFunc = setInterval(function(){
    secRemaining--;
    timer.textContent = ("Time: " + secRemaining);

    if (secRemaining === 0) {
        clearInterval(timerFunc);
        textBox.textContent = "Game Over :(";
    }
}, 1000);

// function writeQuestions(e) {
//     e.preventDefault();

//     for (let i = 1; i < qList.length; i++) {
//         textBox.textContent = qList.question1;
//     }
// }

// btnClick.addEventListener("click", writeQuestions);