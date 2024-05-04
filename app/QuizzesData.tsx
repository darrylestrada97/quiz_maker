import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Quiz } from "@/app/Types";

export const quizzesData: Quiz[] = [
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
  {
    id: 2,
    icon: faCode,
    title: "HTML Quiz",
    quizQuestions: [
      {
        id: 1,
        mainQuestion: "What does HTML stand for?",
        choices: [
          { id: 1, option: "Hyper Text Markup Language" },
          { id: 2, option: "Hyperlinks and Text Markup Language" },
          { id: 3, option: "Home Tool Markup Language" },
          { id: 4, option: "None of the above" },
        ],
        correctAnswer: 1,
        answeredResult: -1,
        statistics: {
          totalAttempts: 0,
          correctAttempts: 0,
          incorrectAttempts: 0,
        },
      },
      {
        id: 2,
        mainQuestion:
          "What is the correct HTML element for the largest heading?",
        choices: [
          { id: 1, option: "<h1>" },
          { id: 2, option: "<heading>" },
          { id: 3, option: "<h6>" },
          { id: 4, option: "<head>" },
        ],
        correctAnswer: 1,
        answeredResult: -1,
        statistics: {
          totalAttempts: 0,
          correctAttempts: 0,
          incorrectAttempts: 0,
        },
      },
    ],
  },
  {
    id: 3,
    icon: faCode,
    title: "CSS Quiz",
    quizQuestions: [
      {
        id: 1,
        mainQuestion: "What does CSS stand for?",
        choices: [
          { id: 1, option: "Cascading Style Sheets" },
          { id: 2, option: "Computer Style Sheets" },
          { id: 3, option: "Colorful Style Sheets" },
          { id: 4, option: "Creative Style Sheets" },
        ],
        correctAnswer: 1,
        answeredResult: -1,
        statistics: {
          totalAttempts: 0,
          correctAttempts: 0,
          incorrectAttempts: 0,
        },
      },
      {
        id: 2,
        mainQuestion:
          "Which CSS property is used to change the background color?",
        choices: [
          { id: 1, option: "color" },
          { id: 2, option: "background-color" },
          { id: 3, option: "bgcolor" },
          { id: 4, option: "background" },
        ],
        correctAnswer: 2,
        answeredResult: -1,
        statistics: {
          totalAttempts: 0,
          correctAttempts: 0,
          incorrectAttempts: 0,
        },
      },
    ],
  },
  // Add more quizzes here...
  {
    id: 12,
    icon: faCode,
    title: "Python Quiz",
    quizQuestions: [
      {
        id: 1,
        mainQuestion: "What is the correct way to create a function in Python?",
        choices: [
          { id: 1, option: "function myFunction()" },
          { id: 2, option: "def myFunction()" },
          { id: 3, option: "create myFunction()" },
          { id: 4, option: "myFunction()" },
        ],
        correctAnswer: 2,
        answeredResult: -1,
        statistics: {
          totalAttempts: 10,
          correctAttempts: 2,
          incorrectAttempts: 8,
        },
      },
      {
        id: 2,
        mainQuestion: "Which operator is used for exponentiation in Python?",
        choices: [
          { id: 1, option: "^" },
          { id: 2, option: "**" },
          { id: 3, option: "*" },
          { id: 4, option: "//" },
        ],
        correctAnswer: 2,
        answeredResult: -1,
        statistics: {
          totalAttempts: 10,
          correctAttempts: 5,
          incorrectAttempts: 5,
        },
      },
    ],
  },
  // Add more quizzes here...
];
