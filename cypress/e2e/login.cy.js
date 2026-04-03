import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

describe('Login', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('debería iniciar sesión con credenciales válidas', () => {
    cy.fixture('users').then(({ validUser }) => {
      LoginPage.login(validUser.username, validUser.password)
      ProductsPage.pageTitle.should('have.text', 'Products')
    })
  })

  it('debería mostrar error con credenciales inválidas', () => {
    cy.fixture('users').then(({ invalidUser }) => {
      LoginPage.login(invalidUser.username, invalidUser.password)
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Username and password do not match')
    })
  })

  it('debería mostrar error con usuario bloqueado', () => {
    cy.fixture('users').then(({ lockedUser }) => {
      LoginPage.login(lockedUser.username, lockedUser.password)
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Sorry, this user has been locked out')
    })
  })

  it('debería mostrar error si los campos están vacíos', () => {
    LoginPage.loginButton.click()
    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Username is required')
  })

})
