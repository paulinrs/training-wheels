

it('deve exibir as 7 linhas da tabela', function(){
    cy.visit('/tables')
    
    cy.get('table tbody tr')
        .then(function(series){
            expect(series).to.have.length(7)
        })
})

it('deve exibir a série Cobra Kai', function(){
    cy.visit('/tables')
    
    cy.contains('table tbody tr', 'Cobra Kai')
        .then(function(serie){
            expect(serie).to.contain('Netflix')
            expect(serie).to.contain('2018')
        })
})

it('deve remover a série Supernatural', function(){
    cy.visit('/tables')
    
    cy.contains('table tbody tr', 'Supernatural')
        .then(function(serie){
        serie.find('.delete').trigger('click')
    })
        .should('not.exist')
        
    cy.get('table tbody tr')
        .then(function(series){
        expect(series).to.have.length(6)
    })
})