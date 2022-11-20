import React from "react";
import "../../components/InputFields/Bill.css";

function Bill({ amount, amountChangeHandler }) {
  return (
    <div>
      <label>Bill</label>
      <div className="billContainer">
        <img src="./images/$.png" className="img" />
        <input
          className="billInput"
          value={amount}
          onChange={amountChangeHandler}
          placeholder="0"
          id="amount"
        />
      </div>
    </div>
  );
}

export default Bill;
