const el = document.body;

if (el) {
  el.addEventListener("keypress", quizPage);
  el.addEventListener("click", quizPage);
}

function quizPage() {
  let loading = document.getElementById("loading");
  let loader = document.getElementById("loader");

  loading.classList.add("hidden");
  loader.classList.remove("hidden");
  loading.style.display = "none";

  setTimeout(() => {
    window.location.href = "quiz.html";
  }, 1100);
}
