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
     <input type="text" data-test="val1" onChange={(e) => setVal1(e.target.value)} />
     <br />
     <label>Enter Val2 </label>
     <input type="text" data-test="val2" onChange={(e) => setVal2(e.target.value)} />
     <br />
     <br />
     <input type="button" data-test="calculate" onClick={calculate} value="Calculate" />
     <br />
     <br />
     <label>Result : <span data-test="result">{result}</span></label>
   </>
 );
}


export default App;
