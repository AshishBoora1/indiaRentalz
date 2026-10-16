import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import productImage from "@/../public/images/home/product-image.webp";
import categoriesLaptopImage from "@/../public/images/home/categories-laptop-image.png";

import { categoryList, products } from "@/app/data/DummyData";
import ProductCard from "@/app/templates/ProductCard";
import { ChevronRight } from "lucide-react";
export const instant = false;

type PageProps = {
  params: Promise<{ categories: string }>;
};

export default async function CategoryPage({ params }: PageProps) {
  const { categories: slug } = await params;

  const category = categoryList.find((item) => item.categories === slug);

  const parentCategory = categoryList.find((item) =>
    item.subcategories.some((sub) => sub.categories === slug),
  );

  const subcategory = categoryList
    .flatMap((item) => item.subcategories)
    .find((item) => item.categories === slug);

  if (!category && !subcategory) {
    notFound();
  }

  const currentCategory = category ?? parentCategory;

  const pageTitle = category?.title ?? subcategory?.title ?? "";

  return (
    <main>
      <section>
        <div className="container">
          <h2 className="mb-2 mt-10 text-text-primary">{pageTitle}</h2>

          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center">
            <Link
              href="/"
              className="text-sm font-bold capitalize text-brand-dark"
            >
              Home
            </Link>

            <ChevronRight size={16} className="shrink-0 text-brand-dark" />

            <Link
              href="/shop"
              className="text-sm font-bold capitalize text-brand-dark"
            >
              Shop
            </Link>

            {/* Parent category: show on subcategory pages */}
            {parentCategory && (
              <>
                <ChevronRight size={16} className="shrink-0 text-brand-dark" />

                <Link
                  href={`/shop/${parentCategory.categories}`}
                  className="text-sm font-bold capitalize text-brand-dark"
                >
                  {parentCategory.title}
                </Link>
              </>
            )}

            <ChevronRight size={16} className="shrink-0 text-brand-dark" />

            <span className="text-sm capitalize text-gray-500">
              {pageTitle}
            </span>
          </div>

          {currentCategory && (
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {currentCategory.subcategories.map((item) => (
                <Link
                  key={item.categories}
                  href={`/shop/${item.categories}`}
                  className={`flex flex-col items-center justify-center gap-2 px-1.5 text-center`}
                >
                  <Image
                    src={categoriesLaptopImage}
                    alt={item.title}
                    className="h-[3.3rem] w-[3.3rem] object-cover"
                  />

                  <span
                    className={`text-[0.8rem] font-semibold leading-[1.2rem]  ${
                      item.categories === slug
                        ? "text-brand-dark"
                        : "text-text-secondary"
                    }`}
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* Product count */}
          <div className="mb-3 ps-3 text-sm font-medium text-text-primary opacity-75">
            Showing
            <span className="font-bold text-black opacity-100">
              {" "}
              {products.length}{" "}
            </span>
            results for
            <em className="font-bold text-black opacity-100"> "shop"</em>
          </div>

          {/* All products for now */}
          <div className="mb-12 grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <div key={`${product.title}-${index}`}>
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
      </section>
    </main>
  );
}
