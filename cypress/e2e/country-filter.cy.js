describe('Country Filter', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should filter countries by name', () => {
    cy.get('input[name="name"]').type('Brazil')
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first td').eq(1).should('contain.text', 'Brazil')
  })

  it('should filter countries by capital', () => {
    cy.get('input[name="capital"]').type('Brasília')
    cy.get('table tbody tr').should('have.length', 1)
    cy.get('table tbody tr:first td').eq(2).should('contain.text', 'Brasília')
  })

  it('should filter countries by language', () => {
    cy.get('select[name="languages"]').select('Portuguese')
    cy.get('table tbody tr').should('have.length', 8)
    cy.get('table tbody tr:first td').eq(1).should('contain.text', 'Angola')
    cy.get('table tbody tr:first td').eq(2).should('contain.text', 'Luanda')
  })

  it('should display no results when no country matches the filter', () => {
    cy.get('input[name="name"]').type('Saturno')
    cy.get('table tbody tr').should('have.length', 0)
  })
})
