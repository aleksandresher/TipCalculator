import "./App.css";
import Bill from ".//components/InputFields/Bill";
import React, { useState, useEffect } from "react";
import Tips from "./components/InputFields/Tips";
import People from "./components/InputFields/People";
import Output from "./components/Result/Output";

function App() {
  const [amount, setAmount] = useState("");
  const [tip, setTip] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [calculated, setCalculated] = useState("");
  const [perPerson, setPerPerson] = useState("");
  const [error, setError] = useState("");

  function amountChangeHandler(e) {
    e.preventDefault();
    setAmount(e.target.value);
  }

  function tipHolder(event) {
    setTip(event.target.innerText);
  }

  function changeHandler(e) {
    e.preventDefault();
    setTip(e.target.value);
  }

  function peoplechangeHandler(e) {
    e.preventDefault();
    setNumberOfPeople(e.target.value);
  }

  useEffect(
    function () {
      if (amount > 0 && tip !== "" && numberOfPeople > 0) {
        const calcResult = amount / numberOfPeople;
        setCalculated(calcResult);
        const tipCalc = (amount * tip) / 100 / numberOfPeople;
        setPerPerson(tipCalc);
      } else if (numberOfPeople === "0") {
        setError("Number of People can't be 0");
      }
    },
    [amount, tip, numberOfPeople]
  );

  function resetResult() {
    setCalculated("");
    setAmount("");
    setPerPerson("");
    setNumberOfPeople("");
    setError("");
  }

  useEffect(
    function () {
      if (numberOfPeople === "0") {
        setError("Number of peope can't be 0");
      } else if (numberOfPeople !== "0") {
        setError("");
      }
    },
    [numberOfPeople]
  );

  return (
    <div className="container">
      <Bill amount={amount} amountChangeHandler={amountChangeHandler} />
      <Tips
        clickHandler={tipHolder}
        changeHandler={changeHandler}
        clicked={true}
      />
      <People
        changeHandler={peoplechangeHandler}
        value={numberOfPeople}
        error={error}
      />
      <Output calculated={calculated} perPerson={perPerson} />
      <button onClick={resetResult}>Reset</button>
    </div>
  );
}

export default App;
