import "./App.css";
import Bill from ".//components/InputFields/Bill";
import React, { useState, useEffect } from "react";
import Tips from "./components/InputFields/Tips";
import People from "./components/InputFields/People";
import Output from "./components/Result/Output";

const allbutton = [
  {
    id: 5,
    text: 5,
    placeholder: "5%",
    selected: false,
  },
  {
    id: 10,
    text: 10,
    placeholder: "10%",
    selected: false,
  },
  {
    id: 15,
    text: 15,
    placeholder: "15%",
    selected: false,
  },
  {
    id: 25,
    text: 25,
    placeholder: "25%",
    selected: false,
  },
  {
    id: 50,
    text: 50,
    placeholder: "50%",
    selected: false,
  },
];

function App() {
  const [amount, setAmount] = useState("");
  const [tip, setTip] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [calculated, setCalculated] = useState("0.00");
  const [perPerson, setPerPerson] = useState("0.00");
  const [error, setError] = useState("");
  const [buttons, setButtons] = useState(allbutton);
  const [custom, setCustom] = useState("");

  function amountChangeHandler(e) {
    e.preventDefault();
    setAmount(e.target.value);
  }

  function tipHolder(event) {
    setTip(event.target.value);
    const newArray = allbutton.map((item) => {
      if (Number(event.target.value) === item.id) {
        return {
          ...item,
          selected: !item.selected,
        };
      } else {
        return item;
      }
    });
    setButtons(newArray);
    setCustom("");

    console.log(event.target);
  }

  function changeHandler(e) {
    e.preventDefault();
    setTip(e.target.value);
    setButtons(allbutton);
    setCustom(e.target.value);
  }

  function peoplechangeHandler(e) {
    e.preventDefault();
    setNumberOfPeople(e.target.value);
  }

  useEffect(
    function () {
      if (amount > 0 && tip !== "" && numberOfPeople > 0) {
        const calcResult = Number(amount / numberOfPeople).toFixed(2);
        setCalculated(calcResult);
        const tipCalc = Number((amount * tip) / 100 / numberOfPeople).toFixed(
          2
        );
        setPerPerson(tipCalc);
      } else if (numberOfPeople === "0") {
        setError("Number of People can't be 0");
      }
    },
    [amount, tip, numberOfPeople]
  );

  function resetResult() {
    setCalculated("0.00");
    setAmount("");
    setPerPerson("0.00");
    setNumberOfPeople("");
    setError("");
    setButtons(allbutton);
    setCustom("");
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
        data={buttons}
        value={custom}
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
