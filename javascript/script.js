// ================== USER DATA ==================
const userData = JSON.parse(localStorage.getItem("quizUser")) || {};
const getLang = () => localStorage.getItem("lang") || "ru";

// ================== DOM ELEMENTS ==================
const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const questionStatus = document.querySelector(".question-status");
const resultContainer = document.querySelector(".result-container");
const timerDisplay = document.querySelector(".time-duration");

// ================== STATE ==================
let currentQuestion = null;
let quizCategoryKey = "mortgage"; // ключ категории
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let numberOfQuestions = 5;
let correctAnswerCount = 0;
const questionIndexHistory = [];

// ================== RESULT ==================
const showQuizResult = () => {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  const lang = getLang(); // получаем текущий язык
  const t = translations[lang]; // сокращение для удобства

  document.querySelector(".result-message").innerHTML = `
    <b>${userData.fullname || t['startTest']}</b><br>
    ${t.branch}: <b>${userData.branch || "-"}</b><br><br>
    ${t.of} <b>${correctAnswerCount}</b> ${t.questionsWord} <b>${numberOfQuestions}</b>
    ${lang === 'ru' ? 'правильно отвечено' : lang === 'en' ? 'correctly answered' : 'to‘g‘ri javob berildi'}.
  `;

  // формируем объект результата
  const result = {
    name: userData.fullname || "Неизвестный пользователь",
    branch: userData.branch || "Не указан",
    score: `${correctAnswerCount} из ${numberOfQuestions}`,
    date: new Date().toLocaleString(),
  };

  // получаем старые результаты из localStorage
  const allResults = JSON.parse(localStorage.getItem("quizResults")) || [];
  allResults.push(result);
  localStorage.setItem("quizResults", JSON.stringify(allResults));

  // через 0,5 секунды переходим на рейтинг
  setTimeout(() => {
    window.location.href = "rating.html";
  }, 2500);
};


// ================== TIMER ==================
const resetTimer = () => {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;
};

const startTimer = () => {
  timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;

    if (currentTime <= 0) {
      clearInterval(timer);
      highlightCorrectAnswer();
      document.querySelector(".next-question-btn").style.visibility = "visible";
      answerOptions
        .querySelectorAll(".answer-option")
        .forEach(opt => (opt.style.pointerEvents = "none"));
    }
  }, 1000);
};

// ================== QUESTIONS ==================
const getRandomQuestion = () => {
  const categoryObj = questions.find(
    cat => cat.categoryKey === quizCategory
  );

  if (!categoryObj) {
    alert("Категория не найдена");
    return null;
  }

  const categoryQuestions = categoryObj.questions;

  if (questionIndexHistory.length >= numberOfQuestions) {
    showQuizResult();
    return null;
  }

  const availableQuestions = categoryQuestions.filter(
    (_, index) => !questionIndexHistory.includes(index)
  );

  const randomQuestion =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));

  return randomQuestion;
};


// ================== ANSWERS ==================
const highlightCorrectAnswer = () => {
  const correctOption =
    answerOptions.querySelectorAll(".answer-option")[
      currentQuestion.correctAnswer
    ];

  correctOption.classList.add("correct");
  correctOption.insertAdjacentHTML(
    "beforeend",
    `<span class="material-symbols-outlined">check_circle</span>`
  );
};

const handleAnswer = (option, index) => {
  const isCorrect = currentQuestion.correctAnswer === index;

  option.classList.add(isCorrect ? "correct" : "incorrect");

  if (isCorrect) correctAnswerCount++;
  else highlightCorrectAnswer();

  option.insertAdjacentHTML(
    "beforeend",
    `<span class="material-symbols-outlined">
      ${isCorrect ? "check_circle" : "cancel"}
    </span>`
  );

  answerOptions
    .querySelectorAll(".answer-option")
    .forEach(opt => (opt.style.pointerEvents = "none"));

  document.querySelector(".next-question-btn").style.visibility = "visible";
};

// ================== RENDER ==================
const renderQuestion = () => {
  currentQuestion = getRandomQuestion();
  if (!currentQuestion) return;

  resetTimer();
  startTimer();

  const lang = getLang();

  answerOptions.innerHTML = "";
  document.querySelector(".next-question-btn").style.visibility = "hidden";

  document.querySelector(".question-text").textContent =
    currentQuestion.question[lang];

  const template = translations[lang].questionProgress;
  questionStatus.innerHTML = template
    .replace("{current}", `<b>${questionIndexHistory.length}</b>`)
    .replace("{total}", `<b>${numberOfQuestions}</b>`);

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = option[lang];
    answerOptions.appendChild(li);
    li.addEventListener("click", () => handleAnswer(li, index));
  });
};



// ================== START QUIZ ==================
const startQuiz = () => {
  configContainer.style.display = "none";
  quizContainer.style.display = "block";

  quizCategory = configContainer
    .querySelector(".category-option.active")
    .dataset.key;

  numberOfQuestions = parseInt(
    configContainer.querySelector(".question-option.active").dataset.count
  );

  renderQuestion();
};


// ================== UI EVENTS ==================
document
  .querySelectorAll(".category-option, .question-option")
  .forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentNode
        .querySelector(".active")
        .classList.remove("active");
      btn.classList.add("active");
    });
  });

document
  .querySelector(".start-quiz-button")
  .addEventListener("click", startQuiz);

document
  .querySelector(".next-question-btn")
  .addEventListener("click", renderQuestion);


