import React from "react";
import "./BuyButton.css";

const BuyButton = () => {
  return (
    <div className="button-container">
      <button className="buy">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="34"
          fill="none"
          viewBox="0 0 39 34"
          className="cart-icon"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.545 5.563h34.603l-5.464 18.25H8.009L2.545 5.563Zm0 0L1.179 1M15.28 14.688h3.642m0 0h3.642m-3.642 0v-3.65m0 3.65v3.65M17.115 30.2a2.735 2.735 0 0 1-2.732 2.738 2.735 2.735 0 0 1-2.732-2.737m16.391-.001a2.735 2.735 0 0 1-2.732 2.738 2.735 2.735 0 0 1-2.732-2.737"
          />
        </svg>
        Comprar Produto {/*Corrigir botao e deixar fiel ao figma*/}
      </button>
    </div>
  );
};

export default BuyButton;
