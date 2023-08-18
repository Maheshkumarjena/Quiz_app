const questions = [
  {
    question: "Which is the largest living animal on Planet Earth ?",
    answers: [
      { text: "shark", correct: false },
      { text: "elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "anaconda", correct: false },
    ],
  },


  {
    question: "What is the symbol for the chemical element oxygen?",
    answers: [
      { text: "O", correct: true },
      { text: "Oi", correct: false },
      { text: "Xy", correct: false },
      { text: "Om", correct: false },
    ],
  },

  {
    question: "What is the capital city of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Bangkok", correct: false },
    ],
  },

  {
    question: "Which gas do plants use for photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false },
    ],
  },

  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
    ],
  },

  {
    question: "What is the largest type of big cat in the world?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Tiger", correct: true },
      { text: "Leopard", correct: false },
      { text: "Cheetah", correct: false },
    ],
  },

  {
    question: "Which gas is necessary for respiration in humans?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false },
    ],
  },

  {
    question: "What is the process by which plants make their own food using sunlight?",
    answers: [
      { text: "Respiration", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Transpiration", correct: false },
      { text: "Fermentation", correct: false },
    ],
  },


  {
    question:
      "Which famous scientist developed the theory of general relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
  },

  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Gd", correct: false },
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Go", correct: false },
    ],
  },

  {
    question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
    answers: [
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },

  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
    ],
  },

  {
    question: "What gas do plants give off during photosynthesis?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },

  {
    question: 'Which animal is known as the "King of the Jungle"?',
    answers: [
      { text: "Tiger", correct: false },
      { text: "Lion", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "Wo", correct: false },
      { text: "H2O", correct: true },
      { text: "Wa", correct: false },
      { text: "Hy", correct: false },
    ],
  },


  {
    question: "What is the largest moon in our solar system?",
    answers: [
      { text: "Europa", correct: false },
      { text: "Ganymede", correct: true },
      { text: "Titan", correct: false },
      { text: "Luna", correct: false },
    ],
  },

  {
    question:
      "What is the process by which plants make their own food using sunlight?",
    answers: [
      { text: "Respiration", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Transpiration", correct: false },
      { text: "Fermentation", correct: false },
    ],
  },

  {
    question: 'Which planet is known as the "Red Planet"?',
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: false },
    ],
  },

  {
    question: "What is the symbol for the chemical element oxygen?",
    answers: [
      { text: "O", correct: true },
      { text: "Oi", correct: false },
      { text: "Xy", correct: false },
      { text: "Om", correct: false },
    ],
  },

  {
    question: "Which gas is most abundant in Earths atmosphere?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Argon", correct: false },
    ],
  },
];

// Select HTML elements with the class names "question" and "btn"
const questionElement = document.getElementsByClassName("question");
const answerButton = document.getElementsByClassName("btn");

let answerChecked = false;
let currentQuestionIndex = 0;
let score = 0;

// Function to initialize and display the current question and answer options
let startQuiz = () => {
  let currentQuestion = questions[currentQuestionIndex];
  questionElement[0].innerHTML = currentQuestion.question;
  answerButton[0].innerHTML = currentQuestion.answers[0].text;
  answerButton[1].innerHTML = currentQuestion.answers[1].text;
  answerButton[2].innerHTML = currentQuestion.answers[2].text;
  answerButton[3].innerHTML = currentQuestion.answers[3].text;

  // Reset answer buttons to their default state
  for (let i = 0; i < 4; i++) {
    answerButton[i].classList.remove("correct");
    answerButton[i].classList.remove("incorrect");
  }
};

// Function to check the selected answer and update the score and UI

function checkAnswer(e) {
  let currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion.answers[e];
  if (selectedAnswer.correct) {
    answerButton[e].classList.add("correct");
    score++;
  } else {
    answerButton[e].classList.add("incorrect");
    for (let i = 0; i < currentQuestion.answers.length; i++) {
      if (currentQuestion.answers[i].correct) {
        setTimeout(() => {
          answerButton[i].classList.add("correct");
        }, 200);
      }
    }
  }

  // Disable all answer buttons after an answer is selected
  for (let i = 0; i < 4; i++) {
    answerButton[i].disabled = true;
  }
  currentQuestionIndex++;
  answerChecked = true;
}

// Select the "Next" button and add an event listener to proceed to the next question
const nextButton = document.getElementById("next");
const restartButton = document.getElementById("Restart");
const playAgainButton = document.getElementById("playAgain");
const scoreButton = document.getElementsByClassName("score");
let inst=document.getElementsByClassName("instruction")
inst=inst[0];
let quiz = document.getElementsByClassName("quiz");


// Function to proceed to the next question
let next = () => {
  let currentQuestion = questions[currentQuestionIndex];

  for (let i = 0; i < 4; i++) {
    answerButton[i].disabled = false;
  }
  // Check if all questions have been answered
  if (currentQuestionIndex === questions.length) {
    // Update UI for end of quiz
      submitbtn.style.display="none"

    quiz[0].style.display = "none";
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    playAgainButton.style.display = "block";
    scoreButton[0].style.display = "block";
    scoreButton[0].innerHTML = `Your score is ${score} out of ${questions.length}`;
    currentQuestionIndex = 0;
    inst.style.display = "none";
  }
  if (!answerChecked) {
    // If answer not checked, increment the currentQuestionIndex
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
  }
  answerChecked = false;
  currentQuestion = questions[currentQuestionIndex];
  // Move to the next question and update UI
  startQuiz();
  console.log(currentQuestionIndex);
};

// Function to restart the quiz
let restart = () => {
  currentQuestionIndex = 0;
  startQuiz();
};

// Function to play the quiz again
let playAgain = () => {
  currentQuestionIndex = 0;
  quiz[0].style.display = "inline";
  playAgainButton.style.display = "none";
  nextButton.style.display = "block";
  restartButton.style.display = "flex";
  submitbtn.style.display = "block"
  inst.style.display = "block";

  // Reset answer buttons and enable them
  for (let i = 0; i < 4; i++) {
    answerButton[i].classList.remove("correct");
    answerButton[i].classList.remove("incorrect");
    answerButton[i].disabled = false;
  }
  score = 0;
  scoreButton[0].style.display = "none";

  // Start the quiz with the first question
  startQuiz();
};

let submitbtn=document.getElementById('submit')
console.log(submitbtn)

let submit=()=>{
  inst.style.display = "none";
  submitbtn.style.display = "none"
  quiz[0].style.display = "none";
  nextButton.style.display = "none";
  restartButton.style.display = "none";
  playAgainButton.style.display = "block";
  scoreButton[0].style.display = "block";
  scoreButton[0].innerHTML = `Your score is ${score} out of ${questions.length}`;
  currentQuestionIndex = 0;



}

// Start the quiz by displaying the first question
startQuiz();
// console.log(questions.length);
