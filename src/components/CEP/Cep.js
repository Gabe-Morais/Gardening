import React from "react";
import InputMask from "react-input-mask";
import "./Cep.css";

const Cep = () => {
  return (
    <div className="cep-div">
      <div>
        <h3 className="cep-text">calcular frete e o prazo de entrega</h3>
        <div>
          <InputMask
            mask="99999-999"
            placeholder="_____-___"
            className="cep-input"
          />
          <button className="cep-button">Calcular</button>
        </div>
      </div>
    </div>
  );
};

export default Cep;
