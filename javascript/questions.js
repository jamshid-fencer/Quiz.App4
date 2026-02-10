// Array of questions grouped by category (25 questions each)

const questions = [
  {
    categoryKey: "mortgage",
    category: {
      ru: "Ипотека",
      uz: "Ipoteka",
      en: "Mortgage"
    },
    questions: [
      {
        question: {
          uz: "“Imkoniyat” (RM-4) krediti bo‘yicha birlamchi bozordagi uy-joylar uchun maxsus talab:",
          ru: "Специальное требование к жилью на первичном рынке по кредиту «Imkoniyat» (RM-4):",
          en: "A special requirement for primary market housing under the “Imkoniyat” (RM-4) loan:"
        },
        options: [
          { uz: "Uy foydalanishga topshirilganiga 3 yildan oshmagan bo‘lishi kerak", ru: "Дом должен быть сдан в эксплуатацию не более 3 лет назад", en: "The house must have been commissioned within the last 3 years" },
          { uz: "Uy qurilish jarayonida bo‘lishi mumkin", ru: "Дом может находиться на стадии строительства", en: "The house may be under construction" },
          { uz: "Faqat ikkilamchi uy-joy bo‘lishi kerak", ru: "Жильё должно быть только вторичным", en: "Only secondary housing is allowed" },
          { uz: "Cheklov yo‘q", ru: "Ограничений нет", en: "No restrictions" }
        ],
        correctAnswer: 1
      },
      {
        question: {
          uz: "Doimiy ish joyiga ega mijoz (54 yoshda) “Imkoniyat” (RM-4) ipoteka kredit olish uchun murojaat qildi. Birlamchi konsultasiyada e’tibor beriladigan savol?",
          ru: "Клиент с постоянным местом работы (54 года) обратился за ипотечным кредитом «Imkoniyat» (RM-4). На какой вопрос следует обратить внимание при первичной консультации?",
          en: "A client with permanent employment (aged 54) applied for the “Imkoniyat” (RM-4) mortgage loan. Which question is most important during the initial consultation?"
        },
        options: [
          { uz: "Garov sifatida nima taqdim qila olasiz?", ru: "Какое имущество вы можете предоставить в залог?", en: "What collateral can you provide?" },
          { uz: "Kafil sifatida ishtirok etadigan fuqaro bormi?", ru: "Есть ли гражданин, который может выступить поручителем?", en: "Do you have a guarantor?" },
          { uz: "Kreditni nechchi yilga rasmiylashtirmoqchisiz?", ru: "На какой срок вы планируете оформить кредит?", en: "For how many years do you want to take the loan?" },
          { uz: "Cheklov yo‘q", ru: "Ограничений нет", en: "No restrictions" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "“Imkoniyat” (RM-4) krediti bo‘yicha qurilish tugagach rasmiylashtiriladigan ipoteka kreditida asosiy garov nima hisoblanadi?",
          ru: "Что является основным залогом по ипотечному кредиту «Imkoniyat» (RM-4), оформляемому после завершения строительства?",
          en: "What is considered the main collateral for the “Imkoniyat” (RM-4) mortgage loan after construction is completed?"
        },
        options: [
          { uz: "Yer uchastkasi", ru: "Земельный участок", en: "Land plot" },
          { uz: "Mijozning depoziti", ru: "Депозит клиента", en: "Client’s deposit" },
          { uz: "Qurilish tugagach olinadigan kvartira", ru: "Квартира, получаемая после завершения строительства", en: "Apartment obtained after construction completion" },
          { uz: "Quruvchining bankdagi hisob raqami", ru: "Банковский счёт застройщика", en: "Developer’s bank account" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "“Imkoniyat” (RM-4) krediti bo‘yicha kredit olishda daromad qaysi davr uchun tasdiqlangan bo‘lishi lozim?",
          ru: "За какой период должен быть подтверждён доход для получения кредита «Imkoniyat» (RM-4)?",
          en: "For what period must income be confirmed to obtain the “Imkoniyat” (RM-4) loan?"
        },
        options: [
          { uz: "So‘nggi 3 oy", ru: "Последние 3 месяца", en: "Last 3 months" },
          { uz: "So‘nggi 6 oy", ru: "Последние 6 месяцев", en: "Last 6 months" },
          { uz: "So‘nggi 9 oy", ru: "Последние 9 месяцев", en: "Last 9 months" },
          { uz: "1 yil", ru: "1 год", en: "1 year" }
        ],
        correctAnswer: 1
      },
      {
        question: {
          uz: "O‘zini o‘zi band qilmagan mijozlar uchun minimal umumiy oylik daromad qancha bo‘lishi kerak?",
          ru: "Каков минимальный совокупный ежемесячный доход для клиентов, не являющимися самозанятыми?",
          en: "What is the minimum total monthly income for non-self-employed clients?"
        },
        options: [
          { uz: "8 000 000 so‘m", ru: "8 000 000 сум", en: "8,000,000 UZS" },
          { uz: "9 500 000 so‘m", ru: "9 500 000 сум", en: "9,500,000 UZS" },
          { uz: "1 050 000 so‘m", ru: "1 050 000 сум", en: "1,050,000 UZS" },
          { uz: "12 000 000 so‘m", ru: "12 000 000 сум", en: "12,000,000 UZS" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "Maksimal qarz yuki (DTI) nimani anglatadi?",
          ru: "Что означает максимальная долговая нагрузка (DTI)?",
          en: "What does the maximum debt-to-income ratio (DTI) mean?"
        },
        options: [
          { uz: "Kredit muddati", ru: "Срок кредита", en: "Loan term" },
          { uz: "Boshlang‘ich to‘lov miqdori", ru: "Размер первоначального взноса", en: "Initial payment amount" },
          { uz: "Daromadning aktiv kreditlarga yo‘naltiriladigan qismi", ru: "Доля дохода, направляемая на погашение действующих кредитов", en: "The share of income allocated to active loan repayments" },
          { uz: "Garov qiymati", ru: "Показатель стоимости залога", en: "Collateral value indicator" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "“Imkoniyat” (RM-4) krediti bo‘yicha maksimal qarz yuki (DTI) necha foizdan oshmasligi kerak?",
          ru: "Максимальная долговая нагрузка (DTI) по кредиту «Imkoniyat» (RM-4) не должна превышать:",
          en: "The maximum DTI under the “Imkoniyat” (RM-4) loan must not exceed:"
        },
        options: [
          { uz: "40%", ru: "40%", en: "40%" },
          { uz: "45%", ru: "45%", en: "45%" },
          { uz: "50%", ru: "50%", en: "50%" },
          { uz: "60%", ru: "60%", en: "60%" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "“Imkoniyat” (RM-4) krediti bo‘yicha qurilish davrida imtiyozli davr qancha muddatni tashkil etishi mumkin?",
          ru: "Какой срок льготного периода возможен в период строительства по кредиту «Imkoniyat» (RM-4)?",
          en: "What is the possible grace period during the construction phase under the “Imkoniyat” (RM-4) loan?"
        },
        options: [
          { uz: "3–6 oy", ru: "3–6 месяцев", en: "3–6 months" },
          { uz: "6–9 oy", ru: "6–9 месяцев", en: "6–9 months" },
          { uz: "6–12 oy", ru: "6–12 месяцев", en: "6–12 months" },
          { uz: "12–18 oy", ru: "12–18 месяцев", en: "12–18 months" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "“Imkoniyat” (RM-4) krediti bo‘yicha maksimal nechta hamqarz qo‘shish mumkin?",
          ru: "Сколько максимум созаёмщиков можно привлечь по кредиту «Imkoniyat» (RM-4)?",
          en: "What is the maximum number of co-borrowers allowed under the “Imkoniyat” (RM-4) loan?"
        },
        options: [
          { uz: "1 ta", ru: "1", en: "1" },
          { uz: "2 ta", ru: "2", en: "2" },
          { uz: "3 ta", ru: "3", en: "3" },
          { uz: "4 ta", ru: "4", en: "4" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "“Imkoniyat” (RM-4) krediti bo‘yicha qaysi toifadagi mijozlar uchun hamqarz majburiy?",
          ru: "Для какой категории клиентов наличие созаёмщика является обязательным?",
          en: "For which category of clients is a co-borrower mandatory?"
        },
        options: [
          { uz: "Doimiy ish joyiga ega mijozlar", ru: "Клиенты с постоянной работой", en: "Clients with permanent employment" },
          { uz: "Pensionerlar", ru: "Пенсионеры", en: "Pensioners" },
          { uz: "O‘zini o‘zi band qilgan mijozlar", ru: "Самозанятые клиенты", en: "Self-employed clients" },
          { uz: "Talabalar", ru: "Студенты", en: "Students" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "Rasmiy daromadga ega mijozlar uchun boshlang‘ich to‘lov minimal miqdori qancha?",
          ru: "Минимальный первоначальный взнос для клиентов с официальным доходом составляет:",
          en: "What is the minimum down payment for clients with official income?"
        },
        options: [
          { uz: "15%", ru: "15%", en: "15%" },
          { uz: "20%", ru: "20%", en: "20%" },
          { uz: "25%", ru: "25%", en: "25%" },
          { uz: "30%", ru: "30%", en: "30%" }
        ],
        correctAnswer: 1
      },
      {
        question: {
          uz: "O‘zini o‘zi band qilgan va hamqarz bilan kredit olayotgan mijoz uchun boshlang‘ich to‘lov necha foizdan boshlanadi?",
          ru: "С какого процента начинается первоначальный взнос для самозанятых клиентов с созаёмщиком?",
          en: "From what percentage does the down payment start for self-employed clients with a co-borrower?"
        },
        options: [
          { uz: "20%", ru: "20%", en: "20%" },
          { uz: "25%", ru: "25%", en: "25%" },
          { uz: "30%", ru: "30%", en: "30%" },
          { uz: "35%", ru: "35%", en: "35%" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "Hamqarzlar uchun qanday talab qo‘yiladi?",
          ru: "Какое требование предъявляется к созаёмщикам?",
          en: "What requirement is imposed on co-borrowers?"
        },
        options: [
          { uz: "Faqat qarindosh bo‘lishi kerak", ru: "Должны быть только родственниками", en: "Must be relatives only" },
          { uz: "Rasmiy daromadga ega bo‘lishi kerak", ru: "Должны иметь официальный доход", en: "Must have official income" },
          { uz: "Karta aylanmasi katta bo‘lishi kerak", ru: "Должны иметь высокий оборот по карте", en: "Must have high card turnover" },
          { uz: "Garov taqdim etishi kerak", ru: "Должны предоставить залог", en: "Must provide collateral" }
        ],
        correctAnswer: 1
      },
      {
        question: {
          uz: "Kreditni moliyalashtirish manbalariga qaysilar kiradi?",
          ru: "Какие источники используются для финансирования кредита?",
          en: "Which sources are used to finance the loan?"
        },
        options: [
          { uz: "Faqat bank mablag‘lari", ru: "Только средства банка", en: "Only bank funds" },
          { uz: "Faqat Iqtisodiyot va moliya vazirligi mablag‘lari", ru: "Только средства Министерства экономики и финансов", en: "Only funds of the Ministry of Economy and Finance" },
          { uz: "Bank va Iqtisodiyot va moliya vazirligi mablag‘lari", ru: "Средства банка и Министерства экономики и финансов", en: "Bank funds and funds of the Ministry of Economy and Finance" },
          { uz: "Xalqaro moliya institutlari", ru: "Международные финансовые институты", en: "International financial institutions" }
        ],
        correctAnswer: 2
      },
      {
        question: {
          uz: "Boshlang‘ich to‘lov miqdoriga qaysi omil bevosita ta’sir qiladi?",
          ru: "Какой фактор напрямую влияет на размер первоначального взноса?",
          en: "Which factor directly affects the amount of the down payment?"
        },
        options: [
          { uz: "Kredit muddati", ru: "Срок кредита", en: "Loan term" },
          { uz: "Mijozning bandlik turi", ru: "Тип занятости клиента", en: "Client’s employment type" },
          { uz: "Kredit foiz stavkasi", ru: "Процентная ставка", en: "Interest rate" },
          { uz: "Garov joylashuvi", ru: "Расположение залога", en: "Collateral location" }
        ],
        correctAnswer: 1
      }
    ]
  }
  
  ];
  

  
