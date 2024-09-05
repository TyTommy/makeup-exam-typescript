import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../features/main/mainSlice";

type ProductCardProps = {
  id: number;
  imageUrl: string;
  label: string;
  title: string;
  description: string;
  rating: number | null;
  price: string;
  onFavoriteClick: () => void;
  isLoading: boolean;
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  label,
  title,
  description,
  rating,
  price,
  onFavoriteClick,
  isLoading,
  product,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLabelClick = () => {
    dispatch(setCurrentProduct(product));
    navigate(`/products/${id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64 relative">
      {/* Label */}
      {label && (
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold py-1 px-2 rounded">
          {label}
        </span>
      )}

      {/* Favorite Button */}
      <button
        onClick={onFavoriteClick}
        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
        aria-label="Favorite"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0l-1.06 1.06-1.06-1.06a5.5 5.5 0 00-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 000-7.78v0z"
          />
        </svg>
      </button>

      {/* Product Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Product Details */}
      <h2
        onClick={handleLabelClick}
        className="text-lg font-medium text-gray-900 cursor-pointer mt-2 mb-1"
      >
        {title}
      </h2>
      <p className="text-sm text-gray-600 max-h-24 overflow-hidden text-ellipsis">
        {description}
      </p>

      {/* Rating */}
      {rating ? (
        <div className="flex items-center mt-2">
          <span className="text-yellow-400 mr-1">{"★".repeat(rating)}</span>
          <span className="text-gray-600 text-sm">{rating.toFixed(1)}</span>
        </div>
      ) : (
        <span className="flex h-6" />
      )}

      {/* Price */}
      <div className="mt-2 text-xl font-semibold text-gray-900">{price}</div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="mt-4 flex justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
