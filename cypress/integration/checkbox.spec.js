

it('deve marcar os top 5 filmes da marvel', function(){

    cy.visit('/checkboxes')

    const movies =[
     'guardians',
     'antman',
     'avengers4',
     'ironman',
     'cap'
    ]

    movies.forEach(function(m){
        cy.get(`input[name=${m}]`)
        .click()
        .should('be.checked')

    })
    


})