
it('Teste a página da política de privacidade de forma independente', function(){  
    cy.visit('cypress/src/privacy.html')

})

it('verifica o título da aplicação ', function () {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
    cy.contains('Talking About Testing').should('be.visible')
})