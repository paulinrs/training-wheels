   
describe('Manipulando Select 2 Multiplo', function () {
    before(function () {
        cy.visit('/apps/select2/index.html')
    })    

    it('Deve selecionar o Cypress', function(){
        cy.visit('/apps/select2/index.html')
        cy.get('.select2-selection--single').click()
        cy.contains('.select2-results__option', 'Cypress').click()
        
    })
    it('Deve selecionar multiplas opções', function(){

        const frameworks = [
            'Robot Framework',
            'Playwright',
            'Selenium Webdriver'
        ]

        frameworks.forEach(function(framework){
            cy.get('.select2-selection--multiple').click()
            cy.contains('.select2-results__option', framework).click()
        })
    })
    
})