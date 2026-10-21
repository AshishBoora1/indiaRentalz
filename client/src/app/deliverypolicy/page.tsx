import Image from "next/image";
import deliverypolicyside from "@/../public/images/banner/deliverypolicy-side.jpg";
import "../css/deliverypolicy.css";
import "../css/commonpolicypages.css";
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
                  src={deliverypolicyside}
                  alt={"deliverypolicyside"}
                />
              </div>
              <div className="w-full md:w-8/12 md:ps-4">
                <div className="card mb-7.5 py-6 px-6.5 bg-[linear-gradient(135deg,#fff3f3,#ffe7e9)]">
                  <h6 className="font-roboto! text-(--color-light-accent)">
                    Technology Without Ownership
                  </h6>
                  <h1 className="my-4 text-(--color-accent) font-roboto!">
                    Delivery & Return Policy
                  </h1>
                  <p className="text-text-muted">
                    IndiaRentalz is committed to providing a smooth, transparent
                    and reliable delivery and return experience for IT equipment
                    rentals across India.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className="text-(--color-accent) mb-4.5">
                    Delivery Policy
                  </h2>
                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      1. Service Locations
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      IndiaRentalz provides delivery and pickup support across
                      multiple locations in India.
                    </p>
                    <div className=" grid grid-cols-2 gap-4 mt-2">
                      <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-xl p-4.5">
                        <h5 className="text-(--color-accent) font-roboto! font-normal!">
                          Tri-City Region
                        </h5>
                        <ul className="my-2 marker:text-(--color-text-dark) list-disc ps-5">
                          <li className=" mb-1.5 text-(--color-text-dark) font-roboto!">
                            Chandigarh
                          </li>
                          <li className=" mb-1.5 text-(--color-text-dark) font-roboto!">
                            Panchkula
                          </li>
                          <li className=" mb-1.5 text-(--color-text-dark) font-roboto!">
                            Mohali
                          </li>
                        </ul>
                      </div>
                      <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-xl p-4.5">
                        <h5 className="text-(--color-accent) font-roboto! font-normal!">
                          Delhi NCR Region
                        </h5>
                        <ul className="my-2 marker:text-(--color-text-dark) list-disc ps-5">
                          <li className=" mb-1.5 text-(--color-text-dark) font-roboto!">
                            Delhi
                          </li>
                          <li className=" mb-1.5 text-(--color-text-dark) font-roboto!">
                            Gurugram
                          </li>
                          <li className=" mb-1.5 text-(--color-text-dark) font-roboto!">
                            Noida
                          </li>
                          <li className=" mb-1.5 text-(--color-text-dark) font-roboto!">
                            Ghaziabad
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className=" text-(--color-text-dark) leading-[1.7] mt-3 mb-2">
                      For other cities and locations across India, delivery may
                      be arranged through logistics partners, courier partners,
                      local hubs, or IndiaRentalz network support, depending on
                      product availability, quantity, location, and order type.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      2. Delivery Charges
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      In many cases, delivery and pickup charges may be included
                      in the rental plan, security amount, or commercial terms
                      shared at the time of order confirmation.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      However, delivery charges may apply in case of:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Remote or far-off locations
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Express delivery requests
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Special handling requirements
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Large-size equipment such as servers, desktops, UPS,
                        printers, or multiple-device orders
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Urgent delivery or dedicated vehicle requirement
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7]">
                        Reverse pickup from non-standard locations
                      </li>
                    </ul>
                    <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                      Any applicable delivery or logistics charges will be
                      communicated to the customer before dispatch or at the
                      time of order confirmation.
                    </div>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      3. Delivery Timeline
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Orders are generally dispatched within 1 to 3 working days
                      after order confirmation, payment, documentation approval,
                      and equipment availability.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      Most orders are delivered within 5 to 10 working days,
                      depending on:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Customer location
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Product availability
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Order quantity
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Documentation status
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Payment status
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Logistics partner timeline
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                        Weather, strikes, holidays, or other external conditions
                      </li>
                    </ul>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      For local and urgent requirements, faster delivery may be
                      possible subject to availability.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      4. Delivery Address
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Equipment will be delivered only to the delivery address
                      provided and approved at the time of order confirmation.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      Any change in delivery address after order confirmation
                      may require fresh verification and approval from
                      IndiaRentalz. Delivery may be held until the revised
                      address is verified.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      5. Shipment Tracking
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Once the equipment is shipped, the delivery tracking
                      details or courier docket number may be shared with the
                      customer, wherever applicable.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      In case of any expected delay, IndiaRentalz or its
                      logistics partner will make reasonable efforts to inform
                      the customer.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      6. Delivery Attempts
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      IndiaRentalz and its delivery partners will make
                      reasonable attempts to complete the delivery. The customer
                      is expected to be available at the delivery location and
                      reachable on the registered contact number.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      Although repeated coordination may be done to complete
                      delivery, customers are advised to accept the delivery in
                      the first or second attempt to avoid delays, rescheduling
                      charges, or additional logistics cost.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      7. Inspection at the Time of Delivery
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      All equipment is checked, audited, and packed before
                      dispatch. The customer should inspect the package and
                      equipment at the time of delivery.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      The customer should check:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Condition of packaging
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Physical condition of device
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Accessories received
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Charger, cables, bag, keyboard, mouse, or other items,
                        if included
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Serial number or asset tag, wherever applicable
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                        Basic working condition of the equipment
                      </li>
                    </ul>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      In certain cases, the customer may be required to sign a
                      delivery checklist, agreement, proof of delivery, or
                      acknowledgement confirming receipt of the equipment and
                      accessories.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2  text-(--color-accent) font-roboto!">
                      8. Damaged or Faulty Product on Delivery
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      If the customer receives a damaged, faulty, or incorrect
                      product, the issue must be reported to IndiaRentalz
                      support within 24 hours of delivery.
                    </p>
                    <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                      <strong>Support contact:</strong> 9738030303
                    </div>
                    <p className=" text-(--color-text-dark) leading-[1.7] mt-2">
                      The customer should share:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Order details
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Photos or videos of the package and product
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Description of the issue
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Proof of damage, if applicable
                      </li>
                    </ul>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      IndiaRentalz support team will review the issue and assist
                      with repair, replacement, or resolution as per the rental
                      terms and availability.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      It is the customer’s responsibility to report
                      delivery-related damage promptly. Claims made after 24
                      hours may be subject to further verification.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      9. Express Delivery
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Express delivery may be available on request, subject to
                      product availability, location, order quantity, and
                      logistics feasibility.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      The customer should check:
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      Any express delivery charges will be borne by the customer
                      and will be communicated before dispatch.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      10. Agreement and Delivery Checklist
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      After order confirmation and successful delivery, the
                      customer is bound by the rental terms and conditions
                      mentioned on the IndiaRentalz website and/or agreed at the
                      time of order confirmation.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      In certain cases, the customer may also be required to
                      sign:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Rental agreement
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Delivery checklist
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Asset handover form
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Subscription or rental terms document
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Accessory receipt confirmation
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7]">
                        Other relevant documents
                      </li>
                    </ul>
                  </div>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className="text-(--color-accent) mb-4.5">
                    Return Options
                  </h2>
                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2  text-(--color-accent) font-roboto!">
                      1. Rental Extension
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      If the rented equipment is not returned on or before the
                      agreed rental end date, the rental duration may
                      automatically get extended.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7] mt-2">
                      In such cases, additional rental charges will apply as per
                      the agreed rental plan, billing cycle, and applicable
                      terms.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      2. Return Request
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      The customer must raise a return request at least 48 hours
                      before the rental duration ends.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      Return request can be raised through:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        IndiaRentalz support portal
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Email
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Customer support team
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7]">
                        WhatsApp or phone support, wherever applicable
                      </li>
                    </ul>
                    <p className=" text-(--color-text-dark) leading-[1.7] mt-2">
                      This helps IndiaRentalz schedule pickup, reverse
                      logistics, billing closure, and return processing
                      smoothly.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      3. Pickup Coordination
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      After receiving the return request, the IndiaRentalz
                      support team will coordinate with the customer for pickup
                      of the rented equipment.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      Pickup timelines may vary depending on:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Customer location
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Equipment type
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Order quantity
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Courier or logistics availability
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Packaging readiness
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7]">
                        Local pickup feasibility
                      </li>
                    </ul>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      4. Customer Responsibility Before Return
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      The customer should return all items received at the time
                      of delivery, including:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Laptop / desktop / MacBook / equipment
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Charger / adapter
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Power cable
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Bag
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Keyboard / mouse
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Monitor cables
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Accessories
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                        Any other item mentioned in the delivery checklist
                      </li>
                    </ul>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Wherever possible, the equipment should be packed in its
                      original packaging or in safe protective packaging to
                      avoid transit damage.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      The customer should keep pickup proof, courier receipt,
                      photos, or handover acknowledgement for future reference.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      5. Condition of Returned Equipment
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Returned equipment will be checked by the IndiaRentalz
                      team after it is received.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      The inspection may include:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Physical condition check
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Working condition check
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Accessory verification
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Serial number / asset tag verification
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Damage or misuse assessment
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Missing item check
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7]">
                        Data wipe or reset, where applicable
                      </li>
                    </ul>
                    <p className=" text-(--color-text-dark) leading-[1.7] mt-2">
                      Any damage, missing accessory, misuse, or abnormal wear
                      and tear may be chargeable as per IndiaRentalz policy.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      6. Security Refund
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      The refundable security amount, if applicable, will be
                      processed after the equipment is received and inspected by
                      IndiaRentalz.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      Security refund is generally processed within 3 working
                      days after successful receipt and verification of the
                      returned equipment, subject to:
                    </p>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        No damage
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Working condition check
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        No missing items
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        No unpaid rentals
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        No pending delivery/pickup charges
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        No misuse or policy violation
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                        Completion of return inspection
                      </li>
                    </ul>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      Any applicable deductions will be communicated to the
                      customer.
                    </p>
                  </div>

                  <div className="py-4 border-b border-(--color-delivery-divider)">
                    <h4 className=" mb-2 text-(--color-accent) font-roboto!">
                      7. Data Responsibility
                    </h4>
                    <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Before returning laptops, desktops, MacBooks, storage
                      devices, or any IT equipment, the customer should take
                      backup of personal or business data and remove
                      confidential information.
                    </p>
                    <p className=" text-(--color-text-dark) leading-[1.7]">
                      IndiaRentalz is not responsible for loss of customer data
                      after return, replacement, repair, formatting, or device
                      reset.
                    </p>
                  </div>
                </div>

                <div className="bg-[linear-gradient(135deg,#fff0f1,#ffe2e5)] border border-(--color-delivery-border) rounded-2xl p-6 mt-6 text-center">
                  <h3 className=" mb-2 text-(--color-accent) font-roboto! font-bold">
                    Simple, Reliable Delivery & Return
                  </h3>
                  <p className=" text-text-muted leading-[1.7]">
                    IndiaRentalz is committed to providing a smooth delivery and
                    return experience. Our team will coordinate with you at
                    every step — from dispatch and delivery to pickup,
                    inspection, and refund processing — so that your rental
                    journey remains simple, reliable, and hassle-free.
                  </p>
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
