"use client";
import Navbar from "@/app/Components/Navbar";
import QuizzesArea from "@/app/Components/QuizzesArea";
import useGlobalContextProvider from "./ContextApi";
import { useEffect } from "react";

export default function Home() {
  const { quizToStartObject } = useGlobalContextProvider();
  const { setSelectQuizToStart } = quizToStartObject;
  useEffect(() => {
    setSelectQuizToStart(null);
  }, []);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <QuizzesArea />
    </div>
  );
}
