export type Locale = 'uk' | 'en'

export const LOCALE_STORAGE_KEY = 'arteys-prime-locale'

export const translations = {
  uk: {
    meta: {
      title: 'Артейс Прайм — Виробництво арматури',
      description:
        'Артейс Прайм — виробництво арматури класів A400C, A500C та супутніх виробів. Поставки для будівництва й інфраструктури.',
    },
    nav: {
      about: 'Про компанію',
      products: 'Продукція',
      advantages: 'Переваги',
      production: 'Виробництво',
      contacts: 'Контакти',
      request: 'Запит пропозиції',
    },
    lang: { uk: 'UA', en: 'EN', label: 'Мова' },
    hero: {
      brand: 'Артейс Прайм',
      tagline: 'Виробництво арматури',
      lead:
        'Сталева арматура для несучих конструкцій, фундаментів та інфраструктурних обʼєктів — з контрольованою якістю та стабільними поставками.',
      ctaPrimary: 'Отримати пропозицію',
      ctaSecondary: 'Дивитися продукцію',
      imageAlt:
        'Будівельний майданчик з сіткою арматури перед бетонуванням',
    },
    about: {
      eyebrow: 'Про компанію',
      title: 'Промислове виробництво арматури для будівельного ринку',
      p1: 'Артейс Прайм спеціалізується на виробництві та постачанні арматурного прокату для житлового, комерційного й інфраструктурного будівництва. Ми орієнтовані на B2B-партнерів: генпідрядників, девелоперів, металотрейдерів і виробничі підприємства.',
      p2: 'Наша мета — забезпечити стабільну якість металу, точну відповідність замовленню за класом і діаметром, а також зрозумілі строки відвантаження. Працюємо з типовими проєктами й нестандартними специфікаціями під потреби обʼєкта.',
      imageAlt: 'Робітники з пачками арматури на бетонній плиті',
      imageAltSecondary: 'Арматурний каркас колони на будівельному майданчику',
      stats: [
        { value: 'Ø6–40', label: 'мм діапазон діаметрів' },
        { value: 'A400C / A500C', label: 'класи арматури' },
        { value: 'B2B', label: 'фокус на оптові поставки' },
      ],
    },
    products: {
      eyebrow: 'Продукція',
      title: 'Арматура та супутні рішення під специфікацію обʼєкта',
      lead: 'Поставляємо арматурний прокат у прутках і бухтах, різання в розмір та комплектацію під графік будівництва.',
      items: [
        {
          title: 'Арматура A500C',
          text: 'Гарячекатана арматурна сталь класу A500C для несучих елементів: колони, плити, фундаменти. Діаметри за запитом.',
          tags: ['Прутки', 'Бухти', 'Ø6–40 мм'],
          imageAlt: 'Крупний план ребристої сталевої арматури',
        },
        {
          title: 'Арматура A400C',
          text: 'Класична арматура A400C для конструкцій, де потрібна перевірена міцність і сумісність із проєктною документацією.',
          tags: ['Прутки', 'Бухти', 'Стандартні довжини'],
          imageAlt: 'Штабель арматурних прутків на відкритому складі',
        },
        {
          title: 'Прутки та бухти',
          text: 'Постачання у прутках фіксованої довжини або в бухтах — залежно від технології армування та логістики на майданчику.',
          tags: ['Прутки', 'Бухти', 'Опт'],
          imageAlt: 'Вертикальний арматурний каркас крупним планом',
        },
        {
          title: 'Різання в розмір',
          text: 'Послуга різання арматури під задані довжини зменшує відходи на обʼєкті та прискорює монтаж каркасів.',
          tags: ['Cut-to-length', 'Під замовлення'],
          imageAlt: 'Пачки арматури й різання на будівельному майданчику',
        },
        {
          title: 'Супутні вироби',
          text: 'Супутні позиції для армування: дріт, сітка та інші вироби за узгодженою специфікацією партії.',
          tags: ['Дріт', 'Сітка', 'Комплектація'],
          imageAlt: 'Бетонування плити поверх сітки арматури',
        },
        {
          title: 'Логістика партій',
          text: 'Формування партій під графік поставок: маркування, упаковка та відвантаження згідно з вашим замовленням.',
          tags: ['Партії', 'Відвантаження'],
          imageAlt: 'Робітник на майданчику біля арматурних каркасів',
        },
      ],
    },
    advantages: {
      eyebrow: 'Якість і переваги',
      title: 'Контроль параметрів і передбачувана співпраця',
      lead: 'Працюємо за внутрішніми процедурами контролю якості та супровідною документацією до партій. Конкретні номери сертифікатів надаємо за запитом для відповідної партії.',
      imageAlt: 'Обробка сталі з іскрами на промисловому майданчику',
      items: [
        {
          title: 'Контроль механічних властивостей',
          text: 'Перевірка ключових параметрів прокату перед відвантаженням — щоб партія відповідала заявленому класу.',
        },
        {
          title: 'Система управління якістю',
          text: 'Виробничі процеси побудовані з орієнтацією на стандарти серії ISO щодо управління якістю. Деталі сертифікації — у комерційній пропозиції.',
        },
        {
          title: 'Прозора специфікація',
          text: 'Клас, діаметр, довжина, форма поставки та обсяг фіксуються в замовленні — менше розбіжностей на прийманні.',
        },
        {
          title: 'Стабільні строки',
          text: 'Плануємо виробництво й відвантаження під ваш графік будівництва або складські цикли.',
        },
        {
          title: 'B2B-підхід',
          text: 'Оптові обсяги, повторювані замовлення та підтримка закупівельних відділів генпідрядників і трейдерів.',
        },
        {
          title: 'Супровідна документація',
          text: 'Паспорт / сертифікат якості на партію та інші документи за домовленістю — без вигаданих реєстраційних номерів у публічних матеріалах.',
        },
      ],
    },
    production: {
      eyebrow: 'Виробництво',
      title: 'Від сировини до відвантаження партії',
      lead: 'Короткий огляд виробничого циклу — щоб замовник розумів, як формується якість і строки.',
      imageAlt: 'Робітник на промисловому майданчику з арматурними каркасами',
      steps: [
        {
          num: '01',
          title: 'Приймання сировини',
          text: 'Вхідний контроль заготовок і супровідних документів перед запуском у виробництво.',
        },
        {
          num: '02',
          title: 'Прокат і формування профілю',
          text: 'Формування арматурного профілю заданого діаметра та класу згідно з технологічним регламентом.',
        },
        {
          num: '03',
          title: 'Контроль параметрів',
          text: 'Перевірка геометрії, механічних характеристик і відповідності партії замовленню.',
        },
        {
          num: '04',
          title: 'Різання, пакування, відвантаження',
          text: 'Різання в розмір за потреби, маркування партії та відвантаження за узгодженим графіком.',
        },
      ],
      applicationsTitle: 'Сфери застосування',
      applications: [
        {
          title: 'Житлове та комерційне будівництво',
          text: 'Каркаси монолітних будинків, фундаменти, перекриття, колони та сходові марші.',
          imageAlt: 'Сучасна багатоповерхова будівля — результат застосування арматури',
        },
        {
          title: 'Інфраструктура',
          text: 'Мости, шляхопроводи, підпірні стіни, обʼєкти транспортної та інженерної інфраструктури.',
          imageAlt: 'Бетонування конструкції з видимою арматурною сіткою',
        },
        {
          title: 'Промислові обʼєкти',
          text: 'Цехи, склади, енергетичні й виробничі комплекси з підвищеними вимогами до несучих конструкцій.',
          imageAlt: 'Будівельний майданчик з арматурою та робітниками',
        },
      ],
    },
    contacts: {
      eyebrow: 'Контакти',
      title: 'Запит комерційної пропозиції',
      lead: 'Опишіть клас, діаметри, обсяг і форму поставки — підготуємо орієнтовну пропозицію для вашого проєкту.',
      region: 'Регіон',
      regionValue: 'Київська область (плейсхолдер)',
      phone: 'Телефон',
      phoneValue: '+380 (00) 000-00-00 (плейсхолдер)',
      email: 'Email',
      emailValue: 'sales@arteys-prime.example (плейсхолдер)',
      hours: 'Графік',
      hoursValue: 'Пн–Пт, 09:00–18:00',
      form: {
        name: 'Імʼя / компанія',
        namePh: 'ТОВ «Приклад»',
        contact: 'Телефон або email',
        contactPh: '+380… або name@company.ua',
        message: 'Специфікація запиту',
        messagePh: 'Клас A500C, Ø12–16, прутки, орієнтовний обсяг…',
        submit: 'Надіслати запит',
        note: 'Форма демонстраційна: дані не відправляються на сервер. Скопіюйте запит і надішліть на email вище.',
        success: 'Дякуємо! Скопіюйте текст запиту та надішліть його на sales@arteys-prime.example.',
      },
    },
    footer: {
      brand: 'Артейс Прайм',
      tagline: 'Виробництво арматури',
      rights: 'Демонстраційний маркетинговий сайт. Контакти — плейсхолдери.',
      credits: 'Фото: Unsplash і Pexels (вільна ліцензія). Див. README.',
    },
  },
  en: {
    meta: {
      title: 'Arteys Prime — Rebar Production',
      description:
        'Arteys Prime — reinforcement steel production: A400C, A500C and related products for construction and infrastructure.',
    },
    nav: {
      about: 'About',
      products: 'Products',
      advantages: 'Advantages',
      production: 'Production',
      contacts: 'Contacts',
      request: 'Request quote',
    },
    lang: { uk: 'UA', en: 'EN', label: 'Language' },
    hero: {
      brand: 'Arteys Prime',
      tagline: 'Rebar production',
      lead:
        'Reinforcement steel for structural frames, foundations and infrastructure — controlled quality and dependable B2B supply.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'View products',
      imageAlt:
        'Construction site with a dense rebar grid prepared for concrete pour',
    },
    about: {
      eyebrow: 'About',
      title: 'Industrial rebar manufacturing for the construction market',
      p1: 'Arteys Prime produces and supplies reinforcement steel for residential, commercial and infrastructure projects. We serve B2B partners: general contractors, developers, metal traders and manufacturing companies.',
      p2: 'Our focus is consistent steel quality, precise class and diameter fulfilment, and clear dispatch timelines. We support both standard project schedules and custom specifications for the job site.',
      imageAlt: 'Workers with rebar bundles on a concrete slab',
      imageAltSecondary: 'Reinforcement steel cage for a structural column',
      stats: [
        { value: 'Ø6–40', label: 'mm diameter range' },
        { value: 'A400C / A500C', label: 'rebar classes' },
        { value: 'B2B', label: 'wholesale supply focus' },
      ],
    },
    products: {
      eyebrow: 'Products',
      title: 'Rebar and related solutions to project specification',
      lead: 'Reinforcement in bars and coils, cut-to-length service, and batch preparation aligned with construction schedules.',
      items: [
        {
          title: 'A500C rebar',
          text: 'Hot-rolled A500C reinforcement for load-bearing elements: columns, slabs and foundations. Diameters on request.',
          tags: ['Bars', 'Coils', 'Ø6–40 mm'],
          imageAlt: 'Close-up of ribbed steel reinforcement bars',
        },
        {
          title: 'A400C rebar',
          text: 'Proven A400C steel where project documentation requires this class and predictable mechanical performance.',
          tags: ['Bars', 'Coils', 'Standard lengths'],
          imageAlt: 'Stack of reinforcement bars in outdoor storage',
        },
        {
          title: 'Bars and coils',
          text: 'Supply in fixed-length bars or coils — matching your reinforcement method and site logistics.',
          tags: ['Bars', 'Coils', 'Wholesale'],
          imageAlt: 'Vertical rebar cage photographed from below',
        },
        {
          title: 'Cut-to-length',
          text: 'Cutting to specified lengths reduces on-site scrap and speeds up cage assembly.',
          tags: ['Cut-to-length', 'Made to order'],
          imageAlt: 'Rebar bundles and cutting work on a construction site',
        },
        {
          title: 'Related products',
          text: 'Supporting items for reinforcement works: wire, mesh and other products per agreed batch specification.',
          tags: ['Wire', 'Mesh', 'Kitting'],
          imageAlt: 'Concrete being poured over a rebar mesh',
        },
        {
          title: 'Batch logistics',
          text: 'Batch preparation for delivery schedules: labelling, packing and dispatch per your purchase order.',
          tags: ['Batches', 'Dispatch'],
          imageAlt: 'Construction worker near reinforcement cages on site',
        },
      ],
    },
    advantages: {
      eyebrow: 'Quality & advantages',
      title: 'Parameter control and predictable partnership',
      lead: 'We follow internal quality procedures and provide batch documentation. Specific certificate details are shared on request for the relevant lot — we do not publish invented certificate IDs.',
      imageAlt: 'Steel fabrication sparks on an industrial worksite',
      items: [
        {
          title: 'Mechanical property checks',
          text: 'Key rolling parameters are verified before dispatch so the lot matches the declared class.',
        },
        {
          title: 'Quality management approach',
          text: 'Production processes are oriented toward ISO-style quality management practices. Certification details are shared in commercial proposals.',
        },
        {
          title: 'Clear specifications',
          text: 'Class, diameter, length, supply form and volume are locked in the order — fewer disputes at goods receipt.',
        },
        {
          title: 'Reliable lead times',
          text: 'We plan production and dispatch around your construction or warehouse cycle.',
        },
        {
          title: 'B2B-first service',
          text: 'Wholesale volumes, repeat orders and support for procurement teams at contractors and traders.',
        },
        {
          title: 'Batch documentation',
          text: 'Quality passport / mill certificate per lot and other documents as agreed — without fake registration numbers on the public site.',
        },
      ],
    },
    production: {
      eyebrow: 'Production',
      title: 'From feedstock to dispatched lot',
      lead: 'A concise process overview so buyers understand how quality and lead times are formed.',
      imageAlt: 'Worker on an industrial site with reinforcement cages',
      steps: [
        {
          num: '01',
          title: 'Incoming feedstock',
          text: 'Incoming inspection of billets and accompanying documents before production start.',
        },
        {
          num: '02',
          title: 'Rolling & profile forming',
          text: 'Forming the rebar profile for the ordered diameter and class per process regulations.',
        },
        {
          num: '03',
          title: 'Parameter control',
          text: 'Geometry and mechanical checks to confirm the lot matches the purchase order.',
        },
        {
          num: '04',
          title: 'Cutting, packing, dispatch',
          text: 'Cut-to-length when needed, lot labelling and dispatch on the agreed schedule.',
        },
      ],
      applicationsTitle: 'Applications',
      applications: [
        {
          title: 'Residential & commercial',
          text: 'Monolithic building frames, foundations, slabs, columns and stair flights.',
          imageAlt: 'Modern multi-storey building — end use of reinforcement steel',
        },
        {
          title: 'Infrastructure',
          text: 'Bridges, overpasses, retaining walls and transport or utility infrastructure.',
          imageAlt: 'Concrete pour over visible reinforcement mesh',
        },
        {
          title: 'Industrial facilities',
          text: 'Plants, warehouses and energy complexes with demanding structural requirements.',
          imageAlt: 'Construction site with rebar and workers',
        },
      ],
    },
    contacts: {
      eyebrow: 'Contacts',
      title: 'Request a commercial proposal',
      lead: 'Share class, diameters, volume and supply form — we will prepare an indicative quote for your project.',
      region: 'Region',
      regionValue: 'Kyiv region (placeholder)',
      phone: 'Phone',
      phoneValue: '+380 (00) 000-00-00 (placeholder)',
      email: 'Email',
      emailValue: 'sales@arteys-prime.example (placeholder)',
      hours: 'Hours',
      hoursValue: 'Mon–Fri, 09:00–18:00',
      form: {
        name: 'Name / company',
        namePh: 'Example LLC',
        contact: 'Phone or email',
        contactPh: '+380… or name@company.com',
        message: 'Request details',
        messagePh: 'A500C, Ø12–16, bars, approx. volume…',
        submit: 'Send request',
        note: 'Demo form: data is not sent to a server. Copy your request and email it to the address above.',
        success: 'Thank you! Copy your request and send it to sales@arteys-prime.example.',
      },
    },
    footer: {
      brand: 'Arteys Prime',
      tagline: 'Rebar production',
      rights: 'Demo marketing site. Contact details are placeholders.',
      credits: 'Photos: Unsplash and Pexels (free licenses). See README.',
    },
  },
} as const

export type Translation = (typeof translations)[Locale]
