import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <header className="bg-white border-b w-full">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-gray-800"
          >
            MAKEUP
          </Link>
        </div>
        <nav className="space-x-4 flex">
          <Link
            to="product-type/Blush"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Blush
          </Link>
          <Link
            to="product-type/Bronzer"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Bronzer
          </Link>
          <Link
            to="product-type/Eyebrow"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Eyebrow
          </Link>
          <Link
            to="product-type/Eyeliner"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Eyeliner
          </Link>
          <Link
            to="product-type/Eyeshadow"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Eyeshadow
          </Link>
          <Link
            to="product-type/Foundation"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Foundation
          </Link>
          <Link
            to="product-type/Lip_liner"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Lip liner
          </Link>
          <Link
            to="product-type/Lipstick"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Lipstick
          </Link>
          <Link
            to="product-type/Mascara"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Mascara
          </Link>
          <Link
            to="product-type/Nail_polish"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Nail polish
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <HeartOutlined />
          </button>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={handleOpenModal}
          >
            <ShoppingCartOutlined />
          </button>

          <CartModal
            open={isModalVisible}
            onClose={handleCloseModal}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
