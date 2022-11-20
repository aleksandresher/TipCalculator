import React from "react";

function Output({ calculated, perPerson }) {
  return (
    <div>
      <div>
        <label>Amount per person</label>
        <output>${calculated}</output>
      </div>

      <div>
        <label>Tip Per Person</label>
        <output>${perPerson}</output>
      </div>
    </div>
  );
}
export default Output;
