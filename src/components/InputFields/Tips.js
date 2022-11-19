import React from "react";

function Tips({ tipHolder, value, changeHandler }) {
  return (
    <div className="btns">
      <label>Select Tip %</label>
      <button onClick={tipHolder}>5</button>
      <button onClick={tipHolder}>10</button>
      <button onClick={tipHolder}>15</button>
      <button onClick={tipHolder}>25</button>
      <button onClick={tipHolder}>50</button>
      <input
        placeholder="Custom"
        value={value}
        onChange={changeHandler}
        type="number"
      />
    </div>
  );
}
export default Tips;
