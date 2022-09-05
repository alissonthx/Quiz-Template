const quizData = [
  {
    question: "What's the name of the Goat's sin of Lust",
    a: "Gowther",
    b: "Rasuto",
    c: "Ban",
    d: "Armor Giant",
    correct: "a",
  },
  {
    question: "What's the name of Ban's partner",
    a: "Fairy",
    b: "Rasuto",
    c: "Elaine",
    d: "Fox",
    correct: "c",
  },
  {
    question: "What's the sacred tresure of King in Seven deadly sins ",
    a: "Chastiefol",
    b: "Grizzly",
    c: "Grizzly Bear",
    d: "King Treasure",
    correct: "a",
  },
  {
    question: "What's the sacred tresure of Escanor in Seven deadly sins",
    a: "Gowther",
    b: "Rasuto",
    c: "Ritha",
    d: "Armor Giant",
    correct: "c",
  }  
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const character = document.getElementById("character");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const sound = document.getElementById("coinSound");

let currentQuiz = 0;
let score = 0;
let coins = 0;

loadQuiz();

// Function to Loadscreen
// function loadScreen(){
//   alert("Carregando tela");
// }

function character(){
  
}

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      character();
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function coinSound(){  
  sound.play();
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      // Total score questions
      score++;

      // insert 10 coins per correct answer
      coins += 10;            
      document.getElementById("coinsResult").innerHTML = + coins;
      coinSound();
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Try again?</button>`;
    }
  }
});

// Audio
const Audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

// Play audio & show pause btn
const playShow = function () {
  Audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};

// Pause audio & show play btn
const pauseShow = function () {
  Audio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};