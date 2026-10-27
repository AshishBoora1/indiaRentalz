import Link from "next/link";
import "../css/contact.css";
function Page() {
  return (
    <main>
      <section>
        <div className=" pt-16 pb-14.5 contact-hero overflow-hidden relative bg-[linear-gradient(112deg,#fff7f7_0%,#fdecec_62%,#f9dfe1_100%)]">
          <div className=" container">
            <div className="lg:w-10/12 xl:w-8/12 ">
              <h6 className="text-(--clr-primary) tracking-[1.3px] uppercase font-arial font-bold">
                Technology Without Ownership
              </h6>
              <h1 className=" leading-[1.08] text-(--clr-heading) mt-2 mb-3.5 font-arial font-bold">
                Talk to IndiaRentalz about the{" "}
                <span className="text-(--clr-primary)">technology you need.</span>
              </h1>
              <p className="text-[#5f4a4c] font-arial">
                From one device to multi-location enterprise deployments, our
                team can help you identify the right equipment, configuration,
                rental duration and deployment approach.
              </p>
              <div className=" flex items-center flex-wrap gap-3 mt-6.5">
                <Link
                  href="tel:+919738030303"
                  className=" btn-primary capitalize bg-(--clr-primary) rounded-md py-3 px-5 font-arial"
                >
                  Call +91 97380 30303
                </Link>
                <Link
                  href="https://wa.me/919738030303?text=Hello%20IndiaRentalz%2C%20I%20would%20like%20to%20discuss%20an%20IT%20equipment%20rental%20requirement."
                  className=" btn-secondary capitalize rounded-md py-3 px-5 font-arial border border-[#e4b9bd] text-(--clr-primary) bg-white"
                >
                  WhatsApp Us
                </Link>
                <Link
                  href="mailto:info@indiarentalz.com"
                  className=" btn-secondary capitalize rounded-md py-3 px-5 font-arial border border-[#e4b9bd] text-(--clr-primary) bg-white"
                >
                  Email info@indiarentalz.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" bg-(--clr-page-bg) py-14">
          <div className=" container">
            <div className=" lg:w-10/12 xl:w-8/12 mx-auto text-center">
              <h6 className="text-(--clr-primary) tracking-[1px] uppercase font-arial font-bold">
                Choose how you want to connect
              </h6>
              <h2 className=" leading-[1.2]! mt-2 mb-3 text-(--clr-heading)">
                One contact point. The right team behind it.
              </h2>
              <p className=" text-[#6f6f6f] font-arial">
                Use the channel that suits you. Your enquiry can be routed
                internally to sales, enterprise rentals, customer support or
                accounts without making you search for individual contacts.
              </p>
            </div>
            <div className=" grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-7 items-start">
              <div className=" bg-white border border-(--clr-border) flex flex-col justify-between rounded-xl p-5 shadow-[0px_6px_20px_#00000009]">
                <div className="contact-channel">
                  <div className=" w-10.5 h-10.5 rounded-full bg-(--clr-primary-soft) text-(--clr-primary) font-black font-arial flex justify-center items-center mb-3.5">
                    R
                  </div>
                  <h5 className=" text-[#1c1c1c] mb-2 font-arial font-bold">
                    Rental Enquiries
                  </h5>
                  <p className=" text-(--clr-text-light) mb-3 font-arial">
                    New laptop, MacBook, desktop, workstation, server or project
                    requirements.
                  </p>
                </div>
                <Link
                  className=" text-(--clr-primary) text-sm font-arial font-extrabold"
                  href={"#"}
                >
                  Share Requirement →
                </Link>
              </div>

              <div className=" bg-white border border-(--clr-border) flex flex-col justify-between rounded-xl p-5 shadow-[0px_6px_20px_#00000009]">
                <div className="contact-channel">
                  <div className=" w-10.5 h-10.5 rounded-full bg-(--clr-primary-soft) text-(--clr-primary) font-black font-arial flex justify-center items-center mb-3.5">
                    E
                  </div>
                  <h5 className=" text-[#1c1c1c] mb-2 font-arial font-bold">
                    Enterprise & Bulk
                  </h5>
                  <p className=" text-(--clr-text-light) mb-3 font-arial">
                    Employee onboarding, multi-city deployments, labs, projects
                    and bulk requirements.
                  </p>
                </div>
                <Link
                  className=" text-(--clr-primary) text-sm font-arial font-extrabold"
                  href={"#"}
                >
                  Discuss Enterprise Need →
                </Link>
              </div>

              <div className=" bg-white border border-(--clr-border) flex flex-col justify-between rounded-xl p-5 shadow-[0px_6px_20px_#00000009]">
                <div className="contact-channel">
                  <div className=" w-10.5 h-10.5 rounded-full bg-(--clr-primary-soft) text-(--clr-primary) font-black font-arial flex justify-center items-center mb-3.5">
                    S
                  </div>
                  <h5 className=" text-[#1c1c1c] mb-2 font-arial font-bold">
                    Existing Customer Support
                  </h5>
                  <p className=" text-(--clr-text-light) mb-3 font-arial">
                    Support, replacement, upgrade, relocation, extension or
                    return-related assistance.
                  </p>
                </div>
                <Link
                  className=" text-(--clr-primary) text-sm font-arial font-extrabold"
                  href={"#"}
                >
                  Call Support →
                </Link>
              </div>

              <div className=" bg-white border border-(--clr-border) flex flex-col justify-between rounded-xl p-5 shadow-[0px_6px_20px_#00000009]">
                <div className="contact-channel">
                  <div className=" w-10.5 h-10.5 rounded-full bg-(--clr-primary-soft) text-(--clr-primary) font-black font-arial flex justify-center items-center mb-3.5">
                    A
                  </div>
                  <h5 className=" text-[#1c1c1c] mb-2 font-arial font-bold">
                    Billing & Accounts
                  </h5>
                  <p className=" text-(--clr-text-light) mb-3 font-arial">
                    Invoice, payment, statement or documentation-related
                    queries.
                  </p>
                </div>
                <Link
                  className=" text-(--clr-primary) text-sm font-arial font-extrabold"
                  href={"#"}
                >
                  Email Accounts Query →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-14 bg-white">
          <div className=" container">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" bg-white border border-(--clr-border) flex flex-col rounded-[14px] shadow-[0_12px_34px_#00000012]">
                <div className=" py-5.5 px-6 contact-card-head border-b border-b-(--clr-border)">
                  <h3 className="text-(--clr-text-dark) mb-1">
                    Tell us what you need
                  </h3>
                  <p className=" text-(--clr-text-light) font-arial">
                    Share the essentials so the right team can respond with
                    relevant information rather than asking you to repeat the
                    requirement.
                  </p>
                </div>

                <form
                  className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-5 contact-form"
                  action=""
                >
                  {/* name */}
                  <div>
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_name"
                    >
                      Name <span className="text-(--clr-primary)">*</span>
                    </label>
                    <input
                      className=" border font-medium font-poppins w-full border-(--clr-border-input) rounded-md py-2.5  px-3 bg-white outline-none text-(--clr-text) focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]"
                      type="text"
                      id="contact_name"
                      name="name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  
                  {/* company */}
                  <div>
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_company"
                    >
                      Company / Organisation
                    </label>
                    <input
                      className=" border font-medium font-poppins w-full border-(--clr-border-input) rounded-md py-2.5  px-3 bg-white outline-none text-(--clr-text) focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]"
                      type="text"
                      id="contact_company"
                      name="company"
                      autoComplete="organization"
                    />
                  </div>

                  {/* phone no */}
                  <div>
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_phone"
                    >
                      Mobile Number <span className="text-(--clr-primary)">*</span>
                    </label>
                    <input
                      className=" border font-medium font-poppins w-full border-(--clr-border-input) rounded-md py-2.5  px-3 bg-white outline-none text-(--clr-text) focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]"
                      type="tel"
                      id="contact_phone"
                      name="phone"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                    />
                  </div>

                  {/* email */}
                  <div>
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_email"
                    >
                      Email <span className="text-(--clr-primary)">*</span>
                    </label>
                    <input
                      className=" border font-medium font-poppins w-full border-(--clr-border-input) rounded-md py-2.5  px-3 bg-white outline-none text-(--clr-text) focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]"
                      type="email"
                      id="contact_email"
                      name="email"
                      required
                      autoComplete="email"
                    />
                  </div>

                  {/* city */}
                  <div>
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_city"
                    >
                      City / Deployment Location{" "}
                      <span className="text-(--clr-primary)">*</span>
                    </label>
                    <input
                      className=" border font-medium font-poppins w-full border-(--clr-border-input) rounded-md py-2.5  px-3 bg-white outline-none text-(--clr-text) focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]"
                      type="text"
                      id="contact_city"
                      name="city"
                      required
                      autoComplete="address-level2"
                    />
                  </div>

                  {/* requirement type */}
                  <div>
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_type"
                    >
                      I want help with
                      <span className="text-(--clr-primary)">*</span>
                    </label>
                    <div className=" border  border-(--clr-border-input) rounded-md py-2.5  pe-3 bg-white  focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]">
                      <select
                        className="font-medium font-arial w-full outline-none text-(--clr-text) ps-3 border-0"
                        name="requirement_type"
                        required
                        id="contact_type"
                      >
                        <option value="">Select requirement</option>
                        <option>New Rental Requirement</option>
                        <option>Enterprise / Bulk Rental</option>
                        <option>Employee Onboarding / Remote Team</option>
                        <option>Training / Event / Short-term Project</option>
                        <option>MacBook / Creative / Performance System</option>
                        <option>Server / AI / GPU Workstation</option>
                        <option>Existing Customer Support</option>
                        <option>Upgrade / Add-on / Extension</option>
                        <option>Return / Pickup / Relocation</option>
                        <option>Billing / Accounts</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_qty"
                    >
                      Approx. Quantity
                    </label>
                    <input
                      className=" border font-medium font-poppins w-full border-(--clr-border-input) rounded-md py-2.5  px-3 bg-white outline-none text-(--clr-text) focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]"
                      type="number"
                      id="contact_qty"
                      name="quantity"
                      min={1}
                      inputMode="numeric"
                      placeholder="e.g. 25"
                    />
                  </div>

                  {/* Rental Duration */}
                  <div>
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_duration"
                    >
                      Rental Duration
                    </label>
                    <div className=" border  border-(--clr-border-input) rounded-md py-2.5  pe-3 bg-white  focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]">
                      <select
                        className="font-medium font-arial w-full outline-none text-(--clr-text) ps-3 border-0"
                        name="rental_duration"
                        id="contact_duration"
                      >
                        <option value="">Select duration</option>
                        <option>Less than 1 month</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>6–12 months</option>
                        <option>12+ months</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className=" lg:col-span-2">
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_message"
                    >
                      Requirement / Message
                    </label>
                    <textarea
                      className=" border font-medium font-poppins w-full border-(--clr-border-input) rounded-md py-2.5  px-3 bg-white outline-none text-(--clr-text) placeholder:text-xs focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]"
                      id="contact_message"
                      name="message"
                      placeholder="Tell us the product/configuration, quantity, location, expected start date or any specific support requirement."
                    ></textarea>
                  </div>

                  {/* contact preference */}
                  <div className=" lg:col-span-2">
                    <label
                      className=" font-poppins mb-3 text-(--clr-text-primary) font-bold uppercase block"
                      htmlFor="contact_preference"
                    >
                      Preferred way to contact you
                    </label>
                    <div className=" border  border-(--clr-border-input) rounded-md py-2.5  pe-3 bg-white  focus:border-(--clr-primary) focus:shadow-[0px_0px_0px_3px_#b5121b14]">
                      <select
                        className="font-medium font-arial w-full outline-none text-(--clr-text) ps-3 border-0"
                        name="preferred_contact"
                        id="contact_preference"
                      >
                        <option>Phone</option>
                        <option>WhatsApp</option>
                        <option>Email</option>
                      </select>
                    </div>
                  </div>

                  {/* checkbox */}
                  <div className="flex items-start gap-2 lg:col-span-2 mt-2.5">
                    <input
                      type="checkbox"
                      id="contact_consent"
                      name="contact_consent"
                      value={"yes"}
                      className=" accent-(--clr-primary) text-white w-10 h-10 min-w-6 min-h-6"
                      required
                    />

                    <label
                      htmlFor="contact_consent"
                      className="font-poppins mt-1 text-(--clr-text-primary) font-bold uppercase tracking-[1px]"
                    >
                      I agree that IndiaRentalz may contact me regarding this
                      enquiry through the contact details provided.{" "}
                      <span className="text-(--clr-primary)">*</span>
                    </label>
                  </div>

                  <div className="lg:col-span-2">
                    <button
                      type="submit"
                      className=" btn-primary bg-(--clr-primary) rounded-md py-3 px-5 font-arial w-full capitalize"
                    >
                      Send My Requirement →
                    </button>
                    <p className="text-[#888] mt-7 text-xs! font-arial">
                      Please do not share passwords, OTPs, card details or other
                      sensitive authentication information through this form.
                    </p>
                  </div>
                </form>
              </div>

              <div>
                <div className=" bg-white border border-(--clr-border) flex flex-col rounded-[14px] shadow-[0_12px_34px_#00000012]">
                  <div className=" py-5.5 px-6 contact-card-head border-b border-b-(--clr-border)">
                    <h3 className="text-(--clr-text-dark) mb-1">
                      Contact IndiaRentalz
                    </h3>
                    <p className=" text-(--clr-text-light) font-arial">
                      Central contact details for rental, support and business
                      enquiries.
                    </p>
                  </div>

                  <div className="p-6">
                    <div className=" grid grid-cols-1 gap-3">
                      <div className=" border border-(--clr-border) py-3 px-4 bg-white rounded-lg">
                        <strong className=" text-(--clr-text)  block text-sm font-arial">
                          Phone
                        </strong>
                        <Link
                          href="tel:+919738030303"
                          className=" decoration-0 text-text-primary text-xs font-arial"
                        >
                          +91 97380 30303
                        </Link>
                      </div>

                      <div className=" border border-(--clr-border) py-3 px-4 bg-white rounded-lg">
                        <strong className=" text-(--clr-text)  block text-sm font-arial">
                          Email
                        </strong>
                        <Link
                          href="mailto:info@indiarentalz.com"
                          className=" decoration-0 text-text-primary text-xs font-arial"
                        >
                          info@indiarentalz.com
                        </Link>
                      </div>

                      <div className=" border border-(--clr-border) py-3 px-4 bg-white rounded-lg">
                        <strong className=" text-(--clr-text)  block text-sm font-arial">
                          WhatsApp
                        </strong>
                        <Link
                          href="https://wa.me/919738030303"
                          className=" decoration-0 text-text-primary text-xs font-arial"
                        >
                          Start a WhatsApp conversation
                        </Link>
                      </div>

                      <div className=" border-l-4 border-l-(--clr-primary) py-3 px-4 bg-(--clr-primary-soft) rounded-md mt-2">
                        <strong className=" text-(--clr-text) block text-sm">
                          Business & Support Hours
                        </strong>
                        <span className="text-(--clr-text-muted) text-xs font-arial">
                          Monday to Saturday · 10:00 AM to 6:30 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" bg-white border border-(--clr-border) flex flex-col rounded-[14px] shadow-[0_12px_34px_#00000012] mt-4.5">
                  <div className=" py-5.5 px-6 contact-card-head border-b border-b-(--clr-border)">
                    <h3 className="text-(--clr-text-dark) mb-1">
                      For faster assistance
                    </h3>
                    <p className=" text-(--clr-text-light) font-arial">
                      Include these details in your enquiry wherever applicable.
                    </p>
                  </div>

                  <div className="p-6">
                    <div className=" grid grid-cols-1 gap-3">
                      <div className=" border border-(--clr-border) py-3 px-4 bg-white rounded-lg">
                        <strong className=" text-(--clr-text)  block text-sm font-arial">
                          New Rentals
                        </strong>
                        <span className="text-(--clr-text-light) text-xs font-arial">
                          Product/configuration · quantity · duration · city ·
                          required date.
                        </span>
                      </div>
                      <div className=" border border-(--clr-border) py-3 px-4 bg-white rounded-lg">
                        <strong className=" text-(--clr-text)  block text-sm font-arial">
                          Existing Customers
                        </strong>
                        <span className="text-(--clr-text-light) text-xs font-arial">
                          Company name · registered mobile/email · asset ID or
                          order reference.
                        </span>
                      </div>
                      <div className=" border border-(--clr-border) py-3 px-4 bg-white rounded-lg">
                        <strong className=" text-(--clr-text)  block text-sm font-arial">
                          Billing Queries
                        </strong>
                        <span className="text-(--clr-text-light) text-xs font-arial">
                          Company name · invoice number · billing month · brief
                          query.
                        </span>
                      </div>
                      <div className=" border border-(--clr-border) py-3 px-4 bg-white rounded-lg">
                        <strong className=" text-(--clr-text)  block text-sm font-arial">
                          Enterprise Projects
                        </strong>
                        <span className="text-(--clr-text-light) text-xs font-arial">
                          User profile · device quantity · locations ·
                          deployment window · expected duration.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-14 bg-(--clr-page-bg)">
          <div className=" container">
            <div className=" lg:w-10/12 xl:w-8/12 mx-auto text-center">
              <h6 className="text-(--clr-primary) tracking-[1px] uppercase font-arial font-bold">
                Our locations
              </h6>
              <h2 className=" leading-[1.2]! mt-2 mb-3 text-(--clr-heading)">
                Connected operations for PAN India requirements
              </h2>
              <p className=" text-[#6f6f6f] font-arial">
                Our operational locations and partner network help us support
                local, multi-city and enterprise deployments. Contact the
                central team and we will route your requirement to the
                appropriate location.
              </p>
            </div>
            <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-7">
              <div className=" bg-white border border-(--clr-border) flex flex-col rounded-xl overflow-hidden shadow-[0_7px_22px_#0000000a]">
                <div className="location-map h-52.5 bg-(--clr-map-bg)">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.1295362766587!2d76.74140631559838!3d30.74286269219445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fede641ceaab9%3A0xa16136f413bef712!2sIndiaRentalz-COMPUTER%20RENTAL%20CHANDIGARH!5e0!3m2!1sen!2sin!4v1663676946906!5m2!1sen!2sin"
                    title="IndiaRentalz Chandigarh location map"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className=" p-5 flex flex-col justify-between grow">
                  <div>
                    <h6 className="text-(--clr-primary) tracking-[1px] uppercase text-[11px]! font-arial font-bold">
                      Office & Stock Hub
                    </h6>
                    <h4 className="mt-1 mb-2 text-(--clr-text-dark)">Chandigarh</h4>
                    <p className=" text-(--clr-text-muted) font-arial mb-2.5 text-sm!">
                      Sunsoft ERP Solutions Pvt. Ltd., SCO 84, Level 2, Sector
                      38C, Chandigarh 160036
                    </p>
                    <p className=" text-[#8a8a8a] text-[11px]! font-arial border-t border-t-(--clr-border-light) pt-2.5">
                      Sunsoft ERP Solutions Pvt. Ltd., SCO 84, Level 2, Sector
                      38C, Chandigarh 160036
                    </p>
                  </div>
                  <div className=" flex items-center gap-2 mt-4">
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=Indiarentalz - Macbook on rent"
                      className=" text-sm font-bold font-arial bg-white border border-(--clr-border-neutral) text-(--clr-text) rounded-md py-2.5 px-4 font-arial w-full text-center capitalize text-nowrap"
                    >
                      Get Directions
                    </Link>
                    <Link
                      href="tel:+919738030303"
                      className=" text-sm font-bold font-arial bg-(--clr-primary-light) border border-(--clr-primary-border) text-(--clr-primary-dark) rounded-md py-2.5 text-center px-4 font-arial w-full capitalize text-nowrap"
                    >
                      Contact This Region
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-white border border-(--clr-border) flex flex-col rounded-xl overflow-hidden shadow-[0_7px_22px_#0000000a]">
                <div className="location-map h-52.5 bg-(--clr-map-bg)">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2308057628866!2d77.24178877449117!3d28.562831187244274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d397e0bf7b%3A0x9810d5c260666b74!2sLaptop%20on%20Rent%20in%20Delhi-India%20Rentalz%20by%20Sunsoft-PAN%20India%20IT%20Rentals!5e0!3m2!1sen!2sin!4v1789269280321!5m2!1sen!2sin"
                    title="IndiaRentalz Delhi NCR location map"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className=" p-5 flex flex-col justify-between grow">
                  <div>
                    <h6 className="text-(--clr-primary) tracking-[1px] uppercase text-[11px]! font-arial font-bold">
                      Service & Stock Hub
                    </h6>
                    <h4 className="mt-1 mb-2 text-(--clr-text-dark)">Delhi NCR</h4>
                    <p className=" text-(--clr-text-muted) font-arial mb-2.5 text-sm!">
                      Serving business and enterprise rental requirements across
                      Delhi NCR.
                    </p>
                    <p className=" text-[#8a8a8a] text-[11px]! font-arial border-t border-t-(--clr-border-light) pt-2.5">
                      Coverage: Delhi · Gurugram · Noida · Faridabad · Ghaziabad
                    </p>
                  </div>
                  <div className=" flex items-center gap-2 mt-4">
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=Indiarentalz - Macbook on rent"
                      className=" text-sm font-bold font-arial bg-white border border-(--clr-border-neutral) text-(--clr-text) rounded-md py-2.5 px-4 font-arial w-full text-center capitalize text-nowrap"
                    >
                      Get Directions
                    </Link>
                    <Link
                      href="tel:+919738030303"
                      className=" text-sm font-bold font-arial bg-(--clr-primary-light) border border-(--clr-primary-border) text-(--clr-primary-dark) rounded-md py-2.5 text-center px-4 font-arial w-full capitalize text-nowrap"
                    >
                      Contact This Region
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-white border border-(--clr-border) flex flex-col rounded-xl overflow-hidden shadow-[0_7px_22px_#0000000a]">
                <div className="location-map h-52.5 bg-(--clr-map-bg)">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.940652235938!2d77.60064587403289!3d12.975647714791611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae177214ba9f3b%3A0xccfb68dd0c203c63!2sIndiarentalz%20-%20Macbook%20on%20rent!5e0!3m2!1sen!2sin!4v1789270613704!5m2!1sen!2sin"
                    title="IndiaRentalz Bengaluru location map"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className=" p-5 flex flex-col justify-between grow">
                  <div>
                    <h6 className="text-(--clr-primary) tracking-[1px] uppercase text-[11px]! font-arial font-bold">
                      Service & Stock Hub
                    </h6>
                    <h4 className="mt-1 mb-2 text-(--clr-text-dark)">Bengaluru</h4>
                    <p className=" text-(--clr-text-muted) font-arial mb-2.5 text-sm!">
                      Serving business, technology and project rental
                      requirements across Bengaluru.
                    </p>
                    <p className=" text-[#8a8a8a] text-[11px]! font-arial border-t border-t-(--clr-border-light) pt-2.5">
                      Coverage: Bengaluru and nearby business locations
                    </p>
                  </div>
                  <div className=" flex items-center gap-2 mt-4">
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=Indiarentalz - Macbook on rent"
                      className=" text-sm font-bold font-arial bg-white border border-(--clr-border-neutral) text-(--clr-text) rounded-md py-2.5 px-4 font-arial w-full text-center capitalize text-nowrap"
                    >
                      Get Directions
                    </Link>
                    <Link
                      href="tel:+919738030303"
                      className=" text-sm font-bold font-arial bg-(--clr-primary-light) border border-(--clr-primary-border) text-(--clr-primary-dark) rounded-md py-2.5 text-center px-4 font-arial w-full capitalize text-nowrap"
                    >
                      Contact This Region
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-14 bg-[linear-gradient(112deg,#fff7f7_0%,#fdecec_62%,#f9dfe1_100%)] border-y border-y-card-border">
          <div className=" container">
            <div className=" flex items-center max-md:flex-col justify-between gap-10">
              <div className=" md:w-7/12 max-md:text-center">
                <h6 className="text-(--clr-primary) tracking-[1.3px] uppercase font-arial font-bold">
                  IndiaRentalz
                </h6>
                <h4 className="h4 leading-[1.2] text-(--clr-heading) mt-2 mb-3.5 font-arial font-bold">
                  Use the technology you need. Keep the flexibility you value.
                </h4>
                <p className="text-[#5f4a4c] font-arial text-sm!">
                  Rent laptops, MacBooks, desktops, workstations, servers and
                  other IT equipment for the duration your work demands —
                  without turning every technology requirement into an ownership
                  decision.
                </p>
              </div>
              <div className=" flex max-xl:flex-col items-center gap-3 max-md:w-8/12 max-sm:w-full md:grow">
                <Link
                  href="#contact-form"
                  className=" btn-primary text-center capitalize bg-(--clr-primary) w-full rounded-md py-3 px-5 font-arial"
                >
                  Share Requirement
                </Link>
                <Link
                  href="tel:+919738030303"
                  className=" btn-secondary text-center capitalize rounded-md w-full py-3 px-5 font-arial border border-[#e4b9bd] text-(--clr-primary) bg-white"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
