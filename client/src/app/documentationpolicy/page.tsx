import Image from "next/image";
import deliverypolicyside from "@/../public/images/banner/deliverypolicy-side.jpg";
import "../css/documentationpolicy.css";
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
                  src={deliverypolicyside}
                  alt={"deliverypolicyside"}
                />
              </div>
              <div className="w-full md:w-8/12 md:ps-4">
                <div className="bg-[linear-gradient(135deg,#fff3f3,#ffe7e9)] border border-(--color-delivery-border) rounded-[18px] py-7 px-7.5 mb-7">
                  <h6 className="font-roboto!  text-(--color-light-accent)">
                    Technology Without Ownership
                  </h6>
                  <h1 className="my-2.5 text-(--color-accent) font-roboto!">
                    Documentation & Verification Policy
                  </h1>
                  <p className="text-text-muted">
                    At IndiaRentalz, every rental order goes through a basic
                    Documentation Process before delivery. This helps us verify
                    the hirer’s identity, address, rental eligibility and
                    credibility before handing over laptops, desktops, MacBooks,
                    workstations or other IT equipment on rent.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Completion and approval of the Documentation Process is
                    mandatory. Equipment will be dispatched or delivered only
                    after the required documents are submitted, verified and
                    approved by IndiaRentalz.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    If the documentation is not approved, or if the order is
                    rejected as per IndiaRentalz internal verification policy,
                    the customer will be informed. Any advance amount paid will
                    be refunded as per the applicable delivery, cancellation and
                    refund policy.
                  </p>

                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    IndiaRentalz may request additional documents depending on
                    the customer profile, rental value, order quantity, rental
                    duration, delivery location and internal risk assessment.
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className="mb-4.5 text-(--color-accent)">
                    Documentation Process for Individual Customers
                  </h2>
                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5 mb-4">
                    <h4 className="mb-1.5 text-(--color-accent) font-semibold!">
                      1. Customers with Own / Parental Residence
                    </h4>
                    <p className=" text-(--color-text-paragraph) text-sm leading-[1.7] mb-3">
                      <strong>Applicable for: </strong>
                      Full-time employees, salaried professionals, start-up
                      founders, self-employed professionals and Indian residents
                      renting for personal or professional use.
                    </p>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Identity Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            PAN Card issued by Income Tax Department of India
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Permanent Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Aadhaar Card / Driving Licence / Passport / Voter ID
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Recent utility bill / valid rent agreement / other
                            approved address proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Financial Verification
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Last 3 months’ bank statement
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Employment / Occupation Details
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Salary slip, employee ID, business proof, or
                            professional reference, if required
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5 mb-4">
                    <h4 className="mb-1.5 text-(--color-accent) font-semibold!">
                      2. Customers Staying in Rented Accommodation
                    </h4>
                    <p className=" text-(--color-text-paragraph) text-sm leading-[1.7] mb-3">
                      <strong>Applicable for: </strong>
                      Full-time employees, salaried professionals, start-up
                      founders, self-employed professionals and Indian residents
                      staying in rented residential accommodation.
                    </p>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Identity Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            PAN Card issued by Income Tax Department of India
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Permanent Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Aadhaar Card / Driving Licence / Passport / Voter ID
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Registered rent agreement / recent utility bill / HR
                            letter confirming residence, if applicable
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Financial Verification
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Last 3 months’ bank statement
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Employment / Occupation Details
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Salary slip, employee ID, business proof, or
                            professional reference, if required
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5 mb-4">
                    <h4 className="mb-1.5 text-(--color-accent) font-semibold!">
                      3. Self-Employed Professionals
                    </h4>
                    <p className=" text-(--color-text-paragraph) text-sm leading-[1.7] mb-3">
                      <strong>Applicable for: </strong>
                      Professionals, consultants, freelancers with established
                      work profile, business owners and independent service
                      providers.
                    </p>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Identity Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            PAN Card
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Permanent Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Aadhaar Card / Driving Licence / Passport / Voter ID
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Rent agreement / recent utility bill / other valid
                            address proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Professional Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Business registration, GST certificate, visiting
                            card, website, professional reference, client
                            reference, or work proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Financial Verification
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Bank statement, if required
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5">
                    <h4 className="mb-1.5 text-(--color-accent) font-semibold!">
                      4. Students and Freelancers
                    </h4>
                    <p className=" text-(--color-text-paragraph) text-sm leading-[1.7] mb-3">
                      <strong>Applicable for: </strong>
                      Students, interns, trainees, freelancers and early-stage
                      professionals renting equipment for study, projects,
                      assignments, online classes, internships, or freelance
                      work.
                    </p>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Identity Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            PAN Card, if available
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Permanent Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Aadhaar Card / Passport / Voter ID / Driving Licence
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Rent agreement / utility bill / valid residence
                            proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Student / Professional Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Student ID card, institute letter, course proof,
                            freelance work proof, or professional reference
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Guardian Documents
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Guardian ID proof and address proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Guardian Contact
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Active mobile number of parent/guardian
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Financial Verification
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Bank statement or guardian financial proof, if
                            required
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                      IndiaRentalz may require guardian confirmation for student
                      rentals or high-value equipment rentals.
                    </div>
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className="mb-4.5 text-(--color-accent)">
                    Documentation Process for Foreign Nationals, NRI and PIO
                    Customers
                  </h2>
                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5 mb-4">
                    <h4 className=" mb-1.5 text-(--color-accent) font-semibold!">
                      5. Foreign Nationals
                    </h4>
                    <p className=" text-(--color-text-paragraph) text-sm leading-[1.7] mb-3">
                      <strong>Applicable for: </strong>
                      Foreign nationals staying in India for employment,
                      official work, business assignments, projects, or
                      long-term stay.
                    </p>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Identity Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Passport
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Stay Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Valid Visa
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Rent agreement / HR letter / recent utility bill
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Local Reference
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Company reference / business reference / Indian
                            contact reference
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Additional Verification
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            As requested by IndiaRentalz based on rental value
                            and duration
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                      IndiaRentalz may not accept temporary stay locations such
                      as hotels, hostels, or short-term guest houses for
                      delivery.
                    </div>
                  </div>

                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5">
                    <h4 className=" mb-1.5 text-(--color-accent) font-semibold!">
                      6. NRI / PIO Customers
                    </h4>
                    <p className=" text-(--color-text-paragraph) text-sm leading-[1.7] mb-3">
                      <strong>Applicable for: </strong>
                      NRI or PIO customers staying in India for a valid period
                      and having a verifiable local address and reference.
                    </p>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Identity Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Passport
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Status Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Visa / PIO Card / OCI document, as applicable
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Rent agreement / HR letter / recent utility bill
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Local Reference
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Company reference / business reference / Indian
                            contact reference
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Additional Verification
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            As requested by IndiaRentalz
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6">
                  <h2 className="mb-4.5 text-(--color-accent)">
                    Documentation Process for Business Customers
                  </h2>
                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5 mb-4">
                    <h4 className=" mb-1.5 text-(--color-accent) font-semibold!">
                      7. Sole Proprietorship
                    </h4>
                    <table className="w-full mt-3">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Business PAN / Proprietor PAN
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            PAN Card of proprietor and business entity, if
                            applicable
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Proprietor Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Aadhaar Card / Driving Licence / Passport / Voter ID
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Business Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            GST certificate / shop act licence / MSME
                            certificate / tax registration / professional tax
                            certificate / municipal licence / any valid
                            government registration
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Utility bill / rent agreement / office address proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Authorized Person Details
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            ID and contact details of the person coordinating
                            the order
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5 mb-4">
                    <h4 className=" mb-1.5 text-(--color-accent) font-semibold!">
                      8. Partnership Firm
                    </h4>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Firm PAN
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            PAN Card of the partnership firm
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Constitution Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Registered partnership deed
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Authorization
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Authority letter or Power of Attorney in favour of
                            partner/employee authorized to transact
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Partner KYC
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            ID and address proof of main partners and authorized
                            person
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Business Name Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Registration document or legal name proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Rent agreement / utility bill / office address proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Contact Details
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Contact numbers and email IDs of authorized persons
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5 mb-4">
                    <h4 className=" mb-1.5 text-(--color-accent) font-semibold!">
                      9. Limited Liability Partnership / LLP
                    </h4>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            LLP PAN
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            PAN Card of the LLP
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            LLP Agreement
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Copy of LLP agreement
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Incorporation Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Certificate of Incorporation issued by ROC
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Partner Details
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            DPIN / DIN details of designated partners
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Authorization
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Board resolution / authorization letter to rent
                            equipment from Sunsoft eRP Solutions Pvt. Ltd. /
                            IndiaRentalz
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Authorized Person ID
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Government-issued ID and address proof of authorized
                            person
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Business Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            GST certificate / government registration /
                            professional tax registration certificate /
                            municipal licence, if applicable
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Rent agreement / recent utility bill / office
                            address proof
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5 mb-4">
                    <h4 className="mb-1.5 text-(--color-accent) font-semibold!">
                      10. Companies / Private Limited / Limited Companies
                    </h4>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Company PAN
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            PAN Card of the company
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Incorporation Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Certificate of Incorporation / commencement of
                            business, if applicable
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Company Constitution
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Memorandum of Association and Articles of
                            Association
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Director Details
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            List of directors with contact numbers
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Authorization
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Board resolution / authorization letter to enter
                            into rental agreement with IndiaRentalz
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Authorized Signatory Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            ID and address proof of authorized signatory, duly
                            attested by the company
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            GST / Business Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            GST certificate or other valid business registration
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Utility bill / rent agreement / office address proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Mailing Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Company registered or correspondence address proof
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white border border-(--color-delivery-border) rounded-xl py-4.5 px-5">
                    <h4 className=" mb-1.5 text-(--color-accent) font-semibold!">
                      11. Trusts, Clubs, Societies and Associations
                    </h4>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Registration Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Certificate of Registration
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Constitution Document
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Trust deed / bye-laws of society / association /
                            club
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Authorization
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Resolution of managing body or Power of Attorney
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Authorized Signatory Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            ID and address proof of authorized signatory
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Member / Trustee Details
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Names and addresses of trustees, beneficiaries,
                            managing committee members, or persons holding Power
                            of Attorney
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Delivery Address Proof
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Utility bill / telephone bill / rent agreement /
                            registered office proof
                          </td>
                        </tr>
                        <tr>
                          <th className=" bg-(--bg-clr-card-highlight) w-4/12 text-start text-sm text-(--color-text-table-heading) py-2.5 px-3 border-b border-(--color-border-light)">
                            Contact Details
                          </th>
                          <td className="py-2.5 w-8/12 px-3 text-sm border-b border-(--color-border-light) bg-white text-text-primary">
                            Phone number, email ID, and address of founder /
                            manager / director / authorized person
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mt-5">
                  <h2 className="mb-4.5 text-(--color-accent)">
                    Important Terms and Conditions
                  </h2>
                  <div>
                    <ul className="doc-terms">
                      <li className="text-(--color-text-dark) ps-10.5 relative py-3.5 mb-1 text-sm border-b border-b-(--color-border-light) leading-[1.65]">
                        <p className="text-(--color-accent) mb-1 text-sm font-light!">
                          <strong>Documentation approval is mandatory</strong>
                        </p>
                        <p>
                          IndiaRentalz will deliver the equipment only after the
                          Documentation Process is completed and approved.
                          Submission of documents does not automatically
                          guarantee approval.
                        </p>
                      </li>
                      <li className="text-(--color-text-dark) ps-10.5 relative py-3.5 mb-1 text-sm border-b border-b-(--color-border-light) leading-[1.65]">
                        <p className="text-(--color-accent) mb-1 text-sm font-light!">
                          <strong>Additional documents may be requested</strong>
                        </p>
                        <p>
                          IndiaRentalz may request additional documents on a
                          case-to-case basis depending on rental value, device
                          category, order quantity, customer profile, delivery
                          location, rental duration, verification outcome and
                          internal risk policy. The customer will be informed
                          through call, WhatsApp, email, or SMS wherever
                          applicable.
                        </p>
                      </li>
                      <li className="text-(--color-text-dark) ps-10.5 relative py-3.5 mb-1 text-sm border-b border-b-(--color-border-light) leading-[1.65]">
                        <p className="text-(--color-accent) mb-1 text-sm font-light!">
                          <strong>Address verification may be conducted</strong>
                        </p>
                        <p>
                          IndiaRentalz or its authorized representative may
                          conduct physical or digital address verification
                          before delivery. This may include a visit to the
                          delivery location to ensure smooth and secure delivery
                          of the equipment.
                        </p>
                      </li>
                      <li className="text-(--color-text-dark) ps-10.5 relative py-3.5 mb-1 text-sm border-b border-b-(--color-border-light) leading-[1.65]">
                        <p className="text-(--color-accent) mb-1 text-sm font-light!">
                          <strong>
                            Temporary stay locations may not be accepted
                          </strong>
                        </p>
                        <p>
                          IndiaRentalz may not accept orders where the customer
                          is staying in temporary or non-verifiable
                          accommodation such as PG accommodation, hostels,
                          hotels, guest houses, short-stay rooms, or temporary
                          lodgings. Such locations may be considered high-risk
                          for rental equipment delivery.
                        </p>
                      </li>
                      <li className="text-(--color-text-dark) ps-10.5 relative py-3.5 mb-1 text-sm border-b border-b-(--color-border-light) leading-[1.65]">
                        <p className="text-(--color-accent) mb-1 text-sm font-light!">
                          <strong>
                            Non-submission of documents may lead to rejection
                          </strong>
                        </p>
                        <p>
                          Failure to submit required documents within the
                          requested time may lead to order rejection or
                          cancellation.
                        </p>
                      </li>
                      <li className="text-(--color-text-dark) ps-10.5 relative py-3.5 mb-1 text-sm border-b border-b-(--color-border-light) leading-[1.65]">
                        <p className="text-(--color-accent) mb-1 text-sm font-light!">
                          <strong>
                            IndiaRentalz reserves the right to cancel orders
                          </strong>
                        </p>
                        <p>
                          IndiaRentalz reserves the right to accept, reject,
                          hold, or cancel any rental order based on
                          documentation, field verification, internal policy,
                          payment status, device availability, or risk
                          assessment.
                        </p>
                      </li>
                      <li className="text-(--color-text-dark) ps-10.5 relative py-3.5 mb-1 text-sm border-b border-b-(--color-border-light) leading-[1.65]">
                        <p className="text-(--color-accent) mb-1 text-sm font-light!">
                          <strong>Refund in case of rejection</strong>
                        </p>
                        <p>
                          If the Documentation Process is not approved and the
                          order is cancelled by IndiaRentalz, any advance amount
                          paid by the customer will be refunded as per
                          IndiaRentalz delivery, cancellation, and refund
                          policy.
                        </p>
                      </li>
                      <li className="text-(--color-text-dark) ps-10.5 relative py-3.5 mb-1 text-sm border-b border-b-(--color-border-light) leading-[1.65]">
                        <p className="text-(--color-accent) mb-1 text-sm font-light!">
                          <strong>Documents must be valid and clear</strong>
                        </p>
                        <p>
                          All documents submitted should be valid, clear,
                          readable and authentic. IndiaRentalz may reject
                          blurred, expired, incomplete, mismatched, or doubtful
                          documents.
                        </p>
                      </li>
                      <li className="text-(--color-text-dark) ps-10.5 relative py-3.5 mb-1 text-sm leading-[1.65]">
                        <p className="text-(--color-accent) mb-1 text-sm font-light!">
                          <strong>
                            Delivery address must match approved verification
                          </strong>
                        </p>
                        <p>
                          Equipment will be delivered only to the approved
                          delivery address. Any change in delivery address may
                          require fresh verification and approval.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[linear-gradient(135deg,#fff0f1,#ffe2e5)] border border-(--color-delivery-border) rounded-2xl p-6 mt-6 text-center">
                  <h3 className=" mb-2  text-(--color-accent) font-roboto! font-bold">
                    Safe, Transparent & Reliable Rentals
                  </h3>
                  <p className=" text-text-muted leading-[1.7]">
                    The Documentation Process is designed to ensure a safe,
                    transparent and reliable rental experience for both
                    customers and IndiaRentalz. Our team will guide you through
                    the required documents based on your profile and rental
                    requirement.
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
