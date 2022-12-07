import React from "react";
import "../People/People.css";
import man from "../../../images/man.png";

function People({ value, changeHandler, error, errorClass }) {
  return (
    <div>
      <div className="errorContainer">
        <label className="peopleP">Number of People</label>
        <output className="errorMessage">{error}</output>
      </div>

      <div className={errorClass ? "valid" : "peopleBox"}>
        <img src={man} className="manImg" alt=" man" />
        <input
          placeholder="0"
          value={value}
          onChange={changeHandler}
          className="peopleInput"
          type="number"
        />
      </div>
    </div>
  );
}

export default People;
