

it('examplo de timeout', function(){
    cy.visit('/timeout')

    cy.contains('button', 'Habilita').click()

    //cy.wait(7000)

    cy.get('#firstname')
    .should('be.visible')
    .type('Paulo', {timeout: 8000})
})