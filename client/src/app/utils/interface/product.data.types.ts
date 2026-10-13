export interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number | string;
  badge?: string;
  deliveryText?: string;
}