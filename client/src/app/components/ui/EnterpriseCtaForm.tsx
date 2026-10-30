"use client";

import { useEffect } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { EnterpriseCtaFormProps } from "@/app/utils/interface/props.types";



function EnterpriseCtaForm({ isOpen, onClose }: EnterpriseCtaFormProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-999999 flex items-center justify-center overflow-y-auto bg-[#000000b3] px-4 py-5 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cta-form-title"
        className="relative my-auto w-full max-w-225 overflow-hidden rounded-xl bg-white shadow-2xl"
      >
        <div className="grid min-h-130 grid-cols-1 md:grid-cols-2">
          {/* Left: Marketing Section */}
          <div
            className="relative hidden flex-col justify-between bg-cover bg-center bg-no-repeat p-6 text-white md:flex lg:p-8"
            style={{
              backgroundImage: "url('/images/enterprise/cta-bg.png')",
            }}
          >
            <div>
              <p className="mb-1 text-sm! text-white! uppercase tracking-[0.1rem]! opacity-[0.8]">
                Get enterprise-ready devices
              </p>

              <h2 className="mt-4 text-2xl! font-normal! leading-snug text-white! lg:text-[2rem]!">
                Flexible rental plans- PAN India delivery.
              </h2>
            </div>

            <div className="mt-10 flex justify-center gap-3 text-sm text-white lg:items-center">
              <span className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@indiarentalz.com</span>
              </span>

              <span className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9738-030303</span>
              </span>
            </div>
          </div>

          {/* Right: CTA Form */}
          <div className="flex min-w-0 flex-col justify-center px-5 py-8 sm:px-8 md:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-87.5">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <h3
                    id="cta-form-title"
                    className="text-2xl! font-normal! text-[#1e1e1e]"
                  >
                    Welcome to IndiaRENTALZ!
                  </h3>

                  <p className="mt-1 text-sm! leading-5 text-[#6c757d]!">
                    Complete this quick form to receive your free enterprise
                    rental quote today.
                  </p>
                </div>
              </div>

              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="cta-name"
                    className="mb-2 block text-sm font-medium text-[#111]"
                  >
                    Name
                  </label>

                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-sm border border-slate-300 bg-[#fafbfc] px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#611f69]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="cta-email"
                    className="mb-2 block text-sm font-medium text-[#111]"
                  >
                    Email Address
                  </label>

                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-sm border border-slate-300 bg-[#fafbfc] px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#611f69]"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label
                    htmlFor="cta-mobile"
                    className="mb-2 block text-sm font-medium text-[#111]"
                  >
                    Mobile Number
                  </label>

                  <input
                    id="cta-mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full rounded-sm border border-slate-300 bg-[#fafbfc] px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#611f69]"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="cta-terms"
                    name="terms"
                    type="checkbox"
                    className="mt-1 h-3.5 w-3.5 shrink-0 accent-[#611f69]"
                  />

                  <label
                    htmlFor="cta-terms"
                    className="cursor-pointer text-sm leading-5 text-[#111]"
                  >
                    By submitting, you consent to data use per our Privacy Policy.
                 
                  </label>
                </div>

                {/* Divider */}
                <div className="flex justify-center py-1">
                  <div className="h-0.75 w-10 bg-slate-200" />
                </div>

                {/* Submit Button - UI only */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-sm! bg-[#611f69] px-4! py-3! text-xs! font-normal! text-white"
                >
                  Get Started Now
                  <ArrowRight size={17} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseCtaForm;
