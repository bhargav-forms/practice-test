const questions = [
  {
    question: "Which of the following words is spelled correctly?",
    options: ["Recieve", "Receive", "Recive", "Receeve"],
    answer: "Receive"
  },
  {
    question: "Spot the difference: ABCD1234 vs ABCD1243",
    options: ["Same", "Different"],
    answer: "Different"
  },
  {
    question: "Which number is missing in the sequence: 2, 4, 6, __, 10",
    options: ["7", "8", "9", "5"],
    answer: "8"
  },
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "He don't like it.",
      "He doesn't like it.",
      "He not like it.",
      "He isn't like it."
    ],
    answer: "He doesn't like it."
  },
  {
    question: "Find the matching pair: (A, 1), (B, 2), (C, ?)",
    options: ["2", "3", "4", "D"],
    answer: "3"
  },
  {
    question: "Which of these is a palindrome?",
    options: ["Level", "Stone", "Paper", "Flower"],
    answer: "Level"
  },
  {
    question: "Find the odd one out: Apple, Orange, Banana, Carrot",
    options: ["Apple", "Orange", "Banana", "Carrot"],
    answer: "Carrot"
  },
  {
    question: "Choose the correct number: 5 + 3 x 2",
    options: ["11", "16", "13", "10"],
    answer: "11"
  },
  {
    question: "Which of the following is a prime number?",
    options: ["4", "6", "9", "7"],
    answer: "7"
  },
  {
    question: "Which is different: Cat, Dog, Cow, Tomato",
    options: ["Cat", "Dog", "Cow", "Tomato"],
    answer: "Tomato"
  },
  {
    question: "Which color is NOT a primary color?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Green"
  },
  {
    question: "What day comes after Wednesday?",
    options: ["Monday", "Thursday", "Saturday", "Sunday"],
    answer: "Thursday"
  },
  {
    question: "Choose the correctly spelled word.",
    options: ["Definately", "Definitely", "Defanitely", "Definetly"],
    answer: "Definitely"
  },
  {
    question: "Which letter comes after M in the alphabet?",
    options: ["N", "L", "O", "K"],
    answer: "N"
  },
  {
    question: "Find the result: 12 / 4 + 3",
    options: ["6", "9", "5", "7"],
    answer: "6"
  }
];

function loadQuestions() {
  const container = document.getElementById("questions-container");

  questions.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.classList.add("question-block");

    const qTitle = document.createElement("h3");
    qTitle.textContent = `Q${index + 1}. ${q.question}`;
    qDiv.appendChild(qTitle);

    q.options.forEach(opt => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="q${index}" value="${opt}"> ${opt}
      `;
      qDiv.appendChild(label);
    });

    container.appendChild(qDiv);
  });
}

function startTimer() {
  let timeLeft = 15 * 60; // 15 minutes
  const timerDisplay = document.getElementById("timer");

  const timer = setInterval(() => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerDisplay.textContent = `Time Left: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      document.getElementById("quiz-form").dispatchEvent(new Event("submit"));
    }
  }, 1000);
}

document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  document.getElementById("quiz-form").style.display = "none";
  document.getElementById("result").textContent = `You scored ${score} out of ${questions.length}`;
});

window.onload = () => {
  loadQuestions();
  startTimer();
};