import { StaticImageData } from "next/image";
import { AddOn, ProductData } from "./product.data.types";

export interface ProductCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  price: number | string;
  badge?: string;
  deliveryText?: string;
}

export interface ProductSectionProps {
  image: string | StaticImageData;
  title: string;
  subtitle?: string;
  description?: string;
  productData: ProductData[];
  buttonText?: string;
  btnlink?: string;
  showbtn?: boolean;
  buttonText2?: string;
  btnlink2?: string;
  showbtn2?: boolean;
}

export interface ContentWithImageProps {
  image: string | StaticImageData;
  bulletIcon: string | StaticImageData;
  heading: string;
  subtitle: string;
  description: string;
  description2?: string;
  buttonText: string;
  buttonLink: string;
  buttonText2: string;
  buttonLink2: string;
  showcard?: boolean;
  swap?: string;
  cardsData?: [];
  points: string[];
}

export interface ProductListPopProps {
  productsdata: ProductData[];
  productname: string;
  onProductNameChange: (value: string) => void;
  onClose: () => void;
}

export interface LocationPopupProps {
  onClose: () => void;
  onhandleGetCity: (e: string) => void;
}
export interface StartedPopupProps {
  onClose: () => void;
}

export interface AddOnsPopupProps {
  addons: AddOn[];
  onClose: () => void;
  onContinue: (selectedAddons: AddOn[]) => void;
};

export interface EnterpriseBusinessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  image?: string;
  description?: string;
}

export interface Business {
  title: string;
  subtitle: string;
  modalTitle: string;
  image: StaticImageData;
  description: string;
};


export interface EnterpriseCtaFormProps {
  isOpen: boolean;
  onClose: () => void;
}