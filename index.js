var readlineSync = require("readline-sync");
var chalk = require("chalk");
var error = chalk.bold.red;
var success = chalk.keyword("green");
var info = chalk.keyword("orange");

var score = 0;
var level = 0;

var highScore = [
  {
    name: "Keshav Kumar",
    score: 10,
  },
];

var questionsLevelZero = [
  {
    question: "What does HTML stand for?\n",
    options: [
      "Hypertext Machine language.",
      "Hypertext and links markup language.",
      "Hypertext Markup Language.",
      "Hightext machine language.",
    ],
    answer: "Hypertext Markup Language.",
  },
  {
    question: "How is document type initialized in HTML5?\n",
    options: [
      "</DOCTYPE HTML>",
      "</DOCTYPE>",
      "<!DOCTYPE HTML>",
      "</DOCTYPE html>",
    ],
    answer: "<!DOCTYPE HTML>",
  },
  {
    question:
      "Which of the following HTML Elements is used for making any text bold?\n",
    options: ["<p>", "<i>", "<li>", "<b>"],
    answer: "<b>",
  },
  {
    question:
      "Which of the following HTML element is used for creating an unordered list?\n",
    options: ["<ui>", "<i>", "<em>", "<ul>"],
    answer: "<ul>",
  },
  {
    question: "How many heading tags are there in HTML5?\n",
    options: ["2", "3", "5", "6"],
    answer: "6",
  },
];

var questionsLevelOne = [
  {
    question: "What is the font-size of the h1 heading tag?\n",
    options: ["3.5 em", "2.17 em", "2 em", "1.5 em"],
    answer: "2 em",
  },
  {
    question:
      "Which of the following attributes is used to add link to any element?\n",
    options: ["link", "ref", "href", "newref"],
    answer: "href",
  },
  {
    question:
      "Which of the following is the correct way of creating an hyperlink in HTML?\n",
    options: [
      `<a>keshavkumar.in <Keshav Kumar /a>`,
      `<a href="keshavkumar.in" Keshav Kumar /a>`,
      `<a href="keshavkumar.in">Keshav Kumar</a>`,
      `<a link="keshavkumar.in" Keshav Kumar> </a>`,
    ],
    answer: `<a href="keshavkumar.in">Keshav Kumar</a>`,
  },
  {
    question: "What is the purpose of using div tags in HTML?\n",
    options: [
      "For creating different styles.",
      "For creating different sections.",
      "For adding headings.",
      "For adding titles.",
    ],
    answer: "For creating different sections.",
  },
  {
    question:
      "Which of the following tags is used to add a line-break in HTML?\n",
    options: ["<br>", "<break>", "</break>", "</br>"],
    answer: "<br>",
  },
];

var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + ", to HTML Basics Quiz.");
console.log("-----------------");

function htmlQuiz(question, options, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question);
  if (userAnswer === -1) {
    console.log(error("You are exited! Thanks for playing."));
    process.exit();
  } else if (options[userAnswer].toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log(success("Correct! Your score is: " + score));
  } else {
    console.log(error("Wrong! Your score is: " + score));
  }
}

function quiz(level) {
  if (level == 0) {
    console.log(error("*** Welcome to LEVEL ZERO ***"));
    for (var i = 0; i < questionsLevelZero.length; i++) {
      var currentQuestion = questionsLevelZero[i];
      htmlQuiz(
        currentQuestion.question,
        currentQuestion.options,
        currentQuestion.answer
      );
    }
  } else if (level == 1) {
    console.log(error("*** Welcome to LEVEL ONE ***"));
    for (var i = 0; i < questionsLevelOne.length; i++) {
      var currentQuestion = questionsLevelOne[i];
      htmlQuiz(
        currentQuestion.question,
        currentQuestion.options,
        currentQuestion.answer
      );
    }
  } else {
    console.log(error("Thanks for playing. Have a good day!!"));
  }
}

quiz(level);

if (score >= 5) {
  level++;
  console.log(
    info(
      "\n\nWooHoo!! You are eligible for level one.\nContinue playing to level one.\n"
    )
  );
  quiz(level);
} else {
  console.log(
    info("Oops!! You are not eligible for level one.\nThanks for playing.")
  );
}

console.log(info("\n-------------"));
console.log(success("Your total score is: ", score));

for (var i = 0; i < highScore.length; i++) {
  var currentScore = highScore[i];
  if (score >= currentScore.score) {
    console.log(
      error(
        "\nAll levels are finished. You have beaten the highest score. \nThanks for playing."
      )
    );
    console.log(
      info(
        "\n" +
          currentScore.name +
          " was the highest scorer before you. \nPlease send me your detail I will update yours score."
      )
    );
  } else {
    console.log(error("All levels are finished. Thanks for playing!!"));
  }
}
