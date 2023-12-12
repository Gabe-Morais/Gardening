import React, { useState } from "react";
import cart from "../../images/icons/white-cart.svg";
import "./BuyButton.css";

const BuyButton = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="button-container">
      <button
        className="buy"
        onClick={() => console.log("Compra com quantidade: ", quantity)}
      >
        <img src={cart} />
        Comprar Produto
      </button>
      <div className="quantity-controls">
        <button onClick={decreaseQuantity}>-</button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="buy-button-input"
        />
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
};

export default BuyButton;
