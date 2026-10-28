"use client";

import { useState } from "react";
import personalIcon from "@/../public/images/home/personal-icon.png";
import team from "@/../public/images/home/team.png";
import { StartedPopupProps } from "@/app/utils/interface/props.types";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function StartedPopup({ onClose }: StartedPopupProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleOptionSelect = (option: string) => {
    if (showSuccess) return;
    localStorage.setItem("startedPopupSelection", option);

    setShowSuccess(true);

    window.setTimeout(() => {
      onClose();
      if (option.toLowerCase() === "team") {
        router.push("/enterprise");
      }
    }, 2000);
  };

  return (
    <div className="bg-layer flex justify-center items-start lg:p-10">
      <div className="bg-white absolute max-w-170 w-10/12 lg:w-8/12 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-6 rounded-[15px] overflow-hidden">
        {/* Main screen */}
        <div
          className={`relative py-12 px-5 lg:px-6 transition-all duration-500 ${
            showSuccess
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
        >
          <button
            className="text-white cursor-pointer w-6 h-6 flex items-center justify-center rounded-full absolute top-0 right-0 bg-brand-dark"
            type="button"
            onClick={onClose}
            aria-label="Close popup"
          >
            <X size={16} />
          </button>

          <h2 className="font-semibold! text-xl! md:text-2xl! text-text-primary font-roboto! mb-8 text-center">
            Let us help you get started!
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              type="button"
              onClick={() => handleOptionSelect("personal")}
              className="bg-[#f8f9fa] duration-500 transition-all hover:-translate-y-3 hover:shadow-lg max-md:flex max-md:gap-7 max-md:items-center max-md:flex-row rounded-[10px] py-9.5 md:py-12 lg:px-8 px-3.5 cursor-pointer flex flex-col items-center justify-center text-left"
            >
              <Image
                width={80}
                height={80}
                src={personalIcon}
                alt="Personal use"
              />

              <p className="text-sm md:text-base md:mt-5 font-normal text-[#333] tracking-[0.02rem] md:text-center">
                I need a single device{" "}
                <span className="sm:block">for personal use</span>
              </p>
            </button>

            <button
              type="button"
              onClick={() => handleOptionSelect("team")}
              className="bg-[#f8f9fa] duration-500 transition-all hover:-translate-y-3 hover:shadow-lg max-md:flex max-md:gap-7 max-md:items-center max-md:flex-row rounded-[10px] py-9.5 md:py-12 lg:px-8 px-3.5 cursor-pointer flex flex-col items-center justify-center text-left"
            >
              <Image width={80} height={80} src={team} alt="Team or business" />

              <p className="text-sm md:text-base md:mt-5 font-normal text-[#333] tracking-[0.02rem] md:text-center">
                I need multiple devices{" "}
                <span className="sm:block">for my team or business</span>
              </p>
            </button>
          </div>

          <div className="text-center mt-5 md:mt-6">
            <button
              type="button"
              onClick={() => handleOptionSelect("other")}
              className="font-semibold! cursor-pointer text-[#6c757d] text-sm!"
            >
              Other Reason
            </button>
          </div>
        </div>

        {/* Success screen */}
        <div
          className={`bg-[#e8f5e9] flex absolute inset-0 z-10 items-center justify-center py-12 px-5 lg:px-6 transition-all duration-700 ${
            showSuccess
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-center">
            <h3 className="font-semibold! text-xl! md:text-2xl! font-roboto! text-text-primary mb-2">
              Great Choice!
            </h3>

            <p className="text-center text-sm md:text-base text-text-primary">
              We&apos;re redirecting you to the right place...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartedPopup;
