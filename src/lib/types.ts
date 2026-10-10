export type Product = {
  id: string;
  name: string;
  category: string;
  image_url: string | null;
  description: string;
  specs: Record<string, string>;
  popular?: boolean;
  is_popular?: boolean;
};

export type StockItem = {
  id: string;
  name: string;
  category: string;
  grade: string;
  size: string;
  quantity: number;
  unit: string;
  kind: "product" | "raw";
  low_threshold: number;
};
