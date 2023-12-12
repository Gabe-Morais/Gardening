import React, { useState } from "react";
import { Link } from "react-router-dom";
import favorite from "../../images/icons/favorite.svg";
import favoriteFilled from "../../images/icons/favorite-filled.svg";
import cart from "../../images/icons/cart.svg";
import addedCart from "../../images/icons/added-cart.svg";
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
      <img
        src={isHeartIconClicked ? favoriteFilled : favorite}
        alt="Favorite Icon"
        className="heart-card-icon"
        onClick={toggleHeartIcon}
      />

      <div className="image-container">
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <img className="card-image" src={product.image} alt={product.name} />
        </Link>
      </div>

      <div className="card-info">
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <h3 className="card-name">{product.name}</h3>
        </Link>
        <p className="card-price">R$ {product.price}</p>
        <p className="installment">10x de R$ {installmentValue}</p>
      </div>

      <img
        src={isCartIconClicked ? addedCart : cart}
        alt="Cart Icon"
        className="add-to-cart-icon"
        onClick={toggleCartIcon}
      />
      
    </div>
  );
};

export default ProductCard;
