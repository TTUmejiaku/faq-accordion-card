const questions = document.querySelectorAll(".single-question");

// loop through the questions
questions.forEach(function (question) {
  // listen for a click event
  question.addEventListener("click", function () {
    // if the question clicked contains show-answer, remove the show-answer
    if (question.classList.contains("show-answer")) {
      question.classList.remove("show-answer");
      // if it doesn't contain the show-answer class, loop through all questions and remove the show-answer class.
    } else {
      questions.forEach(function (question) {
        question.classList.remove("show-answer");
      });
      // then add the show-answer class to the one clicked
      question.classList.add("show-answer");
    }
  });
});
