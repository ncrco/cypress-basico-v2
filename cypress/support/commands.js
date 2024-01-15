// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    const longText = 'teste teste teste teste teste teste teste teste'

    cy.get('#firstName').type("Natalia").should('have.value', 'Natalia')
    cy.get('#lastName').type("Santos").should('have.value', 'Santos')
    cy.get ('#email').type('natalia-ciriaco@hotmail.com').should('have.value','natalia-ciriaco@hotmail.com')
    cy.get ('#phone').type ('11938042029')
    cy.get ('#email-checkbox').click()
    cy.get ('#open-text-area').type(longText)
    
    // Clica no botão Enviar
    cy.contains('button','Enviar').click()

    // Verifica se a mensagem de sucesso está visível
    cy.get('.success').should('be.visible');
})
