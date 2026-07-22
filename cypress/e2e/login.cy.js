describe('Login', () => {
    it('Realizar login com sucesso', () => {
      // Arrange
        cy.visit('https://www.saucedemo.com/')

      // Act
        cy.get('[data-test="username"]').type('standard_user')
      
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        cy.screenshot('login')

       // Assert
        //cy.url().should('include', '/inventory.html')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it.only('Realizar login informando credenciais inválidas', () => {
      // Arrange
        cy.visit('https://www.saucedemo.com/')

      // Act
        cy.get('[data-test="username"]').type('user.invalid')
      
        cy.get('[data-test="password"]').type('senha')

        cy.get('[data-test="login-button"]').click()  

        cy.screenshot('erro de credenciais invalidas')
       // Assert
       
        cy.get('[data-test="error"]').should(
            'contain.text',
            'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')    
    })
})
  