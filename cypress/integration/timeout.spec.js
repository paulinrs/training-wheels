

it('exemplo de timeout', function(){
    cy.visit('/timeout')

    cy.contains('button', 'Habilita').click()
    cy.wait(8000)

    cy.get('#firstname')
        .should('be.visible')
        .type('Paulo')


})