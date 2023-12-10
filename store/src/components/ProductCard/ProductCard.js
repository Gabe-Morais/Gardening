import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const installmentValue = (product.price / 10).toFixed(2); //forma simples pra fazer a conta das parcelas
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">R$ {product.price}</p>
        <p className="installment">10x de R$ {installmentValue}</p>
      </div>
    </div>
  );
};

export default ProductCard;
