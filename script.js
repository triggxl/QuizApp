/* 
 
 

 ---
 4. user should know what question they're on as well as their current score;
 5. user is to receive contextual feedback upon completing question ('Yes, that is correct!' || 'Sorry, the correct answer is' + correctAnswer.question); 
 6. next quiz question should transition automatically or upon interaction of an element; 
 7. overall score should be displayed at the end of quiz; 8. user should be able to start a new quiz


 //center 'Let's go' button inside bottom portion of box
 //center question + answeres in lower half of box above button --> 'submit'
 //display radio select buttons beside each question
 //transition to next question by submitting answer
 //displaying total number of questions left and current number correct on screen throughout quiz
 //*extra* display explanation/logic behind answer before transitioning to next question

make sure to put in initialization function
use console.logs
//prompt('please select an answer to continue');
 correct answer? if correct console.log('Correct) else console.log('Wrong') --> next question
 if correct then currentScore ++

*/
let questionCount = 0;
let currentScore = 0;
let currentQuestion = 0;

function startNewQuizBtn() {
  //upon click event --> new quiz (1st question of quiz will be rendered)
  $("#start").on("click", () => {
    // console.log('startQuizBtn firing');
    displayCurrentQuestion();
  });
}

function displayCurrentQuestion() {
  // updateCurrentScore();
  $("h2").append(`${STORE.questions[questionCount].question}`);
  $("ol").empty();
  //
  for (let i = 0; i < STORE.questions[questionCount].answers.length; i++) {
    $("ol")
      .append(`<li> <input type="radio" id="answers" value=${STORE.questions[questionCount].answers[i]} name="guess">
  <label for="answers${i}">${STORE.questions[questionCount].answers[i]}</label><br>`);
  }
  //render HTML with string interpolation...use $(':checked').val() --> correct or incorrect response 'append
  //seperate button or arrows for next question
}

function updateCurrentScore() {
  //displays current score '7 out of 10' (total questions - total correct) + remaining number of questions throughout quiz '3 questions remaining'
}

function renderQuestionFeedback() {
  //prompts the user upon submission of the answer with 'correct' response === if(answer === answer.#question) {document.write('Yes, that's the correct answer!')} else{document.write(`The correct answer was ${answer.question}`)}
  //+ add rationale before transitioning to next question
}

function addRationale() {}

function transitionNewQuestion() {
  //hookup function
  $("#start").on("click", function () {
    //executing function
    // console.log('clicked');
    //get value of checked radio button
    let radioValue = $("input[name=guess]:checked").val();
    console.log(radioValue);

    if (radioValue === STORE.questions.correctAnswer) {
      alert("That's correct!");
      currentScore++;
    } else {
      alert("Not quite!");
      $("h2, ul").empty();
      questionCount++;
      displayCurrentQuestion();
    }

    // console.log("if statement");
  });
}

function viewTotalScore() {
  // let quizScore =
  //function will display final user score
  //variables 'currentUserScore', 'numberIncorrect', 'numberCorrect' may be declared and called upon in other functions
}

// function startNewQuizBtn() {
//   //upon click event --> quiz should restart as DOM is re-rendered
//   $('#start').on('click', function(e) {
//     displayCurrentQuestion();
//   });
// }

$(function () {
  // startNewQuizBtn();
  displayCurrentQuestion();
  transitionNewQuestion();
});
