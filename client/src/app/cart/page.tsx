"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import mouseImage from "@/../public/images/products/mouse.jpg";
import productImage from "@/../public/images/home/product-image.webp";

const products = [
  {
    id: 1,
    name: "Laptop i3 8th/10th Gen-8GB RAM-256 GB SSD-14/15 inch screen",
    rent: 1600,
    deposit: 7500,
    quantity: 1,
    type: "laptop",
  },
  {
    id: 2,
    name: "Logitech M221 Wireless Mouse",
    rent: 75,
    deposit: 0,
    quantity: 1,
    type: "mouse",
  },
];

function Page() {
  const [activeStep, setActiveStep] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [cartItems, setCartItems] = useState(products);

  const monthlyRent = cartItems.reduce(
    (total, item) => total + item.rent * item.quantity,
    0,
  );

  const deposit = cartItems.reduce(
    (total, item) => total + item.deposit * item.quantity,
    0,
  );

  const gst = Math.round(monthlyRent * 0.18);
  const firstMonthTotal = monthlyRent + gst;
  const totalAmount = deposit + firstMonthTotal;
  const payableNow = 99;

  const removeProduct = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-page py-8 sm:py-10">
      <div className="container">
        {/* Checkout Steps */}
        <div className="mx-auto mb-8 flex max-w-3xl items-center justify-center">
          {[
            { id: 1, label: "Checkout" },
            { id: 2, label: "Verification" },
            { id: 3, label: "Address/Payment" },
          ].map((step, index) => (
            <div key={step.id} className="flex flex-1 items-center last:flex-none">
              <button
                type="button"
                onClick={() => setActiveStep(step.id)}
                className="flex shrink-0 items-center gap-2.5"
              >
                <span
                  className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold ${
                    activeStep === step.id
                      ? "bg-brand-dark text-white"
                      : "bg-[#dedede] text-text-primary"
                  }`}
                >
                  {activeStep > step.id ? (
                    <Check size={18} />
                  ) : (
                    step.id
                  )}
                </span>

                <span
                  className={`hidden text-sm sm:block ${
                    activeStep === step.id
                      ? "text-brand-dark"
                      : "text-text-primary"
                  }`}
                >
                  {step.label}
                </span>
              </button>

              {index < 2 && (
                <div className="mx-3 min-w-3 flex-1 border-t border-dashed border-[#cfcfcf] sm:mx-5" />
              )}
            </div>
          ))}
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          {/* Left Column */}
          <div className="min-w-0 space-y-7">
            {/* Order Summary */}
            <section className="common-card-shadow rounded-xl bg-white">
              <div className="flex items-center justify-between border-b border-[#dedede] pb-4">
                <h1 className="font-poppins text-lg! font-semibold! text-black">
                  Order Summary
                </h1>

                <span className="flex size-9 items-center justify-center rounded-full bg-black text-base font-semibold text-white">
                  1
                </span>
              </div>

              <div className="grid grid-cols-1 items-start gap-4 pt-7 md:grid-cols-2">
                {/* Monthly Payable */}
                <div className="rounded-md border border-[#dedede] p-4">
                  <h2 className="rounded-md bg-[#eedcde] px-4 py-2 text-sm! font-medium! text-brand-dark">
                    Monthly Payable
                  </h2>

                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-text-secondary">Products Rent</span>
                      <span className="font-medium text-black">
                        Rs. {monthlyRent.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-text-secondary">GST</span>
                      <span className="font-medium text-black">
                        Rs. {gst.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#dedede] pt-3">
                      <span className="text-text-secondary">
                        Total Rent after first month
                      </span>
                      <span className="font-semibold text-black">
                        Rs. {firstMonthTotal.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payable Now */}
                <div className="rounded-md border border-[#dedede] p-4">
                  <h2 className="rounded-md bg-[#eedcde] px-4 py-2 text-sm! font-medium! text-brand-dark">
                    Payable Now
                  </h2>

                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-text-secondary">
                        Refundable Deposit
                      </span>
                      <span className="font-medium text-black">
                        Rs. {deposit.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-text-secondary">
                        First month rent -{" "}
                        <button
                          type="button"
                          className="font-medium text-brand-dark hover:underline"
                          onClick={() =>
                            document
                              .getElementById("monthly-payable-details")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          View Details
                        </button>
                      </span>
                      <span className="font-medium text-black">
                        Rs. {monthlyRent.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-text-secondary">GST</span>
                      <span className="font-medium text-black">
                        Rs. {gst.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-text-secondary">
                        Delivery Charges
                      </span>
                      <span className="font-medium text-black">
                        Free Delivery
                      </span>
                    </div>

                    <p className="text-right text-xs text-text-secondary">
                      Expect Delivery in 1 day
                    </p>

                    <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#dedede] pt-3 text-base font-semibold">
                      <span className="text-text-secondary">Total Amount</span>
                      <span className="text-black">
                        Rs. {totalAmount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proceed */}
              <div className="mt-9 border-t border-dashed border-[#dedede] pt-5">
                <div className="flex justify-end">
                  <div className="flex items-center gap-5 rounded-lg bg-[#292929] py-2 pl-4 pr-3 text-white">
                    <div>
                      <p className="text-[10px] font-medium">Payable Now</p>
                      <p className="text-base font-bold">
                        Rs. {payableNow}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="rounded-md bg-brand-dark px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand"
                    >
                      Proceed
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-right text-sm font-semibold italic text-text-secondary">
                  Book your order now for just Rs. 99 (100% Refundable).
                  Pay Rest on Confirmation
                </p>
              </div>
            </section>

            {/* Verification Step */}
            <button
              type="button"
              onClick={() => setActiveStep(2)}
              className="flex w-full items-center justify-between rounded-xl bg-white p-5 text-left shadow-[0_0_16px_#00000012] transition hover:shadow-[0_0_18px_#0000001a]"
            >
              <span
                className={`font-semibold ${
                  activeStep === 2 ? "text-brand-dark" : "text-[#999999]"
                }`}
              >
                Verify Your Mobile
              </span>

              <span
                className={`flex size-9 items-center justify-center rounded-full text-sm ${
                  activeStep === 2
                    ? "bg-brand-dark text-white"
                    : "bg-[#eeeeee] text-[#999999]"
                }`}
              >
                2
              </span>
            </button>

            {/* Address Step */}
            <button
              type="button"
              onClick={() => setActiveStep(3)}
              className="flex w-full items-center justify-between rounded-xl bg-white p-5 text-left shadow-[0_0_16px_#00000012] transition hover:shadow-[0_0_18px_#0000001a]"
            >
              <span
                className={`font-semibold ${
                  activeStep === 3 ? "text-brand-dark" : "text-[#999999]"
                }`}
              >
                Address
              </span>

              <span
                className={`flex size-9 items-center justify-center rounded-full text-sm ${
                  activeStep === 3
                    ? "bg-brand-dark text-white"
                    : "bg-[#eeeeee] text-[#999999]"
                }`}
              >
                3
              </span>
            </button>
          </div>

          {/* Right Column */}
          <aside className="min-w-0 space-y-5">
            {/* Coupon */}
            <section className="rounded-xl bg-white p-5 shadow-[0_0_16px_#00000012]">
              <label
                htmlFor="coupon"
                className="mb-1.5 block text-xs text-text-secondary"
              >
                Do you have a coupon?
              </label>

              <form
                className="flex gap-2.5"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (coupon.trim()) setAppliedCoupon(true);
                }}
              >
                <input
                  id="coupon"
                  type="text"
                  value={coupon}
                  onChange={(event) => {
                    setCoupon(event.target.value);
                    setAppliedCoupon(false);
                  }}
                  placeholder="Apply Promo Code"
                  className="min-w-0 flex-1 rounded border border-[#cbd0d8] px-3 py-1.5 text-sm outline-none placeholder:text-[#cbd0d8] focus:border-brand-dark"
                />

                <button
                  type="submit"
                  className="rounded-md bg-brand-dark px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand"
                >
                  Apply
                </button>
              </form>

              {appliedCoupon && (
                <p className="mt-2 text-xs text-text-secondary">
                  Coupon entered. Discount will apply after validation.
                </p>
              )}
            </section>

            {/* Cart Products */}
            {cartItems.map((product) => (
              <section
                key={product.id}
                className="rounded-xl bg-white p-5 shadow-[0_0_16px_#00000012]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-16 shrink-0 items-center justify-center text-brand-dark">
                    {product.type === "laptop" ? (
                      <Image src={productImage} alt="productImage"/>
                    ) : (
                      <Image src={mouseImage} alt="mouseImage"/>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base! leading-5 font-medium! text-black">
                      {product.name}
                    </h3>
                  </div>

                  <button
                    type="button"
                    aria-label={`Remove ${product.name}`}
                    onClick={() => removeProduct(product.id)}
                    className="shrink-0 text-red-600 transition hover:text-red-800"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="mt-5 space-y-2.5 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-text-secondary">Rent Amount</span>
                    <span className="font-semibold text-black">
                      Rs. {product.rent.toLocaleString("en-IN")}/month
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-text-secondary">
                      Refundable Deposit Amount
                    </span>
                    <span className="font-semibold text-black">
                      Rs. {product.deposit.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-text-secondary">Duration</span>
                    <span className="font-semibold text-black">12 Months</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-text-secondary">Quantity</span>
                    <span className="font-semibold text-black">
                      {product.quantity}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-text-secondary">
                      Delivery Charges
                    </span>
                    <span className="font-semibold text-black">
                      Free Delivery
                    </span>
                  </div>
                </div>

                {product.type === "mouse" && (
                  <div className="mt-4 flex justify-end border-t border-[#dedede] pt-3">
                    <Link
                      href="/shop"
                      className="rounded-sm bg-brand-dark px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-brand"
                    >
                      Addon
                    </Link>
                  </div>
                )}
              </section>
            ))}

            {cartItems.length === 0 && (
              <div className="rounded-xl bg-white p-6 text-center shadow-[0_0_16px_#00000012]">
                <p className="text-sm text-text-muted">
                  Your cart is empty.
                </p>
                <Link
                  href="/shop"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:underline"
                >
                  Explore Products <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Page;