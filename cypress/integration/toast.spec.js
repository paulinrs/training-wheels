

it('deve exibir um notificação toast', function(){
    cy.visit('/toaster')

    cy.contains('button', 'Toast Rápido').click()

    cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é muito rápida!')

        
    //buscar o corpo do html com o body
    // cy.get('body')
    // cy.wait(3000)
})