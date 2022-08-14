

it('selecionar nascimento do meu filho', function(){
    cy.visit('/datepicker')

    const date = {
        month: 'Sep', //quando for rodar na maquina colocar (set)
        year: '2016',
        day: /^5$/g
    }


    cy.get('.datetimepicker-dummy-input').click()
    
    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()
    
    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year', date.year).click()
    
    cy.contains('button[class=date-item]', date.day).click()

})