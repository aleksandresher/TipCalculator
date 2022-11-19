import React from "react";

function Bill({ amount, amountChangeHandler }) {
  return (
    <div>
      <label>Bill</label>
      <input
        type="number"
        value={amount}
        onChange={amountChangeHandler}
        placeholder="$"
        id="amount"
      />
    </div>
  );
}

export default Bill;
