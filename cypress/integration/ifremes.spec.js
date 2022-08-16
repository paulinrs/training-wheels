
const niceIFrame = function(){
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}
it('deve validar o nome do instagram da QAcademy iframe sem ID', function(){
    cy.visit('/nice_iframe')

    niceIFrame()
        .contains('.UsernameText', 'qacademy_oficial')
        .should('be.visible')
})

const badIFrame = function(){
    return cy
        .get('iframe[src*=instagram]')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}
it('deve validar o nome do instagram da QAcademy com iframe sem ID', function(){
    cy.visit('/bad_iframe')

    badIFrame()
        .contains('.UsernameText', 'qacademy_oficial')
        .should('be.visible')
})        