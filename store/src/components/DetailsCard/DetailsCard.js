import React from "react";
import "./DetailsCard.css";

const DetailsCard = ({ product }) => {
  return (
    <div className="card-container">
      <img src={product.image} alt={product.name}></img>
    </div>
  );
};

export default DetailsCard;
