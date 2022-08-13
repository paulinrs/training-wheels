

it('deve marcar Guardiões da Galáxia', function(){

    cy.visit('/radios')
    cy.get('input[value=guardians]')
        .click()
        .should('be.checked')

})