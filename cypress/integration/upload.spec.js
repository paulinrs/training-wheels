

it('deve fazer o upload da minha foto', function(){
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/prs.jpg'

    cy.get('input[name=file]').selectFile(imageFile, {force: true})

    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/prs.jpg"]', {timeout: 7000})
        .should('be.visible')

})