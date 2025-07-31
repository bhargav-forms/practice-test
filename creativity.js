const quizData = [
  {
    question: "What can you do with a brick besides building?",
    options: ["Throw it", "Break it", "Use as a paperweight", "Ignore it"],
    answer: "Use as a paperweight"
  },
  {
    question: "Which title best describes a book about flying cows?",
    options: ["Cow Over Moon", "Sky Milk", "Cloudy Moo", "Airborne Bovine"],
    answer: "Airborne Bovine"
  },
  {
    question: "Which shape do you imagine when thinking of 'freedom'?",
    options: ["Square", "Circle", "Spiral", "Triangle"],
    answer: "Spiral"
  },
  {
    question: "How many uses can you think of for a rubber band?",
    options: ["2", "4", "6+", "1"],
    answer: "6+"
  },
  {
    question: "What would a door say if it could talk?",
    options: ["Open up!", "Close me!", "Walk in peace", "Knock-knock"],
    answer: "Walk in peace"
  },
  {
    question: "If colors had emotions, what would yellow be?",
    options: ["Angry", "Excited", "Sad", "Calm"],
    answer: "Excited"
  },
  {
    question: "What does an upside-down world look like?",
    options: ["Scary", "Weird", "Funny", "Innovative"],
    answer: "Innovative"
  },
  {
    question: "You have 1 pen and 1 paper. What do you create?",
    options: ["A letter", "A drawing", "A story", "All of these"],
    answer: "All of these"
  },
  {
    question: "If your shadow had a life, what would it do?",
    options: ["Follow me", "Run away", "Dance", "Speak"],
    answer: "Dance"
  },
  {
    question: "Choose the odd one out:",
    options: ["Imagination", "Logic", "Creativity", "Innovation"],
    answer: "Logic"
  },
  {
    question: "If your thoughts were colors, which would dominate?",
    options: ["Red", "Green", "Blue", "Multicolor"],
    answer: "Multicolor"
  },
  {
    question: "What can be both a toy and a tool?",
    options: ["Screwdriver", "Lego", "Ball", "Hammer"],
    answer: "Lego"
  },
  {
    question: "Best way to express creativity is through:",
    options: ["Writing", "Music", "Art", "All of them"],
    answer: "All of them"
  },
  {
    question: "Imagine a tree grows upside down. What's its fruit?",
    options: ["Stars", "Leaves", "Rocks", "Imagination"],
    answer: "Stars"
  },
  {
    question: "What's more creative: invention or innovation?",
    options: ["Invention", "Innovation", "Both", "Neither"],
    answer: "Both"
  }
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const resultContainer = document.getElementById("result");

// Render questions
quizData.forEach((data, index) => {
  const questionBlock = document.createElement("div");
  questionBlock.classList.add("question-block");

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `${index + 1}. ${data.question}`;
  questionBlock.appendChild(questionTitle);

  data.options.forEach(option => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question${index}`;
    input.value = option;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    questionBlock.appendChild(label);
  });

  quizContainer.appendChild(questionBlock);
});

// Submit
submitBtn.addEventListener("click", () => {
  let score = 0;

  quizData.forEach((data, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && selected.value === data.answer) {
      score++;
    }
  });

  resultContainer.textContent = `You scored ${score} out of ${quizData.length}`;
  submitBtn.disabled = true;
});

// Timer
let timeLeft = 900;
const timerDisplay = document.getElementById("timer");

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  if (timeLeft <= 0) {
    submitBtn.click();
    clearInterval(timerInterval);
  }

  timeLeft--;
};

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();