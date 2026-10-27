import Image from "next/image";
import paymentandrefundpolicy from "@/../public/images/banner/paymentandrefundpolicy-side.jpg";
import "../css/paymentandrefundpolicy.css";
import "../css/commonpolicypages.css";
function Page() {
  return (
    <main>
      <section>
        <div className=" py-10 lg:py-18.5">
          <div className=" container">
            <div className=" flex flex-wrap relative max-md:gap-10">
              <div className="w-full md:w-4/12 md:sticky top-4 left-0 h-full">
                <Image
                  className="w-full rounded-xl"
                  src={paymentandrefundpolicy}
                  alt={"paymentandrefundpolicy"}
                />
              </div>
              <div className="w-full md:w-8/12 md:ps-4">
                <div className="bg-[linear-gradient(135deg,#fff3f3,#ffe7e9)] border border-(--color-delivery-border) rounded-[18px] py-7 px-7.5 mb-7">
                  <h6 className="font-roboto!  text-(--color-light-accent)">
                    Technology Without Ownership
                  </h6>
                  <h1 className="my-2.5 text-(--color-accent) font-roboto!">
                    Payment & Refund Policy
                  </h1>
                  <p className="text-text-muted">
                    Our payment and refund policy is designed to keep your
                    rental experience clear and predictable — from order
                    confirmation and minimum rental tenure to return, inspection
                    and refund of the applicable security amount.
                  </p>
                </div>

                <div className=" grid grid-cols-1 xl:grid-cols-3 gap-3 mb-5.5">
                  <div className="bg-white border border-(--color-delivery-border) rounded-xl p-4 text-center">
                    <p className="text-(--color-accent) mb-1.5 font-medium">
                      Minimum Rental Tenure
                    </p>
                    <p className=" text-sm! text-(--color-text-paragraph)">
                      As selected or agreed at the time of order confirmation.
                    </p>
                  </div>
                  <div className="bg-white border border-(--color-delivery-border) rounded-xl p-4 text-center">
                    <p className="text-(--color-accent) mb-1.5 font-medium">
                      Refund Processing
                    </p>
                    <p className=" text-sm! text-(--color-text-paragraph)">
                      Generally initiated within 3 working days after successful
                      return inspection.
                    </p>
                  </div>
                  <div className="bg-white border border-(--color-delivery-border) rounded-xl p-4 text-center">
                    <p className="text-(--color-accent) mb-1.5 font-medium">
                      Bank Credit Timeline
                    </p>
                    <p className=" text-sm! text-(--color-text-paragraph)">
                      After initiation, the payment provider or bank may take
                      additional time to credit the refund.
                    </p>
                  </div>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    1. Rental Payment Terms
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Rental charges are based on the equipment, configuration,
                    quantity, rental duration, customer profile, delivery
                    location and commercial terms confirmed for the order.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Depending on the order, payment may be structured as:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Full advance rental payment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Partial advance payment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Monthly recurring rental
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Refundable security amount plus rental
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Approved enterprise billing or credit terms
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Any other commercial arrangement confirmed in writing
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Applicable GST and other taxes will be charged as required
                    by law and as stated in the quotation, invoice or order
                    confirmation.
                  </p>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    2. Minimum Usage Tenure
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Every rental may have a minimum usage tenure selected by the
                    hirer or agreed at the time of order confirmation. Rental
                    pricing is often calculated with reference to the committed
                    rental duration.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    If the hirer chooses to return the equipment before
                    completion of the agreed minimum tenure, early closure
                    charges may apply as per the quotation, rental agreement or
                    applicable commercial terms.
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-list-marker) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    Any applicable early closure amount may be adjusted against
                    the refundable security amount or may become payable
                    separately, depending on the order terms.
                  </div>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    3. Rental Renewal & Extension
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    If the equipment is not returned on or before the agreed
                    rental end date, the rental may continue or renew as per the
                    applicable billing cycle and rental terms.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    If you know that you will require the equipment for a longer
                    duration, we recommend requesting an extension in advance.
                    Depending on the product and tenure, a revised long-term
                    rental plan may be available.
                  </p>
                  <div className=" bg-[#fffaf2] border border-[#f0dfbd] border-l-4 border-l-[#c78c22] rounded-lg py-3.5 px-4 mt-3 text-[#5f5134] leading-[1.68]">
                    A rental is considered closed only after the equipment has
                    been returned or collected, received by IndiaRentalz,
                    inspected and the applicable closure process has been
                    completed.
                  </div>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    4. Refundable Security Amount
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    A refundable security amount may be collected depending on
                    the equipment value, customer profile, documentation, rental
                    period, quantity and risk assessment.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    No interest is payable on the refundable security amount
                    during the rental period.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    At the time of rental closure, the security amount may be
                    adjusted against any applicable:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Unpaid rental charges
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Early closure charges
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Damage or repair charges
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Missing equipment or accessory charges
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Delivery, pickup or logistics charges
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Other dues agreed under the rental terms
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    The balance refundable amount, if any, will be processed
                    after successful return and inspection.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    5. Return & Refund Process
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Customers should raise a return request through the
                    IndiaRentalz support channel before the rental end date so
                    that pickup, reverse logistics, inspection and billing
                    closure can be coordinated.
                  </p>

                  <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-3.5">
                    <div className="bg-card border border-(--color-delivery-border) rounded-[10px] p-3.5 text-center">
                      <div>
                        <div className=" bg-(--color-list-marker) text-white flex items-center justify-center rounded-full font-extrabold text-sm w-7 h-7 mx-auto">
                          1
                        </div>
                      </div>
                      <p className="text-(--color-accent) text-sm! my-2">
                        Raise Return Request
                      </p>
                      <p className=" text-xs! text-(--color-text-paragraph)">
                        Inform support and confirm equipment to be returned.
                      </p>
                    </div>
                    <div className="bg-card border border-(--color-delivery-border) rounded-[10px] p-3.5 text-center">
                      <div>
                        <div className=" bg-(--color-list-marker) text-white flex items-center justify-center rounded-full font-extrabold text-sm w-7 h-7 mx-auto">
                          2
                        </div>
                      </div>
                      <p className="text-(--color-accent) text-sm! my-2">
                        Pickup / Handover
                      </p>
                      <p className=" text-xs! text-(--color-text-paragraph)">
                        Equipment and accessories are collected or returned.
                      </p>
                    </div>
                    <div className="bg-card border border-(--color-delivery-border) rounded-[10px] p-3.5 text-center">
                      <div>
                        <div className=" bg-(--color-list-marker) text-white flex items-center justify-center rounded-full font-extrabold text-sm w-7 h-7 mx-auto">
                          3
                        </div>
                      </div>
                      <p className="text-(--color-accent) text-sm! my-2">Inspection</p>
                      <p className=" text-xs! text-(--color-text-paragraph)">
                        Condition, working status and accessories are verified.
                      </p>
                    </div>
                    <div className="bg-card border border-(--color-delivery-border) rounded-[10px] p-3.5 text-center">
                      <div>
                        <div className=" bg-(--color-list-marker) text-white flex items-center justify-center rounded-full font-extrabold text-sm w-7 h-7 mx-auto">
                          4
                        </div>
                      </div>
                      <p className="text-(--color-accent) text-sm! my-2">Refund</p>
                      <p className=" text-xs! text-(--color-text-paragraph)">
                        Eligible refundable balance is processed after closure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    6. Refund Timeline
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    After the rented equipment is received and successfully
                    inspected, IndiaRentalz generally initiates the applicable
                    refund within 3 working days, subject to completion of
                    return verification and adjustment of any outstanding dues.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Once the refund is initiated, the time taken for the amount
                    to appear in the customer's account depends on the bank,
                    payment gateway and original payment method. This may take
                    approximately 7–10 business days in some cases.
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-list-marker) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    <strong> Important:</strong> “Refund initiated” and “refund
                    credited to your bank account” are two different stages.
                    IndiaRentalz controls the initiation of an approved refund;
                    the final credit timeline may depend on the payment provider
                    or banking system.
                  </div>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    7. Cancellation Before Delivery
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Generally, no cancellation charge applies where an order is
                    cancelled before dispatch or before logistics costs have
                    been incurred, subject to the specific order terms.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    However, charges may apply if:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The order has already been dispatched
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      A delivery vehicle or logistics partner has already been
                      assigned
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The delivery team has reached the customer location
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Special procurement, configuration or preparation has been
                      completed for the order
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Any non-refundable third-party logistics or processing
                      cost has been incurred
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Any applicable deduction will be communicated to the
                    customer as part of the cancellation and refund process.
                  </p>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    8. Documentation Rejection or Order Rejection
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Delivery of rented equipment is subject to successful
                    completion of the IndiaRentalz Documentation Process and
                    internal approval.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    If an order is rejected by IndiaRentalz because the
                    Documentation Process is not approved, any eligible advance
                    amount paid by the customer will be refunded in accordance
                    with the applicable order, cancellation and refund terms.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Any non-refundable third-party cost already incurred, if
                    applicable to a specific order, will be communicated before
                    adjustment.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    9. Damaged, Faulty or Incorrect Equipment on Delivery
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz checks and audits equipment before dispatch. If
                    you receive equipment that is damaged, faulty or materially
                    different from the confirmed order, please report it to the
                    IndiaRentalz support team within 24 hours of delivery.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Please share the order details, description of the issue and
                    supporting photographs or videos wherever applicable.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    After review, IndiaRentalz may arrange repair, replacement,
                    exchange, return or another suitable resolution in
                    accordance with the rental terms and product availability.
                  </p>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    10. Exchange & Replacement
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Approved exchanges or replacements are subject to product
                    availability, location, logistics feasibility and the nature
                    of the reported issue.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Where an exchange or replacement has been approved,
                    IndiaRentalz will make reasonable efforts to complete the
                    process as quickly as possible. Depending on the location,
                    equipment category and stock availability, fulfilment may
                    take up to 15 business days in certain cases.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    11. Refund Method
                  </h3>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-accent) py-2.5 px-3 border-b border-(--color-border-light)">
                          Original Online Payment
                        </th>
                        <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                          Refund will normally be initiated back to the original
                          payment method wherever supported.
                        </td>
                      </tr>
                      <tr>
                        <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-accent) py-2.5 px-3 border-b border-(--color-border-light)">
                          Bank Transfer / Other Method
                        </th>
                        <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                          Refund may be processed to the customer's verified and
                          registered bank account after confirmation of the
                          required details.
                        </td>
                      </tr>
                      <tr>
                        <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-accent) py-2.5 px-3 border-b border-(--color-border-light)">
                          Enterprise / Account Customer
                        </th>
                        <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                          Refund or adjustment may be processed through credit
                          note, account adjustment or bank transfer in
                          accordance with the agreed commercial terms.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    12. Refunds May Be Held Pending Verification
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz may temporarily hold or delay a refund where
                    additional verification is required, including situations
                    involving:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Pending return inspection
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Missing items or accessories
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Damage assessment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Unpaid rental or other outstanding dues
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Disputed pickup or delivery status
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Incorrect or unverified bank details
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Open support, recovery or contractual issues
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    The customer will be informed where any material deduction
                    or additional verification is required.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h3 className=" mb-2 text-(--color-accent)">
                    13. Payment or Refund Queries
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    If you believe a payment has been charged incorrectly, a
                    duplicate payment has been made, or an approved refund has
                    not been received after the expected banking timeline,
                    please contact IndiaRentalz support with the relevant order
                    and transaction details.
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-list-marker) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    <strong>IndiaRentalz Support</strong>
                    <p>
                      <strong>Email:</strong> support@indiarentalz.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +91 9738 030303
                    </p>
                  </div>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6">
                  <h3 className=" mb-2 text-(--color-accent)">
                    14. Policy Read Together with Rental Terms
                  </h3>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    This Payment & Refund Policy should be read together with
                    the applicable quotation, order confirmation, invoice,
                    rental agreement, Terms of Service, Documentation &
                    Verification Policy, and Delivery & Return Policy.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    If a specific written commercial agreement contains
                    different payment, tenure, cancellation or refund terms, the
                    specifically agreed written terms may prevail to the extent
                    applicable.
                  </p>
                </div>

                <div className="bg-[linear-gradient(135deg,#fff0f1,#ffe2e5)] border border-(--color-delivery-border) rounded-2xl p-6 mt-6 text-center">
                  <h3 className=" mb-2  text-(--color-accent) font-roboto! font-bold">
                    Clear Payments. Transparent Refunds.
                  </h3>
                  <p className=" text-text-muted leading-[1.7]">
                    IndiaRentalz aims to keep every stage of the rental journey
                    transparent — from payment and minimum tenure to equipment
                    return, inspection and refund processing — so customers know
                    what to expect before, during and after their rental.
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

export default Page;
