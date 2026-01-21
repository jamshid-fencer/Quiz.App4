const translations = {
  ru: {
    questionProgress: "{current} из {total} вопросов",
      Filials1: "Ташкент",
      Filials2: "Самарканд",
      Filials3: "Бухара",
      Filials4: "Наманган",
      Filials5: "Фергана",
      Language: "Язык",
      title: "Регистрация перед тестом",
      fullname: "Ф.И.О.",
      fullnamePlaceholder: "Введите ФИО.",
      branch: "Филиал банка:",
      branchPlaceholder: "Выберите филиал",
      startTest: "Начать тест",
      alertFill: "Пожалуйста, заполните все поля!",
      configTitle: "Конфигурация теста",
      chooseCategory: "Выберите категорию",
      mortgage: "Ипотека",
      microloan: "Микрозайм",
      numberOfQuestions: "Количество вопросов",
      q5: "5",
      q10: "10",
      q15: "15",
      q20: "20",
      startQuiz: "Начать тест",
      quizTitle: "Тест по продуктам",
      sampleQuestion: "Lorem ipsum dolor sit amet.",
      // questionStatus: "{current} {of} {total} {questionsWord}",
      next: "Дальше",
      resultTitle: "Тест завершен",
      ratingTitle: "🏆 Рейтинг сотрудников",
      thNumber: "№",
      thName: "ФИО",
      thBranch: "Филиал",
      thScore: "Результат",
      thDate: "Дата прохождения",
      emptyMessage: "Пока никто не прошёл тест 🤷‍♂️",
      homeBtn: "🏠 Домой",
      clearBtn: "🗑 Очистить рейтинг",
      questionsWord: "вопросов",
      of: "из",
      confirmClear: "Вы уверены, что хотите очистить рейтинг?"
  },
  en: {
      Filials1: "Tashkent",
      Filials2: "Samarkand",
      Filials3: "Bukhara",
      Filials4: "Namangan",
      Filials5: "Fergana",
      Language: "Language",
      title: "Registration before test",
      fullname: "Full Name",
      fullnamePlaceholder: "Enter full name.",
      branch: "Bank branch:",
      branchPlaceholder: "Select branch",
      startTest: "Start test",
      alertFill: "Please fill in all fields!",
      configTitle: "Quiz Configuration",
      chooseCategory: "Choose category",
      mortgage: "Mortgage",
      microloan: "Microloan",
      numberOfQuestions: "Number of questions",
      q5: "5",
      q10: "10",
      q15: "15",
      q20: "20",
      startQuiz: "Start Quiz",
      quizTitle: "Product Quiz",
      sampleQuestion: "Lorem ipsum dolor sit amet.",
      // questionStatus: "{current} {of} {total} {questionsWord}",
      next: "Next",
      resultTitle: "Quiz Completed",
      ratingTitle: "🏆 Employee Ranking",
      thNumber: "No.",
      thName: "Full Name",
      thBranch: "Branch",
      thScore: "Score",
      thDate: "Date",
      emptyMessage: "No one has completed the test yet 🤷‍♂️",
      homeBtn: "🏠 Home",
      clearBtn: "🗑 Clear Ranking",
      questionsWord: "questions",
      of: "of",
      confirmClear: "Are you sure you want to clear the rating?",
      questionProgress: "{current} of {total} questions"
  },
  uz: {
      Filials1: "Toshkent",
      Filials2: "Samarqand",
      Filials3: "Buxoro",
      Filials4: "Namangan",
      Filials5: "Farg‘ona",
      Language: "Til",
      title: "Testdan oldin ro‘yxatdan o‘tish",
      fullname: "Familiya, Ism, Sharif",
      fullnamePlaceholder: "Familiya va ismingizni kiriting.",
      branch: "Bank filiali:",
      branchPlaceholder: "Filialni tanlang",
      startTest: "Testni boshlash",
      alertFill: "Iltimos, barcha maydonlarni to‘ldiring!",
      configTitle: "Test konfiguratsiyasi",
      chooseCategory: "Kategoriya tanlang",
      mortgage: "Ipoteka",
      microloan: "Mikrozaym",
      numberOfQuestions: "Savollar soni",
      q5: "5",
      q10: "10",
      q15: "15",
      q20: "20",
      startQuiz: "Testni boshlash",
      quizTitle: "Mahsulotlar bo‘yicha test",
      sampleQuestion: "Lorem ipsum dolor sit amet.",
      // questionStatus: "{current} {of} {total} {questionsWord}",
      next: "Keyingi",
      resultTitle: "Test yakunlandi",
      ratingTitle: "🏆 Xodimlar reytingi",
      thNumber: "№",
      thName: "Familiya, Ism",
      thBranch: "Filial",
      thScore: "Natija",
      thDate: "O‘tgan sana",
      emptyMessage: "Hali hech kim testni tugatmagan 🤷‍♂️",
      homeBtn: "🏠 Bosh sahifa",
      clearBtn: "🗑 Reytingni tozalash",
      questionsWord: "savol",
      of: "dan",
      confirmClear: "Reytingni tozalashni xohlaysizmi?",
      questionProgress: "{current} / {total} savol"
  }
};


  
  


// применяет перевод к элементу (textContent)
function translateElement(el, key, lang) {
  const text = translations[lang] && translations[lang][key];
  if (text !== undefined) el.textContent = text;
}

// универсальная функция: обходит страницы и заменяет тексты/атрибуты
function applyTranslations(lang) {
  if (!translations[lang]) return;

  // 1) элементы с data-i18n -> заменяет textContent
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const map = el.getAttribute("data-i18n").trim();
    // поддержка форматирования вида "key:attr" (например "fullnamePlaceholder:placeholder")
    if (map.includes(":")) {
      const [key, attr] = map.split(":").map(s => s.trim());
      const value = translations[lang][key];
      if (value !== undefined) el.setAttribute(attr, value);
    } else {
      const value = translations[lang][map];
      if (value !== undefined) el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = translations[lang][key];
    if (value !== undefined) {
      el.placeholder = value;
    }
  });

  // 2) элементы с data-i18n-html -> заменяет innerHTML (если нужен emoji/markup)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html").trim();
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });

  // 3) специальные placeholder -> data-i18n-placeholder="key"
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder").trim();
    const value = translations[lang][key];
    if (value !== undefined) el.placeholder = value;
  });

  // 4) value attribute (например кнопки input type=button) -> data-i18n-value="key"
  document.querySelectorAll("[data-i18n-value]").forEach(el => {
    const key = el.getAttribute("data-i18n-value").trim();
    const value = translations[lang][key];
    if (value !== undefined) el.value = value;
  });

  // 5) title attribute -> data-i18n-title="key"
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title").trim();
    const value = translations[lang][key];
    if (value !== undefined) el.title = value;
  });
}

// глобальная функция установки языка (можно вызывать из консоли)
function setLanguage(lang) {
  if (!translations[lang]) lang = "ru";
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
  // событие для остальных скриптов (например renderQuestion может слушать)
  window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
}

// автоприменение при загрузке
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "ru";
  // если есть селект на странице - синхронизируем
  const sel = document.getElementById("langSelect");
  if (sel) {
    sel.value = lang;
    sel.addEventListener("change", (e) => setLanguage(e.target.value));
  }
  setLanguage(lang);
});


