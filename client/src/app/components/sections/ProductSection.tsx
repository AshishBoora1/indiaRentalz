import Link from "next/link";
import ProductCard from "../../templates/ProductCard";
import CommonSlider from "../../components/common/CommonSlider";
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

      {/* Mobile Slider: below 768px */}
      <div className="mt-6 lg:mt-12 block md:hidden">
        <CommonSlider slidesToShow={1}>
          {productData.map((product, index) => (
            <div key={index} className="px-2">
              <ProductCard
                image={image}
                title={product.title}
                description={product.description}
                price={product.price}
                deliveryText={product.deliveryText}
                badge={product.badge}
              />
            </div>
          ))}
        </CommonSlider>
      </div>

      {/* Desktop Grid: 768px and above */}
      <div className="mt-12 hidden grid-cols-2 gap-8 md:grid md:grid-cols-3 lg:grid-cols-4">
        {productData.map((product, index) => (
          <div key={index}>
            <ProductCard
              image={image}
              title={product.title}
              description={product.description}
              price={product.price}
              deliveryText={product.deliveryText}
              badge={product.badge}
            />
          </div>
        ))}
      </div>

      {(showbtn || showbtn2) && (
        <div className="mt-6 lg:mt-18 flex items-center justify-center gap-4 text-center max-sm:flex-col">
          {showbtn && (
            <Link
              href={`${btnlink}`}
              className="btn-primary rounded-md text-center max-sm:w-full"
            >
              {buttonText}
            </Link>
          )}

          {showbtn2 && (
            <Link
              href={`${btnlink2}`}
              className="btn-secondary rounded-md text-center max-sm:w-full"
            >
              {buttonText2}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
