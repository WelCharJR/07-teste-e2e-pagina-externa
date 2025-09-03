describe("Tela de login", () => {
    beforeEach(() => {
        cy.visit("https://www.hipertrofia.org/forum")
    })

    it("Login com sucesso", () => {
        cy.get('#elUserSignIn').click()
        cy.get('#login_popup_email').type('marcela-barreira@tuamaeaquelaursa.com')
        cy.get('#login_popup_password').type('~9E;E9=+U;$g_r3')
        cy.get('button[value="usernamepassword"]').click()
        cy.url().should('include', '/forum/?_fromLogin=1')
    })

    
});