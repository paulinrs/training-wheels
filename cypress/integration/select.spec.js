

it('selecionar Scott Lang por id', function(){
    cy.visit('/select')

    cy.get('#avengerList')
        .select('Scott Lang')
        .should('have.value', '7')
})

it ('selecionar Steve Rogers sem id', function(){
    cy.visit('/select')

    cy.contains('option', 'Selecione um personagem')
        .parent()
        .select('Steve Rogers')
        .should('have.value', '1')
})