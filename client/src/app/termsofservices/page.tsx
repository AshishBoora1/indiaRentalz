import Image from "next/image";
import termsofservices from "@/../public/images/banner/about-us.png";
import "../css/termsofservices.css";
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
                  src={termsofservices}
                  alt={"termsofservices"}
                />
              </div>
              <div className="w-full md:w-8/12 md:ps-4">
                <div className="card mb-7.5 py-6 px-6.5 bg-[linear-gradient(135deg,#fff3f3,#ffe7e9)]">
                  <h6 className="font-roboto! text-(--color-light-accent)">
                    Technology Without Ownership
                  </h6>
                  <h1 className="mt-3 text-(--color-accent) font-roboto!">
                    Terms of Service
                  </h1>
                  <h3 className="text-(--color-accent) font-semibold! my-3">
                    General Conditions for Renting Equipment
                  </h3>
                  <p className="text-text-muted">
                    These Terms of Service apply to all equipment rented from
                    IndiaRentalz, including but not limited to laptops,
                    desktops, MacBooks, workstations, printers, servers,
                    monitors, UPS systems, accessories, and other IT equipment.
                  </p>
                </div>

                <div className=" bg-(--color-bg-light-yellow) border border-(--color-yellow-divider) border-l-4 border-l-(--color-border-light-yellow) rounded-[10px] py-3.5 px-4 mt-3 mb-5.5 text-(--color-text-dark-yellow) leading-[1.65]">
                  By placing an order, making payment, accepting delivery, or
                  using rented equipment from IndiaRentalz, the customer / hirer
                  agrees to follow these terms, along with the applicable rental
                  agreement, quotation, invoice, documentation policy, delivery
                  policy, and any other terms communicated at the time of order
                  confirmation.
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    1. Rental Charges
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Rental charges will be applicable based on the product,
                    quantity, configuration, rental duration, location, and
                    commercial terms agreed at the time of order confirmation.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer agrees to pay rental charges as mentioned in the
                    quotation, website order, invoice, rental agreement, or any
                    written communication issued by IndiaRentalz.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Rental charges may be collected through:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Full advance payment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Partial advance payment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Monthly recurring rental
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Security deposit plus monthly rental
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Enterprise billing terms
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Any other agreed commercial arrangement
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The rental period will begin from the date the equipment is
                    delivered or made available to the hirer, unless otherwise
                    agreed in writing.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The rental period will continue until the equipment is
                    returned to IndiaRentalz, received in proper condition, and
                    approved after inspection by the IndiaRentalz support or
                    operations team.
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    Monthly rental charges are generally billed for the full
                    rental cycle. If equipment is returned before the end of the
                    agreed rental period, rental charges for the unused period
                    may not be refunded unless specifically agreed in writing.
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    2. Payment Terms and Late Payment Charges
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer is responsible for making rental payments on or
                    before the due date.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    If payment is not received by the due date, IndiaRentalz may
                    charge late payment interest or penalty at the rate of 2.5%
                    per month on the overdue amount, or as stated in the
                    quotation, invoice, rental agreement, or applicable
                    commercial terms.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Delay in payment may also lead to:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Suspension of support services
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Temporary locking or disabling of equipment, where
                      applicable
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Additional reminders and recovery action
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Termination of rental services
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Legal or recovery proceedings
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Repossession of rented equipment
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Late payment charges are without prejudice to any other
                    rights or remedies available to IndiaRentalz.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    3. Delivery and Return Charges
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Delivery and pickup charges may be included in the rental
                    plan, security deposit, or commercial terms, depending on
                    the order type and location.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    However, additional charges may apply for:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Remote locations
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Express delivery
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Special handling
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Bulk movement
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Dedicated vehicle requirement
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Failed delivery attempts
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Reverse pickup
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Outstation logistics
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Large or heavy equipment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Change in delivery or pickup address
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Any applicable delivery or return charges will be
                    communicated to the hirer wherever applicable.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    4. Safety and Proper Use of Equipment
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz makes reasonable efforts to check and dispatch
                    equipment in working condition. However, after delivery, the
                    hirer is responsible for proper handling, care, and safe use
                    of the rented equipment.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    The hirer must ensure that:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The equipment is used only for lawful and intended
                      purposes
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The equipment is not misused, damaged, tampered with, or
                      mishandled
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The equipment is protected from water, fire, dust, power
                      fluctuation, physical damage, theft, and unauthorized use
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Only trained or responsible users operate the equipment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      All instructions provided by IndiaRentalz are followed
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Accessories, cables, chargers, adapters, and other
                      supplied items are safely maintained
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    The hirer must not use the equipment in any unsafe, illegal,
                    abusive, or unauthorized manner.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    5. Responsibility of the Hirer
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer’s responsibility begins from the time the
                    equipment is delivered to the hirer, employee,
                    representative, security personnel, office staff, family
                    member, agent, or any person accepting delivery on behalf of
                    the hirer.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    The hirer is responsible for:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Safe custody of the equipment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Protection from theft, loss, fire, water damage, misuse,
                      vandalism, mishandling, and unauthorized access
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Proper usage by employees, users, or representatives
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Returning the equipment at the end of the rental duration
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Returning all accessories and items received at the time
                      of delivery
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Informing IndiaRentalz in case of damage, loss, theft,
                      breakdown, or relocation requirement
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Clearing all pending dues before closure of rental
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer must not sell, transfer, pledge, sub-rent,
                    mortgage, modify, dispose of, or part with possession or
                    control of the equipment without written approval from
                    IndiaRentalz.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    The hirer’s responsibility ends only when the equipment is
                    physically returned to IndiaRentalz, received by the
                    authorized team, inspected, and confirmed as returned in
                    acceptable condition.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    6. Maintenance, Breakdown and Issue Reporting
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Any breakdown, technical issue, unsatisfactory performance,
                    damage, or abnormal functioning of the equipment must be
                    reported immediately to the IndiaRentalz support team.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer must not repair, open, modify, upgrade, replace
                    parts, install unauthorized hardware, or attempt to repair
                    the equipment unless written approval is given by
                    IndiaRentalz.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    In case of breakdown, IndiaRentalz may, depending on the
                    issue and rental terms:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Provide phone or remote support
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Arrange inspection
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Arrange repair
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Arrange replacement, subject to availability
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Call back the equipment for checking
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Provide alternate resolution as per policy
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer must immediately notify IndiaRentalz if the
                    equipment is involved in any accident, physical damage,
                    liquid damage, electrical damage, theft, loss, fire
                    incident, or any situation that affects the condition or
                    safety of the equipment.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    For printers, consumables such as ink, toner, cartridges,
                    drums, paper, and similar items are generally the
                    responsibility of the hirer unless specifically included in
                    the agreement. IndiaRentalz does not guarantee that a rental
                    printer will be supplied with full consumables unless agreed
                    in writing.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    7. Location of Equipment
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The rented equipment must be used only at the address or
                    site approved at the time of rental.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer must not shift, transfer, relocate, or move the
                    equipment to another address, city, office, branch, employee
                    location, event location, or third-party premises without
                    prior written approval from IndiaRentalz.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    If the hirer wishes to change the location of the equipment,
                    IndiaRentalz must be informed in advance. Additional
                    verification, logistics charges, or revised terms may apply.
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    Unauthorized relocation of equipment may be treated as a
                    violation of rental terms.
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    8. Technical Support
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz provides technical support for rented equipment
                    during support hours, subject to applicable rental terms.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Support may be provided through:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Phone assistance
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      WhatsApp or email support
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Remote troubleshooting
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      On-site visit, where available and applicable
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Pickup and repair
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Replacement, subject to availability and policy
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    General support hours may be from 10:30 AM to 5:30 PM,
                    unless otherwise mentioned in the agreement or enterprise
                    support terms.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz support covers equipment-related issues as per
                    rental terms. It may not cover customer internet issues,
                    customer software issues, data loss, third-party application
                    errors, unauthorized software installation, virus or malware
                    due to customer usage, user-created configuration issues,
                    damage caused by misuse or negligence, or issues caused by
                    customer accessories or external devices.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    9. Customer Data and Software Responsibility
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer is responsible for all data stored, downloaded,
                    processed, created, or accessed on the rented equipment
                    during the rental period.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz is not responsible for:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Loss of data
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Corruption of files
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Software licensing issues
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Unauthorized software usage
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Customer login credentials
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Cloud account access
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Data backup failure
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Business interruption due to data or software issues
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer must take backup of all important data before
                    returning, replacing, repairing, or handing over the
                    equipment.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz may format, reset, wipe, or reinstall the
                    system after return, repair, or replacement. The hirer
                    should ensure that all personal or business data is removed
                    before return.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    10. Quotation and Order Approval
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Any quotation provided by IndiaRentalz is for reference and
                    commercial discussion only. A quotation does not
                    automatically create a rental contract.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    A rental order is confirmed only after:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Product availability is confirmed
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Commercial terms are accepted
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Required payment is received
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Documentation Process is completed and approved
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Delivery location is accepted
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      IndiaRentalz confirms the order
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz reserves the right to revise, reject, hold, or
                    cancel any quotation or order based on availability,
                    documentation, risk assessment, payment status, or internal
                    policy.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    11. Documentation Process
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Delivery of rented equipment is subject to successful
                    completion of the IndiaRentalz Documentation Process.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer must provide valid and clear documents as
                    requested by IndiaRentalz. Documents may include identity
                    proof, address proof, business documents, financial
                    verification documents, authorization letters, GST details,
                    references, or any other supporting documents depending on
                    customer profile and rental requirement.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz may reject or hold any order if documentation
                    is incomplete, doubtful, mismatched, unverifiable, or not
                    approved as per internal policy.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    12. Termination of Rental
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz may terminate the rental arrangement with
                    immediate effect if:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The hirer fails to make payment on time
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The hirer violates any rental condition
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The equipment is misused, damaged, relocated, or
                      transferred without approval
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The hirer provides false, incomplete, or misleading
                      information
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Documentation is found to be invalid or doubtful
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The hirer refuses inspection, recovery, or return
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      The hirer becomes insolvent or legal proceedings affect
                      payment or recovery
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      IndiaRentalz believes the equipment is at risk
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Any illegal or unauthorized use is suspected
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Upon termination, IndiaRentalz may demand immediate return
                    of all rented equipment and recover any pending dues,
                    damages, penalties, legal expenses, or other applicable
                    charges.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    13. IndiaRentalz Right of Access and Recovery
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    The hirer authorizes IndiaRentalz, its employees,
                    representatives, service partners, recovery agents, or
                    authorized persons to access the premises where the
                    equipment is reasonably believed to be located for
                    inspection, repair, replacement, pickup, or repossession,
                    subject to applicable law.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    This right may be exercised in case of non-payment, rental
                    expiry, termination, misuse, unauthorized relocation, risk
                    to equipment, recovery requirement, or legal or contractual
                    violation.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    The hirer agrees to cooperate with IndiaRentalz for
                    inspection, pickup, and recovery of equipment.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    14. Loss, Theft, Damage and Missing Items
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    In case of loss, theft, damage, missing accessories, or
                    non-return of equipment, the hirer will be responsible for
                    applicable charges.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    These may include:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Repair cost
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Replacement cost
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Depreciated value or market value
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Missing accessory charges
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Inspection charges
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Logistics charges
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Rental dues until closure
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Legal or recovery expenses
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Any other applicable cost
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    The hirer must immediately inform IndiaRentalz in case of
                    theft or loss and provide supporting documents such as
                    police complaint, FIR, insurance details, or other documents
                    if required.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    15. Limit of Liability
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz will not be liable for any direct or indirect
                    loss, damage, delay, cost, business interruption, loss of
                    profit, loss of savings, loss of data, loss of goodwill,
                    loss of opportunity, wasted expense, employee cost, project
                    delay, or any consequential loss arising due to:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Late delivery or non-delivery
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Breakdown of equipment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Service delay
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Unsuitability of equipment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Enterprise billing terms
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Incorrect customer selection
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Customer software or data issue
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Internet service provider issue
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Third-party application issue
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Power fluctuation
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Logistics delay
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Force majeure events
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Any circumstance beyond reasonable control
                    </li>
                  </ul>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    IndiaRentalz’s liability, if any, will be limited to the
                    extent of rental charges paid for the affected equipment for
                    the relevant period, subject to applicable law and agreed
                    terms.
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    16. Force Majeure
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz will not be responsible for delays,
                    non-performance, or failure to provide services caused by
                    events beyond reasonable control, including but not limited
                    to natural disasters, floods, fire, pandemic, government
                    restrictions, transport disruptions, strikes, riots, war,
                    civil disturbance, internet or power failures, courier or
                    logistics disruption, shortage of parts, vendor delay, or
                    any other event beyond reasonable control.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    17. Support for Older Equipment
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz may provide certain older-generation equipment
                    on rent based on customer requirement, budget, or
                    availability.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Support for older equipment may be limited due to age,
                    availability of parts, manufacturer support status,
                    performance limitations, or higher probability of failure.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz will make reasonable efforts to support such
                    equipment, but replacement or repair options may depend on
                    availability.
                  </p>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    18. Rights Reserved
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Any delay, failure, or decision by IndiaRentalz not to
                    enforce any term at any time shall not be considered a
                    waiver of its rights.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz reserves the right to enforce any term, recover
                    dues, claim damages, repossess equipment, or take legal
                    action at any later stage.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    19. Separate Validity of Terms
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    If any provision of these terms is found to be invalid,
                    unenforceable, or unlawful, the remaining provisions will
                    continue to remain valid and enforceable.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Headings used in these terms are for convenience only and
                    shall not affect the interpretation of the terms.
                  </p>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    20. Governing Terms
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    These Terms of Service should be read together with:
                  </p>
                  <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                    <div className="bg-card rounded-lg py-2.5 px-3 text-sm font-medium border font-roboto! border-(--color-delivery-border)">
                      Rental agreement
                    </div>
                    <div className="bg-card rounded-lg py-2.5 px-3 text-sm font-medium border font-roboto! border-(--color-delivery-border)">
                      Invoice
                    </div>
                    <div className="bg-card rounded-lg py-2.5 px-3 text-sm font-medium border font-roboto! border-(--color-delivery-border)">
                      Quotation
                    </div>
                    <div className="bg-card rounded-lg py-2.5 px-3 text-sm font-medium border font-roboto! border-(--color-delivery-border)">
                      Documentation and Verification Policy
                    </div>
                    <div className="bg-card rounded-lg py-2.5 px-3 text-sm font-medium border font-roboto! border-(--color-delivery-border)">
                      Delivery and Return Policy
                    </div>
                    <div className="bg-card rounded-lg py-2.5 px-3 text-sm font-medium border font-roboto! border-(--color-delivery-border)">
                      Privacy Policy
                    </div>
                    <div className="bg-card rounded-lg py-2.5 px-3 text-sm font-medium border font-roboto! border-(--color-delivery-border)">
                      Support policy
                    </div>
                    <div className="bg-card rounded-lg py-2.5 px-3 text-sm font-medium border font-roboto! border-(--color-delivery-border)">
                      Any written terms agreed between IndiaRentalz and the
                      hirer
                    </div>
                  </div>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    In case of any conflict, the specific written agreement or
                    commercial terms agreed with the hirer may prevail to the
                    extent applicable.
                  </p>
                </div>

                <div className="bg-[linear-gradient(135deg,#fff0f1,#ffe2e5)] border border-(--color-delivery-border) rounded-2xl p-6 mt-6 text-center">
                  <h3 className=" mb-2 text-(--color-accent) font-roboto! font-bold">
                    Simple, Transparent & Responsible Rentals
                  </h3>
                  <p className=" text-text-muted leading-[1.7]">
                    IndiaRentalz aims to provide a simple, transparent, and
                    reliable rental experience. These terms are designed to
                    protect the interests of both the customer and IndiaRentalz
                    and to ensure responsible use, safe handling, timely
                    payment, and smooth return of rented equipment.
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
