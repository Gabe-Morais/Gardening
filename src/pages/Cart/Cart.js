import React from "react";
import "./Cart.css";
import Back from "../../components/Back/Back";
import SumaryCard from "../../components/SumaryCard/SumaryCard";
import Cep from "../../components/CEP/Cep";

const Cart = () => {
  return (
    <div>
      <Back />
      <div className="cart-content">
        <div className="left-side-cart">
          <h1 className="cart-title">Carrinho de compras</h1>
        </div>
        <div className="right-side-cart">
          <SumaryCard />
          <Cep />
        </div>
      </div>
    </div>
  );
};

export default Cart;
