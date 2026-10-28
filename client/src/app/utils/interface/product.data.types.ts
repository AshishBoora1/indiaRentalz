import { StaticImageData } from "next/image";

export interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number | string;
  badge?: string;
  deliveryText?: string;
}

export interface AddOn {
  id: number;
  product_name: string;
  product_desc: string;
  price: number;
   image: string | StaticImageData;
};