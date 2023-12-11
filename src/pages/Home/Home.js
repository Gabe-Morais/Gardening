import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <ProductList />
    </div>
  );
};

export default Home;
