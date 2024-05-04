"use client"
import React from "react";
import { faCode, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function QuizStartHeader({ quiz }) {
    return (<div className={"flex justify-between"}>
        <div className={"flex gap-1 justify-center "}>
            <div className={"bg-green-700 w-12 h-12 flex items-center justify-center p-2 rounded-md m-2"}>
                <FontAwesomeIcon
                    icon={faCode}
                    width={20}
                    height={20}
                    className={"text-white"}
                />
            </div>
            <div className={"flex flex-col gap-0.5 p-1"}>
                <h2 className={"font-bold text-xl text-green-800"}>{quiz.title}</h2>
                <p className={"text-green-700"}>{quiz.quizQuestions.length} Questions</p>
            </div>
        </div>
        <div className={"flex gap-2 items-center"}>
            <FontAwesomeIcon
                icon={faStopwatch}
                width={20}
                height={20}
                className={"text-green-700"}
            />
            <span className={"text-green-700"}>00:00:00</span>
        </div>
    </div>);
}
