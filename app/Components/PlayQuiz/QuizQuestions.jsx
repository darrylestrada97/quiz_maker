"use client"

import React from "react";
export default function QuizStartQuestions() {

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
                <button className={"p-2 px-5 text-[15px] text-white rounded-md bg-green-700 mr-[70px]"}>Submit</button>
                {/*<button className={"bg-green-700 text-white p-3 rounded-md"}>submit</button>*/}
            </div>
        </div>
    )
}