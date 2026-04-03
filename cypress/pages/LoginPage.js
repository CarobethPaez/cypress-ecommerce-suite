class LoginPage {
  // Selectores
  get usernameInput() { return cy.get('[data-test="username"]') }
  get passwordInput() { return cy.get('[data-test="password"]') }
  get loginButton()   { return cy.get('[data-test="login-button"]') }
  get errorMessage()  { return cy.get('[data-test="error"]') }

  // Acciones
  visit() {
    cy.visit('/')
  }

  login(username, password) {
    this.usernameInput.type(username)
    this.passwordInput.type(password)
    this.loginButton.click()
  }

  getErrorMessage() {
    return this.errorMessage
  }
}

module.exports = new LoginPage()