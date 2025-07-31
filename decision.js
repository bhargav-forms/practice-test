const questions = [
  {
    question: "You're assigned to lead a new project but your team is overworked. What do you do?",
    options: [
      "Take on all the work yourself",
      "Refuse the project",
      "Negotiate deadlines and redistribute tasks",
      "Hire external help"
    ],
    answer: 2
  },
  {
    question: "A client gives you contradictory feedback. What's the best response?",
    options: [
      "Ignore them",
      "Ask for clarification",
      "Do what you think is best",
      "Blame someone else"
    ],
    answer: 1
  },
  {
    question: "You have two job offers—one with higher pay, one with better work-life balance. What do you choose?",
    options: [
      "Higher pay",
      "Work-life balance",
      "Neither",
      "Take both jobs"
    ],
    answer: 1
  },
  {
    question: "If a team member is underperforming, what's your first step?",
    options: [
      "Fire them",
      "Give negative feedback publicly",
      "Privately discuss and understand the cause",
      "Ignore the problem"
    ],
    answer: 2
  },
  {
    question: "You're short on time and must pick one task. How do you decide?",
    options: [
      "Pick the easiest",
      "Pick the most urgent",
      "Pick what you enjoy",
      "Skip both"
    ],
    answer: 1
  },
  // Add more up to 15 as needed
];

let currentQuestion = 0;
let score = 0;
let timer = 15 * 60;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("time");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.setAttribute("data-index", i);
    btn.onclick = () => {
      document.querySelectorAll("#options button").forEach(b => {
        b.style.backgroundColor = "#bbdefb";
      });
      btn.style.backgroundColor = "#90caf9";
      btn.classList.add("selected");
    };
    optionsEl.appendChild(btn);
  });
}

submitBtn.addEventListener("click", () => {
  const selectedBtn = document.querySelector("#options button.selected");
  if (!selectedBtn) {
    alert("Please select an option before submitting.");
    return;
  }

  const selectedIndex = parseInt(selectedBtn.getAttribute("data-index"));
  if (selectedIndex === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("question-container").style.display = "none";
  resultContainer.style.display = "block";
  scoreDisplay.textContent = score;
}

function startTimer() {
  const interval = setInterval(() => {
    if (timer <= 0) {
      clearInterval(interval);
      showResult();
      return;
    }

    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    timerDisplay.textContent = ${minutes}:${seconds < 10 ? "0" + seconds : seconds};
    timer--;
  }, 1000);
}

loadQuestion();
startTimer();