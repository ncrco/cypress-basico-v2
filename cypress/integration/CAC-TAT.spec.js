//Exercício 1


describe('Acesse a aplicação',() => {
    beforeEach (() => {
    cy.visit('cypress/src/index.html')
    });

    it('verifica o título da aplicação', function() {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
})

    it('preenche os campos obrigatórios e envia o formulário', function(){
    cy.get('#firstName').type("Natalia").should('have.value', 'Natalia')
    cy.get('#lastName').type("Santos").should('have.value', 'Santos')
    cy.get ('#email').type('natalia-ciriaco@hotmail.com').should('have.value','natalia-ciriaco@hotmail.com')
    cy.get ('#phone').type ('11938042029')
    cy.get('#product').select('Blog');
    cy.get ('#support-type').click()
    cy.get ('#support-type > :nth-child(4)').click()
    cy.get ('#email-checkbox').click()
    cy.get ('#open-text-area').type(" ")
    
    // Clica no botão Enviar
    cy.get('.button').click();

    // Verifica se a mensagem de sucesso está visível
    cy.get('.success').should('be.visible');
    
})
})  
 