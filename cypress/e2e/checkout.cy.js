import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('Checkout', () => {

  beforeEach(() => {
    cy.login()
    ProductsPage.addProductByName('Sauce Labs Backpack')
    ProductsPage.goToCart()
    CartPage.proceedToCheckout()
  })

  it('debería completar el checkout con datos válidos', () => {
    cy.fixture('checkout').then(({ validInfo }) => {
      CheckoutPage.fillInfo(validInfo.firstName, validInfo.lastName, validInfo.postalCode)
      CheckoutPage.continue()
      cy.url().should('include', '/checkout-step-two')
      CheckoutPage.finish()
      CheckoutPage.confirmationMsg.should('have.text', 'Thank you for your order!')
    })
  })

  it('debería mostrar error si el nombre está vacío', () => {
    CheckoutPage.continue()
    CheckoutPage.errorMessage
      .should('be.visible')
      .and('contain', 'First Name is required')
  })

  it('debería mostrar error si el apellido está vacío', () => {
    cy.fixture('checkout').then(({ validInfo }) => {
      CheckoutPage.fillInfo(validInfo.firstName, '', validInfo.postalCode)
      CheckoutPage.continue()
      CheckoutPage.errorMessage
        .should('be.visible')
        .and('contain', 'Last Name is required')
    })
  })

  it('debería mostrar error si el código postal está vacío', () => {
    cy.fixture('checkout').then(({ validInfo }) => {
      CheckoutPage.fillInfo(validInfo.firstName, validInfo.lastName, '')
      CheckoutPage.continue()
      CheckoutPage.errorMessage
        .should('be.visible')
        .and('contain', 'Postal Code is required')
    })
  })

  it('debería mostrar el resumen de orden antes de confirmar', () => {
    cy.fixture('checkout').then(({ validInfo }) => {
      CheckoutPage.fillInfo(validInfo.firstName, validInfo.lastName, validInfo.postalCode)
      CheckoutPage.continue()
      cy.get('.summary_info').should('be.visible')
      cy.get('.cart_item').should('have.length', 1)
    })
  })

})