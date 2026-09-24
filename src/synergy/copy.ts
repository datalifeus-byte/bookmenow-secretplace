export type Locale = 'uk' | 'en'

export const LOCALE_STORAGE_KEY = 'td-synergy-locale'

export const copy = {
  uk: {
    meta: {
      title: 'ТД Синерджи — Будівництво та арматура',
      description:
        'ТОВ «Сінерджи Торговий дім» — будівельні роботи в Києві та комплектація обʼєктів арматурою класів A400C і A500C.',
    },
    lang: { label: 'Мова', uk: 'Українська', en: 'English' },
    nav: {
      works: 'Роботи',
      rebar: 'Арматура',
      approach: 'Як працюємо',
      company: 'Компанія',
      contact: 'Заявка',
      menu: 'Меню',
      close: 'Закрити',
    },
    hero: {
      kicker: 'Торговий дім · Київ',
      title: 'Будуємо обʼєкти і збираємо для них арматуру',
      lead:
        'ТД Синерджи веде загальнобудівельні роботи і готує арматурні заготовки під моноліт: пруток, гнуття, каркаси та поставка на майданчик.',
      primary: 'Описати обʼєкт',
      secondary: 'Перелік робіт',
      photoAlt: 'Баштовий кран над будівельним майданчиком',
      caption: 'Житло, споруди, дороги та інженерні мережі',
    },
    ribbon: ['Будівлі', 'Дороги', 'Мережі', 'Покрівля', 'Арматура', 'Техніка'],
    works: {
      index: '01',
      kicker: 'Будівельні роботи',
      title: 'Те, що компанія виконує на майданчику',
      lead:
        'Напрямки взяті з зареєстрованих видів діяльності ТОВ «Сінерджи Торговий дім»: від зведення будівель до спеціалізованих монтажних робіт.',
      items: [
        {
          title: 'Житлові та нежитлові будівлі',
          text: 'Загальнобудівельні роботи для будинків, офісів, складів і виробничих приміщень.',
        },
        {
          title: 'Дороги та інженерні споруди',
          text: 'Дорожнє будівництво, споруди електропостачання, телекомунікацій та інші конструкції.',
        },
        {
          title: 'Інженерні мережі',
          text: 'Електромонтаж, водопровід, опалення та кондиціонування.',
        },
        {
          title: 'Оздоблення і покрівля',
          text: 'Штукатурні, покрівельні та інші роботи із завершення будівництва.',
        },
        {
          title: 'Інжиніринг',
          text: 'Технічне консультування, випробування та супровід рішень на обʼєкті.',
        },
        {
          title: 'Техніка в оренду',
          text: 'Будівельні машини та вантажний транспорт під графік робіт.',
        },
      ],
      photoAlt: 'Сучасна житлова будівля зі світлим фасадом',
    },
    rebar: {
      index: '02',
      kicker: 'Арматурний цех',
      title: 'Заготовки під моноліт, а не вітрина прокату',
      lead:
        'Для власних обʼєктів і замовників готуємо арматуру в розмір: клас, діаметр, гнуття і каркас узгоджуємо зі специфікацією конструкції.',
      photoAlt: 'Будівельний майданчик з кранами, вигляд згори',
      rows: [
        { name: 'Класи', value: 'A400C та A500C за ДСТУ 3760' },
        { name: 'Діаметри', value: 'Ø8–32 мм — типовий діапазон для каркасів' },
        { name: 'Поставка', value: 'Прутки, бухти малих діаметрів' },
        { name: 'Заготовка', value: 'Різання, гнуття, плоскі каркаси, сітки' },
        { name: 'Куди йде', value: 'Фундаменти, плити, колони, стіни, дороги' },
      ],
      note: 'Сертифікат на конкретну партію прокату передаємо разом із поставкою. Номери документів на сайті не публікуємо.',
    },
    approach: {
      index: '03',
      kicker: 'Хід обʼєкта',
      title: 'Від завдання до здачі',
      steps: [
        { title: 'Завдання', text: 'Дивимось креслення, обсяги бетону та перелік конструкцій.' },
        { title: 'Кошторис', text: 'Фіксуємо роботи, матеріали й черги поставки арматури.' },
        { title: 'Заготовка', text: 'Ріжемо і гнемо арматуру до виходу бригади на захватку.' },
        { title: 'Майданчик', text: 'Ведемо будівельні та монтажні роботи за погодженим графіком.' },
        { title: 'Документи', text: 'Передаємо акти та супровід на матеріали, які ставили в конструкцію.' },
      ],
      photoAlt: 'Креслення і планування будівельного обʼєкта',
    },
    company: {
      index: '04',
      kicker: 'Реєстр',
      title: 'Хто замовник бачить у договорі',
      lead: 'Публічні відомості з Єдиного державного реєстру. Телефон у відкритих даних не зазначений — залиште свій контакт у заявці.',
      facts: [
        { name: 'Повна назва', value: 'ТОВ «Сінерджи Торговий дім»' },
        { name: 'ЄДРПОУ', value: '45779288' },
        { name: 'Засновано', value: '13 листопада 2024' },
        { name: 'Директор', value: 'Рябцева Анастасія Федорівна' },
        { name: 'ПДВ', value: 'Платник, свідоцтво 457792826570' },
        {
          name: 'Основний КВЕД',
          value: '46.73 — оптова торгівля деревиною, будівельними матеріалами та сантехнікою',
        },
        { name: 'Адреса', value: 'просп. Академіка Палладіна, 22, Київ, 03142' },
      ],
      photoAlt: 'Житловий квартал — типовий результат будівельних робіт',
    },
    contact: {
      index: '05',
      kicker: 'Заявка',
      title: 'Напишіть, що будуєте',
      lead: 'Форма збирає текст заявки на цьому пристрої. Дані нікуди не відправляються: скопіюйте їх і передайте зручним каналом.',
      name: 'Імʼя та компанія',
      namePh: 'Як до вас звертатися',
      phone: 'Телефон',
      phonePh: '+380',
      object: 'Тип обʼєкта',
      objectPh: 'Житловий будинок, дорога, склад…',
      message: 'Що потрібно',
      messagePh: 'Роботи, діаметри арматури, терміни',
      submit: 'Зібрати текст заявки',
      copy: 'Скопійовано. Надішліть цей текст менеджеру.',
      addressLabel: 'Юридична адреса',
      hours: 'Пн–пт, 9:00–18:00',
    },
    footer: {
      brand: 'ТД Синерджи',
      legal: 'ТОВ «Сінерджи Торговий дім», ЄДРПОУ 45779288',
      note: 'Окремий сайт компанії. Контактний телефон у реєстрі не опублікований.',
      credits: 'Світлини: Unsplash і Pexels, вільні ліцензії.',
    },
  },
  en: {
    meta: {
      title: 'TD Synergy — Construction and reinforcement',
      description:
        'Synergy Trading House LLC — construction works in Kyiv and reinforcement preparation in A400C and A500C.',
    },
    lang: { label: 'Language', uk: 'Українська', en: 'English' },
    nav: {
      works: 'Works',
      rebar: 'Reinforcement',
      approach: 'How we work',
      company: 'Company',
      contact: 'Enquiry',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      kicker: 'Trading house · Kyiv',
      title: 'We build the structure and prefabricate its reinforcement',
      lead:
        'TD Synergy carries out general construction and prepares rebar for cast-in-place work: bars, bending, cages and delivery to site.',
      primary: 'Describe the job',
      secondary: 'Scope of works',
      photoAlt: 'Tower crane above a construction site',
      caption: 'Housing, structures, roads and utilities',
    },
    ribbon: ['Buildings', 'Roads', 'Utilities', 'Roofing', 'Rebar', 'Plant'],
    works: {
      index: '01',
      kicker: 'Construction',
      title: 'What the company does on site',
      lead:
        'These lines follow the registered activities of Synergy Trading House LLC: from erecting buildings to specialised installation.',
      items: [
        {
          title: 'Residential and other buildings',
          text: 'General construction for housing, offices, warehouses and production space.',
        },
        {
          title: 'Roads and civil structures',
          text: 'Road works, power and telecom structures, and other civil engineering.',
        },
        {
          title: 'Building services',
          text: 'Electrical installation, plumbing, heating and air conditioning.',
        },
        {
          title: 'Finishes and roofing',
          text: 'Plaster, roofing and other works that close out a building.',
        },
        {
          title: 'Engineering support',
          text: 'Technical advice, testing and follow-through on site decisions.',
        },
        {
          title: 'Plant hire',
          text: 'Construction machinery and trucks timed to the work schedule.',
        },
      ],
      photoAlt: 'Contemporary residential building with a pale facade',
    },
    rebar: {
      index: '02',
      kicker: 'Reinforcement shop',
      title: 'Cut and bent for the pour, not a mill catalogue',
      lead:
        'For our own sites and for clients we prepare reinforcement to the structural specification: class, diameter, bends and cages.',
      photoAlt: 'Aerial view of a construction site with tower cranes',
      rows: [
        { name: 'Classes', value: 'A400C and A500C to DSTU 3760' },
        { name: 'Diameters', value: 'Ø8–32 mm — the usual range for cages' },
        { name: 'Supply', value: 'Straight bars, coils for smaller diameters' },
        { name: 'Fabrication', value: 'Cutting, bending, flat cages, mesh' },
        { name: 'Used in', value: 'Foundations, slabs, columns, walls, roads' },
      ],
      note: 'The mill certificate for a specific lot travels with the delivery. We do not publish document numbers on the site.',
    },
    approach: {
      index: '03',
      kicker: 'The job',
      title: 'From brief to handover',
      steps: [
        { title: 'Brief', text: 'We read the drawings, concrete volumes and the list of members.' },
        { title: 'Estimate', text: 'Works, materials and reinforcement delivery waves are fixed.' },
        { title: 'Shop', text: 'Bars are cut and bent before the crew reaches that pour.' },
        { title: 'Site', text: 'Construction and installation follow the agreed sequence.' },
        { title: 'Papers', text: 'You receive acts and the documents for materials built in.' },
      ],
      photoAlt: 'Drawings and planning for a construction project',
    },
    company: {
      index: '04',
      kicker: 'Registry',
      title: 'The name on the contract',
      lead: 'Public records from the Ukrainian company register. No phone is listed there — leave yours in the enquiry.',
      facts: [
        { name: 'Legal name', value: 'Synergy Trading House LLC' },
        { name: 'EDRPOU', value: '45779288' },
        { name: 'Founded', value: '13 November 2024' },
        { name: 'Director', value: 'Anastasiia Riabtseva' },
        { name: 'VAT', value: 'Registered, certificate 457792826570' },
        {
          name: 'Main activity',
          value: '46.73 — wholesale of timber, construction materials and sanitary ware',
        },
        { name: 'Address', value: '22 Akademika Palladina Ave, Kyiv, 03142' },
      ],
      photoAlt: 'A housing block — a typical result of building works',
    },
    contact: {
      index: '05',
      kicker: 'Enquiry',
      title: 'Tell us what you are building',
      lead: 'The form only assembles a message on this device. Nothing is uploaded: copy it and send it by your usual channel.',
      name: 'Name and company',
      namePh: 'How we should address you',
      phone: 'Phone',
      phonePh: '+380',
      object: 'Type of job',
      objectPh: 'Housing, road, warehouse…',
      message: 'What you need',
      messagePh: 'Works, rebar diameters, dates',
      submit: 'Assemble the enquiry',
      copy: 'Copied. Send this text to the manager.',
      addressLabel: 'Registered address',
      hours: 'Mon–Fri, 9:00–18:00',
    },
    footer: {
      brand: 'TD Synergy',
      legal: 'Synergy Trading House LLC, EDRPOU 45779288',
      note: 'A separate company site. No telephone is published in the register.',
      credits: 'Photographs: Unsplash and Pexels, free licenses.',
    },
  },
} as const

export type Messages = (typeof copy)[Locale]
