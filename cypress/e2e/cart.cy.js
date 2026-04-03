import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'

describe('Carrito', () => {

  beforeEach(() => {
    cy.login()
    ProductsPage.addProductByName('Sauce Labs Backpack')
    ProductsPage.addProductByName('Sauce Labs Bike Light')
    ProductsPage.goToCart()
  })

  it('debería mostrar los productos agregados', () => {
    CartPage.cartItems.should('have.length', 2)
    cy.contains('.cart_item', 'Sauce Labs Backpack').should('be.visible')
    cy.contains('.cart_item', 'Sauce Labs Bike Light').should('be.visible')
  })

  it('debería eliminar un producto del carrito', () => {
    CartPage.removeItemByName('Sauce Labs Backpack')
    CartPage.cartItems.should('have.length', 1)
    cy.contains('.cart_item', 'Sauce Labs Backpack').should('not.exist')
  })

  it('debería navegar al checkout desde el carrito', () => {
    CartPage.proceedToCheckout()
    cy.url().should('include', '/checkout-step-one')
  })

  it('debería poder continuar comprando desde el carrito', () => {
    CartPage.continueShoppingButton.click()
    cy.url().should('eq', Cypress.config('baseUrl') + '/inventory.html')
  })

})