"use client";
import { Filter } from "lucide-react";
import { useState } from "react";
import { ProductImage } from "../data/Icons";
import "../css/listing.css";
import { useAppContext } from "../context/AppContext";

function Page() {
  const [activeTab, setActiveTab] = useState("individual");
  const [activeFilterBar, setActiveFilterBar] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { selectedCity } = useAppContext();

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
    );
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };
  return (
    <main>
      <section className="pb-15">
        <div className=" container">
          <p className="text-(length:--fs-12) text-(--clr-text-secondary) mb-3.5">
            Home › Shop › Laptops
          </p>
          <div className=" flex max-md:flex-col gap-4 justify-between mt-3.5">
            <div>
              <h1 className=" text-(length:--fs-34) leading-[1.12] mb-1.5 text-(--color-heading)">
                Laptops on Rent
              </h1>
              <p className=" text-(length:--fs-14) leading-[1.55] text-(--clr-text-secondary)">
                Compare configurations, monthly rental, delivery time and rental
                terms before choosing the right laptop.
              </p>
            </div>
            <div className=" border border-[#d7e8df] bg-[#eff9f4] rounded-xl py-2.5 px-3">
              <span className=" text-[#65736d] block text-(length:--fs-10) font-bold uppercase tracking-[0.4px]">
                Selected delivery city
              </span>
              <span className="text-[#24503d] block font-extrabold text-(length:--fs-16) mt-1">
                {selectedCity}
              </span>
              <span className=" text-[#68756f] block text-(length:--fs-10) mt-1">
                Delivery timelines on every product are based on this city.
              </span>
            </div>
          </div>

          {/* tab btn */}
          <div className=" border border-(--color-border) gap-3.5 flex max-md:flex-col justify-between md:items-center rounded-2xl py-3 px-3.5 mb-4 bg-linear-to-br from-white to-card mt-4.5">
            <div>
              <span className=" text-(--color-primary-dark) text-(length:--fs-14) font-semibold">
                Renting for yourself?
              </span>
              <p className=" text-(length:--fs-12) text-(--clr-text-secondary) mt-1">
                See the 12-month reference rental, GST-inclusive total, starting
                refundable deposit and B2C rental information.
              </p>
            </div>
            <div className="inline-grid grid-cols-2 bg-[#f6eaeb] border border-(--color-border) p-1 rounded-xl">
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

          {/* tabs */}
          <div className=" flex items-center gap-2 pt-1 pb-3 overflow-auto scrollbar-none">
            <button className=" border border-[#e9bdc1] bg-(--color-primary-light) text-(--color-primary) rounded-full py-2 px-6 text-(length:--fs-12) font-bold text-nowrap cursor-pointer">
              All Laptops
            </button>
            <button className=" border border-(--color-border) rounded-full py-2 px-6 text-(length:--fs-12) font-bold text-nowrap cursor-pointer">
              Office
            </button>
            <button className=" border border-(--color-border) rounded-full py-2 px-6 text-(length:--fs-12) font-bold text-nowrap cursor-pointer">
              Developer
            </button>
            <button className=" border border-(--color-border) rounded-full py-2 px-6 text-(length:--fs-12) font-bold text-nowrap cursor-pointer">
              Video Editing
            </button>
            <button className=" border border-(--color-border) rounded-full py-2 px-6 text-(length:--fs-12) font-bold text-nowrap cursor-pointer">
              Gaming
            </button>
            <button className=" border border-(--color-border) rounded-full py-2 px-6 text-(length:--fs-12) font-bold text-nowrap cursor-pointer">
              Student
            </button>
            <button className=" border border-(--color-border) rounded-full py-2 px-6 text-(length:--fs-12) font-bold text-nowrap cursor-pointer">
              New Laptops
            </button>
            <button className=" border border-(--color-border) rounded-full py-2 px-6 text-(length:--fs-12) font-bold text-nowrap cursor-pointer">
              AI Enabled
            </button>
          </div>

          {/* toolbar */}
          <div className=" flex max-md:flex-col justify-between md:items-center gap-3 border-y border-y-[#f0e3e4] py-3  mb-4.5">
            <p className=" text-(length:--fs-12) text-(--clr-text-secondary)">
              Showing{" "}
              <strong className=" text-(--color-heading)">17 laptops</strong>
            </p>
            <div className=" flex max-md:flex-col md:items-center gap-2">
              <div className=" max-md:flex max-md:gap-2 max-md:items-center">
                <button
                  className=" border border-(--color-primary) bg-white text-(--color-primary) rounded-lg py-2.5 px-4.5 cursor-pointer font-extrabold flex items-center justify-center gap-2.5 md:hidden w-38"
                  onClick={() => setActiveFilterBar(!activeFilterBar)}
                >
                  <Filter size={15} /> Filter
                </button>
                <div className=" border border-(--color-border) w-full md:w-60 rounded-[10px] pe-3 bg-white py-2.5">
                  <select className="outline-none text-[#4d4547] ps-3 border-0 w-full">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                    <option>Performance</option>
                  </select>
                </div>
              </div>
              <div>
                <input
                  className=" py-2.5 px-3 rounded-[10px] w-full md:w-60 border border-(--color-border) outline-none"
                  type="search"
                  placeholder="Search configuration…"
                />
              </div>
            </div>
          </div>

          {/* control pannel */}

          <div className=" flex justify-between max-md:flex-col  items-start gap-5">
            <aside
              className={` rounded-2xl bg-white border border-(--color-border) p-4 md:sticky top-3.5 w-full md:w-3/12 ${activeFilterBar ? "block" : "max-md:hidden"}`}
            >
              <div className=" flex justify-between items-center mb-1.5">
                <h5 className=" text-(length:--fs-16) text-(--color-heading)">
                  Filters
                </h5>
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-(--color-primary) text-(length:--fs-12) cursor-pointer font-bold bg-none border-0"
                >
                  Clear All
                </button>
              </div>

              <div className=" py-3.5 border-t border-t-(--color-border-light)">
                <h6 className="text-(length:--fs-12) mb-2.5 text-(--color-heading)">
                  Use Case
                </h6>
                <div>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("office")}
                      onChange={() => handleFilterChange("office")}
                    />
                    Office / Business
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("developer")}
                      onChange={() => handleFilterChange("developer")}
                    />
                    Developer
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("video-editing")}
                      onChange={() => handleFilterChange("video-editing")}
                    />
                    Video Editing
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("gaming")}
                      onChange={() => handleFilterChange("gaming")}
                    />
                    Gaming
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("ai")}
                      onChange={() => handleFilterChange("ai")}
                    />
                    AI / High Performance
                  </label>
                </div>
              </div>

              <div className=" py-3.5 border-t border-t-(--color-border-light)">
                <h6 className="text-(length:--fs-12) mb-2.5 text-(--color-heading)">
                  Processor
                </h6>
                <div>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("core-i3")}
                      onChange={() => handleFilterChange("core-i3")}
                    />
                    Intel Core i3
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("core-5")}
                      onChange={() => handleFilterChange("core-5")}
                    />
                    Intel Core i5 / Core 5
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("core-i7")}
                      onChange={() => handleFilterChange("core-i7")}
                    />
                    Intel Core i7
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("ultra-7")}
                      onChange={() => handleFilterChange("ultra-7")}
                    />
                    Intel Core Ultra 7
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("ultra-9")}
                      onChange={() => handleFilterChange("ultra-9")}
                    />
                    Intel Core Ultra 9
                  </label>
                </div>
              </div>

              <div className=" py-3.5 border-t border-t-(--color-border-light)">
                <h6 className="text-(length:--fs-12) mb-2.5 text-(--color-heading)">
                  Memory
                </h6>
                <div>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("8gb")}
                      onChange={() => handleFilterChange("8gb")}
                    />
                    8GB
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("16gb")}
                      onChange={() => handleFilterChange("16gb")}
                    />
                    16GB
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("32gb")}
                      onChange={() => handleFilterChange("32gb")}
                    />
                    32GB+
                  </label>
                </div>
              </div>

              <div className=" py-3.5 border-t border-t-(--color-border-light)">
                <h6 className="text-(length:--fs-12) mb-2.5 text-(--color-heading)">
                  Graphics
                </h6>
                <div>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("Integrated")}
                      onChange={() => handleFilterChange("Integrated")}
                    />
                    Integrated
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("rtx-3050")}
                      onChange={() => handleFilterChange("rtx-3050")}
                    />
                    RTX 3050 / 4050
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("rtx-5050")}
                      onChange={() => handleFilterChange("rtx-5050")}
                    />
                    RTX 5050+
                  </label>
                </div>
              </div>

              <div className=" pt-3.5 border-t border-t-(--color-border-light)">
                <h6 className="text-(length:--fs-12) mb-2.5 text-(--color-heading)">
                  Monthly Rental
                </h6>
                <div>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("low")}
                      onChange={() => handleFilterChange("low")}
                    />
                    Under ₹2,500
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("medium")}
                      onChange={() => handleFilterChange("medium")}
                    />
                    ₹2,500–₹5,000
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("average")}
                      onChange={() => handleFilterChange("average")}
                    />
                    ₹5,000–₹10,000
                  </label>
                  <label className=" flex items-center gap-2 text-(length:--fs-12) text-(--color-text) mt-2 cursor-pointer">
                    <input
                      className=" accent-(--color-primary)"
                      type="checkbox"
                      checked={selectedFilters.includes("high")}
                      onChange={() => handleFilterChange("high")}
                    />
                    ₹10,000+
                  </label>
                </div>
              </div>
              <p className=" text-(length:--fs-10) text-(--clr-text-secondary) mt-2">
                B2C totals include GST on the product card.
              </p>
            </aside>
            <section className=" w-full md:w-10/12">
              <div className=" grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((_, i) => {
                  return (
                    <div
                      key={i}
                      className=" border border-(--color-border) bg-white rounded-[18px] overflow-hidden shadow-[0_4px_14px_#46181d06]"
                    >
                      {/* top part */}
                      <div className="h-51.25 bg-[linear-gradient(150deg,#fff,#fff4f5)] relative p-4 grid place-items-center">
                        <div className=" absolute top-2.5 left-2.5 flex gap-1.5 items-center flex-wrap">
                          <span className=" bg-(--color-primary-light) text-(--color-primary) border border-[#e6c8cb] rounded-full py-1.5 px-2 text-(length:--fs-9) font-extrabold">
                            Video Editing
                          </span>
                          <span className=" bg-[#fffffff2] text-(--color-primary-dark) border border-[#e6c8cb] rounded-full py-1.5 px-2 text-(length:--fs-9) font-extrabold">
                            Recommended
                          </span>
                        </div>

                        <label className=" absolute right-2.5 top-2.5 flex items-center gap-1.5 rounded-lg py-1.5 px-2 border border-(--color-border) bg-[#fffffff5] text-(length:--fs-9) text-[#5f5658]">
                          <input
                            className=" accent-(--color-primary)"
                            type="checkbox"
                          />
                          Compare
                        </label>

                        <ProductImage />

                        <div className=" absolute left-2.5 bottom-2.5 rounded-lg py-1.5 px-2 font-extrabold text-(length:--fs-9) border border-[#d4e9de] bg-[#eff9f4f5] text-[#13704c]">
                          ✓ Delivery in DELIVERY_DAYS_247 working days
                        </div>
                      </div>

                      {/* content part */}

                      <div className=" p-3.5 flex flex-col">
                        <h6 className=" text-(length:--fs-9) font-extrabold uppercase text-(--color-primary) tracking-[.45px]">
                          Video Editing / Performance
                        </h6>
                        <h4 className=" text-(length:--fs-14)! leading-[1.38] mt-1.5 mb-2 text-(--color-heading)">
                          Video Editing Laptop on Rent – Intel Core 5 210H, 16GB
                          RAM, 512GB SSD, 15.6″ FHD
                        </h4>

                        <div>
                          <h6 className=" text-(length:--fs-9)! text-(--clr-text-secondary) uppercase font-extrabold tracking-[.35px]">
                            {activeTab === "business"
                              ? "Enterprise rental"
                              : "Starting monthly rental"}
                          </h6>
                          <div className=" flex gap-1.5 mt-1 items-end">
                            <h2 className=" text-(length:--fs-23)! text-(--color-primary-dark) font-extrabold">
                              ₹5,200
                            </h2>
                            <h6 className=" text-(length:--fs-10) text-(--clr-text-secondary) mb-1.5 font-normal!">
                              {activeTab === "business"
                                ? "/mo onwards + GST"
                                : "+ GST"}
                            </h6>
                          </div>
                          <div className=" inline-block items-center gap-1.5 py-1.5 px-2 rounded-full bg-[#fff1f2] border border-[#edc9cc] text-(--color-primary) font-extrabold text-(length:--fs-9)">
                            {activeTab === "business"
                              ? "Reference price based on 12-month tenure"
                              : "Price shown for 12-month rental"}
                          </div>

                          {activeTab !== "business" && (
                            <>
                              <p className=" mt-1.5 text-(length:--fs-9) text-(--clr-text-secondary)">
                                1, 3 and 6-month rental options are available on
                                the product page.
                              </p>
                              <div className=" text-(length:--fs-10) text-[#655c5f] mt-1.5">
                                ₹936 GST ·{" "}
                                <b className="text-(--color-heading)">
                                  ₹6,136/month incl. GST
                                </b>
                              </div>
                              <p className=" mt-2.5 py-2 px-3 bg-[#fff8e9] border border-[#efdcc1] rounded-lg text-[#71552d] text-(length:--fs-9) leading-[1.4]">
                                Refundable deposit starting from{" "}
                                <strong>₹ B2C_DEPOSIT_247</strong> Final
                                security depends on Trust Score and approval.
                              </p>
                            </>
                          )}

                          {activeTab === "business" && (
                            <div className=" mt-2.5 p-2.5 bg-[#fff5f5] border border-(--color-border) rounded-lg">
                              <b className=" text-(length:--fs-10) text-(--color-primary-dark) block">
                                Developer-team pricing available
                              </b>
                              <p className="text-(length:--fs-9) text-(--clr-text-secondary) mt-1 leading-[1.4]">
                                IERR-based terms · volume deployment ·
                                enterprise support
                              </p>
                            </div>
                          )}

                          <button className=" btn-primary w-full px-12 py-2 rounded-lg border border-(--color-primary) bg-(--color-primary) text-white text-(length:--fs-10) mt-3 capitalize">
                            View Rental Options
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=" text-center mt-6">
                <button className=" border border-(--color-primary) bg-white text-(--color-primary) rounded-[10px] py-2.5 px-4.5 cursor-pointer font-extrabold">
                  Load More Laptops
                </button>
              </div>

              <div className=" mt-5.5 border border-(--color-border) rounded-2xl py-4 px-5 bg-[linear-gradient(135deg,#fff8f8,#fff)]">
                <h3 className=" text-(length:--fs-16)! text-(--color-primary-dark) mb-1.5">
                  Need help choosing the right configuration?
                </h3>
                <p className=" text-(length:--fs-12) text-(--clr-text-secondary) leading-[1.6]">
                  Keep listing cards compact and easy to scan. Detailed
                  processor, RAM, storage, graphics and display specifications
                  should be shown on the product-detail page, while the listing
                  focuses on product name, use case, price, delivery and the
                  next action. For enterprise customers, add a “Compare for
                  Team” or bulk enquiry flow rather than forcing every customer
                  into a retail-style cart.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
