"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, LockKeyhole, UserRound } from "lucide-react";
import { states } from "../data/DummyData";

const inputClass =
  "block w-full min-w-0 rounded-lg border border-[#d6d6d6] bg-white px-3.5 py-3 text-sm text-text-primary placeholder:text-[#929292] outline-none transition duration-200 focus:border-brand focus:ring-2 focus:ring-brand/10";

const labelClass =
  "mb-2 block text-xs font-medium font-poppins uppercase tracking-[0.08em] text-text-secondary";

function Page() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [profileMessage, setProfileMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setProfileMessage("");
    setPasswordMessage("");
  }

  function handleUpdateInfo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProfileMessage(
      "Profile update API connect karne ke baad changes save honge.",
    );
  }

  function handleChangePassword(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      setPasswordMessage("New password aur confirm password match nahi karte.");
      return;
    }

    setPasswordMessage(
      "Password change karne ke liye password update API connect karein.",
    );
  }

  return (
    <main className="container ">
      <div className="py-10 md:pb-18">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            My Account
          </p>

          <h1 className="text-2xl font-roboto! font-bold text-text-primary md:text-3xl">
            Account Settings
          </h1>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            Manage your personal information and password.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Edit Profile */}
          <section className="overflow-hidden rounded-2xl border border-card-border bg-white shadow-[0_4px_20px_#00000008]">
            <div className="flex items-center gap-3 border-b border-card-border bg-card px-5 py-4 md:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light/50 text-brand-dark">
                <UserRound size={21} />
              </div>

              <div>
                <h2 className="text-lg! font-roboto! font-bold text-text-primary md:text-xl">
                  Edit Info
                </h2>
                <p className="mt-1 text-xs text-text-muted">
                  Update your personal details
                </p>
              </div>
            </div>

            <form onSubmit={handleUpdateInfo} className="space-y-5 p-5 md:p-6">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="min-w-0">
                  <label htmlFor="mobile" className={labelClass}>
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={form.mobile}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className={labelClass}>
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  placeholder="Enter your full address"
                  value={form.address}
                  onChange={handleChange}
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className={labelClass}>
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                    value={form.city}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="state" className={labelClass}>
                    State
                  </label>
                  <div className="block w-full min-w-0 rounded-lg border border-[#d6d6d6] bg-white pe-3.5 py-0 text-sm text-text-primary placeholder:text-[#929292] outline-none transition duration-200 focus:border-brand focus:ring-2 focus:ring-brand/10">
                    <select
                      id="state"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      className=" border-0 outline-none w-full  ps-3.5 py-3"
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="sm:max-w-[calc(50%-0.625rem)]">
                <label htmlFor="zipcode" className={labelClass}>
                  Zip Code
                </label>
                <input
                  id="zipcode"
                  name="zipcode"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="Enter zip code"
                  value={form.zipcode}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {profileMessage && (
                <p
                  role="status"
                  className="rounded-lg border border-card-border bg-card px-3 py-2.5 text-sm text-text-primary"
                >
                  {profileMessage}
                </p>
              )}

              <div className="border-t border-[#eeeeee] pt-5">
                <button
                  type="submit"
                  className="btn-primary w-full rounded-lg! py-3! transition duration-200 hover:bg-brand!"
                >
                  Update Info
                </button>
              </div>
            </form>
          </section>

          {/* Change Password */}
          <section className="overflow-hidden rounded-2xl border border-card-border bg-white shadow-[0_4px_20px_#00000008]">
            <div className="flex items-center gap-3 border-b border-card-border bg-card px-5 py-4 md:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light/50 text-brand-dark">
                <LockKeyhole size={21} />
              </div>

              <div>
                <h2 className="text-lg! font-roboto! font-bold text-text-primary md:text-xl">
                  Change Password
                </h2>
                <p className="mt-1 text-xs text-text-muted">
                  Keep your account secure
                </p>
              </div>
            </div>

            <form
              onSubmit={handleChangePassword}
              className="space-y-5 p-5 md:p-6"
            >
              <div>
                <label htmlFor="oldPassword" className={labelClass}>
                  Old Password
                </label>
                <input
                  id="oldPassword"
                  name="oldPassword"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter current password"
                  value={form.oldPassword}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="newPassword" className={labelClass}>
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Enter new password"
                    value={form.newPassword}
                    onChange={handleChange}
                    className={inputClass}
                    required
                    minLength={8}
                  />
                </div>

                <div className="min-w-0">
                  <label htmlFor="confirmPassword" className={labelClass}>
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirm new password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className={inputClass}
                    required
                    minLength={8}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-card-border bg-card-light-linear-bg p-4">
                <p className="text-sm font-semibold text-text-primary">
                  Forgot your password?
                </p>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Log out of your account, open the login page, select
                  <strong> Forgot Password</strong>, and follow the instructions
                  sent to your email.
                </p>
              </div>

              {passwordMessage && (
                <p
                  role="status"
                  className="rounded-lg border border-card-border bg-card px-3 py-2.5 text-sm text-text-primary"
                >
                  {passwordMessage}
                </p>
              )}

              <div className="border-t border-[#eeeeee] pt-5">
                <button
                  type="submit"
                  className="btn-primary w-full rounded-lg! py-3! transition duration-200 hover:bg-brand!"
                >
                  Change Password
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Back button */}
        <div className="mt-8 flex justify-center md:mt-10">
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-card-border bg-white px-6 py-3 text-sm font-medium text-text-primary cursor-pointer transition hover:border-brand hover:bg-card hover:text-brand-dark"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

export default Page;
