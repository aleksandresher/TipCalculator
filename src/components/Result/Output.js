import React from "react";
import "../../components/Result/Output.css";

function Output({ calculated, perPerson }) {
  return (
    <div className="dollarsOutput">
      <div className="tipAmount">
        <div className="tipP">
          <p className="label">Tip Amount </p>
          <p className="secondlabel">/ person</p>
        </div>

        <output className="dollars">
          {calculated ? (
            calculated
          ) : (
            <img src="./images/$0.png" className="dollarimg" />
          )}
        </output>
      </div>

      <div className="totalAmount">
        <div className="tipP">
          <p className="label">Total </p>
          <p className="secondlabel">/ person</p>
        </div>

        <output className="dollars">
          {" "}
          {perPerson ? perPerson : <img src="./images/$0.png" />}
        </output>
      </div>
    </div>
  );
}
export default Output;
