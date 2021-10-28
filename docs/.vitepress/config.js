module.exports = {
  lang: 'ru-RU',
  title: 'Speech Fitness',
  description: 'Формирование Культуры Публичных Выступлений',

  themeConfig: {
    repo: 'ink-kin/speech.fitness',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Внести изменение страницы на GitHub',
    lastUpdated: 'Версия от ',

    //algolia: {
      //apiKey: 'c57105e511faa5558547599f120ceeba',
      //indexName: 'vitepress'
    //},

    //carbonAds: {
      //carbon: 'CEBDT27Y',
      //custom: 'CKYD62QM',
      //placement: 'vuejsorg'
    //},

    nav: [
      { text: 'Манифест', link: '/', activeMatch: '^/$|^/guide/' },
      { text: 'Конвенция', link: '/pip/' }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Введение', link: '/',
      children: [
        { text: 'Конвенция', link: '/' },
        { text: 'Манифест', link: '/manifesto' }
      ]
    },
    {
      text: 'Культура Публичных Выступлений',
      children: [
        { text: 'Маркетинг/Реклама', link: '/pip/marketing' },
        { text: 'Продажи', link: '/sales/' },
        { text: 'Кадры/Таланты', link: '/people/' },
        { text: 'Бух. и Финансы', link: '/buh/' },
        { text: 'Закон', link: '/law/' },
        { text: 'Инноваци', link: '/innovate/' }
      ]
    },
    {
      text: 'Блог',
      children: [
        { text: 'Вместо вступления', link: '/blog/2020-11-11-introdiction' },
{ text: 'Трудовой договор', link: '/blog/trudovoy-dogovor' },
{ text: 'Что такое правильно оставленная задача', link: '/blog/analist' },
        { text: 'images resize', link: '/blog/paketnoe-izmenenie-izobrazhenij' },
        { text: 'XMLSTARLET USER`S GUIDE', link: '/blog/xmlstar' },
{ text: 'ImageMagick convert --help', link: '/blog/convert_--help' },
{ text: 'ClamAV', link: '/blog/clamav' },
{ text: 'Chrome быстрее, ещё и ещё быстрее', link: '/blog/chrome_answer' },
{ text: 'Зачем нужен Vue.js', link: '/blog/why-vuejs-need' },
{ text: 'Kubernetes', link: '/blog/what-is-kubernetes' },
{ text: 'Список веб-серверов', link: '/blog/web-servers' },
{ text: 'Обзор генераторов статических сайтов', link: '/blog/vybirayem-generator-staticheskikh-saytov' },
{ text: 'Виды электронной подписи', link: '/blog/vidy-elektronnoy-podpisi' },
{ text: 'Жизнь полна ошибок', link: '/blog/top-issue-support-and-bug-tracking-tools' },
{ text: 'MongoDB GUI Tool', link: '/blog/top-9-mongodb-tools' },
{ text: 'Cмысл фильма Время', link: '/blog/time' },
{ text: 'THE FIELD GUIDE to DATA SCIENCE', link: '/blog/The-Field-Guide-to-Data-Science' },
{ text: 'За миллиард лет до конца света', link: '/blog/strugackiy_arkadiy-za_milliard_let_do_konca_sveta' },
{ text: 'Statistical Learning', link: '/blog/StatLearnSparsity' },
{ text: 'SQLite', link: '/blog/sqlite' },
{ text: 'Штатное расписание', link: '/blog/shtat' },
{ text: 'Технологии Четвертой промышленной революции', link: '/blog/shaping_the_fourth_industrial_revolution' },
{ text: 'МАСКА И ДУША', link: '/blog/shalyapin_maska-i-dusha' },
{ text: 'Простое обяснение', link: '/blog/service' },
{ text: 'Сценическая речь: Методическое пособие', link: '/blog/scenic_speech' },
{ text: 'Python коротко пометки', link: '/blog/pyton-tools' },
{ text: 'Время. Отношения. Выбор.', link: '/blog/philosophy' },
{ text: 'Основы математического моделирования', link: '/blog/osnovy_matematicheskogo_modelirovaniya' },
{ text: 'О, наконец настал тот час', link: '/blog/o-nakonets-nastal-tot-chas' },
{ text: 'Коротко об Обама Бюджет', link: '/blog/obama_budget_proposal_2012' },
{ text: 'От ажиотажа к зрелости', link: '/blog/NY2020' },
{ text: 'NanoBlogger', link: '/blog/NanoBlogger' },
{ text: 'Минимально жизнеспособный продукт', link: '/blog/mvp' },
{ text: 'MongoDB Atlas', link: '/blog/mongodb_7_competitive_advantages' },
{ text: 'МЕТОДЫ ОПТИМАЛЬНЫХ РЕШЕНИЙ', link: '/blog/methods-of-optimal-solutions' },
{ text: 'Joe`s Own Editor', link: '/blog/man-joe' },
{ text: 'Linux для приватности', link: '/blog/luchshih-distributivov-linux-dlia-usilennoi-konfidencialnosti-i-bezopasnosti' },
{ text: 'Линус Торвальдс. Человек', link: '/blog/linux-rmlint' },
{ text: 'Управление процессами', link: '/blog/linux-command-basics-7-commands-process-management' },
{ text: 'Linux', link: '/blog/linux' },
{ text: 'Авторский курс на реальном опыте', link: '/blog/lessons' },
{ text: 'Начало работы с Jupyter Notebooks', link: '/blog/jupyter' },
{ text: 'Jamstack', link: '/blog/jamstack' },
{ text: 'Ценности сообщества', link: '/blog/intellectual-values' },
{ text: 'Моделирование', link: '/blog/How-Do-Engineering-Scientists-Think' },
{ text: 'Документирование по ГОСТ 34', link: '/blog/gost-34-comments' },
{ text: 'ГОСТ 34', link: '/blog/gost-34' },
{ text: 'GIT для резервного копирования', link: '/blog/git-backuper' },
{ text: 'Люди часто 5 поступков', link: '/blog/do-five-things' },
{ text: 'Аналитика данных', link: '/blog/data-analist' },
{ text: 'Великая перезагрузка', link: '/blog/chetvertaya_promyshlennaya_revolyuciya_2016' },
{ text: 'Четвертая промышленная революция', link: '/blog/chetvertaya_promyshlennaya_revolyuciya' },
{ text: 'Словарь BI-СИСТЕМ', link: '/blog/business-analysis' },
{ text: 'BRD, MRD и PRD', link: '/blog/brd-mrd-prd-fsd-psd-srs' },
{ text: 'BPM Софт', link: '/blog/bpm_soft' },
{ text: 'Управление бизнес-процессами', link: '/blog/bpm_book_cbok' },
{ text: 'Ты и атомная бомба', link: '/blog/bomb' },
{ text: 'BlueSpice, XWiki и DokuWiki', link: '/blog/BlueSpice_XWiki' },
{ text: 'Методы и правила разработки ПО', link: '/blog/best-practices' },
{ text: 'Business Analysis Body of Knowledge', link: '/blog/babok' },
{ text: 'Как избежать выгорания?', link: '/blog/avoid-burnout-live-happy' },
{ text: 'Проект asciinema', link: '/blog/asciinema' },
{ text: 'Архивирование', link: '/blog/arhivatsiya-v-linux-tar' },
{ text: 'Archi', link: '/blog/archi_modelling_tool' },
{ text: 'ArchiMate', link: '/blog/archimate_courseware' },
{ text: 'Услуги аналитика', link: '/blog/analist-todo' },
{ text: 'Anaconda SODS Report 2020', link: '/blog/Anaconda-SODS-Report-2020-Final' },
{ text: 'Cила Америки в противостоянии с Россией подорвана', link: '/blog/america-smm' },
{ text: 'Agile', link: '/blog/agile' },
{ text: 'Маркетинг/Реклама', link: '/blog/12-best-charting-libraries-for-web-developers' },
      ]
    },
    {
      text: 'Книги',
      children: [
        { text: 'Книги', link: '/books/marketing' },
{ text: 'Проектирование на UML', link: '/books/uml' },
{ text: 'Маркетинг от А до Я: 80 концепций', link: '/blog/kotler_f_marketing_ot_a_do_ya_80_k' },
{ text: 'Психодиагностика', link: '/blog/22857009' },
{ text: 'Удержать клиентов', link: '/blog/7459819' },
{ text: 'Фиолетовая корова', link: '/blog/6158845' },
{ text: 'Кремлевская школа переговоров', link: '/blog/5814905' },
{ text: 'Маркетинг для топ–менеджеров', link: '/blog/2063485' },
      ]
    },
    { text: 'Политика конфиденциальности', link: '/blog/privacy-policy' },
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
