import Image from "next/image";
import { Truck } from "lucide-react";
import { ProductCardProps } from "../utils/interface/props.types";
import Link from "next/link";

export default function ProductCard({
  image,
  title,
  description,
  price,
  badge,
  deliveryText,
}: ProductCardProps) {
  return (
    <Link href={`/product/${title}`}>
      <div className="product-card-shadow relative overflow-hidden h-full flex flex-col cursor-pointer">
        {badge && <div className="discount-tag">{badge}</div>}

        <div className="p-4">
          <Image
            src={image}
            alt={title}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex flex-col justify-between gap-6 border-t-[3px] border-[#f3f3f3] p-4 grow">
          <div>
            <h4 className="mb-4 text-brand font-semibold! leading-[1.2]">
              {title}
            </h4>

            <p className="mb-4 font-semibold text-text-primary">
              {description}
            </p>
          </div>

          <div className="flex items-end justify-between gap-2">
            <div>
              <span className="text-sm leading-[1.2] font-semibold text-text-primary">
                Starting at
              </span>

              <div className="flex items-center">
                <span className="text-sm leading-[1.2] font-semibold text-brand-dark">
                  Rs. {price}
                </span>

                <span className="text-sm leading-[1.2] font-semibold text-[#6c757d]">
                  /mo
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 opacity-70">
              <Truck size={16} />

              <span className="text-sm leading-[1.2] font-semibold text-text-primary">
                {deliveryText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
