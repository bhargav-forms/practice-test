const form = document.getElementById("testForm");
const resultDiv = document.getElementById("result");
const timerDisplay = document.getElementById("timer");

let timeLeft = 15 * 60; // 15 minutes in seconds

function startTimer() {
  const timer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      form.requestSubmit(); // Auto-submit the form
    }
  }, 1000);
}

startTimer();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;

  const answers = {
    q1: "C",
    q2: "B",
    q3: "A",
    q4: "C",
    q5: "B",
    q6: "D",
    q7: "C",
    q8: "B",
    q9: "A",
    q10: "D",
    q11: "C",
    q12: "B",
    q13: "A",
    q14: "D",
    q15: "C"
  };

  for (let key in answers) {
    const selected = form[key]?.value;
    if (selected === answers[key]) {
      score++;
    }
  }

  form.classList.add("hidden");
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = `Your Score: ${score} / ${Object.keys(answers).length}`;
});