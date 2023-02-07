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
  
  it('only name', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('only mail', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('only wrong mail', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });
    
  it('name and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('mail and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('wrong mail and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('wrong mail and wrong phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('test')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('phone only', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('123')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });

  it('wrong phone and empty forms', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('asdf')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });

  it('wrong phone and correct forms', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('asdf')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });





  it('interests + only name', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('interests + only mail', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('interests + only wrong mail', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });
    
  it('interests + name and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('interests + mail and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('interests + wrong mail and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('interests + wrong mail and wrong phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('test')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('interests + phone only', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('123')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });

  it('interests + wrong phone and empty forms', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('asdf')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });

  it('interests + wrong phone and correct forms', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('asdf')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });




  it('description + only name', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('description + only mail', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('description + only wrong mail', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });
    
  it('description + name and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('description + mail and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('description + wrong mail and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('description + wrong mail and wrong phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('test')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('description + phone only', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('123')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });

  it('description + wrong phone and empty forms', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('asdf')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });

  it('description + wrong phone and correct forms', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('asdf')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });



  it('desc + interests + only name', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('desc + interests + only mail', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('description + only wrong mail', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });
    
  it('desc + interests + name and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('desc + interests + mail and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('desc + interests + wrong mail and phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('12880055535353')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('desc + interests + wrong mail and wrong phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('test')
    cy.get('#request-form > form > input').type('test')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('desc + interests + phone only', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('123')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });

  it('desc + interests + wrong phone and empty forms', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('asdf')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });

  it('desc + interests + wrong phone and correct forms', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('asdf')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });



  it('only description', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
 
  });

  it('only interests', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0)
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    cy.get('#request-form > form').children().find('input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
  });




  it('success full contacts', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)').type('88005553535')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#main-container > div.success__ZChdt > h1').contains('Ваша заявка успешно отправлена!')
 
  });

  it('success without phone', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#main-container > div.success__ZChdt > h1').contains('Ваша заявка успешно отправлена!')
 
  });

  it('success with description', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#main-container > div.success__ZChdt > h1').contains('Ваша заявка успешно отправлена!')
 
  });

  it('success with interests', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#main-container > div.success__ZChdt > h1').contains('Ваша заявка успешно отправлена!')
 
  });

  it('success with interests and description', () => {
    cy.get('.navBtn__TP-Kf').click()
    cy.get('#request-form > form > div.formLine__xefor > input')
    cy.get("#request-form form div.formLine__xefor").children().eq(0).type('test')
    cy.get('#request-form > form > div.formLine__xefor > input:nth-child(2)')
    cy.get('#request-form > form > input').type('test@test.com')
    cy.get('#request-form > form > textarea').type('test description')
    cy.get('[for="tag_mobile_app"]').click()
    cy.get('[for="tag_crm"]').click()
    cy.get('[for="tag_other"]').click()
    cy.get('[for="tag_redesign"]').click()
    cy.get('[for="tag_mvp"]').click()
    cy.get('.sendRequest__gNFUq').click()
    //cy.get('#request-form > form > input').invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(0).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    //cy.get('#request-form form div.formLine__xefor').children().eq(1).invoke("attr", "class").should('eq', 'formField__QcZzP error__TaYeQ')
    cy.get('#main-container > div.success__ZChdt > h1').contains('Ваша заявка успешно отправлена!')
 
  });

})

