import React from "react";
import "./offerCard.scss";

function OfferCard({ icon, children, title }) {
  return (
    <div className="offer">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <h2>{title}</h2>
      {children}
      <button>
        Learn more <img src="./arrow.svg" alt="" />
      </button>
    </div>
  );
}

export default OfferCard;
