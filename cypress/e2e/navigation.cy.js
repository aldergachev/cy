///<reference types="Cypress"/>

describe('template spec', () => {
  beforeEach(() => {
    cy.log('banana')
    cy.viewport(2560, 1440)
    cy.visit('https://itrum.ru')
  })
  

  //it('By for', () => {
//    cy.get('.navBtn__TP-Kf').click()
//    cy.get('[for="tag_mobile_app"]').click()
//    cy.get('.sendRequest__gNFUq').click()
//    cy.get('.formField__QcZzP.error__TaYeQ')
 //   });
  
  it('Cases page', () => {
    cy.get('#header > div > div.navList__ilJUg > a:nth-child(1)').click()
    cy.get('#main-container > div.cases__dIqyP > h1').contains('Наши проекты и решения')
    cy.get('#main-container > div.cases__dIqyP > div > div.case_item__FU3Qs > div > div > h3').contains('FILARA cosmo')
    cy.get('#main-container > div.cases__dIqyP > div > div.case_item__kYcOg > div > div > h3').contains('Real Estate')
    cy.get('#main-container > div.cases__dIqyP > div > div.case_item__w1cQ8 > div > div > h3').contains('Ukie')
    cy.get('#main-container > div.cases__dIqyP > div > div.case_item__WXIqm > div > div > h3').contains('Continental Clothing Co')
    cy.get('#main-container > div.cases__dIqyP > div > div.case_item__qaXal > div > div > h3').contains('FinPro')
    cy.get('#main-container > div.cases__dIqyP > div > div.add_project__p1XA9 > div')
    cy.get('#main-container > div.cases__dIqyP > div > div.add_project__p1XA9 > h2').contains('Ваш проект')
  });

  it('Services page', () => {
    cy.get('#header > div > div.navList__ilJUg > a:nth-child(2)').click()
    cy.get('#main-container > div').children().eq(1).contains('IT-решения для бизнеса')
    cy.get('#main-container > div').children().eq(2).contains("Мы занимаемся разработкой сайтов")
    cy.get('div > .info_card__OwYX7 ').children().eq(1).contains('Веб-разработка')
    cy.get('.info_card_title__tktnH').contains('Мобильная разработка')
    cy.get('.info_card_title__tktnH').contains('Коробочные решения')
    cy.get('.info_card_title__tktnH').contains('Аутстафф')
    cy.get('.info_card_title__tktnH').contains('No code решения')
    cy.get('.info_card_title__tktnH').contains('Техподдержка')
    cy.get('.info_card_title__tktnH').contains('Дизайн')
    cy.get('.write_manager__A04-A').children().eq(0).contains('Не нашли подходящего решения?')
    cy.get('.main__8VseW').children().eq(0).contains('Принцип работы')
    cy.get('.blockText__UL1jD').children().eq(0).contains('Консультация')
    cy.get('.blockText__UL1jD').children().eq(2).contains('Составление технического задания')
    cy.get('.blockText__UL1jD').children().eq(4).contains('Аналитика')
    cy.get('.blockText__UL1jD').children().eq(6).contains('Дизайн')
    cy.get('.blockText__UL1jD').children().eq(8).contains('Разработка')
    cy.get('.blockText__UL1jD').children().eq(10).contains('Тестирование')
    cy.get('.blockText__UL1jD').children().eq(12).contains('Запуск и поддержка')
    cy.get('.main__TttTu').children().eq(0).contains('Стек технологий')
    cy.get('.contentBlock__HFjk4').children().eq(0).contains('Front-end')
    cy.get('.contentBlock__HFjk4').children().eq(2).contains('Back-end')
    cy.get('.contentBlock__HFjk4').children().eq(4).contains('Базы данных')
    cy.get('.contentBlock__HFjk4').children().eq(6).contains('UI/UX дизайн')
    cy.get('.contentBlock__HFjk4').children().eq(8).contains('Мобильная разработка')
    cy.get('.contentBlock__HFjk4').children().eq(10).contains('DevOps')
    cy.get('.contentBlock__HFjk4').children().eq(12).contains('QA Engineer')

  });

  it('Services page', () => {
    cy.get('#header > div > div.navList__ilJUg > a:nth-child(3)').click()
    cy.get('.preview__Fozf0').children().eq(0).contains('Эксперты в мобильной и веб-разработке')
    cy.get('.preview__Fozf0').children().eq(1).contains('Наша миссия')
    cy.get('.preview__Fozf0').children().eq(2).contains('Мы нацелены на решение задач клиента и точный результат в цифрах.')
    cy.get('.about_us_block__6uoym').children().eq(0).contains('6 лет')
    cy.get('.about_us_block__6uoym').children().eq(1).contains('на рынке')
    cy.get('.about_us_block__6uoym').children().eq(2).contains('100+')
    cy.get('.about_us_block__6uoym').children().eq(3).contains('реализованных проектов')
    cy.get('.about_us_block__6uoym').children().eq(4).contains('80+')
    cy.get('.about_us_block__6uoym').children().eq(5).contains('специалистов')
    cy.get('.about_us_block__6uoym').children().eq(6).contains('8+')
    cy.get('.about_us_block__6uoym').children().eq(7).contains('отраслей сотрудничества')
    cy.get('.reasons__4RBG2').children().eq(0).contains('Наши преимущества')
    cy.get('#main-container > div.reasons__4RBG2 > div > div:nth-child(1) > div > h3').contains('Находим решения под любой бюджет')
    cy.get('#main-container > div.reasons__4RBG2 > div > div:nth-child(1) > p').contains('Создаем масштабируемые IT-продукты для различных областей, в соответствии с графиком и в рамках бюджета. Мы всегда берём на себя ответственность за результат.')
    cy.get('#main-container > div.reasons__4RBG2 > div > div:nth-child(2) > div > h3').contains('Скорость')
    cy.get('#main-container > div.reasons__4RBG2 > div > div:nth-child(2) > p').contains('Мы ценим ваше время, поэтому внедрили услугу «Коробочное решение», которая позволяет сделать продукт всего за 1 месяц.')
    cy.get('#main-container > div.reasons__4RBG2 > div > div:nth-child(3) > div > h3').contains('Поддержка после запуска')
    cy.get('#main-container > div.reasons__4RBG2 > div > div:nth-child(3) > p').contains('Мы осуществляем техническую поддержку после запуска и несем ответственность за качественную работоспособность продукта.')
    cy.get('#main-container > div.reasons__4RBG2 > div > div:nth-child(4) > div > h3').contains('Гибкость в процессах')
    cy.get('#main-container > div.reasons__4RBG2 > div > div:nth-child(4) > p').contains('Работаем по методологии SCRUM и Agile. Подбираем удобный формат для взаимодействия и гарантируем прозрачность на всех этапах разработки.')
    cy.get('#main-container > div.team__4kMzm > h1').contains('Наша команда')
    cy.get('.team_card_1__CeWP1').children().eq(0)
    cy.get('.team_card_2__N83Oi').children().eq(0)
    cy.get('.team_card_3__6m5Ln').children().eq(0)
    cy.get('.team_card_4__fGjiy').children().eq(0)
    cy.get('.team_card_5__XaGLm').children().eq(0)
    cy.get('.team_card_6__ieNTi').children().eq(0)
    cy.get('.team_card_7__gMSJM').children().eq(0)
    cy.get('.team_card_8__BWHxA').children().eq(0)
    cy.get('#main-container > div.rewards__q3M13 > h1').contains('Награды')
    cy.get('.rewards__WEU3K')
    cy.get('#main-container > div.customers__QlK8N > h1').contains('Нам доверяют')
    cy.get('.container__OtclF').children().eq(0).next().next().next().next().next().next().next().next().next().next().next().next().next().next()

  });

  it('Contacts page', () => {
    cy.get('#header > div > div.navList__ilJUg > a:nth-child(4)').click()
    cy.get('.contactTitle__JAEQ1').contains('Мы всегда открыты к преложениям')
    cy.get('.contactInfoTitle__SIKFl').contains('Позвоните нам:')
    cy.get('.contactInfoText__HQeM-').children().eq(0).contains('+ 7 (932) 234-51-23')
    cy.get('.contactInfoTitle__SIKFl').contains('Напишите нам на почту:')
    cy.get('.contactInfoText__HQeM-').contains('welcome@itrum.ru')
  });

  it('Blog page', () => {
    cy.get('#header > div > div.navList__ilJUg > a:nth-child(5)').click()
    cy.get('.searchInBlog__LYcb1').children().eq(0).contains('Рассказываем о решении бизнес-задач с помощью IT-технологий')
    //cy.get('[for="tag_all"]').click()
    //cy.get('[for="tag_optimization"]').click()
    //cy.get('[for="tag_loyalty"]').click()
    //cy.get('[for="tag_offset"]').click()
    //cy.get('[for="tag_raising"]').click()
    //cy.get('[for="tag_reputation"]').click()
    //cy.get('[for="tag_startUp"]').click()
    cy.get('.search__Pf-w3').children().eq(0).type('test{Enter}')
   
  });


})

