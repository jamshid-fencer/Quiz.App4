// Array of questions grouped by category (25 questions each)

const questions = [
    {
      categoryKey: "mortgage",
      category: {
        ru: "Ипотека",
        uz: "Ipoteka"
      },
      questions: [
        {
          question: {
              ru: "Какой орган регулирует банковскую деятельность в Республике Узбекистан?",
              en: "Which authority regulates banking activities in Uzbekistan?",
              uz: "Qaysi organ O'zbekistonda bank faoliyatini tartibga soladi?"
          },
          options: [
              { ru: "Министерство финансов", en: "Ministry of Finance", uz: "Moliya vazirligi" },
              { ru: "Центральный банк Республики Узбекистан", en: "Central Bank of Uzbekistan", uz: "O'zbekiston Markaziy banki" },
              { ru: "Государственная налоговая служба", en: "State Tax Service", uz: "Davlat soliq xizmati" },
              { ru: "Министерство экономики", en: "Ministry of Economy", uz: "Iqtisodiyot vazirligi" }
          ],
          correctAnswer: 1
      },
          {
            question:{
              ru: "Что из перечисленного НЕ входит в обязанности банка при работе с клиентами?",
              en: "Which of the following does NOT fall under a bank’s responsibilities when working with clients?",
              uz: "Quyidagilardan qaysi biri bankning mijozlar bilan ishlashdagi majburiyatlariga kirmaydi?"
            },
            options: [
                {ru: "Сохранять конфиденциальность информации", en:"To maintain the confidentiality of information",uz:"Ma’lumotlarning maxfiyligini saqlash"},
                {ru:"Предоставлять полную информацию о продуктах", en:"To provide complete information about products", uz: "Mahsulotlar haqida to‘liq ma’lumot taqdim etish"},
                {ru:"Оказывать юридические консультации", en:"To provide legal consultations", uz:"Yuridik maslahatlar ko‘rsatish"},
                {ru:"Обеспечивать безопасность финансовых операций",en:"To ensure the security of financial transactions",uz:"Moliyaviy operatsiyalarning xavfsizligini ta’minlash"}
            ],
            correctAnswer: 2,
          },
          {
            question:{
              ru:"Можно ли рефинансировать ипотечный кредит в других банках?",
              en:"Is it possible to refinance a mortgage loan in other banks?",
              uz:"Ipoteka kreditini boshqa banklarda qayta moliyalashtirish mumkinmi?",
            },
            options: [
              {ru:"Нет, запрещено законом",en:"No, it is prohibited by law",uz:"Yo‘q, qonun bilan taqiqlangan"},
              {ru:"Да, если банк разрешает",en:"Yes, if the bank allows it",uz:"Ha, agar bank ruxsat bersa."},
              {ru:"Только после полного погашения",en:"Only after full repayment.",uz:"Faqat to‘liq to‘langandan keyin."},
              {ru:"Только с разрешения Национального банка", en:"Only with the permission of the National Bank.", uz:"Faqat Milliy bankning ruxsati bilan."}
            ],
            correctAnswer: 1,
          },
          {
            question: {
              ru:"Что такое «кредитная история» заемщика?",
              en:"What is a borrower’s “credit history”?",
              uz:"Kredit tarixi” deganda qarz oluvchining nimasi tushuniladi?",
            },
            options: [
              {ru:"Отчет о наличии или отсутствии задолженности в других банках",en:"A report on the presence or absence of debt in other banks",uz:"Boshqa banklardagi qarz mavjudligi yoki yo‘qligi haqidagi hisobot"},
              {ru:"Информация о доходах заемщика за последний год",en:"Information about the borrower’s income for the past year",uz:"Qarz oluvchining so‘nggi yil mobaynidagi daromadi haqidagi ma’lumot"},
              {ru:"Список кредитных продуктов, предоставленных заемщику банком",en:"A list of credit products provided to the borrower by the bank",uz:"Bank tomonidan qarz oluvchiga taqdim etilgan kredit mahsulotlari ro‘yxati"},
              {ru:"Совокупность всех операций и задолженностей заемщика перед банками",en:"The totality of all the borrower’s transactions and debts with banks",uz:"Qarz oluvchining banklar oldidagi barcha operatsiyalari va qarzlarining jami"}
            ],
            correctAnswer: 3,
          },
          {
            question: {
              ru:"Для каких клиентов предусмотрена возможность субсидирования ипотеки по программе ПКМ-182 и ПКМ-749?",
              en:"For which clients is the possibility of mortgage subsidization provided under the PKM-182 and PKM-749 programs?",
              uz:"PKM-182 va PKM-749 dasturlari bo‘yicha ipoteka subsidiyalash imkoniyati qaysi mijozlar uchun mo‘ljallangan?"
            },
            options: [
              {ru:"Только самозанятых",en:"Only for self-employed individuals",uz:"Faqat o‘zini o‘zi band qilganlar uchun"},
              {ru:"Только женщин",en:"Only for women",uz:"Faqat ayollar uchun"},
              {ru:"Клиентов, впервые пользующихся ипотекой",en:"Clients using a mortgage for the first time",uz:"Ipotekadan birinchi marta foydalanuvchi mijozlar"},
              {ru:"Всех клиентов",en:"All clients",uz:"Barcha mijozlar"}
            ],
            correctAnswer: 2,
          },
          {
            question: {
              ru:"При оформлении самозанятым ипотечный кредит «Тижорат» с первоначальным взносом 30% какие аспекты учитываются?",
              en:"When issuing the “Tijorat” mortgage loan to self-employed individuals with a 30% down payment, which aspects are taken into account?",
              uz:"O‘zini o‘zi band qilgan shaxslarga 30% boshlang‘ich badal bilan “Tijorat” ipoteka krediti rasmiylashtirilganda qaysi jihatlar inobatga olinadi?"
            },
            options: [
              {ru:"Положительная кредитная история",en:"A positive credit history",uz:"Ijobiy kredit tarixi"},
              {ru:"Владение автомобилем (не старше 5 лет)",en:"Ownership of a car (not older than 5 years)",uz:"5 yildan oshmagan avtomobilga egalik"},
              {ru:"Владение недвижимостью",en:"Ownership of real estate",uz:"Ko‘chmas mulkka egalik"},
              {ru:"Ответы a и c верны",en:"Answers A and C are correct.",uz:"A va C javoblari to‘g‘ri."}
            ],
            correctAnswer: 3,
          },
          {
            question: {
              ru:"При оформлении каких ипотечных кредитов учитывается активный микрозайм, взятый в течение последних 3 месяцев?",
              en:"When applying for which mortgage loans is an active microloan taken within the last 3 months taken into account?",
              uz:"So‘nggi 3 oy ichida olingan faol mikroqarz qaysi ipoteka kreditlarini rasmiylashtirishda inobatga olinadi?"
            },
            options: [
              {ru:"Тижорат",en:"Tijorat",uz:"Tijorat"}, 
              {ru:"Имконият",en:"Opportunity",uz:"Imkoniyat"}, 
              {ru:"Макул",en:"Alright",uz:"Ma’qul"}, 
              {ru:"Кулай",en:"Comfortable",uz:"Qulay"}
            ],
            correctAnswer: 0,
          },
          {
            question: {
              ru:"Какой счет используется для выдачи кредита «Тижорат» для самозанятых с поручителем?",
              en:"Which account is used to disburse the “Tijorat” loan for self-employed individuals with a guarantor?",
              uz:"O‘zini o‘zi band qilgan shaxslar uchun kafillik asosida beriladigan “Tijorat” krediti qaysi hisobvaraq orqali beriladi?"
            },
            options: [
              {ru:"Счета 14901000…520* и 14931000…525",en:"Accounts: 14901000…520* and 14931000…525",uz:"Hisoblar: 14901000…520* va 14931000…525"},
              {ru:"Счета 14901000…199** и 14931000…530****",en:"Accounts: 14901000…199** и 14931000…530****",uz:"Hisoblar: 14901000…199** и 14931000…530****"},
              {ru:"Счета 14901000…001 и 14901000…351***",en:"Accounts: 14901000…001 и 14901000…351***",uz:"Hisoblar: 14901000…001 и 14901000…351***"},
              {ru:"Все вышеперечисленные",en:"All of the above",uz:"Yuqorida sanab o‘tilganlarning barchasi"}
            ],
            correctAnswer: 0,
          },
          {
            question: {
              ru:"Какой минимальный первоначальный взнос предусмотрен для самозанятых клиентов с оборотом по карте?",
              en:"What is the minimum down payment предусмотрed for self-employed clients with card turnover?",
              uz:"Karta orqali aylanmasi mavjud bo‘lgan o‘zini o‘zi band qilgan mijozlar uchun minimal boshlang‘ich badal qancha?"

            },
            options: [
              {ru:"20%",en:"20%",uz:"20%"}, 
              {ru:"26%",en:"26%",uz:"26%"}, 
              {ru:"30%",en:"30%",uz:"30%"}, 
              {ru:"50%",en:"50%",uz:"50%"}
            ],
            correctAnswer: 1,
          },
          {
            question: {
              ru:"Какие документы необходимо предоставить для оформления кредита?",
              en:"Which documents need to be provided to apply for a loan?",
              uz:"Kredit rasmiylashtirish uchun qaysi hujjatlarni taqdim etish zarur?"
            },
            options: [
              {ru:"Договор купли-продажи, документы по залогу и чек-лист ESMS",en:"Sale and purchase agreement, collateral documents, and ESMS checklist",uz:"Savdo shartnomasi, garov hujjatlari va ESMS tekshiruv ro‘yxati"},
              {ru:"Паспорт, договор купли-продажи, документы по залогу и чек-лист ESMS",en:"Passport, sale and purchase agreement, collateral documents, and ESMS checklist",uz:"Pasport, savdo shartnomasi, garov hujjatlari va ESMS tekshiruv ro‘yxati"},
              {ru:"Только паспорт",en:"Only the passport",uz:"Faqat pasport"},
              {ru:"Справку о доходах, паспорт и чек-лист ESMS",en:"Income certificate, passport, and ESMS checklist",uz:"Daromad to‘g‘risidagi ma’lumotnoma, pasport va ESMS tekshiruv ro‘yxati"}
            ],
            correctAnswer: 1,
          },
          {
            question: {
              ru:"Какой первоначальный взнос обязателен для самозанятых клиентов без оборота по карте?",
              en:"What down payment is required for self-employed clients without card turnover?",
              uz:"Kartada aylanma operatsiyasi bo‘lmagan o‘zini o‘zi band qilgan mijozlar uchun qanday boshlang‘ich badal majburiy hisoblanadi?",

            },
            options: [
              {ru:"30%",en:"30%",uz:"30%"}, 
              {ru:"40%",en:"40%",uz:"40%"}, 
              {ru:"50%",en:"50%",uz:"50%"}, 
              {ru:"26%",en:"26%",uz:"26%"},
            ],
            correctAnswer: 2,
          },
          {
            question: {
              ru:"При каких условиях самозанятый клиент может внести 40% первоначального взноса?",
              en:"Under what conditions can a self-employed client make a 40% down payment? ",
              uz:"Qaysi shartlarda o‘zini o‘zi band qilgan mijoz 40% boshlang‘ich badal to‘lashi mumkin?",

            },
            options: [
              {ru:"Есть активы и регистрация более 2 лет",en:"Has assets and has been registered for more than 2 years",uz:"Aktivlari mavjud va ro‘yxatdan o‘tganiga 2 yildan ortiq bo‘lgan"},
              {ru:"Нет кредитной истории и активов, но регистрация более 2 лет",en:"No credit history and no assets, but registered for more than 2 years",uz:"Kredit tarixi va aktivlari yo‘q, lekin ro‘yxatdan o‘tganiga 2 yildan ortiq"},
              {ru:"Есть автомобиль",en:"Owns a car",uz:"Avtomobilga ega"},
              {ru:"Имеет официальный доход",en:"Has official income",uz:"Rasmiy daromadga ega"}
            ],
            correctAnswer: 1,
          },
          {
            question: {
              ru:"Какой документ подтверждает доход самозанятого клиента при отсутствии оборота по карте?",
              en:"Which document confirms the income of a self-employed client in the absence of card turnover?",
              uz:"Karta aylanmasi bo‘lmagan holatda o‘zini o‘zi band qilgan mijozning daromadini qaysi hujjat tasdiqlaydi?"
            },
            options: [
              {ru:"Справка 2-НДФЛ",en:"2-NDFL certificate",uz:"2-NDFL ma’lumotnomasi"},
              {ru:"Справка от работодателя",en:"Certificate from the employer",uz:"Ish beruvchi tomonidan berilgan ma’lumotnoma"},
              {ru:"Самодекларация клиента",en:"Client’s self-declaration",uz:"Mijozning o‘zini o‘zi deklaratsiya qilishi"},
              {ru:"Налоговая справка",en:"Tax certificate",uz:"Solik ma’lumotnomasi"}
            ],
            correctAnswer: 2,
          },
          {
            question: {
              ru:"Каков льготный период по кредиту «Мақул»?",
              en:"What is the grace period for the “Ma’qul” loan?",
              uz:"“Ma’qul” krediti bo‘yicha imtiyozli (grace) muddat qancha?"

            },
            options: [
              {ru:"3 месяца",en:"3 months",uz:"3 oy"}, 
              {ru:"6 месяцев",en:"6 months",uz:"6 oy"}, 
              {ru:"12 месяцев",en:"12 months",uz:"12 oy"}, 
              {ru:"Без льготного периода",en:"Without a grace period",uz:"Imtiyozli muddatsiz"}
            ],
            correctAnswer: 3,
          },
          {
            question: {
              ru:"Какой счет нужен для учета кредита «Мақул»?",
              en:"Which account is used to record the “Ma’qul” loan?",
              uz:"“Ma’qul” krediti hisobini yuritish uchun qaysi hisob raqami kerak?"

            },
            options: [
              {ru:"Счет 14903000…868",en:"Account 14903000…868",uz:"Hisob raqami 14903000…868"},
              {ru:"Счет 14931000…525",en:"Account 14931000…525",uz:"Hisob raqami 14931000…525"},
              {ru:"Счет 14901000…001",en:"Account 14901000…001",uz:"Hisob raqami 14901000…001"},
              {ru:"Все вышеперечисленные",en:"All of the above",uz:"Yuqorida sanab o‘tilganlarning barchasi"}
            ],
            correctAnswer: 0,
          },
          {
            question: {
              ru:"Не менее какого процента кредита «Макул» должно быть оформлено на женщин?",
              en:"At least what percentage of the “Ma’qul” loan must be issued to women?",
              uz:"“Ma’qul” krediti kamida qaysi foiz miqdorida ayollarga berilishi shart?",

            },
            options: [
              {ru:"25%",en:"25%",uz:"25%"}, 
              {ru:"30%",en:"30%",uz:"30%"}, 
              {ru:"32,5%",en:"32,5%",uz:"32,5%"}, 
              {ru:"40%",en:"40%",uz:"40%"}
            ],
            correctAnswer: 2,
          },
          {
            question: {
              ru:"Требование к залогу по ипотечному кредиту «Мақул»?",
              en:"What is the collateral requirement for the “Ma’qul” mortgage loan?",
              uz:"“Ma’qul” ipoteka krediti bo‘yicha garov talabi qanday?",

            },
            options: [
              {ru:"Не меньше стоимости жилья",en:"Not less than the value of the property",uz:"Uy qiymatidan kam bo‘lmasligi kerak"},
              {ru:"Меньше стоимости жилья",en:"Less than the value of the property",uz:"Uy qiymatidan kamroq"},
              {ru:"Равно стоимости жилья",en:"Equal to the value of the property",uz:"Uy qiymatiga teng"},
              {ru:"Все ответы верны",en:"All answers are correct",uz:"Barcha javoblar to‘g‘ri"}
            ],
            correctAnswer: 0,
          },
          {
            question: {
              ru:"Источник финансирования ипотечного кредита «Кулай»?",
              en:"What is the source of financing for the “Qulay” mortgage loan?",
              uz:"“Qulay” ipoteka kreditining moliyalashtirish manbai nima?"

            },
            options: [
              {ru:"Собственные средства банка",en:"The bank’s own funds",uz:"Bankning o‘z mablag‘lari"},
              {ru:"Государственный бюджет",en:"State budget",uz:"Davlat byudjeti"},
              {ru:"Средства Компании Ипотечного Рефинансирования Узбекистана",en:"Funds of the Uzbekistan Mortgage Refinancing Company",uz:"O‘zbekiston Ipoteka Qayta Moliyalashtirish Kompaniyasi mablag‘lari"},
              {ru:"Средства иностранных инвесторов",en:"Funds of foreign investors",uz:"Xorijiy investorlarning mablag‘lari"}
            ],
            correctAnswer: 2,
          },
          {
            question: {
              ru:"Какое специальное условие установлено для жилья на первичном рынке?",
              en:"What special condition is established for housing on the primary market?",
              uz:"Birinchi bozor (primary market) uy-joylar uchun qaysi maxsus shart belgilangan?"

            },
            options: [
              {ru:"Дом введен в эксплуатацию не более 3 лет назад",en:"The building was commissioned no more than 3 years ago",uz:"Uy-joy 3 yildan ortiq bo‘lmagan vaqtda foydalanishga topshirilgan"},
              {ru:"Жилье может быть строящимся",en:"The housing can be under construction",uz:"Uy-joy qurilayotgan bo‘lishi mumkin"},
              {ru:"Только вторичное жилье",en:"Only secondary housing",uz:"Faqat ikkinchi bozor uy-joyi"},
              {ru:"Ограничений нет",en:"No restrictions",uz:"Cheklovlar yo‘q"}
            ],
            correctAnswer: 0,
          },
          {
            question: {
              ru:"Можно ли переоформлять ранее выданные ипотечные кредиты самозанятым без дохода и созаемщика?",
              en:"Is it possible to refinance previously issued mortgage loans for self-employed clients without income and co-borrowers?",
              uz:"Daromadsiz va qo‘shimcha qarzdorsiz o‘zini o‘zi band qilgan mijozlarga ilgari berilgan ipoteka kreditlarini qayta rasmiylashtirish mumkinmi?"

            },
            options: [
              {ru:"Да",en:"Yes",uz:"Ha"}, 
              {ru:"Нет",en:"No",uz:"Yoq"}, 
              {ru:"Частично",en:"Partially",uz:"Qisman"}, 
              {ru:"Нет правильного ответа",en:"There is no correct answer",uz:"To‘g‘ri javob yo‘q"}
            ],
            correctAnswer: 1,
          },
          {
            question: {
              ru:"С каким ипотечным кредитом можно интегрировать «Осон» при превышении лимита?",
              en:"With which mortgage loan can “Oson” be integrated when the limit is exceeded?",
              uz:"Chegara oshilganda qaysi ipoteka krediti bilan “Oson” integratsiya qilinishi mumkin?"

            },
            options: [
              {ru:"Тижорат",en:"Tijorat",uz:"Tijorat"}, 
              {ru:"Осон",en:"Oson",uz:"Oson"}, 
              {ru:"Макул",en:"Alright",uz:"Ma’qul"}, 
              {ru:"Кулай",en:"Comfortable",uz:"Qulay"}
            ],
            correctAnswer: 0,
          },
          {
            question: {
              ru:"По какому паспорту распространяется ПКМ-182, ПКМ-749?",
              en:"Under which passport does PKM-182 and PKM-749 apply?",
              uz:"PKM-182 va PKM-749 qaysi pasportga taalluqlidir?"

            },
            options: [
              {ru:"Тижорат",en:"Tijorat",uz:"Tijorat"}, 
              {ru:"Осон",en:"Oson",uz:"Oson"},
              {ru:"Макул",en:"Alright",uz:"Ma’qul"}, 
              {ru:"Кулай",en:"Comfortable",uz:"Qulay"}
            ],
            correctAnswer: 1,
          },
          {
            question: {
              ru:"В каких регионах доступен ипотечный кредит «Осон»?",
              en:"In which regions is the “Oson” mortgage loan available?",
              uz:"“Oson” ipoteka krediti qaysi hududlarda mavjud?"
            },
            options: [
              {ru:"Ташкент",en:"Tashkent",uz:"Tashkent"},
              {ru:"Ташкент, Самарканд, Фергана",en:"Tashkent, Samarkand, Fergana",uz:"Toshkent, Samarqand, Farg‘ona"},
              {ru:"Все ответы верны",en:"All answers are correct",uz:"Barcha javoblar to‘g‘ri"},
              {ru:"Хорезм, Навои, Кашкадарье",en:"Khorezm, Navoi, Kashkadarya",uz:"Xorazm, Navoiy, Qashqadaryo"}
            ],
            correctAnswer: 2,
          },
          {
            question: {
              ru:"Какая особенность ипотеки «Кулай» связана с процентной ставкой?",
              en:"What is the feature of the “Qulay” mortgage related to the interest rate?",
              uz:"“Qulay” ipotekasining foiz stavkasi bilan bog‘liq qanday o‘ziga xosligi bor?"

            },
            options: [
              {ru:"Фиксированная ставка на весь срок кредита",en:"Fixed rate for the entire loan term",uz:"Kredit muddati davomida o‘zgarmas foiz stavkasi"},
              {ru:"Ставка ежегодно снижается на 1%",en:"The rate decreases by 1% each year",uz:"Stavka har yili 1% ga kamayadi"},
              {ru:"Плавающая ставка",en:"Floating rate",uz:"O‘zgaruvchan stavka"},
              {ru:"Обнуление ставки при досрочном погашении",en:"Zeroing the rate upon early repayment",uz:"Oldindan to‘lashda stavkani nolga tushirish"}
            ],
            correctAnswer: 0,
          }
      ],
    }, 
    {
      categoryKey: "microloan",
      category: {
        ru: "Микрозайм",
        uz: "Mikroqarz"
      },
      questions: [
        {
          question: {
            ru:"Какой возрастной диапазон установлен для заёмщиков по продукту «R-3 микрозайм»?",
            en:"What is the age range established for borrowers under the “R-3 Microloan” product?",
            uz:"“R-3 mikroqarz” mahsuloti bo‘yicha qarz oluvchilar uchun belgilangan yosh oralig‘i qanday?",

          },
          options: [
            {ru:"От 18 до 65 лет на дату выдачи кредита",en:"From 18 to 65 years old on the date of loan issuance",uz:"Kredit berilgan sana holatiga ko‘ra 18 dan 65 yoshgacha"},
            {ru:"От 20 до 70 лет на дату последнего платежа",en:"From 20 to 70 years old on the date of the last payment",uz:"Oxirgi to‘lov sanasiga ko‘ra 20 dan 70 yoshgacha"},
            {ru:"От 25 до 75 лет независимо от даты платежа",en:"From 25 to 75 years old, regardless of the payment date",uz:"To‘lov sanasidan qat’i nazar, 25 dan 75 yoshgacha"},
            {ru:"От 21 до 60 лет на дату подачи заявки",en:"From 21 to 60 years old on the date of application submission",uz:"Ariza topshirilgan sanaga ko‘ra 21 dan 60 yoshgacha"}
          ],
          correctAnswer: 1,
        },
        {
          question: {
            ru:"Какой максимальный срок предоставления займа «R-3 микрозайм» предусмотрен паспортом продукта?",
            en:"What is the maximum loan term for the “R-3 Microloan” provided for in the product passport?",
            uz:"Mahsulot pasportiga ko‘ra “R-3 mikroqarz” uchun belgilangan maksimal muddat qancha?"

          },
          options: [
            {ru:"72 месяца",en:"72 months",uz:"72 oy"},
            {ru:"48 месяцев",en:"48 months",uz:"48 oy"},
            {ru:"60 месяцев",en:"60 months",uz:"60 oy"},
            {ru:"24 месяца",en:"24 months",uz:"24 oy"}
          ],
          correctAnswer: 2,
        },
        {
          question: {
            ru:"По каким критериям определяется процентная ставка по продукту «R-3 микрозайм»?",
            en:"According to which criteria is the interest rate determined for the “R-3 Microloan” product?",
            uz:"“R-3 mikroqarz” mahsuloti bo‘yicha foiz stavkasi qaysi mezonlar asosida belgilanadi?"
          },
          options: [
            {ru:"Фиксируется одинаково для всех заёмщиков",en:"It is fixed at the same level for all borrowers",uz:"Barcha qarz oluvchilar uchun bir xil tarzda belgilangan"},
            {ru:"По решению кредитного комитета филиала",en:"By decision of the branch credit committee",uz:"Filial kredit qo‘mitasining qaroriga binoan"},
            {ru:"Согласно результатам скоринга клиента",en:"According to the client’s scoring results",uz:"Mijoz skoring natijalariga muvofiq"},
            {ru:"В зависимости от суммы займа и валюты",en:"Depending on the loan amount and the currency",uz:"Qarz summasi va valyutasiga bog‘liq holda"}
          ],
          correctAnswer: 2,
        },
        {
          question: {
            ru:"Какова максимальная сумма, которая может быть предоставлена клиенту по микрозайму «R-3»?",
            en:"What is the maximum amount that can be provided to a client under the “R-3” microloan?",
            uz:"“R-3” mikroqarzi bo‘yicha mijozga berilishi mumkin bo‘lgan maksimal summa qancha?"

          },
          options: [
            {ru:"До 150 млн сум",en:"Up to 150 million UZS",uz:"150 mln so‘mgacha"},
            {ru:"До 50 млн сум",en:"Up to 50 million UZS",uz:"50 mln so‘mgacha"},
            {ru:"До 100 млн сум",en:"Up to 100 million UZS",uz:"100 mln so‘mgacha"},
            {ru:"До 200 млн сум",en:"Up to 200 million UZS",uz:"200 mln so‘mgacha"}
          ],
          correctAnswer: 2,
        },
        {
          question: {
            ru:"Какой вид обеспечения предусмотрен для продукта «R-3 микрозайм»?",
            en:"What type of collateral is предусмотрed for the “R-3 Microloan” product?",
            uz:"“R-3 mikroqarz” mahsuloti uchun qaysi turdagi ta’minot (garov) nazarda tutilgan?"
          },
          options: [
            {ru:"Автотранспорт клиента",en:"Client’s vehicle",uz:"Mijozning avtotransport vositasi"},
            {ru:"Заработная плата физического лица",en:"Individual’s salary",uz:"Jismoniy shaxsning maoshı"},
            {ru:"Поручительство двух физических лиц",en:"Guarantee by two individuals",uz:"Ikki jismoniy shaxsning kafilligi"},
            {ru:"Недвижимость заёмщика",en:"Borrower’s real estate",uz:"Qarz oluvchining ko‘chmas mulki"}
          ],
          correctAnswer: 1,
        },
        {
          question: {
            ru:"Какой минимальный трудовой стаж требуется для получения микрозайма «R-3»?",
            en:"What is the minimum work experience required to obtain the “R-3” microloan?",
            uz:"“R-3” mikroqarzini olish uchun minimal ish staji qancha bo‘lishi kerak?"

          },
          options: [
            {ru:"Последний 1 год",en:"The last 1 year",uz:"So‘nggi 1 yil"},
            {ru:"Последние 3 месяца",en:"The last 3 months",uz:"So‘nggi 3 oy"},
            {ru:"Последние 6 месяцев",en:"The last 6 months",uz:"So‘nggi 6 oy"},
            {ru:"Последние 2 года",en:"The last 2 year",uz:"So‘nggi 2 yil"}
          ],
          correctAnswer: 2,
        },
        {
          question: {
            ru:"Какая годовая процентная ставка применяется к продукту «R-3 микрозайм»?",
            en:"What is the annual interest rate applied to the “R-3 Microloan” product?",
            uz:"“R-3 mikroqarz” mahsulotiga qanday yillik foiz stavkasi qo‘llaniladi?"

          },
          options: [
            {ru:"Фиксированная ставка 35%",en:"Fixed rate of 35%",uz:"35% o‘zgarmas stavka"},
            {ru:"От 10% до 20%",en:"From 10% to 20%",uz:"10% dan 20% gacha"},
            {ru:"От 24% до 48%",en:"From 24% to 20%",uz:"10% dan 24% gacha"},
            {ru:"От 15% до 30%",en:"From 15% to 20%",uz:"10% dan 15% gacha"}
          ],
          correctAnswer: 2,
        },
        {
          question: {
            ru: "Как осуществляется взыскание просроченной задолженности по микрозайму «R-3»?",
            en: "How is the collection of overdue debt on the “R-3” microloan carried out?",
            uz: "“R-3” mikroqarzi bo‘yicha muddatidan o‘tgan qarz qanday undirib olinadi?"
          },
          options: [
            { ru: "Удержание из заработной платы по месту работы", en: "Deduction from salary at the workplace", uz: "Ish joyidagi maoshdan ushlab qolish" },
            { ru: "Безакцептное списание с банковской карты заёмщика", en: "Non-acceptance deduction from the borrower’s bank card", uz: "Qarz oluvchining bank kartasidan roziliksiz yechib olish" },
            { ru: "По заявлению клиента в письменной форме", en: "Upon the client’s written request", uz: "Mijozning yozma arizasiga binoan" },
            { ru: "Взыскание только через суд", en: "Collection only through the court", uz: "Undirish faqat sud orqali" }
          ],
          correctAnswer: 1,
        },
        {
          question: {
            ru: "Какой документ обязательно должен предоставить клиент при оформлении микрозайма «R-3»?",
            en: "Which document must the client necessarily provide when applying for the “R-3” microloan?",
            uz: "“R-3” mikroqarzini rasmiylashtirishda mijoz albatta qaysi hujjatni taqdim etishi kerak?"
          },
          options: [
            { ru: "Документы на недвижимость", en: "Real estate documents", uz: "Ko‘chmas mulk hujjatlari" },
            { ru: "Налоговую декларацию за последние 2 года", en: "Tax declaration for the last 2 years", uz: "So‘nggi 2 yil uchun soliq deklaratsiyasi" },
            { ru: "Документ, удостоверяющий личность", en: "Identity document", uz: "Shaxsni tasdiqlovchi hujjat" },
            { ru: "Свидетельство о браке", en: "Marriage certificate", uz: "Nikoh guvohnomasi" }
          ],
          correctAnswer: 2,
        },
        {
          question: {
            ru: "Какая комиссия взимается за внесение изменений в кредитный договор по инициативе клиента по продукту «R-3»?",
            en: "What commission is charged for making changes to the loan agreement at the client’s initiative for the “R-3” product?",
            uz: "“R-3” mahsuloti bo‘yicha mijoz tashabbusi bilan kredit shartnomasiga o‘zgartirish kiritish uchun qanday komissiya olinadi?"
          },
          options: [
            { ru: "Фиксированная сумма 100 000 сум", en: "Fixed amount of 100,000 UZS", uz: "100 000 so‘m miqdorida belgilangan komissiya" },
            { ru: "5% от остатка кредита, но не более 500 000 сум", en: "5% of the remaining loan balance, but not more than 500,000 UZS", uz: "Qoldiq qarzning 5%, lekin 500 000 so‘mdan oshmasligi kerak" },
            { ru: "Бесплатно во всех случаях", en: "Free in all cases", uz: "Har qanday holatda bepul" },
            { ru: "3% от остатка кредита без ограничений", en: "3% of the remaining loan balance without any limits", uz: "Qoldiq qarzning 3%, cheklovlarsiz" }
          ],
          correctAnswer: 1,
        },
        {
          question: {
            ru: "Какое решение будет принято в системе CRM-light при превышении возрастного лимита по «R-3 микрозайм»?",
            en: "What decision will be made in the CRM-light system if the age limit is exceeded for the “R-3 Microloan”?",
            uz: "“R-3 mikroqarz” bo‘yicha yosh chegarasi oshib ketganda CRM-light tizimida qanday qaror qabul qilinadi?"
          },
          options: [
            { ru: "Одобрить займ, если клиент получает пенсию", en: "Approve the loan if the client receives a pension", uz: "Agar mijoz pensiya olsa, qarzni tasdiqlash" },
            { ru: "Отказать в выдаче, так как возрастной лимит — до 70 лет на дату последнего платежа", en: "Deny the issuance, as the age limit is up to 70 years on the date of the last payment", uz: "Oxirgi to‘lov sanasiga ko‘ra yosh chegarasi 70 yoshgacha bo‘lgani uchun berishni rad etish" },
            { ru: "Разрешить займ только на сумму до 20 млн сум", en: "Allow the loan only for an amount up to 20 million UZS", uz: "Qarzni faqat 20 million so‘mgacha bo‘lgan miqdorda ruxsat berish" },
            { ru: "Одобрить займ при наличии поручителя младше 60 лет", en: "Approve the loan if there is a guarantor under 60 years old", uz: "60 yoshdan kichik kafil mavjud bo‘lsa, qarzni tasdiqlash" }
          ],
          correctAnswer: 1,
        },
        {
          question: {
            ru: "Клиент просит оформить «R-3 микрозайм» сроком на 10 лет. Что ответит сотрудник?",
            en: "The client requests to issue an “R-3 Microloan” for a term of 10 years. What will the employee answer?",
            uz: "Mijoz “R-3 mikroqarz”ni 10 yillik muddatga rasmiylashtirishni so‘rayapti. Xodim nima javob beradi?"
          },
          options: [
            { ru: "Можно оформить, но ставка увеличится", en: "It can be issued, but the interest rate will increase", uz: "Rasmiylashtirish mumkin, lekin foiz stavkasi oshadi" },
            { ru: "Срок займа определяется по желанию клиента", en: "The loan term is determined according to the client’s preference", uz: "Qarz muddati mijozning istagiga ko‘ra belgilanadi" },
            { ru: "Максимальный срок составляет 60 месяцев, более длительные сроки не предусмотрены", en: "The maximum term is 60 months; longer terms are not provided", uz: "Maksimal muddat 60 oy; undan uzoq muddatlar nazarda tutilmagan" },
            { ru: "Возможно оформить на 10 лет только по решению филиала", en: "It is possible to issue for 10 years only by the decision of the branch", uz: "Faqat filial qaroriga binoan 10 yillik muddatga rasmiylashtirish mumkin" }
          ],
          correctAnswer: 2,
        },
        {
          question: {
            ru:"Клиенту 25 лет, он работает официально 4 месяца. Может ли он получить «R-3 микрозайм»?",
            en:"The client is 25 years old and has been officially employed for 4 months. Can he receive the “R-3 Microloan”?",
            uz:"Mijoz 25 yoshda va rasmiy ishlay boshlaganiga 4 oy bo‘lgan. U “R-3 mikroqarz”ni olishi mumkinmi?"

          },
          options: [
            {ru:"Да, при условии что сумма меньше 10 млн сум",en:"Yes, provided that the amount is less than 10 million UZS",uz:"Ha, agar summa 10 million so‘mdan kam bo‘lsa"},
            {ru:"Да, так как он старше 20 лет",en:"Yes, because he is older than 20 years",uz:"Ha, chunki u 20 yoshdan katta"},
            {ru:"Нет, минимальный стаж работы должен быть 6 месяцев",en:"No, the minimum work experience must be 6 months",uz:"Yo‘q, minimal ish staji 6 oy bo‘lishi kerak"},
            {ru:"Да, если предоставит справку о доходах",en:"Yes, if he provides an income certificate",uz:"Ha, agar daromad to‘g‘risidagi ma’lumotnomani taqdim qilsa"}
          ],
          correctAnswer: 2,
        },        
      ],
    },
  
    {
      category: {ru:"Вклады",en:"Deposits",uz:"Omonat"},
      questions: [
        
      ],
    },
  ];
  

  