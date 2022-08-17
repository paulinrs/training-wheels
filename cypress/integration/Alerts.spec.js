

it('deve validar uma mensagem de Alerta', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Alerta').click()

    cy.on('window:alert', function(result){
        expect(result).to.equal('Isto é uma mensagem de alerta')
    })

})

it('deve validar a mensagem de confirmar', function(){    
    cy.visit('/javascript_alerts')
    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => true)

    cy.get('#result').should('have.text', 'Mensagem confirmada')

})

it('não deve validar a mensagem de confirmar', function(){    
    cy.visit('/javascript_alerts')
    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => false)

    cy.get('#result').should('have.text', 'Mensagem não confirmada')

})
 
it('deve exibir mensagenm de boas vindas', function(){
    cy.visit('/javascript_alerts')

    cy.window().then(function($win){
        cy.stub($win, 'prompt').returns('Flamengo será o Campeão da Libertadores 2022')
        cy.contains('button', 'Prompt').click()
    })
    
    cy.get('#result').should('have.text', 'Olá, Flamengo será o Campeão da Libertadores 2022')
})

        