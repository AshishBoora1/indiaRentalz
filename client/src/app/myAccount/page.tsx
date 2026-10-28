"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import ordersImage from "@/../public/images/login/your-order.png";
import userImage from "@/../public/images/login/user-info.png";

function Page() {
  const user = {
    name: "",
    email: "",
    address: "",
  };

  return (
    <main>
      <div className="container">
        <div className="py-10 md:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* User Information */}

            <section className="lg:col-span-4 bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden shadow-[0_3px_10px_#00000030]">
              <div className="bg-page px-4 py-2.5">
                <h2 className="text-lg! font-roboto!  text-text-primary">
                  User Info
                </h2>
              </div>

              <div className="px-4">
                <div className="py-4 border-b border-[#dedede]">
                  <p className="text-base md:text-lg font-roboto! font-semibold! text-[#666]">
                    Name:
                  </p>
                  {user.name && (
                    <p className="mt-1 text-sm text-text-primary">
                      {user.name}
                    </p>
                  )}
                </div>

                <div className="py-4 border-b border-[#dedede]">
                  <p className="text-base md:text-lg font-roboto! font-semibold! text-[#666]">
                    Email:
                  </p>
                  {user.email && (
                    <p className="mt-1 text-sm text-text-primary wrap-break-word">
                      {user.email}
                    </p>
                  )}
                </div>

                <div className="py-4">
                  <p className="text-base md:text-lg font-roboto! font-semibold! text-[#666]">
                    Address:
                  </p>
                  {user.address && (
                    <p className="mt-1 text-sm text-text-primary">
                      {user.address}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Dashboard Cards */}
            <section className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Link
                href="/myOrders"
                className="group min-h-70 md:min-h-79.5 bg-[#262626] border border-[#dedede] flex flex-col items-center justify-center gap-7 p-6 transition-colors duration-300 hover:bg-[#333]"
              >
                <h2 className="text-xl! md:text-2xl! font-roboto! font-bold text-[#777] group-hover:text-white transition-colors">
                  Your Orders
                </h2>

                <Image
                  src={ordersImage}
                  alt="Your Orders"
                  width={165}
                  height={165}
                  className="w-36 h-36 md:w-41.25 md:h-41.25 object-contain"
                />

                <span className="flex items-center gap-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View Orders <ChevronRight size={16} />
                </span>
              </Link>

              {/* User Info */}
              <Link
                href="/userInfo"
                className="group min-h-70 md:min-h-79.5 bg-[#262626] border border-[#dedede] flex flex-col items-center justify-center gap-7 p-6 transition-colors duration-300 hover:bg-[#333]"
              >
                <h2 className="text-xl! md:text-2xl! font-roboto! text-[#777] group-hover:text-white transition-colors">
                  User Info
                </h2>

                <Image
                  src={userImage}
                  alt="User Information"
                  width={165}
                  height={165}
                  className="w-36 h-36 md:w-41.25 md:h-41.25 object-contain"
                />

                <span className="flex items-center gap-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View Profile <ChevronRight size={16} />
                </span>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
