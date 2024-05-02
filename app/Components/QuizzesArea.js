import React from "react";
import QuizCard from "./QuizCard";


function QuizzesArea(props){
    return (
        <div className="poppins mx-12 mt-10 ">
            <h2 className="text-xl font-bold"> My Quizzes</h2>
            <div className={"flex gap-3 pt-4"}>
            <QuizCard />
            <QuizCard/>
            <QuizCard/>
            </div>
        </div>
    );
}

export default QuizzesArea;