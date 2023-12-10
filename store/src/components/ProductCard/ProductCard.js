import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [isCartIconClicked, setIsCartIconClicked] = useState(false);
  const [isHeartIconClicked, setIsHeartIconClicked] = useState(false);
  const installmentValue = (product.price / 10).toFixed(2); //forma simples pra fazer a conta das parcelas

  const toggleCartIcon = () => {
    setIsCartIconClicked(!isCartIconClicked);
  };

  const toggleHeartIcon = () => {
    setIsHeartIconClicked(!isHeartIconClicked);
  };
  return (
    <div className="product-card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="23"
        fill="none"
        viewBox="0 0 26 23"
        className="heart-card-icon"
        onClick={toggleHeartIcon}
      >
        {isHeartIconClicked ? (
          <path
            fill="#408080"
            stroke="#143939"
            stroke-linejoin="round"
            d="M24.62 7.923c0 1.827-.701 3.58-1.954 4.879-2.882 2.988-5.678 6.104-8.669 8.983a1.728 1.728 0 0 1-2.428-.053l-8.616-8.93c-2.604-2.7-2.604-7.058 0-9.757a6.59 6.59 0 0 1 9.543 0l.314.325.313-.325A6.628 6.628 0 0 1 17.895 1c1.793 0 3.51.737 4.771 2.045a7.027 7.027 0 0 1 1.954 4.878Z"
          />
        ) : (
          <path
            stroke="#143939"
            stroke-linejoin="round"
            d="M24.62 7.923c0 1.827-.701 3.58-1.954 4.879-2.882 2.988-5.678 6.104-8.669 8.983a1.728 1.728 0 0 1-2.428-.053l-8.616-8.93c-2.604-2.7-2.604-7.058 0-9.757a6.59 6.59 0 0 1 9.543 0l.314.325.313-.325A6.628 6.628 0 0 1 17.895 1c1.793 0 3.51.737 4.771 2.045a7.027 7.027 0 0 1 1.954 4.878Z"
          />
        )}
      </svg>

      <img className="card-image" src={product.image} alt={product.name} />

      <div className="card-info">
        <h3 className="card-name">{product.name}</h3>
        <p className="card-price">R$ {product.price}</p>
        <p className="installment">10x de R$ {installmentValue}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="40"
        fill="none"
        viewBox="0 0 45 40"
        className="add-to-cart-icon"
        onClick={toggleCartIcon}
      >
        {isCartIconClicked ? (
          <g>
            <path
              stroke="#5B5B5B"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M3.545 7.15h39.142l-6.18 20.601H9.725l-6.18-20.6Zm0 0L2 2m18.026 32.961a3.09 3.09 0 0 1-6.18 0m18.54 0a3.09 3.09 0 0 1-6.18 0"
            />
            <path stroke="#408080" stroke-width="4" d="M15 11.724 22 20 43 4" />
          </g>
        ) : (
          <path
            stroke="#5B5B5B"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M3.545 7.15h39.142l-6.18 20.601H9.725l-6.18-20.6Zm0 0L2 2m15.95 15.45h4.12m0 0h4.12m-4.12 0v-4.12m0 4.12v4.12m-2.044 13.391a3.09 3.09 0 0 1-6.18 0m18.54 0a3.09 3.09 0 0 1-6.18 0"
          />
        )}
      </svg>
    </div>
  );
};

export default ProductCard;
