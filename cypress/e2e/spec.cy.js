/// <reference types="cypress" />
describe("Teste de Componentes",() =>{

  it("Site", ()=>{

    cy.visit("https://agenda-contatos-react.vercel.app/");

  })

  it("Inclusão", ()=>{

    cy.visit("https://agenda-contatos-react.vercel.app/");
    cy.get('#root > div > div > div:nth-child(1) > form > input[type=text]:nth-child(1)').type("Fernando de Lima")
    cy.get('#root > div > div > div:nth-child(1) > form > input[type=email]:nth-child(2)').type("fernando@gmail.com")
    cy.get('#root > div > div > div:nth-child(1) > form > input[type=tel]:nth-child(3)').type("(11)99999-0943")
    cy.get('#root > div > div > div:nth-child(1) > form > div > button').click()
    
  })

  it("Alteração", ()=>{
    cy.visit("https://agenda-contatos-react.vercel.app/");
    cy.get('#root > div > div > div:nth-child(2) > div.sc-gueYoa.jWEbWB > button.edit').click()

    cy.get('#root > div > div > div:nth-child(1) > form > input[type=text]:nth-child(1)').clear()
    cy.get('#root > div > div > div:nth-child(1) > form > input[type=email]:nth-child(2)').clear()
    cy.get('#root > div > div > div:nth-child(1) > form > input[type=tel]:nth-child(3)').clear()

    cy.get('#root > div > div > div:nth-child(1) > form > input[type=text]:nth-child(1)').type("Pablo Marçal")
    cy.get('#root > div > div > div:nth-child(1) > form > input[type=email]:nth-child(2)').type("marcal@windowslive.com")
    cy.get('#root > div > div > div:nth-child(1) > form > input[type=tel]:nth-child(3)').type("(11)99998-2724")
    
    cy.get('#root > div > div > div:nth-child(1) > form > div > button.alterar').click()
  })

  it("Deletar", ()=>{
    cy.visit("https://agenda-contatos-react.vercel.app/");
    cy.get('#root > div > div > div:nth-child(3) > div.sc-gueYoa.jWEbWB > button.delete').click()
  })

})