import React from "react";
import QuizCard from "./QuizCard";


function QuizzesArea(props){
    return (
        <div className="poppins mx-12 mt-10">
            <h2 className="text-xl font-bold"> My Quizzes</h2>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
        </div>
    );
}

export default QuizzesArea;