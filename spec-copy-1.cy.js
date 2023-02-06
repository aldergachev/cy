///<reference types="Cypress"/>
//describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://itrum.ru')
  })
//})

it('By class', () => {
cy.visit("https://itrum.ru")
cy.get('.navBtn__TP-Kf')
});

it('By for', () => {
  cy.viewport(1920, 1080)
  cy.visit("https://itrum.ru")
  cy.get('[for="tag_mobile_app"]')
  });

it.only('get with find', () => {
  cy.viewport(1920, 1080)
  cy.visit("https://itrum.ru")
  cy.get('div').find('div').find('label').eq(0)
});