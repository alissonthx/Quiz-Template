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
const modal_container_i = document.getElementById("modal_container_i");
const modal_container_c = document.getElementById("modal_container_c");
const close_c = document.getElementById("close_c");
const close_i = document.getElementById("close_i");

let currentQuiz = 0;
let score = 0;
let coins = 0;

loadQuiz();

function loadScreen() {
  container.style.display = "block";
  container.classList.add("quiz-animation");

  setTimeout(() => {
    container.classList.remove("quiz-animation");
    container.style.display = "none";
  }, 1200);
}

function loadQuiz(delayToChangeQuestion) {
  container.style.display = "none";
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  setTimeout(() => {
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }, delayToChangeQuestion);
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

function resetAswers(selector) {
  document
    .querySelectorAll("#quiz img")
    .forEach((img) => img.classList.add("hidden"));
}

function restart(){
  container.style.display = "block";
  container.classList.add("end-animation");
  setTimeout(() => {
  window.location.reload();  
  }, 600);
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
      modal_container_c.classList.add("show");
    } else if (answer !== quizData[currentQuiz].correct) {
      modal_container_i.classList.add("show");
    }
    currentQuiz++;
    if(currentQuiz < quizData.length) {      
    } else {
      setTimeout(() => {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button class="quiz-button" onclick="restart()">Try again?</button>`;
      }, 1200);
    }    
  }
});

close_c.addEventListener("click", () => {
  modal_container_c.classList.remove("show");
  loadQuiz(500); 
  loadScreen();
});

close_i.addEventListener("click", () => {
  modal_container_i.classList.remove("show"); 
  loadQuiz(500);
  loadScreen();
});

// Animation ==================================================
answerEls.forEach((el) => {
  el.addEventListener("change", () => {
    resetAswers();
    const img = el.parentElement.querySelector("img");
    img.classList.remove("hidden");
  });
});