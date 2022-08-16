

it('deve passar o mouse na tecnologia e exibir', function () {
    cy.visit('/hovers')

    const techs = [
        { img: 'img[src*=nodejs]',  tag: '.tag-nodejs',   brand : 'Node.js' },
        { img: 'img[src*=netcore]', tag: '.tag-netcore',  brand: '.NETCore' },
        { img: 'img[src*=golang]',  tag: '.tag-golang',   brand: 'Golang' },
        { img: 'img[src*=python]',  tag: '.tag-python',   brand: 'Python' }
    ]

    techs.forEach(function (tech) {
        cy.wait(500)

        cy.get(tech.img)
            .realHover('mouse')

        cy.get(tech.tag)
            .should('be.visible')
            .should('have.text', tech.brand)
      


    })

})