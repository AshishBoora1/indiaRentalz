import Link from "next/link";
import "../css/shop.css";
import { products } from "../data/DummyData";
import ProductCard from "../templates/ProductCard";
import productImage from "@/../public/images/home/product-image.webp";
import { ChevronRight } from "lucide-react";

function page() {
  return (
    <main>
      <section>
        <div className=" container">
          <h2 className=" mb-2 mt-10 text-text-primary">Shop</h2>
          <div className="mb-8 flex items-center gap-2">
            <Link
              href="/"
              className="text-sm font-bold capitalize text-brand-dark"
            >
              Home
            </Link>

            <ChevronRight size={16} className="text-brand-dark" />

            <Link
              className=" text-sm text-gray-500 capitalize relative page-link"
              href={"/shop"}
            >
              Shop
            </Link>
          </div>
          <div className=" text-sm text-text-primary font-medium opacity-75 mb-3 ps-3">
            Showing
            <span className=" font-bold opacity-100 text-black">
              {" "}
              {products.length}{" "}
            </span>
            results for
            <em className=" font-bold opacity-100 text-black"> "Shop" </em>
          </div>
          <div>
            <div className="mb-12 py-6 hidden grid-cols-2 gap-4 md:grid md:grid-cols-3 lg:grid-cols-4">
              {products.map((product, index) => (
                <div key={index}>
                  <ProductCard
                    image={productImage}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    deliveryText={product.deliveryText}
                    badge={product.badge}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
