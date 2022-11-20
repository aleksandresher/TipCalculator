import React from "react";
import "../../components/InputFields/Tips.css";

function Tips({ clickHandler, value, changeHandler, selected, data }) {
  return (
    <div className="btns-container">
      <div className="selectP">
        <p className="selectTip">select tip %</p>
      </div>

      <div className="btns">
        {data.map((items) => (
          <button
            key={items.id}
            value={items.text}
            className={items.selected ? "selected" : "default"}
            onClick={clickHandler}
          >
            {items.placeholder}
          </button>
        ))}
        {/* <label>Select Tip %</label>
      <button
        onClick={clickHandler}
        className={selected ? "selected" : "default"}
      >
        5
      </button>
      <button
        onClick={clickHandler}
        className={selected ? "selected" : "default"}
      >
        10
      </button>
      <button
        onClick={clickHandler}
        className={selected ? "selected" : "default"}
      >
        15
      </button>
      <button
        onClick={clickHandler}
        className={selected ? "selected" : "default"}
      >
        25
      </button>
      <button
        onClick={clickHandler}
        className={selected ? "selected" : "default"}
      >
        50
      </button>
      */}
        <div>
          <input
            className="customInput"
            placeholder="Custom"
            value={value}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}
export default Tips;
