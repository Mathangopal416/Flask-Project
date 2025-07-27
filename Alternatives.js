import React from "react";

function Alternatives({ alternatives }) {
  return (
    <div className="section">
      <h3>Alternatives</h3>
      <ul>
        {alternatives.map((alt, idx) => (
          <li key={idx}>
            {alt.name} — ₹{alt.price}
            <button className="alt-btn">Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alternatives;
