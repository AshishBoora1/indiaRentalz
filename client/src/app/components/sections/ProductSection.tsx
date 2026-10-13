import Link from "next/link";
import ProductCard from "../../templates/ProductCard";
import { ProductSectionProps } from "@/app/utils/interface/props.types";

export default function ProductSection({
  image,
  title,
  subtitle,
  description,
  productData,
  buttonText,
  btnlink,
  showbtn,
  buttonText2,
  btnlink2,
  showbtn2,
}: ProductSectionProps) {
  return (
    <div className="container mt-[4.688rem]">
      <div className="items-info text-center">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        {description && (
          <p className="mx-auto w-full md:w-[65%]">{description}</p>
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productData.map((product , index) => (
            <ProductCard
              image={image}
              title={product.title}
              description={product.description}
              price={product.price}
              deliveryText={product.deliveryText}
              badge={product.badge}
              index={index}
            />
        ))}
      </div>

      {(showbtn || showbtn2) && (
        <div className="mt-18 text-center">
          {showbtn && (
            <Link href={`${btnlink}`} className="btn-primary rounded-md">
              {buttonText}
            </Link>
          )}

          {showbtn2 && (
            <Link href={`${btnlink2}`} className="btn-secondary rounded-md ms-4">
              {buttonText2}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
