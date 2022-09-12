describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("allows users to subscribe to the email list", () => {


        cy.getByData("email-input").type("a@a.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist")


    })
      
    it("does not allow the user to subscribe to the email list", () => {


        cy.getByData("email-input").type("a@")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")


    })
  })