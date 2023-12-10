import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const installmentValue = (product.price / 10).toFixed(2); //forma simples pra fazer a conta das parcelas
  return (
    <div className="product-card">
      <img className="card-image" src={product.image} alt={product.name} />
      <div className="card-info">
        <h3 className="card-name">{product.name}</h3>
        <p className="card-price">R$ {product.price}</p>
        <p className="installment">10x de R$ {installmentValue}</p>
      </div>
    </div>
  );
};

export default ProductCard;
