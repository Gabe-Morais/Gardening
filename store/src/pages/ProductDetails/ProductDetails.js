import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Detalhes do Produto #{id}</h1>
      <DetailsCard />
    </div>
  );
};

export default ProductDetails;
