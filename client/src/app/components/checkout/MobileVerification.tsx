"use client";

import { useState } from "react";
import { MessageCircle, RefreshCw, CircleArrowRight } from "lucide-react";

interface MobileVerificationProps {
  onVerified: (mobile: string) => void;
}

export default function MobileVerification({
  onVerified,
}: MobileVerificationProps) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(true);

  const [mobileError, setMobileError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [termsError, setTermsError] = useState("");

  // Send OTP
  const handleSendOtp = () => {
    setMobileError("");
    setTermsError("");

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMobileError("Invalid mobile number. Should be 10 digits.");
      return;
    }

    if (!agreeTerms) {
      setTermsError("Please accept terms and conditions.");
      return;
    }

    // Demo OTP flow
    setIsOtpSent(true);
    setOtp("");
    setOtpError("");
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    setOtpError("");

    if (!/^\d{6}$/.test(otp)) {
      setOtpError("Please enter a valid 6 digit OTP.");
      return;
    }

    // Demo OTP
    if (otp !== "123456") {
      setOtpError("Invalid OTP. Please try again.");
      return;
    }

    onVerified(mobile);
  };

  // Resend OTP
  const handleResendOtp = () => {
    setOtp("");
    setOtpError("");
  };

  // Change Mobile
  const handleChangeMobile = () => {
    setIsOtpSent(false);
    setOtp("");
    setOtpError("");
  };

  return (
    <section className="rounded-xl bg-white p-6 shadow-[0_0_16px_#00000012]">
      {/* Heading */}
      <div className="flex items-center justify-between border-b border-[#dedede] pb-5">
        <h2 className="text-xl! font-semibold! text-black">
          Verify Your Mobile
        </h2>

        <span className="flex size-11 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">
          2
        </span>
      </div>

      {!isOtpSent ? (
        /* Mobile Number Screen */
        <div className="pt-8">
          <label className="mb-3 flex items-center gap-2 text-sm text-text-secondary">
            <MessageCircle size={20} className="text-[#00c853]" />
            <span>
              Mobile
              <span className="text-xs ps-1">
                (You will recieve the code on whatsapp)
              </span>
            </span>
          </label>

          <div className="flex flex-wrap items-start gap-3">
            <div className="w-full max-w-75">
              <input
                type="tel"
                value={mobile}
                maxLength={10}
                onChange={(e) => {
                  setMobile(e.target.value.replace(/\D/g, ""));
                  setMobileError("");
                }}
                placeholder="Enter mobile number"
                className="py-2! w-full rounded-md border border-[#cbd0d8] px-4 text-sm text-black outline-none focus:border-brand-dark"
              />

              {mobileError && (
                <p className="mt-2 text-sm font-semibold text-[#a32630]">
                  {mobileError}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={handleSendOtp}
              className="rounded-md bg-brand-dark px-6! py-2! text-sm font-medium text-white transition-colors hover:bg-brand cursor-pointer"
            >
              Continue
            </button>
          </div>

          {/* Terms */}
          <div className="mt-3">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-text-secondary">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked);
                  setTermsError("");
                }}
                className="size-5 cursor-pointer accent-[#922a35]"
              />

              <span>
                I agree to the{" "}
                <span className="text-brand-dark">terms and conditions</span>
                <span className="text-text-secondary"> & </span>
                <span className="text-brand-dark">privacy policies</span>
              </span>
            </label>

            {termsError && (
              <p className="mt-1 text-sm text-[#a32630]">{termsError}</p>
            )}
          </div>
        </div>
      ) : (
        /* OTP Screen */
        <div className="pt-8">
          <label className="mb-2 block text-sm text-text-secondary">OTP</label>

          <div className="flex flex-wrap items-start gap-3">
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value.replace(/\D/g, ""));
                setOtpError("");
              }}
              className=" py-2 w-full max-w-[384px] rounded-md border border-[#cbd0d8] px-3 text-sm text-black outline-none focus:border-brand-dark"
            />

            <button
              type="button"
              onClick={handleVerifyOtp}
              className="rounded-md bg-brand-dark px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand cursor-pointer"
            >
              Continue
            </button>
          </div>

          {otpError && (
            <p className="mt-2 text-sm font-semibold text-[#a32630]">
              {otpError}
            </p>
          )}

          <div className="mt-2 text-sm text-text-secondary">
            OTP sent to
            <span className="font-medium text-black"> +91 {mobile}</span>
          </div>

          {/* Resend & Change */}
          <div className="mt-3 flex items-center justify-between">
            <button
              type="button"
              onClick={handleResendOtp}
              className="flex items-center cursor-pointer gap-1.5 text-sm text-black transition-colors hover:text-brand-dark"
            >
              <RefreshCw size={17} />
              Resend
            </button>

            <button
              type="button"
              onClick={handleChangeMobile}
              className="flex items-center cursor-pointer gap-1.5 text-sm font-medium text-black transition-colors hover:text-brand-dark"
            >
              Change
              <CircleArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
