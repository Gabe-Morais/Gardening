import React from "react";
import "./DetailsInfo.css";

const DetailsInfo = ({ product }) => {
  const installmentValue = (product.price / 10).toFixed(2);
  return (
    <div className="info">
      <h1 className="product-name">{product.name}</h1>
      <h2 className="product-price">R$ {product.price.toFixed(2)}</h2>
      <p className="product-installment">
        em até 10x de {installmentValue} sem juros
      </p>
    </div>
  );
};

export default DetailsInfo;
