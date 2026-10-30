
"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import addresspreview from "@/../public/images/common/delivery-address.png"

interface AddressPreviewProps {
  addressData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
  };
  onChange: () => void;
  onProceed: () => void;
}

export default function AddressPreview({
  addressData,
  onChange,
  onProceed,
}: AddressPreviewProps) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-[0_0_16px_#00000012]">
      {/* Heading */}
      <div className="flex items-center justify-between border-b border-[#dedede] pb-5">
        <h2 className="text-xl! font-semibold! text-black">
          Address
        </h2>

        <span className="flex size-11 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">
          3
        </span>
      </div>

      {/* Address Details */}
      <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">
        <div className="min-w-0 flex-1">
          <p className="text-base text-text-secondary">
            {addressData.address}, {addressData.pincode}, {addressData.city}
          </p>

          {/* Change Address */}
          <button
            type="button"
            onClick={onChange}
            className="mt-9 flex cursor-pointer items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-brand-dark"
          >
            <MapPin size={17} className="text-brand-dark" />
            Change
          </button>

          {/* Payable Amount */}
          <div className="mt-10 flex w-fit items-center gap-8 rounded-lg bg-[#292929] py-2 pl-5 pr-4 text-white">
            <div>
              <p className="text-xs font-medium">Payable Amount</p>
              <p className="text-xl font-bold">Rs. 99</p>
            </div>

            <button
              type="button"
              onClick={onProceed}
              className="cursor-pointer rounded-lg bg-brand-dark px-5 py-2 text-base font-medium text-white transition-colors hover:bg-brand"
            >
              Proceed
            </button>
          </div>

          <p className="mt-3 text-sm font-semibold italic text-text-secondary sm:text-base">
            Book your order now for just Rs. 99 (100% Refundable). Pay Rest
            on Confirmation
          </p>
        </div>

        {/* Address Illustration */}
        <div className="relative h-44 w-full shrink-0 sm:w-48">
          <Image
            src={addresspreview}
            alt="Address illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
