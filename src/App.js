import logo from "./assets/investment-calculator-logo.png";
import Output from "./components/Output";
import {useState } from "react";
import SubmitForm from "./components/SubmitForm";

function App() {
  const [results, setResults] = useState(false);
  const [error, setError] = useState(false);

  const onCalcSubmitHandler = (userInput) => {
    
    if (
      !userInput["current-savings"] ||
      !userInput["yearly-contribution"] ||
      !userInput["expected-return"] ||
      !userInput["duration"]
    ) {
      setError(true);
      return;
    }

    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"];
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = (currentSavings * expectedReturn) / 100;

      currentSavings += yearlyInterest + yearlyContribution;
      let totalInterest = yearlyInterest * (i + 1);

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest.toFixed(2),
        initialInvestment: +userInput["current-savings"], 
      });
    }

    setResults(yearlyData);
    setError(false);
  };


  const onCancelHandler = () => {
    setResults(false);
  }

  let outPut;

  if (error) {
    //console.log("this?");
    outPut = (
      <p style={{ textAlign: "center", color: "red" }}>
        All fields must be filled and values must be more than zero
      </p>
    );
  } else {
    if (results.length > 0) {
      outPut = <Output data={results} />;
    } else {
      outPut = (
        <p style={{ textAlign: "center" }}>
          Please submit your numbers to see the results
        </p>
      );
    }
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <SubmitForm
        onCalcSubmitHandler={onCalcSubmitHandler}
        onCancel={onCancelHandler}
      />

      {outPut}
    </div>
  );
}

export default App;
