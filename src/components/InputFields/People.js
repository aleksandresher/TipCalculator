import React from "react";
import ".//../InputFields/People.css";

function People({ value, changeHandler, error }) {
  return (
    <div>
      <label className="peopleP">Number of People</label>
      <div className="peopleBox">
        <img src="./images/man.png" />
        <input
          placeholder="0"
          value={value}
          onChange={changeHandler}
          className="peopleInput"
        />
      </div>

      <output>{error}</output>
    </div>
  );
}

export default People;
