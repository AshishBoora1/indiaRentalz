import Image from "next/image";
import termsofservices from "@/../public/images/banner/about-us.png";
import "../css/privacypolicy.css";
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
                  <h1 className="my-4 text-(--color-accent) font-roboto!">
                    Privacy Policy
                  </h1>
                  <p className="text-text-muted">
                    At IndiaRentalz, we respect your privacy and are committed
                    to protecting the personal information you share with us.
                    This Privacy Policy explains what information we collect,
                    how we use it, how we protect it, and your choices regarding
                    your personal data.
                  </p>
                </div>

                <div className=" bg-(--color-bg-light-yellow) border border-(--color-yellow-divider) border-l-4 border-l-(--color-border-light-yellow) rounded-[10px] py-3.5 px-4 mt-3 mb-5.5 text-(--color-text-dark-yellow) leading-[1.65]">
                  This policy applies to information collected through our
                  website www.indiarentalz.com, customer support channels, order
                  forms, documentation process, payment process, delivery
                  process, and any other interaction with IndiaRentalz. By using
                  our website or services, you agree to the terms of this
                  Privacy Policy.
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    1. Information We Collect
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    When you visit our website, place an order, request a
                    quotation, rent equipment, contact support, or complete the
                    documentation process, we may collect the following
                    information:
                  </p>

                  <div>
                    <h5 className=" text-base! mt-3.5 mb-2 font-roboto! text-(--color-accent)">
                      Personal Information
                    </h5>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Name
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Mobile number
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Email address
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Billing address
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Delivery address
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Identity proof details
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Address proof details
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        PAN details, where required
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Company or business details
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        GST details, where applicable
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Bank statement or financial verification documents,
                        where required for rental approval
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Reference details, where required Identity proof details
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                        Communication records with our team
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className=" text-base! mt-3.5 mb-2 font-roboto! text-(--color-accent)">
                      Order and Rental Information
                    </h5>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Products rented or requested
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Rental duration
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Payment details
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Security deposit details
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Delivery and pickup details
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Support tickets
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Device handover records
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Return and inspection records
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                        Agreement and documentation status
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className=" text-base! mt-3.5 mb-2 font-roboto! text-(--color-accent)">
                      Technical Information
                    </h5>
                    <ul className=" list-disc marker:text-(--color-text-dark) ps-5">
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        IP address
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Browser type
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Device type
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Operating system
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Pages visited
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Referring website
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Time spent on pages
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                        Cookies and session information
                      </li>
                      <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                        Cart and browsing activity
                      </li>
                    </ul>
                  </div>

                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    This helps us improve website performance, customer
                    experience, security, and marketing effectiveness.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    2. How We Use Your Information
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz may use your information for the following
                    purposes:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To process rental orders
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To verify customer identity and address
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To complete the Documentation Process
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To assess rental eligibility and risk
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To arrange delivery, pickup, return, and replacement
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To process payments, deposits, refunds, and invoices
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To communicate order updates and support information
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To provide customer service and technical support
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To send quotations, reminders, rental extension notices,
                      and return updates
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To improve our website, products, services, and customer
                      experience
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To prevent fraud, misuse, unauthorized rentals, or policy
                      violations
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      To comply with legal, regulatory, tax, accounting, and
                      contractual obligations
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7]">
                      To send promotional offers, product updates, or marketing
                      communication, where permitted
                    </li>
                  </ul>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    3. Consent
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    When you provide personal information to IndiaRentalz for
                    placing an order, completing documentation, making payment,
                    arranging delivery, requesting return, or using our
                    services, you consent to the collection and use of that
                    information for the purpose of providing our rental
                    services.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    If we ask for your information for any secondary purpose,
                    such as marketing communication, we will either ask for your
                    consent or provide you with an option to opt out.
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    You may withdraw your consent for marketing communication or
                    certain non-essential communication at any time by
                    contacting us at support@indiarentalz.com. Withdrawal of
                    consent may affect our ability to process rental orders,
                    verify documentation, deliver equipment, provide support, or
                    comply with legal requirements.
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    4. Disclosure of Information
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz does not sell your personal information.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We may share or disclose your information only when required
                    for legitimate business, service, legal, or operational
                    purposes, including:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      With payment gateway providers for payment processing
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      With logistics and courier partners for delivery and
                      pickup
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      With verification agencies or field verification
                      executives
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      With service partners for support, repair, or replacement
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      With legal, accounting, tax, or compliance advisors
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      With law enforcement, government authorities, courts, or
                      regulators, if required by law
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      With business partners or vendors who help us provide
                      services
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      When required to enforce our rental agreement, terms of
                      service, or recover equipment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      When necessary to protect IndiaRentalz, its customers,
                      assets, or legal rights
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We may also disclose information if you violate our terms of
                    service, rental agreement, documentation policy, or
                    applicable law.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    5. Data Storage and Protection
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Your information may be stored in our website systems,
                    databases, CRM, order management systems, documentation
                    systems, payment records, support systems, and other secure
                    business applications used by IndiaRentalz.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We take reasonable precautions and follow industry-accepted
                    practices to protect your personal information from
                    unauthorized access, loss, misuse, disclosure, alteration,
                    or destruction.
                  </p>
                  <div className=" grid grid-cols-1 xl:grid-cols-2 gap-3 my-3">
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Secure Systems
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Secure servers, firewalls and system-level protection.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Access Control
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Restricted access to sensitive information and internal
                        process controls.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Encrypted Communication
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Encrypted communication where applicable.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Monitoring
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Regular monitoring and review of systems and processes.
                      </p>
                    </div>
                  </div>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    Although we take reasonable steps to protect your
                    information, no method of internet transmission or
                    electronic storage is completely secure. Therefore, we
                    cannot guarantee absolute security.
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    6. Payment Information
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz may use third-party payment gateways or payment
                    service providers to process payments.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    When you make a payment through a payment gateway, your
                    payment information may be collected and processed directly
                    by the payment service provider. Such providers may store
                    and process payment details as per their own privacy
                    policies and security standards.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Payment information may be encrypted and processed in
                    accordance with applicable payment security standards,
                    including PCI-DSS, wherever applicable.
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 my-3 text-(--color-text-dark)">
                    IndiaRentalz does not store complete credit card, debit
                    card, UPI PIN, net banking password, or similar sensitive
                    payment authentication details on its own systems.
                  </div>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Transaction records may be retained for accounting,
                    taxation, refund, reconciliation, legal, and compliance
                    purposes.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    7. Third-Party Services
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We may use third-party service providers to support our
                    business operations. These may include:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Payment gateways
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Courier and logistics partners
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      CRM and communication tools
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Email and SMS service providers
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      WhatsApp communication tools
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Verification agencies
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Analytics and marketing tools
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Cloud hosting providers
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Support and service partners
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    These third-party providers may collect, use, process, or
                    store your information only to the extent required to
                    provide their services to IndiaRentalz.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Some service providers may operate from different locations
                    or jurisdictions. In such cases, your information may be
                    subject to the laws of those jurisdictions.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We recommend that you review the privacy policies of payment
                    gateways and other third-party platforms used during your
                    transaction.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    8. Website Links
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Our website may contain links to third-party websites,
                    payment gateways, partner websites, social media pages, or
                    external platforms.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Once you leave the IndiaRentalz website, we are not
                    responsible for the privacy practices, content, security, or
                    policies of those external websites.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We encourage you to read the privacy policies of any
                    third-party websites you visit.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    9. Cookies and Tracking Technologies
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz may use cookies and similar technologies to
                    improve website functionality, user experience, analytics,
                    and marketing.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Cookies may help us:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Maintain your website session
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Remember cart details
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Understand website traffic
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Track page visits
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Improve website performance
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Measure marketing campaigns
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Recognize returning visitors
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Improve product recommendations and user experience
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Cookies may include session cookies, unique tokens,
                    storefront cookies, analytics cookies, and other similar
                    technologies.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    You may disable cookies through your browser settings.
                    However, disabling cookies may affect website functionality,
                    cart usage, login access, and overall browsing experience.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    10. Marketing Communication
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    With your consent or as permitted by applicable law,
                    IndiaRentalz may send you communication related to:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Offers
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      New products
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Rental plans
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Service updates
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Enterprise solutions
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Renewal reminders
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Return reminders
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Promotional campaigns
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Customer feedback requests
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    You may opt out of promotional emails or marketing
                    communication by contacting us at{" "}
                    <strong>support@indiarentalz.com</strong>.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Operational communication related to active orders,
                    payments, documentation, delivery, return, support, or legal
                    matters may still be sent even if you opt out of marketing
                    communication.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    11. Age of Consent
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    By using this website, you confirm that you are legally
                    eligible to enter into a rental transaction.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    If you are using this website on behalf of a minor,
                    organization, company, institution, or any other entity, you
                    confirm that you have the authority to provide information
                    and consent on their behalf.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz may require guardian or parent details for
                    student rentals, minor-related requirements, or certain
                    high-value rentals.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    12. Data Retention
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz may retain your personal information, order
                    details, documentation records, payment records,
                    communication history, and rental records for as long as
                    required for:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Active rental services
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Customer support
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Accounting and taxation
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Legal compliance
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Dispute resolution
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Fraud prevention
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Equipment recovery
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Business records
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Regulatory requirements
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Once the information is no longer required, we may delete,
                    anonymize, archive, or securely store it as per our internal
                    policies and applicable laws.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    13. Your Rights and Choices
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    You may contact IndiaRentalz to:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Access your personal information
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Correct or update your information
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Request deletion of certain personal information
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Withdraw consent for marketing communication
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Raise a privacy-related concern
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Ask questions about how your information is used
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Requests may be subject to identity verification, legal
                    requirements, active rental obligations, pending payments,
                    dispute status, or regulatory retention requirements.
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    For privacy-related requests, contact:{" "}
                    <strong>support@indiarentalz.com</strong>
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    14. Security of Rental and Documentation Data
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    As IndiaRentalz provides equipment on rent, certain
                    information may be required for verification, asset safety,
                    fraud prevention, and recovery of rented equipment.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Documentation details, address verification details,
                    business proof, and customer records may be used to:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Approve or reject rental requests
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Verify customer identity and delivery address
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Prevent misuse or unauthorized rental
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Support recovery in case of default
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Comply with legal and contractual obligations
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Protect IndiaRentalz assets and customer interests
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz handles such information with reasonable care
                    and restricted access.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    15. Changes to This Privacy Policy
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz reserves the right to update or modify this
                    Privacy Policy at any time.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Any changes will be effective immediately once posted on the
                    website. We encourage users to review this page
                    periodically.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    If we make material changes to this policy, we may notify
                    users through the website, email, or other suitable
                    communication methods.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    If IndiaRentalz or its website is acquired, merged,
                    restructured, or transferred to another entity, customer
                    information may be transferred as part of the business
                    transaction, subject to applicable law.
                  </p>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h4 className=" mb-2 text-(--color-accent) font-roboto! text-xl!">
                    16. Contact Information
                  </h4>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    For any questions, complaints, corrections, deletion
                    requests, or privacy-related concerns, you may contact us
                    at:
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 my-3 text-(--color-text-dark)">
                    <p>
                      <strong>IndiaRentalz Privacy Support</strong>
                    </p>
                    <p>Email: support@indiarentalz.com</p>
                  </div>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We will make reasonable efforts to address your request in
                    accordance with applicable laws and internal policies.
                  </p>
                </div>

                <div className="bg-[linear-gradient(135deg,#fff0f1,#ffe2e5)] border border-(--color-delivery-border) rounded-2xl p-6 mt-6 text-center">
                  <h3 className=" mb-2 text-(--color-accent) font-roboto! font-bold">
                    Your Trust Matters
                  </h3>
                  <p className=" text-text-muted leading-[1.7]">
                    IndiaRentalz values your trust. We collect and use customer
                    information only to provide a safe, reliable, and
                    transparent IT equipment rental experience.
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
