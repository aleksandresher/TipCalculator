import React from "react";
import "../../components/Result/Output.css";

function Output({ calculated, perPerson }) {
  return (
    <div className="dollarsOutput">
      <div className="tipAmount">
        <label className="label">Tip Amount </label>
        <output className="dollars">
          {calculated ? (
            calculated
          ) : (
            <img src="./images/$0.png" className="dollarimg" />
          )}
        </output>
      </div>

      <div className="totalAmount">
        <label className="label">Total</label>
        <output className="dollars">
          {" "}
          {perPerson ? perPerson : <img src="./images/$0.png" />}
        </output>
      </div>
    </div>
  );
}
export default Output;
