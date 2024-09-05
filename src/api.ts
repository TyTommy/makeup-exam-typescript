// api.ts
import { Product } from "./types";

const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json";

export const fetchProducts = async ({
  productType,
  ratingGreaterThan,
}: {
  productType?: string;
  ratingGreaterThan?: string;
}): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${API_URL}${productType ? `?product_type=${productType}` : ""}${
        ratingGreaterThan ? `?rating_greater_than=${ratingGreaterThan}` : ""
      }`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
