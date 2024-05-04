import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Quiz } from "@/app/Types";

export const QuizzesData: Quiz[] = [
  {
    id: 1,
    icon: faCode,
    title: "Javascript Quiz",
    quizQuestions: [
      {
        id: 1,
        mainQuestion: "What does the typeof operator return?",
        choices: [
          { id: 1, option: "String" },
          { id: 2, option: "Number" },
          { id: 3, option: "Undefined" },
          { id: 4, option: "Object" },
        ],
        correctAnswer: 4,
        answeredResult: -1,
        statistics: {
          totalAttempts: 3,
          correctAttempts: 2,
          incorrectAttempts: 1,
        },
      },
    ],
  },
];
