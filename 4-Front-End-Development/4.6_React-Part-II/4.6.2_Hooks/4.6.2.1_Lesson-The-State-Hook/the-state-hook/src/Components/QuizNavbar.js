import React, { useState } from "react";

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers
  const goBack = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
    toggleVisibility();
  };
  const goToNext = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    toggleVisibility();
  };
  const revealAnswer = (e) => {
    const btn = e.target;
    btn.style.visibility = "hidden";
    const answerField = document.getElementById("correct-answer");
    answerField.style.visibility = "visible";
    // console.log(btn);
    // console.log(answerField);
  };

  const toggleVisibility = () => {
    const btn = document.querySelector(".reveal-btn");
    // console.log(btn ? btn : "not found");
    btn.style.visibility = "visible";
    const answerField = document.getElementById("correct-answer");
    answerField.style.visibility = "hidden";
    // console.log(answerField);
  };

  // determine if on the first question or not

  const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <h1>5/9 Set From Previous State</h1>
      <div>
        <span>Question #{questionIndex + 1}</span>
        <p>{questions[questionIndex].prompt}</p>
      </div>
      <div>
        <span id="correct-answer">
          The correct answer is : {questions[questionIndex].answer}
        </span>
        <button className="picker-btn reveal-btn" onClick={revealAnswer}>
          Reveal Answer!
        </button>
      </div>
      <div>
        <button
          className="picker-btn"
          onClick={goBack}
          disabled={onFirstQuestion}
        >
          Go Back
        </button>
        <button
          className="picker-btn"
          onClick={goToNext}
          disabled={onLastQuestion}
        >
          Next Question
        </button>
      </div>
    </nav>
  );
}
