"use client";
import { faCode, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useGlobalContextProvider from "@/app/ContextApi";

function Page(props) {

    const { allQuizzes } = useGlobalContextProvider();
    console.log(allQuizzes);
    return (
        <div className="poppins flex flex-col px-24 mt-[35px]">
            <QuizStartHeader />
            <div className={"mt-10 flex items-center justify-center"}>
                <QuizStartQuestions />
            </div>
        </div>
    )
}

export default Page;

function QuizStartHeader() {
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
                <h2 className={"font-bold text-xl text-green-800"}>Javascript Quiz</h2>
                <p className={"text-green-700"}>10 Questions</p>
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

function QuizStartQuestions() {
    return (
        <div className={"poppins rounded-sm m-9 w-9/12"}>
            <div className={"flex justify-center items-center gap-2"}>
                <div className={"bg-green-700 flex justify-center items-center rounded-md w-11 h-11 text-white p-3"}>
                    1
                </div>
                <p>
                    What does the typeof operator return?
                </p>
            </div>
            <div className={"mt-7 flex flex-col gap-2"}>
                <div className={"p-3 ml-11 w-10/12 border border-green-700 rounded-md bg-green-700 text-white"}>
                    A: string
                </div>
                <div className={"p-3 ml-11 w-10/12 border border-green-700 rounded-md"}>
                    B: number
                </div>
                <div className={"p-3 ml-11 w-10/12 border border-green-700 rounded-md"}>
                    C: object
                </div>
                <div className={"p-3 ml-11 w-10/12 border border-green-700 rounded-md"}>
                    D: boolean
                </div>
            </div>
            <div className={"flex justify-end mt-7 "}>
                <buttom className={"p-2 px-5 text-[15px] text-white rounded-md bg-green-700 mr-[70px]"}>Submit</buttom>
                {/*<button className={"bg-green-700 text-white p-3 rounded-md"}>submit</button>*/}
            </div>
        </div>
    )
}