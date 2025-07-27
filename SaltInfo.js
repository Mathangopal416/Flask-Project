import React from "react";

function SaltInfo({ salts }) {
  return (
    <div className="section">
      <h3>Salt Information</h3>
      <ul>
        {salts.map((salt, idx) => (
          <li key={idx}>
            {salt.name} - {salt.dosage}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SaltInfo;
