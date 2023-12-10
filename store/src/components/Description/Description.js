import React from "react";
import "./Description.css";

const Description = ({ product }) => {
  return (
    <div className="description">
      <h1 className="desc-title">Descrição</h1>
      <p className="desc-text">{product.description}</p>
    </div>
  );
};

export default Description;
