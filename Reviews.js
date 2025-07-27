import React from "react";

function Reviews({ reviews }) {
  return (
    <div className="section">
      <h3>Customer Reviews</h3>
      {reviews.map((r, idx) => (
        <div key={idx} className="review">
          ⭐ {r.rating}/5 — {r.comment}
        </div>
      ))}
    </div>
  );
}

export default Reviews;
