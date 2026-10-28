import type { AddOn } from "../utils/interface/product.data.types";
import mouseImage from "@/../public/images/products/mouse.jpg";
import keyboardImage from "@/../public/images/products/keyboard.jpg";
import headphoneImage from "@/../public/images/products/headphone.jpg";
import standImage from "@/../public/images/products/laptop-stand.jpg";

export const addons: AddOn[] = [
  {
    id: 1,
    product_name: "Logitech M221 Wireless Mouse",
    product_desc: "Logitech wireless mouse for everyday use.",
    price: 75,
    image: mouseImage,
  },
  {
    id: 2,
    product_name: "Logitech MK215 Wireless Keyboard and Mouse Combo",
    product_desc: "Wireless keyboard and mouse combo.",
    price: 125,
    image: keyboardImage,
  },
  {
    id: 3,
    product_name: "Logitech H111 Wired On Ear Headphones",
    product_desc: "Wired headphones for calls and meetings.",
    price: 100,
    image: headphoneImage,
  },
  {
    id: 4,
    product_name: "Laptop Stand",
    product_desc: "Laptop stand for comfortable working.",
    price: 150,
    image: standImage,
  },

  {
    id: 4,
    product_name: "Logitech M221 Wireless Mouse",
    product_desc: "Logitech wireless mouse for everyday use.",
    price: 75,
    image: mouseImage,
  },
];