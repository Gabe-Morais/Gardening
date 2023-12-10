import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import products from "../../data/products";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";
import Description from "../../components/Description/Description";

const ProductDetails = () => {
  const { id } = useParams();
  const selectecdProduct = products[id - 1];
  return (
    <div className="details-container">
      <DetailsCard product={selectecdProduct} />
      <DetailsInfo product={selectecdProduct} />
      <Description product={selectecdProduct} />
    </div>
  );
};

export default ProductDetails;
