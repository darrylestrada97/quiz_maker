"use client";
import { faCode, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use, useEffect, useState } from "react";
import useGlobalContextProvider from "@/app/ContextApi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { QuizStartHeader, QuizStartQuestions } from "@/app/Components/PlayQuiz";
function Page(props) {
    const router = useRouter();
    const { allQuizzes, quizToStartObject } = useGlobalContextProvider();
    const { selectQuizToStart } = quizToStartObject;
    const [timer, setTimer] = useState(5);
    useEffect(() => {
        if (timer > 0 && selectQuizToStart === null) {
            const timerId = setTimeout(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearTimeout(timerId);
        } else if (timer === 0) {
            router.push("/");
        }
    }, [timer, selectQuizToStart, router]);
    return (

        <div className="poppins flex flex-col px-24 mt-[35px]">
            {selectQuizToStart === null ? (
                <div className="h-svh flex flex-col gap-2 items-center justify-center">
                    <Image src={"/img/placeholder.png"} alt={"404"} width={180} height={180} />
                    <h2 className="text-xl font-bold">
                        Please select a quiz to start
                    </h2>
                    <span className="font-light">
                        You will be redirected to the home page in {timer} seconds
                    </span>
                </div>
            ) : (
                <>
                    <QuizStartHeader quiz={selectQuizToStart} />
                    <div className={"mt-10 flex items-center justify-center"}>
                        <QuizStartQuestions />
                    </div>
                </>
            )}
        </div>
    )
}

export default Page;


