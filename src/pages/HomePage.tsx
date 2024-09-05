import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import ProductList from "../components/ProductList";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto h-full">
      <HeroCarousel />
      <h1 className="text-3xl font-bold mt-8 mb-6 text-center">TOP RATED</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
