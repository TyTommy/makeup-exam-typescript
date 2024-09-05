import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import { fetchProducts } from "../api";

const ProductList: React.FC<{ productType?: string }> = ({ productType }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(
          productType ? { productType } : { ratingGreaterThan: "4.9" }
        );
        setProducts(
          data.filter(
            (product) =>
              product.product_colors.length > 0 &&
              product.product_colors.every(
                (color) => !!color.hex_value && !!color.colour_name
              )
          )
        );
      } catch (e) {
        console.error(e);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [productType]);

  if (loading) return <p className="m-auto text-center mt-10">Loading...</p>;
  if (error) return <p className="m-auto text-red-800 mt-10">{error}</p>;

  const handleFavoriteClick = () => {
    console.log("Favorite button clicked!");
  };

  return (
    <div className="flex flex-col items-center gap-5 mt-5">
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.api_featured_image}
            label={product.category}
            title={product.name}
            description={product.description}
            rating={product.rating}
            price={`${product.price_sign || "$"}${product.price} ${
              product.currency || "USD"
            }`}
            onFavoriteClick={handleFavoriteClick}
            isLoading={false}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
