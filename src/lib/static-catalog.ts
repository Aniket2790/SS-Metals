import { CATALOGUE_PRODUCTS } from "@/lib/catalogue-data";

export function getPopularProducts(limit = 8) {
  return CATALOGUE_PRODUCTS.filter((p) => p.popular).slice(0, limit);
}

export function getAllProducts() {
  return CATALOGUE_PRODUCTS;
}
