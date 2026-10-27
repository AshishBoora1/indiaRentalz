import Image from "next/image";
import investorsrelationship from "@/../public/images/banner/investorsrelationship-side.jpg";
import "../css/investorsrelationship.css";
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
                  src={investorsrelationship}
                  alt={"investorsrelationship"}
                />
              </div>
              <div className="w-full md:w-8/12 md:ps-4">
                <div className="card mb-7.5 py-6 px-6.5 bg-[linear-gradient(135deg,#fff3f3,#ffe7e9)]">
                  <h6 className="font-roboto! text-(--color-light-accent)">
                    Technology Without Ownership
                  </h6>
                  <h1 className="my-4 text-(--color-accent) font-roboto!">
                    Investment Done Right
                  </h1>
                  <p className="text-text-muted">
                    With more than two decades of experience in IT equipment
                    rentals through our parent company, IndiaRentalz is building
                    a strong, scalable and customer-focused equipment rental
                    brand in India.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Our journey has been shaped by deep industry experience,
                    practical market understanding, strong asset management, and
                    a clear belief that businesses and individuals should be
                    able to access technology without heavy upfront investment.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz is committed to providing reliable IT equipment
                    rental solutions at competitive prices for individuals,
                    startups, small businesses, enterprises, institutions,
                    events and corporate teams across India.
                  </p>

                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    <strong> Our objective:</strong> To make renting laptops,
                    desktops, MacBooks, workstations, printers, servers,
                    monitors, UPS systems and other IT equipment simple,
                    transparent and dependable.
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    Built on Experience, Designed for Scale
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz is backed by years of real operating experience
                    in the IT rental industry. We understand the challenges of
                    inventory planning, device lifecycle management,
                    documentation, verification, logistics, support, recovery
                    and customer service.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    This experience gives us an advantage in building a rental
                    platform that is not only customer-friendly but also
                    operationally strong.
                  </p>
                  <div className=" grid grid-cols-1 xl:grid-cols-2 gap-3 my-3">
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Instant Quotation Support
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Faster response and structured commercial communication.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Clear Rental Plans
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Transparent commercial terms and tenure options.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        PAN India Delivery Support
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Scalable fulfilment across multiple locations.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Documentation Workflow
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Structured customer verification and risk checks.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Asset Lifecycle Management
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Tracking, deployment, return and redeployment
                        discipline.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Enterprise Rental Solutions
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Support for bulk, recurring and multi-location
                        requirements.
                      </p>
                    </div>
                  </div>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    The aim is to create a rental experience where customers can
                    choose the right equipment, understand the cost clearly, and
                    get dependable support throughout the rental period.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    A Bootstrapped Brand with Strong Foundations
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz is growing as a bootstrapped brand with strong
                    operational discipline and a long-term approach.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Over the years, the core team has continuously invested in:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Expanding rental inventory
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Adding new equipment categories
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Upgrading device configurations
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Building internal systems and processes
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Improving logistics and support capability
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Hiring and training team members
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Automating workflows
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Strengthening customer experience
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    This practical, step-by-step growth has helped IndiaRentalz
                    build credibility, financial discipline and operational
                    stability.
                  </p>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 my-3 text-(--color-text-dark)">
                    We believe sustainable growth comes from strong systems,
                    responsible capital allocation, customer trust and
                    consistent execution.
                  </div>
                </div>

                <div className="bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    Technology-Led Rental Platform
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz is not just a rental business. We are building
                    a technology-led rental platform.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Our internal technology engine is being developed to support
                    equipment rental operations at scale. The long-term vision
                    is to standardize and strengthen the complete rental
                    workflow — from product discovery and quotation to
                    documentation, billing, delivery, support, return, recovery
                    and reporting.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    In the future, this technology platform may also evolve into
                    a SaaS-style solution that can support other rental
                    companies, vendors or partners who want to manage similar
                    equipment rental operations in a structured and scalable
                    way.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    This gives IndiaRentalz an opportunity to grow beyond asset
                    rental and build a broader rental technology ecosystem.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    Open to Strategic Investment
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz is open to investment and strategic
                    partnerships that can support our next phase of growth.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    As the rental market becomes more competitive and demand for
                    flexible IT infrastructure continues to rise, timely capital
                    and strategic support can help us scale faster.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Investment can help IndiaRentalz expand in areas such as:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      New city expansion
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Additional rental inventory
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Enterprise customer acquisition
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Technology platform development
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Process automation
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Warehouse and stock hub expansion
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Sales and marketing growth
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Stronger service and support network
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      New product categories
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Partnership-led growth
                    </li>
                  </ul>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 my-3 text-(--color-text-dark)">
                    We are looking for partners who understand the long-term
                    opportunity in equipment rental and can bring more than just
                    capital.
                  </div>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    The Right Investment Partners
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    For IndiaRentalz, the right investor is not only someone who
                    provides funds, but someone who can add value through
                    experience, network, strategy, technology, governance or
                    market access.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We are open to working with:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Management and consulting firms
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      IT vendors and distributors
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Technology companies
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Asset financing partners
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Strategic investors
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Growth-focused business groups
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Rental ecosystem partners
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Enterprise solution providers
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Our preference is to partner with people and organizations
                    that bring complementary strengths and share our vision of
                    building a transparent, reliable and scalable rental
                    platform.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    Credibility Is Our Core Strength
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    In the rental business, credibility is everything.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Customers trust us with their urgent IT needs. Businesses
                    rely on us for employee onboarding, temporary projects,
                    training labs, events, remote teams and enterprise
                    deployments. At the same time, we manage high-value assets
                    that require discipline, documentation, tracking, support
                    and recovery systems.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Over the years, IndiaRentalz has built processes around:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Customer verification
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Documentation management
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Asset safety
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Inventory control
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Risk assessment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Support handling
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Payment follow-up
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Device return and inspection
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Rental lifecycle management
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Managing risk is one of the most important capabilities in
                    this business, and IndiaRentalz continues to strengthen this
                    area through processes, technology and trained teams.
                  </p>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    Preparing for the Future of IT Rentals
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Businesses today want flexibility. They want to reduce
                    capital expenditure, scale teams quickly, upgrade devices
                    when needed, and avoid the burden of owning depreciating
                    assets.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz is positioned to serve this shift.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Our rental solutions help customers access IT equipment
                    through pre-agreed monthly rental plans, clear tenure
                    options, and flexible upgrade or return choices.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We aim to support customers who want:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Lower upfront investment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Predictable monthly cost
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Scalable device deployment
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Better asset flexibility
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Faster team onboarding
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Short-term and long-term rental options
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-2">
                      Support during the rental period
                    </li>
                  </ul>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    This makes IndiaRentalz relevant for startups, corporates,
                    BPOs, IT companies, training institutes, event companies,
                    freelancers, students and remote teams.
                  </p>
                </div>

                <div className="bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    Our Commitment
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz is committed to building a strong, stable and
                    future-ready rental brand.
                  </p>
                  <div className=" grid grid-cols-1 xl:grid-cols-2 gap-3 my-3">
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Transparency
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Clear communication and commercial visibility.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Trust
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Long-term customer and partner relationships.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Service Quality
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Dependable rental-period support.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Operational Discipline
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Process-led asset and risk management.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Responsible Growth
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Disciplined expansion and capital allocation.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Technology-Driven Systems
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Automation, visibility and scalable operations.
                      </p>
                    </div>
                  </div>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We believe the future of IT equipment consumption is moving
                    towards rental, subscription and flexible access models.
                    IndiaRentalz is building itself to become a leading player
                    in this transformation.
                  </p>
                </div>

                <div className="bg-[linear-gradient(135deg,#fff0f1,#ffe2e5)] border border-(--color-delivery-border) rounded-2xl p-6 mt-6 text-center">
                  <h3 className=" mb-2 text-(--color-accent) font-bold">
                    Building the Future of Flexible Technology Access
                  </h3>
                  <p className=" text-text-muted leading-[1.7]">
                    IndiaRentalz is committed to building a trusted, financially
                    disciplined and technology-led rental brand for the Indian
                    market. For us, the right partner brings more than capital —
                    they bring experience, network, strategic value and belief
                    in the future of flexible IT equipment access.
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
