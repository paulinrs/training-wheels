

it('deve exibir o mensagem de sucesso de popup', function(){
    cy.visit('sweet_alert')

    cy.contains('button', 'Sucesso').click()

    cy.get('.swal-text')
        .should('have.text', 'Você clicou no botão verde.')
})

it('deve exibir o mensagem deu ruim no popup', function(){
    cy.visit('sweet_alert')

    cy.contains('button', 'Deu Ruim').click()

    cy.get('.swal-text')
        .should('have.text', 'Você clicou no botão vermelho.')
})