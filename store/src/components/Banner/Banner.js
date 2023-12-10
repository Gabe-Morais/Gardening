import React from "react";
import "./Banner.css";
import bannerImage from "../../images/banner-img.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="text-div">
        <h1 className="welcome-title">Bem-vindo!</h1>
        <p className="welcome-text">
          Descubra a diferença que a excelência faz na jardinagem! Navegue por
          nossa seleção de adubos de alta qualidade, ferramentas especializadas
          e acessórios essenciais. Cultive um jardim exuberante e saudável com
          os melhores produtos do mercado.
        </p>
      </div>
      <div className="banner-img">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
