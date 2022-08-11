

describe('Suite de testes', function(){
    before(function(){
        cy.log('aqui temos algo que roda antes de todos os testes')
    })

    beforeEach(function(){
        cy.log('aqui temos algo que roda antes de todos os casos de testes')
    })

    it('teste 1', function(){
        cy.log('testando o teste 1')
    })

    it('teste 2', function(){
        cy.log('testando o teste 2')
    })

    it('teste 3', function(){
        cy.log('testando o teste 3')
    })

    after(function(){
        cy.log('aqui temos algo que roda depois de todos os testes')
    })

    afterEach(function(){
        cy.log('aqui temos algo que roda depois de todos os casos de testes')
    })
})    
