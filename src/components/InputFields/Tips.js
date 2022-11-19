import React from "react";
import "../../components/InputFields/Tips.css";

function Tips({ clickHandler, value, changeHandler, clicked }) {
  return (
    <div className="btns">
      <label>Select Tip %</label>
      <button
        onClick={clickHandler}
        className={clicked ? "selected" : "default"}
      >
        5
      </button>
      <button
        onClick={clickHandler}
        className={clicked ? "selected" : "default"}
      >
        10
      </button>
      <button
        onClick={clickHandler}
        className={clicked ? "selected" : "default"}
      >
        15
      </button>
      <button
        onClick={clickHandler}
        className={clicked ? "selected" : "default"}
      >
        25
      </button>
      <button
        onClick={clickHandler}
        className={clicked ? "selected" : "default"}
      >
        50
      </button>
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
