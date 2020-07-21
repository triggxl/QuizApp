let questionCount = 0;
let currentScore = 0;
let currentQuestion = 0;

function displayCurrentQuestion() {
  //diplay question and answers
  $("h2").html(`${STORE.questions[questionCount].question}`);
  $("ol").empty();
  $("section").html(
    `Question Number: ${questionCount + 1} Current Score: ${currentScore} `
  );

  let numberOfAnswers = STORE.questions[questionCount].answers.length;
  for (let i = 0; i < numberOfAnswers; i++) {
    $("ol").append(
      `<li> <input type="radio" id="answers" value="${STORE.questions[questionCount].answers[i]}"name="guess">
      <label for="answers"> ${STORE.questions[questionCount].answers[i]}</label></li>`
    );
  }
}
function transitionNewQuestion() {
  $("#submit").on("click", function () {
    let radioValue = $("input[name=guess]:checked").val();
    if (!radioValue) {
      alert("Please select a response");
      return false;
    }

    let correctAnswerIndex = STORE.questions[questionCount].correctAnswer;
    let correctAnswer =
      STORE.questions[questionCount].answers[correctAnswerIndex];

    if (radioValue === correctAnswer) {
      $(".feedback").html("That is correct!");
      currentScore++;
      $("h2, ol, header").empty();
    } else {
      $(".feedback").html(`Not quite! The correct answer is: ${correctAnswer}`);
      $("h2, ol, header").empty();
    }
    let isLastQuestion =
      questionCount === questionTotal - 1 ? true : false;

    if (isLastQuestion) {
      quizResults();
    } else {
      questionCount++;
      displayCurrentQuestion();
    }
  });
}

let questionTotal = STORE.questions.length;

function quizResults() {
  $(".main-container-quiz").hide();
  $(".finalFeedback").show();
  $(".finalFeedback").append(
    `Thanks for taking my quiz! Your score: ${currentScore} out of ${questionTotal}`
  );
  $("#endQuiz").show();
  resetQuiz();
}

function resetQuiz() {
  $("#retake").on("click", function () {
    $("#endQuiz").hide();
    $("h2, ul, header, .feedback, .finalFeedback").empty();
    questionCount = 0;
    currentScore = 0;
    currentQuestion = 0;
    $(".main-container-quiz").show();
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
