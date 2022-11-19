import React from "react";

function People({ value, changeHandler, error }) {
  return (
    <div>
      <label>Number of People</label>
      <input
        placeholder="Custom"
        value={value}
        onChange={changeHandler}
        type="number"
      />
      <output>{error}</output>
    </div>
  );
}

export default People;
