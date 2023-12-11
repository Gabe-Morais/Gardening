import React from "react";
import "./SumaryCard.css";

const SumaryCard = () => {
  return (
    <div className="sumary-main-container">
      <h1 className="sumary-title">resumo do pedido</h1>
      <div className="sumary-products">
        <p>0 Produtos</p>
        <p>R$ 0,00</p>
      </div>
      <div className="sumary-shipment">
        <p>Frete</p>
        <p>R$ 0,00</p>
      </div>
      <div className="sumary-line" />
      <div className="sumary-total-container">
        <div>
          <p className="sumary-total-title">Total</p>
        </div>
        <div>
          <p className="sumary-total-price">R$ 0,00</p>
          <p className="sumary-total-installment">em até 10x de 0,00</p>
        </div>
      </div>
      <div className="finish-button-container">
        <button className="finish-button">finalizar compra</button>
      </div>
    </div>
  );
};

export default SumaryCard;
