import React from "react";
import { Link } from "react-router-dom";
import "./Back.css";

const Back = () => {
  return (
    <Link to="/" className="back" style={{ textDecoration: "none" }}>
      &#8592; Voltar
    </Link>
  );
};

export default Back;
