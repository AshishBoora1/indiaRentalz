"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { EnterpriseBusinessPopupProps } from "@/app/utils/interface/props.types";

function EnterpriseBusinessPopup({
  isOpen,
  onClose,
  title,
  image,
  description,
}: EnterpriseBusinessPopupProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-999999 flex items-center justify-center overflow-y-auto bg-[#0f172a]/65 px-5 py-8 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div className="relative my-auto w-full max-w-230 animate-[fadeIn_250ms_ease] rounded-2xl bg-white py-12 px-8">
        <div className=" flex items-center justify-between flex-row-reverse">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="cursor-pointer text-slate-500 p-0! transition duration-200 hover:scale-110 hover:text-[#0f172a]"
          >
            <X size={24} strokeWidth={1.8} />
          </button>

          <h2
            id="enterprise-modal-title"
            className="text-xl! tracking-[0.2px]! text-[#0f172a] sm:text-[1.35rem]!"
          >
            {title}
          </h2>
        </div>

        {image && (
          <div className="mt-6.5 mb-8 overflow-hidden rounded-xl border border-slate-200">
            <Image
              src={image}
              alt={title ? title : ""}
              width={1200}
              height={600}
              unoptimized
              className="h-64 w-full object-cover max-md:h-100"
            />
          </div>
        )}

        <p
          id="enterprise-modal-description"
          className="text-sm! font-normal! leading-[1.65rem]! text-[#475569]! sm:text-[0.95rem]!"
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default EnterpriseBusinessPopup;
