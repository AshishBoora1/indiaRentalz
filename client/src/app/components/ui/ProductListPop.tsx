"use client";

import categoriesLaptopImage from "@/../public/images/home/categories-laptop-image.png";
import { categoryList } from "@/app/data/DummyData";
import type { ProductData } from "@/app/utils/interface/product.data.types";
import type { ProductListPopProps } from "@/app/utils/interface/props.types";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProductListPop({
  productsdata,
  productname,
  onProductNameChange,
  onClose
}: ProductListPopProps) {

  const searchText = productname.trim();

  return (
    <div className="product-list-popup bg-white max-h-[80vh] lg:max-h-[60vh] rounded-2xl border border-[#0000002d] mx-auto w-[89vw] xl:w-[85vw] absolute left-2/4 -translate-x-2/4 top-[calc(100%+1rem)] overflow-auto z-10">
      {/* Mobile Search */}
      <div className=" sticky top-0 bg-white">
        <div className="px-6 md:px-12 pt-6 md:pt-10 lg:hidden">
          <h6 className="text-base font-roboto! text-text-primary font-medium mb-3 capitalize">
            Explore from a range of products
          </h6>
          <div className="flex items-center justify-between gap-2 border border-[#0000002d] rounded-md p-2 w-full">
            <input
              className="bg-transparent border-0 focus:outline-none text-black! placeholder:text-[#6c757d] w-full"
              type="text"
              placeholder="Search for Products"
              value={productname}
              autoFocus
              onChange={(e) => onProductNameChange(e.target.value)}
            />

            <SearchIcon size={16} className="text-[#6c757d] shrink-0" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex justify-between items-center flex-wrap gap-4 px-6 md:px-12 sticky top-0 pt-10 lg:pt-10 bg-white pb-6">
          {categoryList.map((category) => (
            <div
              key={category.title}
              onClick={onClose}
              className="px-1.5 w-3/12 lg:w-1/12 shrink-0  hover:opacity-75"
            >
              <Link
                href={`/shop/${category.categories}`}
                className="flex flex-col  items-center justify-center gap-2 cursor-pointer"
              >
                <Image
                  src={categoriesLaptopImage}
                  alt="Laptop Category"
                  className=" w-14 h-14 sm:w-20 sm:h-20 lg:w-[3.3rem] lg:h-[3.3rem] object-cover"
                />

                <span className="text-sm leading-[1.2rem] font-poppins text-text-secondary font-medium">
                  {category.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {searchText && (
        <div className="pb-2.5 px-6">
          {productsdata.length > 0 ? (
            <ul className=" flex flex-col justify-start items-start">
              {productsdata.map((value: ProductData, index: number) => {
                return (
                  <li
                    className="px-1.5 py-2.5 border-b border-[#f2f2f2] cursor-pointer hover:bg-gray-50 w-full"
                    key={index}
                  >
                    <Link
                      className="text-base font-poppins text-text-secondary font-medium"
                      href={"#"}
                    >
                      {value.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-base px-1.5 py-2 capitalize font-poppins text-text-secondary font-medium border-b border-[#f2f2f2]">
              No products found
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductListPop;
