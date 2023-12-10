import React from "react";
import "./Cep.css";

const Cep = () => {
  return (
    <div className="cep-div">
      <div>
        <h3 className="cep-text">calcular frete e o prazo de entrega</h3>
        <div>
          <input placeholder="XXXXX-XXX" className="cep-input" />
          <button className="cep-button">Calcular</button>
        </div>
      </div>
    </div>
  );
};

export default Cep;
