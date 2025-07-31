
const questions = [
  {
    question: "What comes next in the sequence?",
    image: "https://i.imgur.com/KDsnWqD.png",
    options: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    question: "Which shape completes the pattern?",
    image: "https://i.imgur.com/N8mu8d7.png",
    options: ["1", "2", "3", "4"],
    correct: "3"
  },
  {
    question: "Which figure comes next?",
    image: "https://i.imgur.com/q1Mb2Xu.png",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    question: "Identify the missing figure.",
    image: "https://i.imgur.com/t5NHl6b.png",
    options: ["A", "B", "C", "D"],
    correct: "A"
  },
  {
    question: "What is the correct next step in the matrix?",
    image: "https://i.imgur.com/Zv8nF0g.png",
    options: ["A", "B", "C", "D"],
    correct: "D"
  },

   {
    question: "Which figure completes the pattern?",
    image: "https://i.imgur.com/8r1hxFu.png",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    question: "What is the missing piece in the puzzle?",
    image: "https://i.imgur.com/4gtqqJh.png",
    options: ["A", "B", "C", "D"],
    correct: "D"
  },
  {
    question: "Which figure fits best?",
    image: "https://i.imgur.com/MY0AJDJ.png",
    options: ["A", "B", "C", "D"],
    correct: "A"
  },
  {
    question: "Choose the correct pattern continuation.",
    image: "https://i.imgur.com/ny2wh1V.png",
    options: ["1", "2", "3", "4"],
    correct: "4"
  },
  {
    question: "What figure completes the matrix?",
    image: "https://i.imgur.com/FaxUPVO.png",
    options: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    question: "What comes next in the sequence?",
    image: "https://i.imgur.com/HlRrqFT.png",
    options: ["A", "B", "C", "D"],
    correct: "D"
  },
  {
    question: "Select the image that logically follows.",
    image: "https://i.imgur.com/1arHZ0v.png",
    options: ["A", "B", "C", "D"],
    correct: "A"
  },
  {
    question: "Which shape completes the row?",
    image: "https://i.imgur.com/DcR3GcZ.png",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    question: "Pick the correct image to continue the pattern.",
    image: "https://i.imgur.com/ra7bXPh.png",
    options: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    question: "Find the missing element in the matrix.",
    image: "https://i.imgur.com/X8ujMnM.png",
    options: ["A", "B", "C", "D"],
    correct: "A"
  }

  // You can continue to add Q6 to Q15 below similarly
];



let timeLeft = 15 * 60;
const timerDisplay = document.getElementById("timer");
const questionsContainer = document.getElementById("questionsContainer");
const form = document.getElementById("quizForm");
const resultContainer = document.getElementById("resultContainer");

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if (timeLeft === 0) {
    form.requestSubmit();
  } else {
    timeLeft--;
    setTimeout(updateTimer, 1000);
  }
}

function renderQuestions() {
  questions.forEach((q, index) => {
    const block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = `
      <h3>Q${index + 1}. ${q.question}</h3>
      <img src="${q.image}" alt="Question ${index + 1}" />
      ${q.options.map(opt => `
        <label>
          <input type="radio" name="q${index}" value="${opt}" required />
          ${opt}
        </label><br>
      `).join("")}
    `;
    questionsContainer.appendChild(block);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  questions.forEach((q, index) => {
    const answer = form[`q${index}`].value;
    if (answer === q.correct) score++;
  });
  resultContainer.textContent = `You scored ${score} out of ${questions.length}`;
  form.style.display = "none";
  timerDisplay.style.display = "none";
});

renderQuestions();
updateTimer();