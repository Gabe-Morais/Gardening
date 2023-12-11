import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";
import Back from "../Back/Back";

const SearchResults = () => {
  const { query } = useParams();

  // Filtra os produtos com base no que digitar para pesquisar
  const filteredProducts = products.filter(
    (product) => product.name.toLowerCase().includes(query.toLowerCase()) //ignorar maiusculas e minusculas
  );

  return (
    <div>
      <Back />
      <div className="search-result">
        <h2 className="search-title">Resultado da pesquisa para "{query}"</h2>
        <div className="cards">
          {filteredProducts.length === 0 ? (
            <p>Não há resultados para sua pesquisa.</p>
          ) : (
            filteredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                style={{ textDecoration: "none" }}
              >
                <ProductCard key={product.id} product={product} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
