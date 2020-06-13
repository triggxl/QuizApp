let questionCount = 0;
let currentScore = 0;
let currentQuestion = 0;

function displayCurrentQuestion() {
  //diplay question + answers
  $("h2").html(`${STORE.questions[questionCount].question}`);
  $("ol").empty();
  //tag element location
  $("section").html(
    `Question Number: ${questionCount + 1} Current Score: ${currentScore} `
  );

  let numberOfAnswers = STORE.questions[questionCount].answers.length;
  //setting questionCount as an array linked to length of quiz; appending li
  for (let i = 0; i < numberOfAnswers; i++) {
    console.log(STORE.questions[questionCount].answers[i]);
    $("ol").append(
      `<li> <input type="radio" id="answers" value="${STORE.questions[questionCount].answers[i]}"name="guess">
      <label for="answers"> ${STORE.questions[questionCount].answers[i]}</label></li>`
    );
  }
}
function transitionNewQuestion() {
  //plain english
  $("#submit").on("click", function () {
    let radioValue = $("input[name=guess]:checked").val();
    if (!radioValue) {
      alert("Please select a response");
      return false;
    }

    if (radioValue === STORE.questions[questionCount].correctAnswer) {
      $(".feedback").html("That is correct!");
      currentScore++;
      // console.log(currentScore, questionCount);
      $("h2, ol, header").empty();
    } else {
      $(".feedback").html("Not quite!");
      $("h2, ol, header").empty();
    }
    console.log(currentQuestion);
    let isLastQuestion =
      questionCount === STORE.questions.length - 1 ? true : false;

    // displayCurrentQuestion();
    // let <variable> = (test case) ? <value if test is true> : <value if test is false>
    if (isLastQuestion) {
      // console.log("isLastQuestion");
      // console.log(questionCount);
      // console.log(isLastQuestion);
      quizResults();
    } else {
      questionCount++;
      displayCurrentQuestion();
    }
  });
}

let questionTotal = STORE.questions.length;

function quizResults() {
  // console.log("hi");
  $(".main-container-quiz").hide();
  $(".finalFeedback").show();
  $(".finalFeedback").append(
    //Retake Quiz to display on new line. How?
    `Thanks for taking my quiz. Your score: ${currentScore} out of ${questionTotal}`
  );
  $("#endQuiz").show();
  resetQuiz();
}

function resetQuiz() {
  $("#retake").on("click", function () {
    // console.log("show first question");
    $("#endQuiz").hide();
    $("h2, ul, header, .feedback, .finalFeedback").empty();
    // console.log("emptied");
    //set counters to 0
    questionCount = 0;
    // console.log(questionCount);
    currentScore = 0;
    // console.log(currentScore);
    currentQuestion = 0;
    // console.log(currentQuestion);
    // $("#endQuiz").hide();
    $(".main-container-quiz").show();
    // $("#retake").show();
    //empty Quiz results
    //run displayCurrentQuestion
    displayCurrentQuestion();
  });
}

function startNewQuizBtn() {
  $("#endQuiz").hide();
  //start of quiz
  $("#start").on("click", () => {
    $("#quizInstructions").hide();
    $("form").show();
    displayCurrentQuestion();
  });
}

$(function () {
  startNewQuizBtn();
  transitionNewQuestion();
});
