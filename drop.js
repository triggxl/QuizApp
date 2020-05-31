let questionCount = 0;
let currentScore = 0;
let currentQuestion = 0;
let correctAnswer = "";

function displayCurrentQuestion() {
  //tag element location
  $("section").html(
    `Question Number: ${questionCount + 1} Current Score: ${currentScore} `
  );
  //diplay question + answers
  $("h2").html(`${STORE.questions[questionCount].question}`);
  $("ol").empty();
  for (let i = 0; i < STORE.questions[questionCount].answers.length; i++) {
    $("ol")
      .append(`<li class="correct"> <input type="radio" id="answers" value='${STORE.questions[questionCount].answers[i]}' name="guess">
  <label for="answers${i}">${STORE.questions[questionCount].answers[i]}</label><br></li>`);
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
      $("h2, l, header").empty();
    } else {
      $(".feedback").html("Not quite!");
      $("h2, ul, header").empty();
    }
    let isLastQuestion = questionCount;
    //ternary
    // questionCount === STORE.questions.length - 1 ? true : false;
    //expanded
    // if (questionCount === STORE.question.length - 1) {
    //   isLastQuestion = true;
    // } else {
    //   isLastQuestion = false;
    // }
    if (isLastQuestion) {
      // console.log("isLastQuestion");
      // console.log(questionCount);
      quizResults();
    } else {
      questionCount++;
      displayCurrentQuestion();
    }
  });
}

function quizResults() {
  // console.log("hi");
  let totalScore = `${currentScore} out of ${STORE.questions.length}`;
  $(".main-container-quiz").hide();
  $(".finalFeedback").show();
  $(".finalFeedback").append(
    //Retake Quiz to display on new line. How?
    `Thanks for taking my quiz. Your score: ${totalScore}!`
  );
  $(".retakeQuiz").append("Retake Quiz?");
  $("#endQuiz").show();
  resetQuiz();
}

function resetQuiz() {
  $("#retake").on("click", function () {
    // console.log("show first question");
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
    //empty Quizresults
    //run displayCurrentQuestion
    displayCurrentQuestion();
  });
}

function startNewQuizBtn() {
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
