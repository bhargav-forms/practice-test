const questions = [
  {
    question: "Which of the following is a punctuation mark?",
    options: ["Apple", "Comma", "Google", "Excel"],
    answer: "Comma"
  },
  {
    question: "Find the incorrect spelling.",
    options: ["Accomodate", "Achieve", "Separate", "Definitely"],
    answer: "Accomodate"
  },
  {
    question: "Which number is odd one out: 2, 4, 6, 8, 9?",
    options: ["2", "4", "6", "8", "9"],
    answer: "9"
  },
  {
    question: "Which of the following is used to check grammar in MS Word?",
    options: ["Spell check", "WordArt", "Table", "Header"],
    answer: "Spell check"
  },
  {
    question: "Which of these is not a primary color?",
    options: ["Red", "Blue", "Yellow", "Green"],
    answer: "Green"
  },
  {
    question: "Which direction is opposite to North-East?",
    options: ["South-West", "South-East", "North-West", "West"],
    answer: "South-West"
  },
  {
    question: "Which shape has 5 sides?",
    options: ["Triangle", "Square", "Pentagon", "Hexagon"],
    answer: "Pentagon"
  },
  {
    question: "Which of these is not a fruit?",
    options: ["Apple", "Banana", "Potato", "Orange"],
    answer: "Potato"
  },
  {
    question: "Find the odd word: Car, Bus, Bike, Apple",
    options: ["Car", "Bus", "Bike", "Apple"],
    answer: "Apple"
  },
  {
    question: "Select the smallest value: 0.3, 0.03, 0.003, 0.0003",
    options: ["0.3", "0.03", "0.003", "0.0003"],
    answer: "0.0003"
  },
  {
    question: "What is 1000 - 99?",
    options: ["901", "909", "991", "999"],
    answer: "901"
  },
  {
    question: "How many legs does a spider have?",
    options: ["4", "6", "8", "10"],
    answer: "8"
  },
  {
    question: "Which of the following is not a vowel?",
    options: ["A", "E", "I", "G"],
    answer: "G"
  },
  {
    question: "Which item is used to erase pencil marks?",
    options: ["Sharpener", "Marker", "Eraser", "Compass"],
    answer: "Eraser"
  },
  {
    question: "Which one is a search engine?",
    options: ["Chrome", "Google", "YouTube", "Word"],
    answer: "Google"
  }
];

const quizForm = document.getElementById("quizForm");
const questionList = document.getElementById("questionList");
const resultBox = document.getElementById("result");

// Timer
let timeLeft = 15 * 60;
const timerDisplay = document.getElementById("timer");
const timer = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  if (timeLeft <= 0) {
    clearInterval(timer);
    quizForm.requestSubmit(); // Auto-submit
  }
  timeLeft--;
}, 1000);

// Display questions
questions.forEach((q, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="question">${index + 1}. ${q.question}</div>
    <div class="options">
      ${q.options.map(opt => `
        <label>
          <input type="radio" name="q${index}" value="${opt}" required />
          ${opt}
        </label>`).join("")}
    </div>
  `;
  questionList.appendChild(li);
});

// Evaluate
quizForm.addEventListener("submit", function(e) {
  e.preventDefault();
  clearInterval(timer);

  let score = 0;
  questions.forEach((q, i) => {
    const selected = quizForm[`q${i}`].value;
    if (selected === q.answer) score++;
  });

  resultBox.textContent = `Your Score: ${score} / ${questions.length}`;
});