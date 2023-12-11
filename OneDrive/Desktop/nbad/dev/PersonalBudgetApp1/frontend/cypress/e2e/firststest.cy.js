describe('Login Demo', () => {
  beforeEach(function () {
    cy.visit('http://localhost:5173/login')

  })

  it('test case', function () {

    cy.get('#\\:r1\\:').type('test@test.com')
    cy.get('#\\:r3\\:').type('123456')
    cy.get('.MuiButtonBase-root').click()
  })
})

