import React from "react";
import "../../components/Result/Output.css";
import zero from "../../images/$0.png";

function Output({ calculated, perPerson }) {
  return (
    <div className="dollarsOutput">
      <div className="tipAmount">
        <div className="tipP">
          <p className="label">Tip Amount </p>
          <p className="secondlabel">/ person</p>
        </div>

        <output className="dollars">
          {perPerson ? (
            perPerson
          ) : (
            <img src={zero} className="dollarimg" alt=" 0" />
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
          {calculated ? calculated : <img src={zero} />}
        </output>
      </div>
    </div>
  );
}
export default Output;
