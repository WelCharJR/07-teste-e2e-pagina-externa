describe("Tela de login", () => {
    beforeEach(() => {
        cy.visit("https://kaiquecovo.github.io/pagina-para-teste-e2e")
    })

    it("Login com sucesso", () => {
        cy.get('#username').type('admin')
        cy.get('#password').type('1234')
        cy.get('button').click()
        cy.get('p').should('contain', 'Bem-vindo ao sistema. Seu acesso foi autorizado.')
    })

    it("Login inválido", () => {
        cy.get('#username').type('invalidUser')
        cy.get('#password').type('admin')
        cy.get('button').click()
        cy.get('#errorMessage').should('contain', 'Usuário ou senha incorretos!')
    })
});