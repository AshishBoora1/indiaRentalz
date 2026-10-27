"use client";
import { ChevronRight, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import productImage from "@/../public/images/home/product-image.webp";
import {
  DeliveryTruckIcon,
  ProductExpertIcon,
  RentalCycleIcon,
  ShippingIcon,
} from "@/app/data/Icons";
import { faqs, specifications } from "@/app/data/DummyData";
import { useState } from "react";

function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <main>
      <section>
        <div className="container">
          <h2 className=" mb-2 mt-10 text-text-primary">
            Office/Home Essential Plus
          </h2>
          <div className="mb-8 flex items-center gap-2">
            <Link
              href="/"
              className="text-sm font-bold capitalize text-brand-dark"
            >
              Home
            </Link>

            <ChevronRight size={16} className="text-brand-dark" />

            <Link
              href="/"
              className="text-sm font-bold capitalize text-brand-dark"
            >
              Laptops
            </Link>

            <ChevronRight size={16} className="text-brand-dark" />

            <Link
              className=" text-sm text-gray-500 capitalize relative"
              href={"#"}
            >
              Office/Home Essential Plus
            </Link>
          </div>
        </div>

        {/* product details */}
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16 mb-6 items-center">
            <div className=" relative">
              <div className=" absolute right-0 top-0 text-white py-1 ps-2 pr-8 font-medium! text-base bg-[linear-gradient(90deg,var(--color-brand-dark)_70%,transparent)]">
                Most Favoured
              </div>
              <Image
                src={productImage}
                className=" w-full h-full"
                alt="productImage"
              />
              <p className=" text-sm text-[#a0a0a0] italic font-medium mt-1">
                Product images shown are for representation purposes only.Exact
                devices may vary in its Brand or Image.
              </p>
            </div>
            <div>
              <h3 className=" text-2xl! text-[#343434] font-roboto!">
                Laptop i3 8th/10th Gen-8GB RAM-256 GB SSD-14/15 inch screen
              </h3>
              <hr className="my-4 border-t opacity-[0.25] bg-black" />
              <div>
                <div className=" flex  items-center gap-5 mb-5">
                  <ProductExpertIcon />
                  <p className=" text-[#484848] font-roboto! text-base font-semibold">
                    Need custom configuration?{" "}
                    <Link className="text-brand" href={"#"}>
                      Click Here
                    </Link>
                  </p>
                </div>

                <div className=" flex  items-center gap-5 mb-5">
                  <DeliveryTruckIcon />
                  <p className=" text-[#484848] font-roboto! text-base font-semibold">
                    Delivery in 1-2 Days
                  </p>
                </div>

                <div className=" flex  items-center gap-5 mb-5">
                  <ShippingIcon />
                  <p className=" text-[#484848] font-roboto! text-sm font-semibold!">
                    <span className="text-brand font-extrabold! font-roboto! text-[1.188rem] pe-2">
                      Rs.1200
                    </span>
                    per month for
                    <span className="text-brand text-base px-2">12 Months</span>
                    <span className="text-brand font-normal! pe-2">
                      RS.1416
                    </span>
                    (Including GST)
                  </p>
                </div>

                <div className=" flex items-center gap-5 mb-5">
                  <RentalCycleIcon />
                  <p className="text-[#484848] font-roboto! text-base font-semibold!">
                    Refundable deposit of{" "}
                    <span className="text-[1.188rem] text-brand font-extrabold! ps-2">
                      Rs.5400
                    </span>
                  </p>
                </div>

                <div className="mb-6">
                  <h6 className=" text-base! text-[#555] uppercase mb-2.5">
                    Duration
                  </h6>
                  <div className=" flex items-center gap-2 flex-wrap">
                    <button className="border-2 text-brand-dark text-xs hover:border-2 hover:border-transparent hover:bg-brand-dark hover:text-white font-medium bg-white px-4 py-2.25 rounded-sm font-poppins! tracking-[1px] uppercase cursor-pointer">
                      1 Month
                    </button>
                    <button className="border-2 text-brand-dark text-xs hover:border-2 hover:border-transparent hover:bg-brand-dark hover:text-white font-medium bg-white px-4 py-2.25 rounded-sm font-poppins! tracking-[1px] uppercase cursor-pointer">
                      3 Month
                    </button>
                    <button className="border-2 text-brand-dark text-xs hover:border-2 hover:border-transparent hover:bg-brand-dark hover:text-white font-medium bg-white px-4 py-2.25 rounded-sm font-poppins! tracking-[1px] uppercase cursor-pointer">
                      6 Month
                    </button>
                    <button className="border-2 text-brand-dark text-xs hover:border-2 hover:border-transparent hover:bg-brand-dark hover:text-white font-medium bg-white px-4 py-2.25 rounded-sm font-poppins! tracking-[1px] uppercase cursor-pointer">
                      12 Month
                    </button>
                  </div>
                </div>

                <div className=" mt-4 mb-6 lg:w-6/12">
                  <h6 className=" text-base! text-[#555] uppercase mb-2.5">
                    Quantity
                  </h6>
                  <input
                    type="number"
                    className=" px-3 py-1.5 font-roboto! w-full text-base font-normal leading-normal text-[#212529] bg-white border border-[#ced4da] rounded-md outline-none"
                  />
                </div>

                <div>
                  <p className=" font-roboto! text-sm text-text-primary mb-1 font-medium!">
                    Delivering to
                    <span className=" text-brand-dark capitalize cursor-pointer font-black! px-1">
                      (Gurugram)
                    </span>
                    in<span className="font-black! px-1">1-2</span>Days
                    <button className=" flex justify-center items-center gap-2 normal-case! font-semibold! btn-primary mt-2 w-full">
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" container">
          <div className=" card mb-5.5 max-w-200 mx-auto mt-16">
            <h3 className=" text-[#b5121b] mb-2.5 font-arial">
              Best Suited For
            </h3>
            <ul className="ps-5">
              <li className="font-arial text-base text-[#222] mb-2 tracking-normal font-extrabold">
                Office productivity such as Word, Excel, email and
                documentation.
              </li>
              <li className="font-arial text-base text-[#222] mb-2 tracking-normal font-extrabold">
                Online meetings, web browsing, study, research and daily
                business work.
              </li>
              <li className="font-arial text-base text-[#222] mb-2 tracking-normal font-extrabold">
                Remote work, training sessions, internships and temporary
                employee allocation.
              </li>
              <li className="font-arial text-base text-[#222] mb-2 tracking-normal font-extrabold">
                Short-term projects where buying a laptop is not preferred.
              </li>
            </ul>
          </div>

          <div className="max-w-200 mx-auto border border-card-border mb-8.5 shadow-[0_4px_14px_#0000000f] rounded-xl bg-white ">
            <div className="bg-[linear-gradient(135deg,#b5121b_0%,#e01f2d_100%)] rounded-t-xl py-3.5 px-4.5 text-center">
              <h2 className=" text-xl! text-white tracking-[0.5px]">
                Laptop i3 8th/10th Gen-8GB RAM-256 GB SSD-14/15 inch screen
              </h2>
              <p className=" mt-1 font-arial text-xs text-white">
                Reliable laptop configuration suitable for office work, study,
                online meetings and daily productivity.
              </p>
            </div>
            <table className="w-full">
              <tbody>
                {specifications.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td
                        className={`${index % 2 === 0 ? "bg-[#fff5f5]" : "bg-white"} ${
                          index === specifications.length - 1
                            ? "rounded-bl-xl"
                            : ""
                        } px-4 py-3 w-4/12 font-semibold border-b border-[#f3dada] font-arial text-text-primary text-sm`}
                      >
                        {value.label}
                      </td>

                      <td
                        className={`px-4 py-3 w-8/12 bg-white border-b border-[#f3dada] font-arial text-text-primary text-sm ${
                          index === specifications.length - 1
                            ? "rounded-br-xl"
                            : ""
                        }`}
                      >
                        {value.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className=" card mb-5.5 bg-white! max-w-200 mx-auto my-16">
            <h3 className=" text-[#b5121b] mb-2.5 font-arial">
              About Product Images and Brand
            </h3>

            <p className="font-arial text-base text-[#222] tracking-normal font-extrabold">
              Product images may represent the product range. Exact brand,
              model, color and physical appearance may vary as per availability.
              Branded devices may include Dell, HP, Lenovo, Apple, ASUS, Acer,
              MSI and similar leading brands as applicable.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className=" my-12 py-2">
          <div className="container">
            <h2 className=" text-[2rem] text-brand font-bold mb-2 leading-normal w-fit border-b-4 border-brand pb-1 mx-auto px-5">
              FAQ
            </h2>

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`border-b-2 border-[#d9d9d9] px-2 flex flex-col transition-all duration-800 py-3`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className={`flex items-center justify-between gap-3 text-left cursor-pointer`}
                  >
                    <h4 className="text-base text-brand font-medium! font-roboto!">
                      {faq.question}
                    </h4>

                    <span className="shrink-0 transition-transform duration-800">
                      {isOpen ? (
                        <Minus color="#e4c8cb" size={24} />
                      ) : (
                        <Plus color="#e4c8cb" size={24} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-800 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-3 px-1">
                        <p className="text-sm text-text-primary font-poppins! font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
