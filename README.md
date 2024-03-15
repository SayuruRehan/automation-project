# Basic Test Automation Project

This project is a beginner-level project to get hands-on experience in:
- Unit Testing
- API Testing
- E2E Testing (UI Testing)

We will be building a simple calculator using React and use tools and frameworks like **Mocha, Chai, Postman, and Cypress** to test out our application.

If you want to start the project from scratch, go ahead and follow these steps as a guided project;

## Setting up the backend
1. Create a directory and initialize an empty node project
   
    ```
    mkdir automation
    cd automation
    mkdir calculator-api
    cd calculator-api 
    npm init
    ```

2. Install Mocha and Chai as dev dependencies
   
     ```
     npm install --save-dev mocha chai
     ```

3. Modify the 'package.json' to add test and test watch scripts

     ```
     "scripts": {
       "test": "mocha",
       "test:watch": "mocha --watch --parallel --watch-files test/*"
     },
     ```

4. Create a folder in VS Code root called 'test'
   
5. Create a js file for the tests 'test-calculator.js'

     ```
     it("Is 5 + 2 = 7", (done) => {
       // Define our test assertion
      
      
       done();
     });
     ```

6. Create a util.js file at the root level of calculator-api and implement the calculator

     ```
    const calculator = {
     add: (val1, val2) => val1 + val2,
     subtract: (val1, val2) => val1 - val2,
     multiply: (val1, val2) => val1 * val2,
    };
    export default calculator;
     ```

7. Make the Package.json type as module

     ```
    "author": "",
     "type": "module",
     "license": "ISC",
     ```

8. Update the test-calculator.js by adding the test logic

     ```
    import { expect } from "chai";
    import calculator from "../util.js";
    
    it("Is 5 + 2 = 7", (done) => {
     // Define our test assertion
     expect(calculator.add(5, 2)).to.equal(7);
     done();
    });
     ```

## Implementing the API
9. Install express library
     ```
      npm install -s express
     ```

10. Implement the API with the POST add request
     ```
    // Express web server implementation
    import express from "express";
    import calculator from "./util.js";
      
    const app = express();
    // Use the Json Middleware
    app.use(express.json());
      
    app.post("/api/add", async (req, res) => {
     // Implement the api logic here
     const { val1, val2 } = req.body;
     const result = calculator.add(val1, val2);
     res.send({ result });
    });
      
    app.listen(3000, () => {
     console.log("API has started on port 3000");
    });
     ```

11. Update the package.json to include the start script to start our API
     ```
    "scripts": {
       "start": "node index.js",
       "test": "mocha",
       "test:watch": "mocha --watch --parallel --watch-files test/*"
     },
     ```

12. START the Server!!!
     ```
      npm start
     ```

13. While the server is running open Postman

14. Configure Postman as below by creating a new request
    - Enter the URL
    - Change request method to POST
    - Go to Body set the type as raw and select JSON. In the body section, write the below code as the request body:

    ```
      {
        "val1": 20,
        "val2": 30
      }
     ```

16. Create the test by navigating to the Test tab
     ```
      pm.test("Is 20 + 30 = 50", function () {
         var jsonData = pm.response.json();
         pm.expect(jsonData.result).to.eql(50);
      });
     ```

**Creating the Frontend
16. Setup a new Vite Project
     ```
      npm create vite@latest
     ```

17. Run the Vite App
     ```
      cd ui-calculator
	    npm install
	    npm run dev
     ```

18. Implement the application
     ```
      import { useState } from "react";
      import "./App.css";
      
      
      function App() {
       const [val1, setVal1] = useState();
       const [val2, setVal2] = useState();
       const [result, setResult] = useState();
      
      
       const calculate = async () => {
         const apiResult = await fetch("/api/add", {
           method: "POST",
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             val1: parseInt(val1),
             val2: parseInt(val2),
           }),
         });
         const jsonResult = await apiResult.json();
         setResult(jsonResult.result);
       };
      
      
       return (
         <>
           <h2> Awesome Calculator! </h2>
           <label>Enter Val1 </label>
           <input type="text" onChange={(e) => setVal1(e.target.value)} />
           <br />
           <label>Enter Val2 </label>
           <input type="text" onChange={(e) => setVal2(e.target.value)} />
           <br />
           <br />
           <input type="button" onClick={calculate} value="Calculate" />
           <br />
           <br />
           <label>Result : {result}</label>
         </>
       );
      }
      
      
      export default App;
      
     ```

19. Edit the vite.config.js and add the proxy configuration
     ```
      server: {
         proxy: {
           "/api": {
             target: "http://localhost:3000",
           },
         },
       },
     ```

## Creating UI Automation using Cypress
20. Create a directory called ui-automation
     ```
      mkdir ui-automation
      cd ui-automation
     ```

21. Init a npm project
     ```
      npm init
     ```

22. Install Cypress in the project as a DevDependency
     ```
      npm install --save-dev cypress
     ```

23. Opening the Cypress App
     ```
	    npx cypress open 
     ```

24. Hit Configure E2E test -> Select Manual Spec Configuration (Not Scaffold Examples)

25. Write the spec
     ```
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

     ```

If the project ran successfully and if this repo helped. Please consider giving it a 🌟! Thanks! :octocat:
