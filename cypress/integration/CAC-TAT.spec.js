//Exercício 1


describe('Acesse a aplicação',() => {
    beforeEach (() => {
    cy.visit('cypress/src/index.html')
    });

    it('verifica o título da aplicação', function() {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
})

    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'teste teste teste teste teste teste teste teste'

    cy.get('#firstName').type("Natalia").should('have.value', 'Natalia')
    cy.get('#lastName').type("Santos").should('have.value', 'Santos')
    cy.get ('#email').type('natalia-ciriaco@hotmail.com').should('have.value','natalia-ciriaco@hotmail.com')
    cy.get ('#phone').type ('11938042029')
    cy.get('select').select('Blog')
    cy.get ('#support-type').click()
    cy.get ('#support-type > :nth-child(4)').click()
    cy.get ('#email-checkbox').click()
    cy.get ('#open-text-area').type(longText)
    
    // Clica no botão Enviar 
    cy.contains('button','Enviar').click()

    // Verifica se a mensagem de sucesso está visível
    cy.get('.success').should('be.visible');
    
})// fim do it de preenche campos obrigatórios   //Exercício 1

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        const longText = 'teste teste teste teste teste teste teste teste'
        cy.get('#firstName').type("Natalia")
        cy.get('#lastName').type("Santos")
        cy.get ('#email').type('natalia-ciriaco@hotmail,com')
        cy.get ('#open-text-area').type(longText)
        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')
        
    })// fim do it de validação    //Exercício 2

    
    it('campo telefone continua vazio quando preenchido com valor não-numérico', function(){
        cy.get('#phone').type('11938042029').should('have.value','11938042029')
    }) //Exercício 3
    
    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
            const longText = 'teste teste teste teste teste teste teste teste'
    
        cy.get('#firstName').type("Natalia").should('have.value', 'Natalia')
        cy.get('#lastName').type("Santos").should('have.value', 'Santos')
        cy.get ('#email').type('natalia-ciriaco@hotmail.com').should('have.value','natalia-ciriaco@hotmail.com')
        cy.get('#phone-checkbox').click() //telefone obrigatório porém não preenchido
        cy.get ('#open-text-area').type(longText)
        
        // Clica no botão Enviar
        cy.contains('button','Enviar').click()
    
        // Verifica se a mensagem de sucesso está visível
        cy.get('.error').should('be.visible');

    })// fim do it  //Exercício 4
    
    //insere os dados e apaga automáticamente
    //Cypress._.times(5,()=> executa mais de uma vez o teste
    it('Preenche e limpa os campos nome, sobrenome, email e telefone', function(){

        cy.get('#firstName').type("Natalia").should('have.value', 'Natalia').clear().should('have.value', (''))
        cy.get('#lastName').type("Santos").should('have.value', 'Santos').clear().should('have.value', (''))
        cy.get ('#email').type('natalia-ciriaco@hotmail.com').should('have.value','natalia-ciriaco@hotmail.com').clear().should('have.value',(''))
        cy.get ('#phone').type ('11938042029').should('have.value','11938042029').clear().should('have.value',(''))
        cy.get('#firstName').type("Luiza").should('have.value', 'Luiza').clear().should('have.value', (''))
        cy.get('#lastName').type("Brito").should('have.value', 'Brito').clear().should('have.value', (''))
        cy.get ('#email').type('luiza.brito@crmbonus.com').should('have.value','luiza.brito@crmbonus.com').clear().should('have.value',(''))
        cy.get ('#phone').type ('11911640820').should('have.value','11911640820').clear().should('have.value',(''))
   
    })//fim do it  //Exercício 5

    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
                // Clica no botão Enviar
                cy.contains('button','Enviar').click()
    
                // Verifica se a mensagem de sucesso está visível
                cy.get('.error').should('be.visible');

    })  //Exercício 6

    it('Envia formulário com sucesso usando um comando customizado',function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')

    })//fim do it de comando customizado, é necessário o import no index e a funçaõ lógica no commands.js  //Exercício 7
    
    it('Seleciona um produto', function (){
        cy.get('#product').select('YouTube').should('have.value','youtube') 

    }) //Exercício 1

    it('Seleciona um produto Mentoria',function(){
        cy.get('#product').select('Mentoria').should('have.value','mentoria')

    }) //Exercício 2

    it('Seleciona um produto Blog',function(){
        cy.get('#product').select('Blog').should('have.value','blog')
    })  //Exercício 3

    it('marca o tipo de atendimento feedback', function(){
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value','feedback')

    })// para seleções únicas no sistema,ao inspecionar, é possível identificar o type e o valor dos campo.

    it('Marcar cada tipo de atendimento', function(){
        cy.get('input[type="radio"]')
        .should('have.length',3)
        .each(function($radio){
            cy.wrap($radio).check()
        })
        
    }) //seleciona e verifica todos os radios da função

    it('marca ambos checkboxes, depois desmarca o último',function(){
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')    
        })

    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
        const longText = 'teste teste teste teste teste teste teste teste'
    
        cy.get('#firstName').type("Natalia").should('have.value', 'Natalia')
        cy.get('#lastName').type("Santos").should('have.value', 'Santos')
        cy.get ('#email').type('natalia-ciriaco@hotmail.com').should('have.value','natalia-ciriaco@hotmail.com')
        cy.get('#phone-checkbox').check() //telefone obrigatório porém não preenchido
        cy.get ('#open-text-area').type(longText)
        
        // Clica no botão Enviar
        cy.contains('button','Enviar').click()
    
        // Verifica se a mensagem de sucesso está visível
        cy.get('.error').should('be.visible');
    })
            
})





 