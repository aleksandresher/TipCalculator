import React from "react";
import "../Tip/Tips.css";

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

        <div>
          <input
            className="customInput"
            placeholder="Custom"
            value={value}
            onChange={changeHandler}
            type="number"
          />
        </div>
      </div>
    </div>
  );
}
export default Tips;
