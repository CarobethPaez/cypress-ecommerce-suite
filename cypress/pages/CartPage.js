class CartPage {
  get cartItems()       { return cy.get('.cart_item') }
  get checkoutButton()  { return cy.get('[data-test="checkout"]') }
  get continueShoppingButton() { return cy.get('[data-test="continue-shopping"]') }

  removeItemByName(name) {
    cy.contains('.cart_item_label', name)
      .closest('.cart_item')
      .find('button')
      .click()
  }

  proceedToCheckout() {
    this.checkoutButton.click()
  }
}

module.exports = new CartPage()