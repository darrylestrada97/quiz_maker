"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  faBullseye,
  faCircleCheck,
  faCode,
  faEllipsis,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Quiz } from "../Types";
import useGlobalContextProvider from "../ContextApi";

function successRate(quiz: Quiz) {
  let correctQuestions = 0;
  let totalAttempts = 0;

  quiz.quizQuestions.forEach((question) => {
    correctQuestions += question.statistics.correctAttempts;
    totalAttempts += question.statistics.totalAttempts;
  });

  //round number to 2 decimal places

  let successRate = ((correctQuestions / totalAttempts) * 100).toFixed(0);
  return successRate === "NaN" ? 0 : successRate;
}

function QuizCard({ quiz }: any) {
  const { quizToStartObject } = useGlobalContextProvider();
  const { setSelectQuizToStart } = quizToStartObject;
  const { title, quizQuestions, icon } = quiz;
  const totalQuestions = quizQuestions.length;
  const globalSuccessRate = successRate(quiz);
  return (
    <div className="rounded-[10px] flex flex-col gap-2 border bg-amber-300 bg-white p-4">
      <div className="relative bg-green-700 w-full h-32 flex justify-center items-center rounded-md">
        <div className="absolute cursor-pointer top-3 right-3">
          <FontAwesomeIcon
            className="text-white"
            icon={faEllipsis}
            width={13}
            height={13}
          />
        </div>
        <FontAwesomeIcon
          icon={faCode}
          width={80}
          height={80}
          className="text-white"
        />
      </div>
      <h3 className="text-xl font-bold"> {title} </h3>
      <p className="text-sm font-light">{totalQuestions} question(s)</p>
      <div className="flex gap-3">
        <div className="flex gap-1 items-center">
          {/**Icon for success rate*/}
          <FontAwesomeIcon
            icon={faBullseye}
            width={20}
            height={20}
            className="text-green-500"
          />
          <span className={"text-[12px]"}>
            Success rate: {globalSuccessRate}%
          </span>
        </div>
        <div
          onClick={() => {
            setSelectQuizToStart(quiz);
          }}
          className={
            "rounded-full w-7 h-7 bg-green-700 flex justify-center items-center cursor-pointer"
          }
        >
          <Link href="/play-quiz">
            <FontAwesomeIcon
              icon={faPlay}
              className={"text-white"}
              width={15}
              height={15}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
