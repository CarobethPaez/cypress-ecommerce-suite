class ProductsPage {
  get pageTitle()       { return cy.get('.title') }
  get productItems()    { return cy.get('.inventory_item') }
  get sortDropdown()    { return cy.get('.product_sort_container') }
  get cartBadge()       { return cy.get('.shopping_cart_badge') }
  get cartIcon()        { return cy.get('.shopping_cart_link') }

  addFirstProductToCart() {
    cy.get('.inventory_item').first().find('button').click()
  }

  addProductByName(name) {
    cy.contains('.inventory_item_name', name)
      .closest('.inventory_item')
      .find('button')
      .click()
  }

  sortBy(option) {
    // Opciones: 'az', 'za', 'lohi', 'hilo'
    this.sortDropdown.select(option)
  }

  goToCart() {
    this.cartIcon.click()
  }
}

module.exports = new ProductsPage()