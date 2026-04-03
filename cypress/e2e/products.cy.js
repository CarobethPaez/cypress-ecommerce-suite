import ProductsPage from '../pages/ProductsPage'

describe('Productos', () => {

  beforeEach(() => {
    cy.login() // usa el custom command
  })

  it('debería mostrar el listado de productos', () => {
    ProductsPage.pageTitle.should('have.text', 'Products')
    ProductsPage.productItems.should('have.length', 6)
  })

  it('debería ordenar productos de menor a mayor precio', () => {
    ProductsPage.sortBy('lohi')
    ProductsPage.productItems.then(($items) => {
      const prices = [...$items].map((item) =>
        parseFloat(item.querySelector('.inventory_item_price').innerText.replace('$', ''))
      )
      const sorted = [...prices].sort((a, b) => a - b)
      expect(prices).to.deep.equal(sorted)
    })
  })

  it('debería ordenar productos de mayor a menor precio', () => {
    ProductsPage.sortBy('hilo')
    ProductsPage.productItems.then(($items) => {
      const prices = [...$items].map((item) =>
        parseFloat(item.querySelector('.inventory_item_price').innerText.replace('$', ''))
      )
      const sorted = [...prices].sort((a, b) => b - a)
      expect(prices).to.deep.equal(sorted)
    })
  })

  it('debería agregar un producto al carrito', () => {
    ProductsPage.addFirstProductToCart()
    ProductsPage.cartBadge.should('have.text', '1')
  })

  it('debería agregar múltiples productos al carrito', () => {
    ProductsPage.addProductByName('Sauce Labs Backpack')
    ProductsPage.addProductByName('Sauce Labs Bike Light')
    ProductsPage.cartBadge.should('have.text', '2')
  })

})