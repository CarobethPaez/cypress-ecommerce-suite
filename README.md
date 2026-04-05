---

## Test coverage

| Suite | Tests | Coverage |
|---|---|---|
| Login | 4 | Valid login, invalid credentials, locked user, empty fields |
| Products | 5 | Product listing, sort by price asc/desc, add to cart |
| Cart | 4 | View items, remove item, proceed to checkout, continue shopping |
| Checkout | 5 | Complete flow, missing first name, last name and postal code, order summary |
| **Total** | **18** | |

---

## Getting started

### Prerequisites
- Node.js 18+
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/CarobethPaez/cypress-ecommerce-suite.git
cd cypress-ecommerce-suite

# Install dependencies
npm install
```

### Run tests
```bash
# Headless mode
npx cypress run

# Interactive mode
npx cypress open

# Single spec
npx cypress run --spec "cypress/e2e/login.cy.js"

# With HTML report
npx cypress run --reporter cypress-mochawesome-reporter
```

---

## CI/CD

Every push to `main` triggers the GitHub Actions workflow which:

1. Installs dependencies
2. Runs the full test suite in headless mode
3. Uploads the HTML report and videos as artifacts

---

## Application under test

**Sauce Demo** — [saucedemo.com](https://www.saucedemo.com)
A demo e-commerce app provided by Sauce Labs specifically built for
practicing test automation.