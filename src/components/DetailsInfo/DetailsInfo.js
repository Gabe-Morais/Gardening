import React from "react";
import "./DetailsInfo.css";
import BuyButton from "../BuyButton/BuyButton";
import Cep from "../CEP/Cep";
import secure from "../../images/icons/secure-buy.svg";

const DetailsInfo = ({ product }) => {
  const installmentValue = (product.price / 10).toFixed(2);
  return (
    <div className="info">
      <h1 className="details-name">{product.name}</h1>
      <h2 className="details-price">R$ {product.price.toFixed(2)}</h2>
      <p className="details-installment">
        em até 10x de {installmentValue} sem juros
      </p>
      <div className="bottom-info">
        <div className="button-div">
          <BuyButton />
        </div>
        <img src={secure} />
        <Cep />
      </div>
    </div>
  );
};

export default DetailsInfo;
