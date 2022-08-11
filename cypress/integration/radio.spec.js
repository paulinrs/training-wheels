

it('deve marcar Guardiões da Galáxia', function(){

    cy.visit('https://training-wheels-qaninja.herokuapp.com/radios')
    cy.get('input[value=guardians]')
        .click()
        .should('be.checked')

})