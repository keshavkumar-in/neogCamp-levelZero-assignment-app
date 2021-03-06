# neogCamp-levelZero-assignment-app
 This repository contains an advanced CLI quiz app on HTML basics topic. 
 
 In this CLI app, I have used MCQ type questions with two levels. Once the user score 5 points, they can go to next level which will have different set of questions. User will also have cancel option to exit from the quiz.

> [Click for Demo](https://replit.com/@keshavkumardev/lessonOneassignmentOne#index.js?embed=1&output=1)

---

In this repository, I have used two `npm` packages for better user experience.

### First one is `readline-sync`:

> Use `npm install readline-sync` to install

`readline-sync` is used to have a simple conversational UI in CLI applications. You can use it to ask user different types of questions and get answered. It supports many different types of question formats like YES/NO or MCQs or simple explanation questions. You can read more [here](https://www.npmjs.com/package/readline-sync).

In this app, I have used the `question()` function for asking user name and `keyInSelect()` function for the quiz questions, which takes basically two arguments. First one is an array of options and second is the question.

### Second is `chalk`:

> Use `npm install chalk` to install

`chalk` is used to stylize your CLI applications. Basic two color CLI apps is too common. We can use `chalk` to colorize our messages in the CLI app. You can read more [here](https://www.npmjs.com/package/chalk).

In this app, I have used three basic colors to show different types of messages in different colors.

---

## Steps to run this application

Step 1: First of all make sure you have nodeJs installed in your system, if not, install it first from [here](https://nodejs.org/en/download/).

Step 2: Then you need to install both the packages mentioned above.

Step 3: Finally run `node index.js` command to run the application.