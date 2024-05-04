"use client";
import React from "react";
import QuizCard from "./QuizCard";
import PlaceHolder from "@/app/Components/PlaceHolder";
import useGlobalContextProvider from "../ContextApi";

function QuizzesArea(props) {
  const { allQuizzes } = useGlobalContextProvider();
  return (
    <div className="poppins mx-12 mt-10 ">
      {allQuizzes.length === 0 ? (
        <PlaceHolder></PlaceHolder>
      ) : (
        <div>
          <h2 className="text-xl font-bold"> My Quizzes</h2>
          <div className={"mt-6 flex gap-3 flex-wrap"}>
            {allQuizzes.map((quiz, index) => (
              <QuizCard key={index} quiz={quiz} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizzesArea;
