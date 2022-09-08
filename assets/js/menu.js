const el = document.body;

if (el) {
  el.addEventListener("keypress", quizPage);
  el.addEventListener("click", quizPage);
}

function quizPage() {
  let loading = document.getElementById("loading");
  let loader = document.getElementById("loader");

  loading.classList.add("hidden");
  setTimeout(() => {
    loader.classList.remove("hidden");
    loading.style.display = "none";
  }, 1200);

  setTimeout(() => {
    window.location.href = "quiz.html";
  }, 2000);
}
