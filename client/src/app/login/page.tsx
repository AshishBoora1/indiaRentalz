"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeftCircle, RotateCcw } from "lucide-react";

import login from "@/../public/images/login/login.png";
import { WhatsappIcon } from "../data/Icons";
import { useRouter } from "next/navigation";

function Page() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleContinue = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setMessage("");
    setShowOtp(true);

    // TODO: Call your API to send OTP on WhatsApp.
  };

  const handleVerifyOtp = () => {
    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    router.push("/myAccount");
    setError("");
  };

  const handleChangeMobile = () => {
    setShowOtp(false);
    setOtp("");
    setError("");
    setMessage("");
  };

  const handleResendOtp = () => {
    setOtp("");
    setError("");
    setMessage("");
  };

  return (
    <main>
      <section>
        <div className="container"> 
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:pb-18">
            {/* Login Image */}
            <div className="bg-brand-dark max-md:hidden shadow-[-2px_2px_10px_#808080] px-1.5 flex justify-center items-center">
              <Image
                className="w-full h-full object-none"
                src={login}
                alt="IndiaRentalz login"
              />
            </div>

            {/* Login / OTP Form */}
            <div className="min-h-125 bg-[#faf6f6] py-16 px-5 md:p-4 flex justify-center items-center">
              <div className="flex justify-center items-center flex-col w-full sm:w-10/12 mx-auto">
                <h3 className="text-[1.5rem]! tracking-[1.5] font-roboto! text-[#6c757d] font-bold mb-4 text-center">
                  Login To Indiarentalz
                </h3>

                {!showOtp ? (
                  <>
                    <div className="mb-4 flex items-center gap-1">
                      <span className="text-[#25D366]">
                        <WhatsappIcon />
                      </span>

                      <p className="text-base text-[#555] uppercase font-poppins">
                        Mobile{" "}
                        <span className="text-xs text-[#6c757d] font-semibold font-poppins">
                          (You will receive the code on WhatsApp)
                        </span>
                      </p>
                    </div>

                    <input
                      className="py-2.5 px-3 text-base tracking-[1.5] text-[#212529] bg-white font-normal border border-[#ced4da] rounded-md w-full outline-0 font-roboto!"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      value={mobile}
                      maxLength={10}
                      onChange={(e) => {
                        setMobile(e.target.value.replace(/\D/g, ""));
                        setError("");
                        setMessage("");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleContinue();
                      }}
                    />

                    {error && (
                      <p className="text-sm text-brand-dark font-semibold mt-2 w-full">
                        {error}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={handleContinue}
                      className="btn-primary mt-3 w-full"
                    >
                      Continue
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-full">
                      <label
                        htmlFor="otp"
                        className="block text-base text-[#666] font-poppins mb-3"
                      >
                        OTP
                      </label>

                      <input
                        id="otp"
                        className="py-2.5 px-3 text-base tracking-[4px] text-[#212529] bg-white font-normal border border-[#ced4da] rounded-md w-full outline-0 font-roboto!"
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        placeholder=""
                        value={otp}
                        maxLength={6}
                        onChange={(e) => {
                          setOtp(e.target.value.replace(/\D/g, ""));
                          setError("");
                          setMessage("");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleVerifyOtp();
                        }}
                      />

                      <div className="flex items-center justify-between gap-3 mt-5 mb-4">
                        <button
                          type="button"
                          onClick={handleChangeMobile}
                          className="flex items-center gap-1 text-[#6c757d] font-roboto font-semibold cursor-pointer"
                        >
                          <ArrowLeftCircle
                            size={22}
                            fill="#6c757d"
                            color="white"
                          />
                          Change Mobile
                        </button>

                        <button
                          type="button"
                          onClick={handleResendOtp}
                          className="flex items-center gap-1 text-[#6c757d] font-roboto font-semibold cursor-pointer"
                        >
                          <RotateCcw size={22} strokeWidth={3} />
                          Resend
                        </button>
                      </div>

                      {error && (
                        <p className="text-sm text-brand-dark font-semibold mb-3">
                          {error}
                        </p>
                      )}

                      {message && (
                        <p className="text-sm text-[#6c757d] mb-3">{message}</p>
                      )}

                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className="btn-primary mt-1 w-full"
                      >
                        VERIFY OTP
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
