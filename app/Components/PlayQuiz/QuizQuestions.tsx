"use client";

import useGlobalContextProvider from "@/app/ContextApi";
import { useState } from "react";
import React from "react";
import { QuizQuestion } from "@/app/Types";
export default function QuizStartQuestions() {
  const { quizToStartObject } = useGlobalContextProvider();
  const { selectQuizToStart } = quizToStartObject;

  const { quizQuestions } = selectQuizToStart;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let currentQuestion: QuizQuestion = quizQuestions[currentQuestionIndex];
  function moveToNextQuestion() {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  return (
    <div className={"poppins rounded-sm m-9 w-9/12"}>
      <div className={"flex justify-center items-center gap-2"}>
        <div
          className={
            "bg-green-700 flex justify-center items-center rounded-md w-11 h-11 text-white p-3"
          }
        >
          1
        </div>
        <p>{currentQuestion.mainQuestion}</p>
      </div>
      <div className={"mt-7 flex flex-col gap-2"}>
        {currentQuestion.choices.map((choice) => (
          <label
            onClick={() => {
              //when user clicks on the row, the radio button should be checked
              //and the choice id should be set to the current question's answered result
            }}
            key={choice.id}
            className={
              "flex justify-between items-center p-3 bg-gray-200 rounded-md"
            }
          >
            <p>{choice.option}</p>
            <input
              type="radio"
              name={"option"}
              className={"mr-2"}
              value={choice.id}
            />
          </label>
        ))}
      </div>
      <div className={"flex justify-end mt-7 "}>
        <button
          className={"p-2 px-5 text-[15px] text-white rounded-md bg-green-700 "}
        >
          Submit
        </button>
        {/*<button className={"bg-green-700 text-white p-3 rounded-md"}>submit</button>*/}
      </div>
    </div>
  );
}
