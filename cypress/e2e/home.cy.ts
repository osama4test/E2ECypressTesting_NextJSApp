describe('home page', () => {
beforeEach(()=> {    //beforeEach Hook used so that we dont need to visit the local host before running each test

  cy.visit('http://localhost:3000/')

})



  it('the h1 contains the correct text', () => {
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })

  it('the features of the file', () => {
    cy.get("dt").eq(0).contains("4 Courses")  //using eq as we need to select a particular value from an array
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})