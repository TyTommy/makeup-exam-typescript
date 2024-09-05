import React from "react";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";

const ProductTypePage: React.FC = () => {
  const { productType } = useParams();

  return (
    <div className="container mx-auto h-full">
      <h1 className="text-3xl font-bold mt-8 mb-6 text-center uppercase">
        {productType?.replace("_", " ")}
      </h1>
      <ProductList productType={productType} />
    </div>
  );
};

export default ProductTypePage;
