"use client";

import { useState, type FormEvent } from "react";

interface AddressFormProps {
  verifiedMobile: string;
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
  }) => void;
}

export default function AddressForm({
  verifiedMobile,
  onSubmit,
}: AddressFormProps) {
  // Load saved data
  const [formData, setFormData] = useState(() => {
    let savedData = {
      name: "",
      email: "",
      address: "",
      city: "",
      pincode: "",
    };

    try {
      const savedAddress = localStorage.getItem("checkoutAddress");

      if (savedAddress) {
        savedData = {
          ...savedData,
          ...JSON.parse(savedAddress),
        };
      }
    } catch {
      console.error("Unable to load saved address");
    }

    return {
      ...savedData,
      phone: verifiedMobile,
    };
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "pincode" ? value.replace(/\D/g, "") : value,
    });
  };

  // Submit form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: verifiedMobile,
      address: formData.address.trim(),
      city: formData.city.trim(),
    };

    localStorage.setItem("checkoutAddress", JSON.stringify(data));

    onSubmit(data);
  };

  const inputClass =
    "h-10 w-full rounded-md border border-[#cbd0d8] px-4 text-base text-black outline-none transition-colors duration-300 focus:border-brand-dark";

  const labelClass = "mb-2 block text-sm text-text-secondary";

  return (
    <section className="rounded-xl bg-white p-6 shadow-[0_0_16px_#00000012] animate-step-reveal">
      {/* Heading */}
      <div className="flex items-center justify-between border-b border-[#dedede] pb-5">
        <h2 className="text-xl! font-semibold! text-black">Address</h2>

        <span className="flex size-11 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">
          3
        </span>
      </div>

      {/* Address Form */}
      <form onSubmit={handleSubmit} className="pt-8">
        {/* Name, Email, Phone */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* Name */}
          <div>
            <label htmlFor="address-name" className={labelClass}>
              Name<span className="text-[#b5121b]">*</span>
            </label>

            <input
              id="address-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="address-email" className={labelClass}>
              Email<span className="text-[#b5121b]">*</span>
            </label>

            <input
              id="address-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="address-phone" className={labelClass}>
              Phone
            </label>

            <input
              id="address-phone"
              type="tel"
              value={verifiedMobile}
              readOnly
              className={`${inputClass} cursor-not-allowed bg-[#d1d5db] text-[#7c8795]`}
            />
          </div>
        </div>

        {/* Full Address */}
        <div className="mt-4">
          <label htmlFor="full-address" className={labelClass}>
            Full Address<span className="text-[#b5121b]">*</span>
          </label>

          <input
            id="full-address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* City and Pincode */}
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* City */}
          <div>
            <label htmlFor="address-city" className={labelClass}>
              City<span className="text-[#b5121b]">*</span>
            </label>

            <input
              id="address-city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Pincode */}
          <div>
            <label htmlFor="address-pincode" className={labelClass}>
              Pincode<span className="text-[#b5121b]">*</span>
            </label>

            <input
              id="address-pincode"
              name="pincode"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter pincode"
              pattern="[0-9]{6}"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Proceed Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-brand-dark px-5 py-2 text-base font-semibold text-white transition-colors duration-300 hover:bg-brand"
          >
            Proceed
          </button>
        </div>
      </form>
    </section>
  );
}
