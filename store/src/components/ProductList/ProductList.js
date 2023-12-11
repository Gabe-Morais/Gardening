import React from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";
const ProductList = () => {
  return (
    <div className="product-list">
      <h1 className="title">Produtos</h1>
      <h2 className="subtitle">Os melhores produtos para jardinagem</h2>
      <div className="cards">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
