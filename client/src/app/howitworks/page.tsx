import Image from "next/image";
import howitworks from "@/../public/images/banner/howitworks-side.jpg";
import "../css/howitworks.css";
function page() {
  return (
    <main>
      <section>
        <div className=" py-10 lg:py-18.5">
          <div className=" container">
            <div className=" flex flex-wrap relative max-md:gap-10">
              <div className="w-full md:w-4/12 md:sticky top-4 left-0 h-full">
                <Image
                  className="w-full rounded-xl"
                  src={howitworks}
                  alt={"howitworks"}
                />
              </div>
              <div className="w-full md:w-8/12 md:ps-4">
                <div className="card mb-7.5 py-6 px-6.5 card-light-linear-bg">
                  <h6 className=" text-sm uppercase font-bold font-roboto! tracking-[1.2px] text-(--color-howitworks-accent)">
                    IndiaRentalz Rental Process
                  </h6>
                  <h1 className=" text-[2.125rem] leading-[1.15] my-4 text-(--color-howitworks-heading) font-roboto!">
                    How It Works
                  </h1>
                  <p className=" text-base text-(--color-howitworks-text) mb-4">
                    Looking for a laptop, desktop, MacBook, workstation,
                    printer, server, monitor, or any other IT equipment for
                    short-term or long-term use?
                  </p>
                  <p className=" text-base text-(--color-howitworks-text) mb-4">
                    With IndiaRentalz, you can rent IT equipment easily for your
                    business, team, project, event, training program,
                    work-from-home setup, or personal requirement. Choose the
                    device, select the rental duration, complete the required
                    verification, and get the equipment delivered to your
                    location.
                  </p>
                  <p className=" text-base text-(--color-howitworks-text) mb-4">
                    We focus on providing quality-tested devices, flexible
                    rental plans, PAN India delivery, and service support
                    throughout your rental period.
                  </p>
                  <p className=" text-base text-(--color-howitworks-text)">
                    Whether you need one device or hundreds of devices, our team
                    can help you choose the right configuration as per your
                    usage, budget, and duration.
                  </p>
                </div>

                <div>
                  <h2 className=" text-[1.625rem]! text-(--color-howitworks-heading) pb-2.5 mb-4">
                    Simple Rental Process
                  </h2>
                  <div className=" flex flex-col gap-4">
                    <div className="card-shadow flex items-start gap-4">
                      <div>
                        <div className="card-step-circle">1</div>
                      </div>
                      <div>
                        <h3 className=" text-lg font-roboto! text-(--color-howitworks-heading) mb-2 font-bold">
                          Browse & Select
                        </h3>
                        <p className="text-(--color-howitworks-text) mb-2 text-base">
                          Browse our range of laptops, desktops, MacBooks,
                          workstations, monitors, printers, and other IT
                          equipment.
                        </p>
                        <p className="text-(--color-howitworks-text) text-base">
                          Choose the device or category that matches your
                          requirement. You can select products based on use-case
                          such as office work, coding, designing, video editing,
                          training labs, events, employee onboarding, or
                          enterprise requirements.
                        </p>
                      </div>
                    </div>
                    <div className="card-shadow flex items-start gap-4">
                      <div>
                        <div className="card-step-circle">2</div>
                      </div>
                      <div>
                        <h3 className=" text-lg font-roboto! text-(--color-howitworks-heading) mb-2 font-bold">
                          Choose Duration & Submit Requirement
                        </h3>
                        <p className="text-(--color-howitworks-text) mb-2 text-base">
                          Select the rental duration as per your need. You can
                          rent devices for short-term, monthly, project-based,
                          or long-term usage.
                        </p>
                        <p className="text-(--color-howitworks-text) text-base">
                          For standard products, you can proceed directly
                          through the website. For bulk, enterprise, or
                          customized requirements, you can request a quotation
                          and our team will assist you.
                        </p>
                      </div>
                    </div>
                    <div className="card-shadow flex items-start gap-4">
                      <div>
                        <div className="card-step-circle">3</div>
                      </div>
                      <div>
                        <h3 className=" text-lg font-roboto! text-(--color-howitworks-heading) mb-2 font-bold">
                          Booking & Payment
                        </h3>
                        <p className="text-(--color-howitworks-text) mb-2 text-base">
                          Once the product and rental terms are confirmed, you
                          can proceed with payment.
                        </p>
                        <p className="text-(--color-howitworks-text) text-base">
                          Depending on the order type, you may pay the full
                          rental amount or make a booking payment, with the
                          balance payable before or at the time of delivery as
                          per agreed terms.
                        </p>
                      </div>
                    </div>
                    <div className="card-shadow flex items-start gap-4">
                      <div>
                        <div className="card-step-circle">4</div>
                      </div>
                      <div>
                        <h3 className=" text-lg font-roboto! text-(--color-howitworks-heading) mb-2 font-bold">
                          Documentation / Business Verification
                        </h3>
                        <p className="text-(--color-howitworks-text) mb-2 text-base">
                          To ensure safe and reliable rentals, IndiaRentalz
                          completes basic verification before dispatch.
                        </p>
                        <p className="text-(--color-howitworks-text) text-base">
                          For individuals, required documents may include ID
                          proof, address proof, and other verification details.
                        </p>
                        <p className="text-(--color-howitworks-text) text-base">
                          For businesses, required documents may include company
                          details, GST details, authorized person details, and
                          other supporting documents.
                        </p>
                        <p className="text-(--color-howitworks-text) text-base">
                          Our team will guide you through the documentation
                          process.
                        </p>
                      </div>
                    </div>
                    <div className="card-shadow flex items-start gap-4">
                      <div>
                        <div className="card-step-circle">5</div>
                      </div>
                      <div>
                        <h3 className=" text-lg font-roboto! text-(--color-howitworks-heading) mb-2 font-bold">
                          Quality Check & Delivery
                        </h3>
                        <p className="text-(--color-howitworks-text) mb-2 text-base">
                          Before dispatch, every device goes through a basic
                          quality check, configuration check, and readiness
                          process.
                        </p>
                        <p className="text-(--color-howitworks-text) text-base">
                          Once verified, the equipment is packed and delivered
                          to your location. Delivery timelines may vary based on
                          product availability, quantity, city, and logistics
                          conditions.
                        </p>
                      </div>
                    </div>
                    <div className="card-shadow flex items-start gap-4">
                      <div>
                        <div className="card-step-circle">6</div>
                      </div>
                      <div>
                        <h3 className=" text-lg font-roboto! text-(--color-howitworks-heading) mb-2 font-bold">
                          Use with Support
                        </h3>
                        <p className="text-(--color-howitworks-text) mb-2 text-base">
                          Use the rented equipment for your required duration.
                          During the rental period, IndiaRentalz provides
                          support for device-related issues as per rental terms.
                        </p>
                        <p className="text-(--color-howitworks-text) text-base">
                          For business and bulk customers, support options may
                          include replacement assistance, remote support,
                          coordination support, and service escalation depending
                          on the order size and agreement.
                        </p>
                      </div>
                    </div>
                    <div className="card-shadow flex items-start gap-4">
                      <div>
                        <div className="card-step-circle">7</div>
                      </div>
                      <div>
                        <h3 className=" text-lg font-roboto! text-(--color-howitworks-heading) mb-2 font-bold">
                          Extend, Upgrade or Return
                        </h3>
                        <p className="text-(--color-howitworks-text) mb-2 text-base">
                          At the end of the rental period, you can choose to:
                        </p>
                        <ul className="mb-2 list-disc ps-5 marker:text-(--color-howitworks-text)">
                          <li className="text-(--color-howitworks-text) text-base mb-2">
                            Extend the rental duration
                          </li>
                          <li className="text-(--color-howitworks-text) text-base mb-2">
                            Upgrade to a higher configuration
                          </li>
                          <li className="text-(--color-howitworks-text) text-base mb-2">
                            Replace or modify the requirement
                          </li>
                          <li className="text-(--color-howitworks-text) text-base mb-2">
                            Return the device through pickup or reverse
                            logistics
                          </li>
                        </ul>
                        <p className="text-(--color-howitworks-text) text-base">
                          Our team will coordinate the return or extension
                          process smoothly.
                        </p>
                      </div>
                    </div>
                    <div className="card-shadow flex items-start gap-4">
                      <div>
                        <div className="card-step-circle">5</div>
                      </div>
                      <div>
                        <h3 className=" text-lg font-roboto! text-(--color-howitworks-heading) mb-2 font-bold">
                          Quality Check & Delivery
                        </h3>
                        <p className="text-(--color-howitworks-text) mb-2 text-base">
                          Before dispatch, every device goes through a basic
                          quality check, configuration check, and readiness
                          process.
                        </p>
                        <p className="text-(--color-howitworks-text) text-base">
                          Once verified, the equipment is packed and delivered
                          to your location. Delivery timelines may vary based on
                          product availability, quantity, city, and logistics
                          conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" bg-(--color-howitworks-background) rounded-[14px] border-card-border p-6 mt-7.5">
                  <h2 className=" mb-2.5 text-(--color-howitworks-heading) text-2xl!">
                    Have a Bulk or Recurring Requirement?
                  </h2>
                  <p className=" text-base text-(--color-howitworks-dark-text) mb-2.5 leading-[1.65]">
                    If you need only one or two devices, you can select the
                    product from the website and follow the standard rental
                    process.
                  </p>
                  <p className=" text-base text-(--color-howitworks-dark-text) mb-2.5 leading-[1.65]">
                    If you need devices in bulk, for example for employees,
                    training labs, events, exhibitions, BPOs, startups, IT
                    teams, or remote teams, you can request a free quotation.
                  </p>
                  <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 mb-4.5">
                    <div className="bg-white rounded-lg py-3 px-3.5 text-sm font-medium border font-roboto! border-card-border">
                      Bulk Laptop Rental
                    </div>
                    <div className="bg-white rounded-lg py-3 px-3.5 text-sm font-medium border font-roboto! border-card-border">
                      Employee Onboarding Kits
                    </div>
                    <div className="bg-white rounded-lg py-3 px-3.5 text-sm font-medium border font-roboto! border-card-border">
                      Training Lab Setup
                    </div>
                    <div className="bg-white rounded-lg py-3 px-3.5 text-sm font-medium border font-roboto! border-card-border">
                      Event IT Rental
                    </div>
                    <div className="bg-white rounded-lg py-3 px-3.5 text-sm font-medium border font-roboto! border-card-border">
                      Desktop & Workstation Rental
                    </div>
                    <div className="bg-white rounded-lg py-3 px-3.5 text-sm font-medium border font-roboto! border-card-border">
                      MacBook Rental for Teams
                    </div>
                    <div className="bg-white rounded-lg py-3 px-3.5 text-sm font-medium border font-roboto! border-card-border">
                      Work From Home IT Kits
                    </div>
                    <div className="bg-white rounded-lg py-3 px-3.5 text-sm font-medium border font-roboto! border-card-border">
                      Temporary Office Setup
                    </div>
                  </div>
                  <p className=" text-base text-(--color-howitworks-dark-text) mb-2.5 leading-[1.65]">
                    Once you submit your requirement, our commercial team will
                    review your request and contact you to understand your
                    quantity, configuration, location, duration, and support
                    expectations.
                  </p>
                  <p className=" text-base text-(--color-howitworks-dark-text) mb-4 leading-[1.65]">
                    Based on your requirement, we will suggest suitable rental
                    options and share a quotation. Our team can also help you
                    compare different configurations so that you can choose the
                    right equipment without overspending.
                  </p>
                  <button className=" max-sm:w-full py-3 px-4.5 text-white bg-(--color-howitworks-accent) rounded-md capitalize font-semibold text-sm">
                    Request a Free Quotation
                  </button>
                </div>

                <div className="linear-card-how-it-work border border-card-border p-6 rounded-[14px] mt-7">
                  <h2 className=" mb-2.5 text-(--color-howitworks-heading) text-2xl!">
                    Have a Bulk or Recurring Requirement?
                  </h2>
                  <p className=" text-base text-(--color-howitworks-dark-text) mb-4 leading-[1.65]">
                    IndiaRentalz helps individuals, startups, businesses,
                    corporates, training institutes, event companies, and remote
                    teams reduce upfront investment in IT equipment.
                  </p>
                  <p className=" text-base text-(--color-howitworks-dark-text) leading-[1.65]">
                    With flexible rental plans, multiple configuration options,
                    delivery support, and rental-period assistance, we make it
                    easier for you to scale your IT requirements as your needs
                    change.
                  </p>
                  <div className=" mt-4.5 bg-white py-4 px-4.5 border-l-4 border-l-(--color-howitworks-accent) rounded-lg font-bold text-(--color-howitworks-heading) text-lg">
                    Rent. Use. Extend. Upgrade. Return.{" "}
                    <span className=" inline-block">
                      Simple, flexible, and business-friendly IT equipment
                      rental with IndiaRentalz.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
