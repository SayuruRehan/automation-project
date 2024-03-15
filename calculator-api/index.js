// express web server implementation

// import express
import express from 'express';
import calculator from './util.js';

const app = express();
// use json middleware
app.use(express.json());

app.post("/api/add", async (req,res) => {
    // Implement the api logic here
    const { val1, val2 } = req.body;
    const result = calculator.add(val1, val2);
    res.send({ result });
});

app.listen(3000, () => {
    console.log("API has started on port 3000");
});
   