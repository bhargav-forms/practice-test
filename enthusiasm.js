const quizData = [
  {
    question: "How do you react when given a new challenge?",
    options: ["I avoid it", "I feel nervous", "I accept it confidently", "I try to pass it to someone else"],
    answer: "I accept it confidently"
  },
  {
    question: "How often do you smile during work or study?",
    options: ["Never", "Sometimes", "Often", "Always"],
    answer: "Often"
  },
  {
    question: "What motivates you the most?",
    options: ["Fear of failure", "Rewards", "Passion", "Deadlines"],
    answer: "Passion"
  },
  {
    question: "How do you start your day?",
    options: ["With a plan", "Slowly and lazily", "With excitement", "No fixed way"],
    answer: "With excitement"
  },
  {
    question: "Do you enjoy working with others?",
    options: ["Not at all", "Sometimes", "Mostly", "Always"],
    answer: "Always"
  },
  {
    question: "How do you handle criticism?",
    options: ["I ignore it", "I feel discouraged", "I use it to improve", "I argue back"],
    answer: "I use it to improve"
  },
  {
    question: "Do you volunteer for new responsibilities?",
    options: ["Never", "Rarely", "Sometimes", "Always"],
    answer: "Always"
  },
  {
    question: "How do you behave in group activities?",
    options: ["Stay quiet", "Lead enthusiastically", "Follow others", "Avoid it"],
    answer: "Lead enthusiastically"
  },
  {
    question: "How often do you appreciate others' work?",
    options: ["Never", "Sometimes", "Often", "Always"],
    answer: "Often"
  },
  {
    question: "What’s your energy level on Monday mornings?",
    options: ["Very low", "Average", "High", "Super excited"],
    answer: "High"
  },
  {
    question: "Do you keep learning new things regularly?",
    options: ["No", "Rarely", "Sometimes", "Yes"],
    answer: "Yes"
  },
  {
    question: "What’s your reaction to failure?",
    options: ["Give up", "Feel sad", "Learn from it", "Blame others"],
    answer: "Learn from it"
  },
  {
    question: "How do you behave when helping others?",
    options: ["Grumpy", "Neutral", "Happy", "Avoid"],
    answer: "Happy"
  },
  {
    question: "Do you encourage your teammates?",
    options: ["No", "Sometimes", "Often", "Always"],
    answer: "Always"
  },
  {
    question: "How do you feel about your daily tasks?",
    options: ["Bored", "Okay", "Excited", "Frustrated"],
    answer: "Excited"
  }
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const resultContainer = document.getElementById("result");

// Load all questions
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

// Evaluate result
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

// Timer countdown
let timeLeft = 900;
const timerDisplay = document.getElementById("timer");

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  if (timeLeft <= 0) {
    submitBtn.click(); // Auto-submit
    clearInterval(timerInterval);
  }

  timeLeft--;
};

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();