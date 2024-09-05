import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Select } from "antd";
import { ProductColor } from "../types";
import { useState } from "react";
import { addItem } from "../features/cart/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.main.currentProduct);

  const [selectedColor, setSelectedColor] = useState<string>();

  const options = product?.product_colors?.map((color, index) => ({
    value: `color${index}`,
    data: color,
  }));

  const handleBuyButton = () => {
    if (selectedColor) {
      const data = options?.find((o) => o.value === selectedColor)?.data;
      dispatch(addItem({ ...product, color: data, quantity: 1 }));
    }
  };
  console.log({ product });
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Product Info */}
        <div className="flex-1">
          <div className="mb-4">
            {product?.category && (
              <span className="bg-black text-white px-2 py-1 text-xs uppercase">
                {product?.category}
              </span>
            )}
          </div>
          <div className="text-lg text-gray-500 mb-2">
            {product?.brand} {product?.product_type}
          </div>
          <h1 className="text-2xl font-semibold mb-2">{product?.name}</h1>
          <p className="text-gray-500 mb-4">Консилер для лица и под глаза</p>
          <div className="text-sm mb-4">
            {/* Rating */}
            {product?.rating ? (
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 mr-1">
                  {"★".repeat(product?.rating)}
                </span>
                <span className="text-gray-600 text-sm">
                  {product?.rating.toFixed(1)}
                </span>
              </div>
            ) : (
              <span className="flex h-6" />
            )}
            <div className="flex gap-2 mt-4">
              {product?.tag_list.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-4 mt-6">{product?.description}</p>
          </div>
        </div>

        {/* Right Section - Product Image and Price */}
        <div className="flex-1 flex flex-col items-center lg:items-end">
          <img
            src={product?.api_featured_image}
            alt="Product"
            className="mb-4 max-h-96 object-cover"
          />
          <div className="text-2xl font-semibold text-gray-900 mb-4">
            {product?.price_sign || "$"}
            {product?.price} {product?.currency || "USD"}
          </div>
          <Select<string, { value: string; data: ProductColor }>
            size="large"
            onChange={() => {}}
            options={options}
            className="min-w-60"
            placeholder="Select color"
            labelRender={(option) => {
              const data = options?.find((o) => o.value === option.value)?.data;
              return (
                <span
                  style={{
                    backgroundColor: data?.hex_value,
                  }}
                  className="color-name inline-block rounded-md px-3 py-1 text-sm font-semibold w-full h-full"
                >
                  {data?.colour_name}
                </span>
              );
            }}
            optionRender={(option) => (
              <span
                style={{
                  backgroundColor: option.data.data.hex_value,
                }}
                className="color-name inline-block rounded-md px-3 py-1 text-sm font-semibold w-full h-full overflow-hidden text-ellipsis"
              >
                {option.data.data.colour_name}
              </span>
            )}
            value={selectedColor}
            onSelect={(value) => {
              setSelectedColor(value);
            }}
          />
          <button
            className="bg-black text-white py-2 px-4 my-4"
            onClick={handleBuyButton}
          >
            Корзина
          </button>
          <p className="text-green-500 mb-2">Есть в наличии!</p>
          <p className="text-gray-500">код товара: 450551</p>
          <p className="text-purple-600 underline mt-4">Нет нужного цвета?</p>
          <p className="text-purple-600 underline mt-2">Бесплатная доставка</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
