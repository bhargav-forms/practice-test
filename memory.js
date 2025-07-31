const questions = [
  {
    question: "What was the color of the car you saw at the start?",
    options: ["Red", "Blue", "Green", "Black"],
    answer: "Black"
  },
  {
    question: "How many digits were shown in the sequence?",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "What shape was shown before the circle?",
    options: ["Square", "Triangle", "Star", "Rectangle"],
    answer: "Triangle"
  },
  {
    question: "Which number appeared twice?",
    options: ["7", "3", "9", "2"],
    answer: "7"
  },
  {
    question: "What was the color of the balloon?",
    options: ["Pink", "Blue", "Yellow", "Orange"],
    answer: "Yellow"
  },
  {
    question: "Which fruit was displayed for 3 seconds?",
    options: ["Apple", "Banana", "Grapes", "Orange"],
    answer: "Banana"
  },
  {
    question: "Which symbol appeared last?",
    options: ["@", "#", "$", "%"],
    answer: "%"
  },
  {
    question: "What was the background color of the second image?",
    options: ["White", "Green", "Red", "Blue"],
    answer: "Red"
  },
  {
    question: "How many animals did you see?",
    options: ["2", "3", "4", "5"],
    answer: "3"
  },
  {
    question: "Which letter was repeated?",
    options: ["A", "B", "C", "D"],
    answer: "C"
  },
  {
    question: "Which sound played twice?",
    options: ["Bell", "Clap", "Whistle", "Drum"],
    answer: "Whistle"
  },
  {
    question: "What was the first object shown?",
    options: ["Clock", "Pen", "Ball", "Shoe"],
    answer: "Clock"
  },
  {
    question: "What word was written in red?",
    options: ["Focus", "Memory", "Think", "React"],
    answer: "Memory"
  },
  {
    question: "How many people were in the image?",
    options: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    question: "What did the sign say?",
    options: ["Stop", "Go", "Wait", "Turn"],
    answer: "Stop"
  }
];

const questionContainer = document.getElementById("question-container");
const form = document.getElementById("quiz-form");
const resultBox = document.getElementById("result");

// Render all questions
questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question");

  const qText = document.createElement("p");
  qText.innerHTML = `<strong>Q${index + 1}:</strong> ${q.question}`;
  div.appendChild(qText);

  q.options.forEach(option => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="q${index}" value="${option}" />
      ${option}
    `;
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
  });

  questionContainer.appendChild(div);
});

// Submit & Show Result
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  resultBox.innerHTML = `<h3>Your Score: ${score} / ${questions.length}</h3>`;
});

// Timer
let minutes = 15;
let seconds = 0;
const timerEl = document.getElementById("timer");

const timer = setInterval(() => {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      form.requestSubmit();
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  let minStr = minutes.toString().padStart(2, "0");
  let secStr = seconds.toString().padStart(2, "0");
  timerEl.textContent = `Time Left: ${minStr}:${secStr}`;
}, 1000);