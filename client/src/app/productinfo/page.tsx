"use client";
import Image from "next/image";
import "../css/listing.css";
import { ProductInfoImage } from "../data/Icons";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { faqs } from "../data/DummyData";
import { Minus, Plus } from "lucide-react";
import productimage from "@/../public/images/home/product-image.webp";

function Page() {
  const [activeTab, setActiveTab] = useState("individual");
  const { selectedCity } = useAppContext();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq((currentId) => (currentId === id ? null : id));
  };
  return (
    <main>
      <section>
        <div className=" pb-10">
          <div className=" container">
            <p className="text-(length:--fs-12) text-(--clr-text-secondary) mb-3.5">
              Home › Business Rentals › Performance Laptops › Core 5 210H
            </p>

            <div className=" grid md:grid-cols-2 gap-7.5 items-start">
              <div className=" border text-[#ead7d9] rounded-3xl p-4.5 bg-[linear-gradient(145deg,#fff,#fff3f4)]">
                <div className="relative">
                  <span className=" inline-block border border-[#e6c7ca] rounded-full py-2 px-3 text-(length:--fs-12) font-bold text-[#7a2026] bg-white relative z-10">
                    Built for creators & project teams
                  </span>

                  <div className=" relative min-h-105 rounded-[18px] overflow-hidden grid place-items-center bg-[radial-gradient(circle_at_50%_30%,#fff_0%,#fff8f8_43%,#f2dfe1_100%)] mt-2">
                    <div className=" absolute top-3 right-3 z-10 bg-[#fffffff0] border border-[#ead7d9] text-[#7a2026] rounded-full py-1.5 px-2.5 text-(length:--fs-10) font-extrabold">
                      <span>1</span> / 4
                    </div>
                  </div>

                  <div className=" absolute inset-0 place-items-center grid">
                    <ProductInfoImage />
                  </div>
                </div>

                <div className=" grid grid-cols-4 mt-2.5 gap-2.5">
                  <button className="bg-[#fff6f7] shadow-[0_0_0_2px_#b5121b14] overflow-auto border border-[#b5121b] rounded-xl min-h-17 p-1.5 cursor-pointer grid place-items-center">
                    <Image
                      className=" h-14.5 object-contain w-full"
                      src={productimage}
                      alt="productimage"
                    />
                  </button>
                  <button className="bg-white border border-[#ead7d9] rounded-xl min-h-17 p-1.5 cursor-pointer grid place-items-center overflow-hidden">
                    <Image
                      className=" h-14.5 object-contain w-full"
                      src={productimage}
                      alt="productimage"
                    />
                  </button>
                  <button className="bg-white border border-[#ead7d9] rounded-xl min-h-17 p-1.5 cursor-pointer grid place-items-center overflow-hidden">
                    <Image
                      className=" h-14.5 object-contain w-full"
                      src={productimage}
                      alt="productimage"
                    />
                  </button>
                  <button className="bg-white border border-[#ead7d9] rounded-xl min-h-17 p-1.5 cursor-pointer grid place-items-center overflow-hidden">
                    <Image
                      className=" h-14.5 object-contain w-full"
                      src={productimage}
                      alt="productimage"
                    />
                  </button>
                </div>

                <div className=" flex flex-col gap-2 mt-3">
                  <div className=" bg-white border border-[#ead7d9] rounded-[10px] py-2.5 px-3 flex items-center justify-between gap-3.5">
                    <span className="text-(length:--fs-10) font-bold">
                      Processor
                    </span>
                    <b className="text-(length:--fs-12) text-[#7a2026] leading-tight text-right">
                      Intel Core 5 210H
                    </b>
                  </div>
                  <div className=" bg-white border border-[#ead7d9] rounded-[10px] py-2.5 px-3 flex items-center justify-between gap-3.5">
                    <span className="text-(length:--fs-10) font-bold">
                      Memory
                    </span>
                    <b className="text-(length:--fs-12) text-[#7a2026] leading-tight text-right">
                      16GB RAM
                    </b>
                  </div>
                  <div className=" bg-white border border-[#ead7d9] rounded-[10px] py-2.5 px-3 flex items-center justify-between gap-3.5">
                    <span className="text-(length:--fs-10) font-bold">
                      Storage
                    </span>
                    <b className="text-(length:--fs-12) text-[#7a2026] leading-tight text-right">
                      512GB SSD
                    </b>
                  </div>
                  <div className=" bg-white border border-[#ead7d9] rounded-[10px] py-2.5 px-3 flex items-center justify-between gap-3.5">
                    <span className="text-(length:--fs-10) font-bold">
                      Display
                    </span>
                    <b className="text-(length:--fs-12) text-[#7a2026] leading-tight text-right">
                      15.6″ FHD
                    </b>
                  </div>
                </div>

                <p className=" mt-3 text-(length:--fs-10) text-(--clr-text-secondary) leading-normal">
                  Representative images may be used. Exact brand, colour and
                  appearance can vary by availability unless a specific model is
                  committed in writing.
                </p>
              </div>
              <div>
                <div>
                  <h6 className="text-(length:--fs-12)! text-(--color-primary) uppercase tracking-[0.8px] font-extrabold!">
                    Technology Without Ownership
                  </h6>
                  <h1 className=" text-[30px]! xl:text-[36px] leading-[1.3]! mt-2 text-(--color-heading)">
                    Video Editing Laptop on Rent – Intel Core 5 210H, 16GB RAM,
                    512GB SSD, 15.6″ FHD
                  </h1>
                  <p className=" text-[#514a4c] leading-[1.65] text-(length:--fs-16) pt-4">
                    <strong>
                      Rent for yourself or deploy across your team.{" "}
                    </strong>{" "}
                    Designed for video editing, development, multitasking and
                    temporary project requirements.
                  </p>

                  <div className="inline-grid grid-cols-2 bg-[#f6eaeb] border border-(--color-border) p-1 rounded-xl mt-4 mb-4.5">
                    <button
                      type="button"
                      onClick={() => setActiveTab("individual")}
                      className={`rounded-lg py-2 px-4 font-bold text-(length:--fs-12) cursor-pointer transition-all duration-300 ${
                        activeTab === "individual"
                          ? "bg-white text-(--color-primary) shadow-[0_4px_12px_#50141912]"
                          : "bg-transparent text-[#6d5f61]"
                      }`}
                    >
                      Individual
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("business")}
                      className={`rounded-lg py-2 px-4 font-bold text-(length:--fs-12) cursor-pointer transition-all duration-300 ${
                        activeTab === "business"
                          ? "bg-white text-(--color-primary) shadow-[0_4px_12px_#50141912]"
                          : "bg-transparent text-[#6d5f61]"
                      }`}
                    >
                      Business / Team
                    </button>
                  </div>
                </div>

                {activeTab === "individual" ? (
                  <div className=" border border-[#ead7d9] rounded-[20px] p-5.5 bg-white shadow-[0_18px_52px_#55191e12]">
                    <h6 className=" text-(length:--fs-12)! text-(--clr-text-secondary) uppercase font-extrabold! tracking-[.35px]">
                      Starting rental
                    </h6>
                    <div className=" flex gap-1.5 mt-1 items-end">
                      <h2 className=" text-(length:--fs-34)!  text-(--color-primary-dark) font-extrabold">
                        ₹5,200
                      </h2>
                      <h6 className=" text-(length:--fs-14) text-(--clr-text-secondary) mb-1.5 font-normal!">
                        / month + GST
                      </h6>
                    </div>

                    <p className=" mt-1 text-(length:--fs-12) text-(--clr-text-secondary) leading-normal">
                      Rental shown for the selected tenure. Final availability
                      is subject to stock and approval.
                    </p>

                    {/* charge */}
                    <div className=" mt-2 border border-[#ead7d9] bg-[#fffafa] rounded-xl py-3 px-3.5">
                      <div className=" flex justify-between gap-3 text-(length:--fs-12) text-[#625a5c] my-1">
                        <span>Monthly rental</span>
                        <strong>₹5,200</strong>
                      </div>

                      <div className=" flex justify-between gap-3 text-(length:--fs-12) text-[#625a5c] my-1">
                        <span>GST @ 18%</span>
                        <strong>₹936</strong>
                      </div>

                      <div className=" flex justify-between gap-3 border-t border-t-[#eadbdd] mt-2 pt-2 text-[#7a2026] font-extrabold text-(length:--fs-14)">
                        <span>Monthly rental incl. GST</span>
                        <strong>₹6,136</strong>
                      </div>
                    </div>

                    {/* status */}

                    <div className=" flex max-md:flex-row max-lg:flex-col lg:items-center justify-between gap-3 border border-[#dce9e2] bg-[#f5fbf8] rounded-xl py-3 px-3.5 mt-3.5 mb-1">
                      <div className=" flex max-md:flex-row max-lg:flex-col items-start gap-2.5">
                        <div>
                          <div className=" w-8.5 h-8.5 rounded-[10px] bg-[#e7f6ee] text-[#127451] grid place-items-center font-extrabold">
                            ✓
                          </div>
                        </div>

                        <div>
                          <b className=" block text-(length:--fs-12) text-[#244c3b]">
                            Delivery to{" "}
                            <span className=" block text-(length:--fs-10) texxt-[#64756d]  leading-[1.45] mt-0.5">
                              {selectedCity}
                            </span>{" "}
                            <span className=" text-(length:--fs-10) texxt-[#64756d] font-light! leading-[1.45] mt-1">
                              Your city is already selected when you enter the
                              website.
                            </span>
                          </b>
                        </div>
                      </div>

                      <div className=" lg:text-right text-nowrap font-black text-[#127451] text-(length:--fs-14)">
                        DELIVERY_DAYS
                        <span className=" block text-(length:--fs-10) font-bold">
                          working days
                        </span>
                      </div>
                    </div>

                    <div className=" mt-4">
                      <label
                        className="text-(length:--fs-12) block mb-1.5  font-bold"
                        htmlFor="control"
                      >
                        Tenure
                      </label>
                      <div className=" border border-[#dcc6c8] w-full rounded-[10px] pe-3 bg-white py-2.5">
                        <select
                          id="control"
                          className="outline-none text-(length:--fs-14) text-(--color-heading) ps-3 border-0 w-full"
                        >
                          <option>12 months</option>
                          <option>6 monthsh</option>
                          <option>3 months</option>
                          <option>1 month</option>
                        </select>
                      </div>
                    </div>

                    <div className=" border border-[#efd9c5] bg-[#fff9ef] rounded-xl py-3 px-3.5 mt-3.5">
                      <b className=" block text-(length:--fs-12) text-[#7c5520] mb-1">
                        Refundable security deposit
                      </b>
                      <h3 className=" text-[20px]! font-black text-[#7a4e12]">
                        Starting from ₹B2C_DEPOSIT_START
                      </h3>
                      <p className="text-(length:--fs-10) text-[#76644b] leading-normal mt-1.5">
                        Final deposit depends on the IndiaRentalz Trust Score,
                        customer profile, product value, tenure and rental
                        approval.
                      </p>
                    </div>

                    <div className=" border border-[#ead7d9] rounded-[14px] p-4 bg-[linear-gradient(145deg,#fff,#fff8f8)] mt-4">
                      <div className=" flex max-lg:flex-col justify-between items-start gap-3">
                        <div>
                          <h6 className="text-(length:--fs-12) font-extrabold text-[#7a2026]">
                            IndiaRentalz Trust Score — Individual
                          </h6>
                          <p className="text-(length:--fs-10) mt-1 leading-normal text-[#746d70]">
                            A rental eligibility indicator generated after
                            documentation and verification.
                          </p>
                        </div>

                        <div className=" flex items-center gap-1.5 py-1.5 px-2 rounded-full bg-[#fde8ea] border border-[#efcdd0] text-(--color-primary) max-lg:w-full justify-center font-extrabold text-nowrap text-(length:--fs-10) tracking-[0.5px] uppercase">
                          Calculated after verification
                        </div>
                      </div>

                      <div className=" h-2 bg-[#f2e4e5] rounded-full overflow-hidden mt-3 mb-2">
                        <span className=" block h-full w-8/12 bg-[linear-gradient(90deg,#d7a1a5,#b5121b)] rounded-full"></span>
                      </div>

                      <div className=" flex items-center gap-2 mt-2.5 flex-wrap">
                        <button className=" border border-[#e7b7bb] text-(--color-primary) rounded-full py-1 px-2.5 text-(length:--fs-10) font-bold text-nowrap bg-[#fff3f4] cursor-pointer">
                          Basic
                        </button>
                        <button className=" border border-[#ead7d9] text-[#6c5d60] rounded-full py-1 px-2.5 text-(length:--fs-10) font-bold text-nowrap bg-white cursor-pointer">
                          Verified
                        </button>
                        <button className=" border border-[#ead7d9] text-[#6c5d60] rounded-full py-1 px-2.5 text-(length:--fs-10) font-bold text-nowrap bg-white cursor-pointer">
                          Strong
                        </button>
                        <button className=" border border-[#ead7d9] text-[#6c5d60] rounded-full py-1 px-2.5 text-(length:--fs-10) font-bold text-nowrap bg-white cursor-pointer">
                          Preferred
                        </button>
                      </div>

                      <div className=" grid lg:grid-cols-2 gap-2 mt-2.5">
                        <div className="text-(length:--fs-10) text-[#5f5658] bg-white border border-[#f0e1e2] rounded-lg py-2 px-2.5">
                          Identity & address verification
                        </div>
                        <div className="text-(length:--fs-10) text-[#5f5658] bg-white border border-[#f0e1e2] rounded-lg py-2 px-2.5">
                          Employment / profession profile
                        </div>
                        <div className="text-(length:--fs-10) text-[#5f5658] bg-white border border-[#f0e1e2] rounded-lg py-2 px-2.5">
                          Financial verification
                        </div>
                        <div className="text-(length:--fs-10) text-[#5f5658] bg-white border border-[#f0e1e2] rounded-lg py-2 px-2.5">
                          Rental value & tenure
                        </div>
                      </div>

                      <p className="text-(length:--fs-10) mt-2.5 leading-normal text-[#746d70]">
                        The score is not a credit bureau score. It is an
                        internal IndiaRentalz rental-risk indicator used to
                        determine approval, refundable security and applicable
                        rental terms.
                      </p>
                    </div>

                    <div className=" mt-4">
                      <button className=" btn-primary w-full px-12 py-3 rounded-lg border border-(--color-primary) bg-(--color-primary) text-white text-(length:--fs-12) capitalize font-extrabold">
                        Check Availability & Continue
                      </button>
                      <button className=" btn-primary w-full px-12 py-3 rounded-lg border border-(--color-primary) bg-white text-(--color-primary) text-(length:--fs-12) capitalize font-extrabold mt-2">
                        Ask for Another Configuration
                      </button>
                    </div>

                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2.5 mt-3.5">
                      <div className=" border border-[#ead7d9] p-3  rounded-xl bg-[#fffafa]">
                        <h6 className="text-(length:--fs-12) text-[#7a2026] font-bold">
                          GST-ready billing
                        </h6>
                        <p className="text-(length:--fs-10) text-[#746d70] mt-1">
                          Structured invoicing for businesses.
                        </p>
                      </div>
                      <div className=" border border-[#ead7d9] p-3  rounded-xl bg-[#fffafa]">
                        <h6 className="text-(length:--fs-12) text-[#7a2026] font-bold">
                          Multi-city deployment
                        </h6>
                        <p className="text-(length:--fs-10) text-[#746d70] mt-1">
                          Plan distributed employee deliveries.
                        </p>
                      </div>
                      <div className=" border border-[#ead7d9] p-3  rounded-xl bg-[#fffafa]">
                        <h6 className="text-(length:--fs-12) text-[#7a2026] font-bold">
                          Asset-tagged devices
                        </h6>
                        <p className="text-(length:--fs-10) text-[#746d70] mt-1">
                          Serialized rental asset control.
                        </p>
                      </div>
                      <div className=" border border-[#ead7d9] p-3  rounded-xl bg-[#fffafa]">
                        <h6 className="text-(length:--fs-12) text-[#7a2026] font-bold">
                          Support coordination
                        </h6>
                        <p className="text-(length:--fs-10) text-[#746d70] mt-1">
                          Service and replacement as per plan.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=" border border-[#ead7d9] rounded-[20px] p-5.5 bg-white shadow-[0_18px_52px_#55191e12]">
                    <h6 className=" text-(length:--fs-12)! text-(--clr-text-secondary) uppercase font-extrabold! tracking-[.35px]">
                      Business rental enquiry
                    </h6>
                    <div className=" flex gap-1.5 mt-1 items-end">
                      <h2 className=" text-(length:--fs-34)!  text-(--color-primary-dark) font-extrabold">
                        Custom
                      </h2>
                      <h6 className=" text-(length:--fs-14) text-(--clr-text-secondary) mb-1.5 font-normal!">
                        pricing for teams
                      </h6>
                    </div>

                    <p className=" mt-1 text-(length:--fs-12) text-(--clr-text-secondary) leading-normal">
                      Optimise pricing by quantity, tenure, deployment city and
                      support requirement. GST is applicable on the final quoted
                      rental.
                    </p>

                    {/* status */}

                    <div className=" flex max-sm:flex-row max-lg:flex-col lg:items-center justify-between gap-3 border border-[#dce9e2] bg-[#f5fbf8] rounded-xl py-3 px-3.5 mt-3.5 mb-1">
                      <div className=" flex max-md:flex-row max-lg:flex-col items-start gap-2.5">
                        <div>
                          <div className=" w-8.5 h-8.5 rounded-[10px] bg-[#e7f6ee] text-[#127451] grid place-items-center font-extrabold">
                            ✓
                          </div>
                        </div>

                        <div>
                          <b className=" block text-(length:--fs-12) text-[#244c3b]">
                            Primary delivery city:
                            <span className="text-(length:--fs-10) texxt-[#64756d]  leading-[1.45] mt-1">
                              {selectedCity}
                            </span>{" "}
                            <span className=" text-(length:--fs-10) texxt-[#64756d] font-light! leading-[1.45] mt-1">
                              Selected at the start of the customer journey.
                              Additional deployment cities can be added below.
                            </span>
                          </b>
                        </div>
                      </div>

                      <div className=" lg:text-right text-nowrap font-black text-[#127451] text-(length:--fs-14)">
                        DELIVERY_DAYS
                        <span className=" block text-(length:--fs-10) font-bold">
                          working days
                        </span>
                      </div>
                    </div>

                    <form action="#" className=" mt-4 grid lg:grid-cols-2 gap-3">
                      <div>
                        <label
                          className="text-(length:--fs-12) block mb-1.5  font-bold"
                          htmlFor="Quantity"
                        >
                          Quantity
                        </label>
                        <input
                          className="border border-[#dcc6c8] w-full rounded-[10px] px-3 bg-white py-2.5 outline-none text-(length:--fs-14) text-(--color-heading)"
                          type="text"
                          name="quantity"
                          id="quantity"
                        />
                      </div>

                      <div>
                        <label
                          className="text-(length:--fs-12) block mb-1.5  font-bold"
                          htmlFor="control"
                        >
                          Tenure
                        </label>
                        <div className=" border border-[#dcc6c8] w-full rounded-[10px] pe-3 bg-white py-2.5">
                          <select
                            id="control"
                            className="outline-none text-(length:--fs-14) text-(--color-heading) ps-3 border-0 w-full"
                          >
                            <option>12 months</option>
                            <option>6 monthsh</option>
                            <option>3 months</option>
                            <option>1 month</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          className="text-(length:--fs-12) block mb-1.5  font-bold"
                          htmlFor="city"
                        >
                          Additional deployment city / cities
                        </label>
                        <input
                          className="border border-[#dcc6c8] w-full rounded-[10px] px-3 bg-white py-2.5 outline-none text-(length:--fs-14) text-(--color-heading)"
                          type="text"
                          placeholder="Optional for multi-city deployment"
                          name="city"
                          id="city"
                        />
                      </div>

                      <div>
                        <label
                          className="text-(length:--fs-12) block mb-1.5  font-bold"
                          htmlFor="email"
                        >
                          Work email
                        </label>
                        <input
                          className="border border-[#dcc6c8] w-full rounded-[10px] px-3 bg-white py-2.5 outline-none text-(length:--fs-14) text-(--color-heading)"
                          type="email"
                          placeholder="name@company.com"
                          name="email"
                          id="email"
                        />
                      </div>
                    </form>

                    <div className=" border border-[#ead7d9] rounded-[14px] p-4 bg-[linear-gradient(145deg,#fff,#fff8f8)] mt-4">
                      <div className=" flex max-lg:flex-col justify-between items-start gap-3">
                        <div>
                          <h6 className="text-(length:--fs-12) font-extrabold text-[#7a2026]">
                            IERR — IndiaRentalz Enterprise Rental Rating
                          </h6>
                          <p className="text-(length:--fs-10) mt-1 leading-normal text-[#746d70]">
                            A business rental-risk and relationship rating used
                            for enterprise commercial decisions.
                          </p>
                        </div>

                        <div className=" flex items-center gap-1.5 py-1.5 px-2 rounded-full bg-[#fde8ea] border border-[#efcdd0] text-(--color-primary) max-lg:w-full justify-center font-extrabold text-nowrap text-(length:--fs-10) tracking-[0.5px] uppercase">
                          Pre-approval rating
                        </div>
                      </div>

                      <div className=" h-2 bg-[#f2e4e5] rounded-full overflow-hidden mt-3 mb-2">
                        <span className=" block h-full w-8/12 bg-[linear-gradient(90deg,#d7a1a5,#b5121b)] rounded-full"></span>
                      </div>

                      <div className=" flex items-center gap-2 mt-2.5 flex-wrap">
                        <button className=" border border-[#e7b7bb] text-(--color-primary) rounded-full py-1 px-2.5 text-(length:--fs-10) font-bold text-nowrap bg-[#fff3f4] cursor-pointer">
                          IERR-D
                        </button>
                        <button className=" border border-[#ead7d9] text-[#6c5d60] rounded-full py-1 px-2.5 text-(length:--fs-10) font-bold text-nowrap bg-white cursor-pointer">
                          IERR-C
                        </button>
                        <button className=" border border-[#ead7d9] text-[#6c5d60] rounded-full py-1 px-2.5 text-(length:--fs-10) font-bold text-nowrap bg-white cursor-pointer">
                          IERR-A
                        </button>
                        <button className=" border border-[#ead7d9] text-[#6c5d60] rounded-full py-1 px-2.5 text-(length:--fs-10) font-bold text-nowrap bg-white cursor-pointer">
                          IERR-A+
                        </button>
                      </div>

                      <div className=" grid lg:grid-cols-2 gap-2 mt-2.5">
                        <div className="text-(length:--fs-10) text-[#5f5658] bg-white border border-[#f0e1e2] rounded-lg py-2 px-2.5">
                          Business age & constitution
                        </div>
                        <div className="text-(length:--fs-10) text-[#5f5658] bg-white border border-[#f0e1e2] rounded-lg py-2 px-2.5">
                          GST / filing / financial profile
                        </div>
                        <div className="text-(length:--fs-10) text-[#5f5658] bg-white border border-[#f0e1e2] rounded-lg py-2 px-2.5">
                          Payment behaviour & rental history
                        </div>
                        <div className="text-(length:--fs-10) text-[#5f5658] bg-white border border-[#f0e1e2] rounded-lg py-2 px-2.5">
                          Order value, tenure & asset exposure
                        </div>
                      </div>

                      <p className="text-(length:--fs-10) mt-2.5 leading-normal text-[#746d70]">
                        IERR is an internal IndiaRentalz enterprise rental
                        rating. It can be used to guide deposit requirements,
                        credit terms, approval limits and documentation depth.
                        Final terms remain subject to verification and
                        commercial approval.
                      </p>
                    </div>

                    <div className=" mt-4">
                      <button className=" btn-primary w-full px-12 py-3 rounded-lg border border-(--color-primary) bg-(--color-primary) text-white text-(length:--fs-12) capitalize font-extrabold">
                        Get Enterprise Rental Quote
                      </button>
                      <button className=" btn-primary w-full px-12 py-3 rounded-lg border border-(--color-primary) bg-white text-(--color-primary) text-(length:--fs-12) capitalize font-extrabold mt-2">
                        Speak to Rental Specialist
                      </button>
                    </div>

                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2.5 mt-3.5">
                      <div className=" border border-[#ead7d9] p-3  rounded-xl bg-[#fffafa]">
                        <h6 className="text-(length:--fs-12) text-[#7a2026] font-bold">
                          GST-ready billing
                        </h6>
                        <p className="text-(length:--fs-10) text-[#746d70] mt-1">
                          Structured invoicing for businesses.
                        </p>
                      </div>
                      <div className=" border border-[#ead7d9] p-3  rounded-xl bg-[#fffafa]">
                        <h6 className="text-(length:--fs-12) text-[#7a2026] font-bold">
                          Multi-city deployment
                        </h6>
                        <p className="text-(length:--fs-10) text-[#746d70] mt-1">
                          Plan distributed employee deliveries.
                        </p>
                      </div>
                      <div className=" border border-[#ead7d9] p-3  rounded-xl bg-[#fffafa]">
                        <h6 className="text-(length:--fs-12) text-[#7a2026] font-bold">
                          Asset-tagged devices
                        </h6>
                        <p className="text-(length:--fs-10) text-[#746d70] mt-1">
                          Serialized rental asset control.
                        </p>
                      </div>
                      <div className=" border border-[#ead7d9] p-3  rounded-xl bg-[#fffafa]">
                        <h6 className="text-(length:--fs-12) text-[#7a2026] font-bold">
                          Support coordination
                        </h6>
                        <p className="text-(length:--fs-10) text-[#746d70] mt-1">
                          Service and replacement as per plan.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" container  border-t border-[#f2e4e5] py-10">
          <div>
            <h2 className=" text-[28px]! mb-1 text-(--color-heading)">
              Your Rental Journey
            </h2>
            <p className="text-[#746d70] text-(length:--fs-14) leading-[1.6] mb-3">
              The process below automatically changes based on whether the
              customer selects <strong>Individual</strong> or{" "}
              <strong>Business / Team</strong> above.
            </p>
            <div className=" border border-[#e7b7bb] text-(--color-primary) rounded-full py-1 px-2.5 text-(length:--fs-10) font-bold text-nowrap bg-[#fff3f4] mb-5 inline-block">
              <span>Individual / B2C Journey</span>
            </div>
          </div>

          <div className=" grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((_, i) => {
              return (
                <div
                  key={i}
                  className=" journey-card relative border border-[#ead7d9] rounded-[14px] py-3.5 px-3 bg-white min-h-36.25"
                >
                  <div className=" w-7 h-7 rounded-full grid place-items-center bg-[#fde8ea] text-(--color-primary) text-(length:--fs-12) font-black!">
                    1
                  </div>
                  <h6 className="text-(length:--fs-12) mt-2.5 leading-[1.35] text-(--color-heading)">
                    Select Product & Tenure
                  </h6>
                  <p className="text-(length:--fs-10) text-[#746d70] leading-normal mt-1.5">
                    Review configuration, selected city, delivery timeline,
                    GST-inclusive price and starting deposit.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className=" container py-10  border-t border-[#f2e4e5]">
          <div>
            <h2 className=" text-[28px]! mb-1 text-(--color-heading)">
              Why Individuals Rent from IndiaRentalz
            </h2>
            <p className="text-[#746d70] text-(length:--fs-14) leading-[1.6] mb-6">
              The benefits below are shown when the customer selects{" "}
              <strong>Individual</strong> at the top.
            </p>
          </div>

          <div className=" grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((_, i) => {
              return (
                <div
                  key={i}
                  className="border border-[#ead7d9] rounded-2xl p-4 bg-[linear-gradient(145deg,#fff,#fff8f8)]"
                >
                  <div className=" w-8.5 h-8.5 rounded-lg grid place-items-center bg-[#fde8ea] text-(--color-primary) text-(length:--fs-12) font-black!">
                    01
                  </div>
                  <h6 className="text-(length:--fs-14) mt-2.5 leading-[1.35] text-(--color-heading)">
                    Lower Upfront Cost
                  </h6>
                  <p className="text-(length:--fs-12) text-[#746d70] leading-normal my-3">
                    Use the technology you need without paying the full purchase
                    price upfront.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className=" container py-10  border-t border-[#f2e4e5]">
          <div>
            <h2 className=" text-[28px]! mb-1 text-(--color-heading)">
              Choose the right performance level
            </h2>
            <p className="text-[#746d70] text-(length:--fs-14) leading-[1.6] mb-6">
              A consultation-led recommendation structure can increase both
              conversion and average rental value.
            </p>
          </div>

          <div className=" grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {[1, 2, 3].map((_, i) => {
              return (
                <div
                  key={i}
                  className={`border ${i === 1 ? "border-(--color-primary) bg-[#fff8f8]" : "border-[#ead7d9] bg-white"}  rounded-2xl p-4.5`}
                >
                  <div className=" border border-[#e7b7bb] text-(--color-primary) rounded-full py-1.25 px-3 text-(length:--fs-10) font-extrabold uppercase text-nowrap bg-[#fde6e8] inline-block">
                    <span>Higher Performance</span>
                  </div>
                  <h4 className="text-[18px]! mt-2.5 mb-1.5 text-[#7a2026]">
                    Performance
                  </h4>
                  <p className="text-(length:--fs-12) text-[#746d70] leading-normal mt-2 mb-1.5">
                    For GPU-heavy and demanding creator workloads.
                  </p>
                  <ul className=" marker:text-(--color-heading) list-disc ps-4">
                    <li className="text-(length:--fs-12) my-1 text-(--color-heading)">
                      Dedicated graphics
                    </li>
                    <li className="text-(length:--fs-12) my-1 text-(--color-heading)">
                      Higher memory
                    </li>
                    <li className="text-(length:--fs-12) my-1 text-(--color-heading)">
                      Advanced workloads
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 container  border-t border-[#f2e4e5]">
          <div>
            <h2 className=" text-[28px]! mb-1 text-(--color-heading)">
              Product Video
            </h2>
            <p className="text-[#746d70] text-(length:--fs-14) leading-[1.6] mb-6">
              Give customers a better feel for the device, configuration and
              rental use case before they decide.
            </p>
          </div>

          <div className=" border border-[#ead7d9] relative rounded-[20px] bg-[linear-gradient(145deg,#fff,#fff7f7)]">
            <div className="p-[19px_20px_12px]">
              <h3 className=" text-[20px]! mb-1.5 text-[#7a2026]">
                Product Video
              </h3>
              <p className="text-[#746d70] text-(length:--fs-12) leading-[1.6]">
                Give customers a better feel for the device, configuration and
                rental use case before they decide.
              </p>
            </div>
            <div className="aspect-video text-center bg-[#f5e7e8] rounded-b-[20px] grid place-items-center overflow-hidden relative">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/a3HKbjjVols"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* video link */}
              {/* <div>
                <video
                  controls
                  autoPlay
                  className=" h-full w-full object-cover bg-[#181313]  rounded-b-[20px]"
                  src="https://youtu.be/a3HKbjjVols?si=sW6SBFLOgSTFa32F"
                ></video>
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                  <div className="w-15.5 h-15.5 rounded-full bg-(--color-primary) text-white grid place-items-center mx-auto text-[24px] shadow-[0_10px_28px_#b5121b33]">
                    ▶
                  </div>
                  <h5 className="text-(length:--fs-14)! text-[#7a2026] mt-3 mb-1.5">
                    Product video area
                  </h5>
                  <p className="text-(length:--fs-12) text-[#746d70]">
                    Connect this block to the products MP4, YouTube or Vimeo URL
                    from your product master.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 container border-t border-[#f2e4e5]">
          <div>
            <h2 className=" text-[28px]! mb-1 text-(--color-heading)">
              Frequently Asked Questions
            </h2>
            <p className="text-[#746d70] text-(length:--fs-14) leading-[1.6] mb-6">
              Answers to the questions customers usually have before renting a
              laptop from IndiaRentalz.
            </p>

            <div>
              {faqs.map((faq, index) => {
                const faqId = index;
                const isOpen = openFaq === faqId;

                return (
                  <div
                    key={faqId}
                    className={`${index === 0 ? "border-y border-y-[#ead7d9]" : "border-b border-b-[#ead7d9]"} transition-all duration-300 ease-in-out`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faqId)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faqId}`}
                      className="w-full cursor-pointer py-4 px-0.5 flex items-center justify-between gap-4 text-left"
                    >
                      <h5 className="text-(--color-heading) font-extrabold! text-(length:--fs-14)!">
                        {faq.question}
                      </h5>

                      <span className="text-(--color-primary)">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${faqId}`}
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div
                          className="text-(length:--fs-12)! text-[#5c5557] pb-4 px-0.5"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" flex max-sm:flex-col justify-between items-center py-4 px-4.5 mt-5 border border-[#ead7d9] bg-[#fffafa] rounded-[14px] gap-3.5">
            <div>
              <h6 className="text-(length:--fs-14) font-extrabold text-[#7a2026]">
                Still have a question?
              </h6>
              <p className="text-(length:--fs-12) mt-0.5 leading-normal text-[#746d70]">
                Speak with the IndiaRentalz team about configuration, approval,
                delivery or enterprise deployment.
              </p>
            </div>

            <button className=" max-sm:w-full border border-(--color-primary) bg-white text-(--color-primary) rounded-[10px] py-2.5 px-4.5 cursor-pointer font-extrabold text-(length:--fs-14) text-nowrap">
              View All FAQs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
