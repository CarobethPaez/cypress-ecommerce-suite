class CheckoutPage {
  get firstNameInput()  { return cy.get('[data-test="firstName"]') }
  get lastNameInput()   { return cy.get('[data-test="lastName"]') }
  get postalCodeInput() { return cy.get('[data-test="postalCode"]') }
  get continueButton()  { return cy.get('[data-test="continue"]') }
  get finishButton()    { return cy.get('[data-test="finish"]') }
  get confirmationMsg() { return cy.get('.complete-header') }
  get errorMessage()    { return cy.get('[data-test="error"]') }

  fillInfo(firstName, lastName, postalCode) {
  if (firstName) this.firstNameInput.type(firstName)
  if (lastName)  this.lastNameInput.type(lastName)
  if (postalCode) this.postalCodeInput.type(postalCode)
}

  continue() {
    this.continueButton.click()
  }

  finish() {
    this.finishButton.click()
  }
}

module.exports = new CheckoutPage()