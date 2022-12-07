import React from "react";
import "../Bill/Bill.css";
import dollar from "../../../images/$.png";

function Bill({ amount, amountChangeHandler }) {
  return (
    <div>
      <label className="bill">Bill</label>
      <div className="billContainer">
        <img src={dollar} className="img" alt="Dollar" />
        <input
          className="billInput"
          value={amount}
          onChange={amountChangeHandler}
          placeholder="0"
          type="number"
          id="amount"
          min={1}
        />
      </div>
    </div>
  );
}

export default Bill;
