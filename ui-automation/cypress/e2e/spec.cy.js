describe("template spec", () => {
  it("passes", () => {
    // Navigate to our app
    cy.visit("http://localhost:5173");
    cy.wait(1000);
  
    // Enter 100 in the first text field
    cy.get("input[data-test=val1]").type("100");
    cy.wait(1000);
  
    // Enter 200 in the second text field
    cy.get("input[data-test=val2]").type("200");
    cy.wait(1000);
  
    // Click the calculate button
    cy.get("input[data-test=calculate]").click();
    cy.wait(2500);
 
     //Check if the result is 300
    cy.get("span[data-test=result").contains("300");
  });
 });
 