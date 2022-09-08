const container = document.getElementById("container");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const sound = document.getElementById("coinSound");

let currentQuiz = 0;
let score = 0;
let coins = 0;

loadQuizWithAnimation();

function loadQuizWithAnimation() {  
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  container.classList.add("quiz-animation");

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  setTimeout(() => {
    container.classList.remove("quiz-animation");
  }, 500);
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  resetAswers();
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
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
      document.getElementById("coinsResult").innerHTML = +coins;
      coinSound();
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuizWithAnimation();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Try again?</button>`;
    }
  }
});

// Animation ==================================================
answerEls.forEach(el => {
  el.addEventListener('change', () => {
      resetAswers();
      const img = el.parentElement.querySelector('img');
      img.classList.remove('hidden');
  });
});

function resetAswers(selector) {
  document.querySelectorAll('#quiz img').forEach(img => img.classList.add('hidden'));
}