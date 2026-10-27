import Image from "next/image";
import aboutus from "@/../public/images/banner/about-us-side.jpg";
import "../css/aboutus.css";
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
                  src={aboutus}
                  alt={"aboutus"}
                />
              </div>
              <div className="w-full md:w-8/12 md:ps-4">
                <div className="card mb-7.5 py-6 px-6.5 card-linear-bg">
                  <h6 className="font-roboto! text-(--color-accent)">
                    Technology Without Ownership
                  </h6>
                  <h1 className=" text-[2.375rem] my-4 text-(--color-light-secondary) font-roboto!">
                    About IndiaRentalz
                  </h1>
                  <p className="text-(--color-light-primary)">
                    A technology access platform helping people and businesses
                    use the technology they need without the long-term burden of
                    ownership.
                  </p>
                </div>

                <div>
                  <h2 className="text-(--color-light-secondary) pb-2.5 mb-4 border-b-2 border-(--color-accent)">
                    Our Founding Story
                  </h2>

                  <p className="text-(--color-light-primary) mb-4">
                    The journey of <strong>IndiaRentalz</strong> began in{" "}
                    <strong>2000</strong>, when Mr. Sunny Bhatia was running a
                    small internet cyber station with just
                    <strong> 8 computers</strong>.
                  </p>

                  <p className="text-(--color-light-primary) mb-4">
                    At the time, cyber cafes were becoming intensely
                    competitive. Internet surfing rates were falling, and the
                    traditional cyber cafe model was becoming difficult to
                    sustain. During this phase, a customer walked in and asked
                    whether he could take a computer on rent for a short-term
                    project.
                  </p>

                  <div className="card my-5.5 border-l-4 border-l-(--color-accent)">
                    <p className="text-(--color-heading) text-sm font-medium">
                      That simple request revealed an idea that still defines
                      IndiaRentalz today:
                    </p>
                    <p className="text-(--color-light-primary) text-sm mt-1">
                      people often need the capability of technology, not the
                      burden of owning it.
                    </p>
                  </div>

                  <p className="text-(--color-light-primary) mb-4">
                    Mr. Bhatia rented out one computer from the cyber station.
                    Soon, more customers began asking for computers on rent, and
                    within a short time almost all the systems from the cyber
                    station were being used by customers for their own work and
                    projects.
                  </p>
                  <p className="text-(--color-light-primary) mb-4">
                    <strong>The insight was clear: </strong>
                      technology should be available when it is needed, for the
                      duration it is needed, without making ownership a
                      prerequisite.
                  </p>

                  <p className="text-(--color-light-primary) mb-4">
                    That idea led to the beginning of <strong>Sunsoft</strong> ,
                    built around giving customers access to computers and IT
                    equipment without the heavy upfront commitment of ownership.
                  </p>

                  <p className="text-(--color-light-primary) mb-4">
                    Over the years, Sunsoft grew from a local computer rental
                    business into a trusted IT equipment rental company serving
                    individuals, businesses, institutions and corporate
                    customers.
                  </p>

                  <p className="text-(--color-light-primary) mb-4">
                    As work became more mobile, digital and project-driven, the
                    need for flexible access to technology grew. The business
                    evolved into <strong>IndiaRentalz</strong> - a modern
                    technology access platform designed to support customers
                    across India.
                  </p>

                  <p className="text-(--color-light-primary) mb-4">
                    Today, with access to{" "}
                    <strong>10,000+ IT equipment units</strong> , including
                    laptops, desktops, MacBooks, workstations, printers,
                    servers, UPS systems, monitors and allied IT equipment,
                    IndiaRentalz helps customers choose and use the technology
                    they need without having to own every device they use.
                  </p>

                  <div className="card my-5.5 py-5.5 card-linear-bg">
                    <p className="text-[#6c5557] mt-1">
                      Our journey started with 8 computers.
                    </p>
                    <p className=" text-xl! text-(--color-light-secondary) font-bold mt-3">
                      Today, that same idea has become our brand promise:{" "}
                      <span className="text-(--color-accent)">
                        Technology Without Ownership.
                      </span>
                    </p>
                  </div>

                  <h2 className="text-(--color-light-secondary) pb-2.5 mb-4 border-b-2 border-(--color-accent)">
                    Who We Are
                  </h2>

                  <p className="text-(--color-light-primary) mb-4">
                    <strong>IndiaRentalz</strong> is a technology access
                    platform that enables individuals, businesses, startups,
                    corporates, institutions, events and training teams to use
                    the IT equipment they need without the long-term burden of
                    ownership.
                  </p>

                  <p className="text-(--color-light-primary) mb-4">
                    For us, <strong>Technology Without Ownership</strong> means
                    giving customers access to the right device, the right
                    configuration and the right quantity for the right duration.
                    Whether the requirement is one laptop, a temporary project
                    team, employee onboarding, a training lab, an event,
                    work-from-home users or a large enterprise deployment,
                    customers can use technology according to the requirement
                    rather than buy for every requirement.
                  </p>

                  <p className="text-(--color-light-primary) mb-4">
                    Our connected stock and service network allows us to support
                    rental requirements across multiple locations in India.
                    Depending on availability and order requirements, equipment
                    can be supplied from our warehouse, stock hubs or partner
                    network, and delivered to customer offices, event locations,
                    training centres or user addresses.
                  </p>

                  <p className="text-(--color-light-primary) mb-4">
                    Our role starts before the equipment is delivered. We help
                    customers select suitable configurations based on workload,
                    rental duration, budget and support expectations.
                  </p>

                  <p className="text-(--color-light-primary) mb-4">
                    When customers are unsure which device to choose, we
                    recommend practical options so they do not overspend on
                    unnecessary specifications or compromise on the performance
                    required for the job.
                  </p>

                  <div className="card my-8.5 p-6">
                    <h3 className="font-roboto! text-(--color-light-secondary) mb-5.5">
                      At IndiaRentalz, Technology Without Ownership is built
                      around:
                    </h3>

                    <div className=" grid grid-cols-1 sm:grid-cols-2 justify-between">
                      <ul className="md:ps-5 flex flex-col gap-3 list-disc marker:text-(--color-light-primary)">
                        <li className="text-(--color-light-primary) text-sm ">
                          Access to technology without heavy upfront investment
                        </li>
                        <li className="text-(--color-light-primary) text-sm ">
                          The right configuration for the actual workload
                        </li>
                        <li className="text-(--color-light-primary) text-sm ">
                          Flexible rental durations and scalable requirements
                        </li>
                        <li className="text-(--color-light-primary) text-sm ">
                          Quality-checked equipment
                        </li>
                      </ul>
                      <ul className="sm:ps-5 flex flex-col gap-3 pb-3 list-disc marker:text-(--color-light-primary)">
                        <li className="text-(--color-light-primary) text-sm ">
                          PAN India delivery support
                        </li>
                        <li className="text-(--color-light-primary) text-sm ">
                          Solutions for individuals, teams and enterprise
                          deployments
                        </li>
                        <li className="text-(--color-light-primary) text-sm ">
                          Employee onboarding, training, project and event
                          requirements
                        </li>
                        <li className="text-(--color-light-primary) text-sm ">
                          Rental-period service and support
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-(--color-light-primary) mb-4">
                    We are not simply a product rental company. We are a
                    technology access partner. Our purpose is to help customers
                    stay flexible, reduce capital tied up in equipment, scale
                    technology with business needs and focus on using technology
                    rather than owning it.
                  </p>

                  <div className=" grid grid-cols-1 lg:grid-cols-2 my-8.5 gap-3">
                    <div className="card p-6">
                      <h6 className="uppercase font-bold font-roboto! tracking-[1.2px] text-(--color-accent)">
                        Our Vision
                      </h6>
                      <h3 className="leading-normal mt-2 mb-3 text-(--color-light-secondary) font-roboto!">
                        Making technology access simpler
                      </h3>
                      <p className="text-(--color-light-primary) leading-[1.75]">
                        To become India most trusted and customer-friendly
                        technology access platform by making Technology Without
                        Ownership simple, transparent, reliable and accessible
                        across India.
                      </p>
                    </div>
                    <div className="card p-6">
                      <h6 className="uppercase font-bold font-roboto! tracking-[1.2px] text-(--color-accent)">
                        Our Mission
                      </h6>
                      <h3 className="leading-normal mt-2 mb-3 text-(--color-light-secondary) font-roboto!">
                        Removing ownership as a barrier
                      </h3>
                      <p className="text-(--color-light-primary) leading-[1.75] mb-3">
                        Our mission is to remove ownership as a barrier to
                        accessing the technology people and businesses need.
                      </p>
                      <p className="text-(--color-light-primary) leading-[1.75]">
                        We aim to provide the right equipment for the right
                        requirement and duration, helping customers reduce
                        upfront investment, scale as needs change and access
                        dependable support throughout the rental period.
                      </p>
                    </div>
                  </div>

                  <p className="text-(--color-light-primary) mb-4">
                    We are committed to helping customers make better technology
                    choices - avoiding both unnecessary over-specification and
                    inadequate performance - while creating a rental experience
                    that is flexible, responsive and trustworthy.
                  </p>

                  <div className="card p-6 text-center mt-7.5 card-linear-bg">
                    <h6 className=" uppercase font-bold font-roboto! tracking-[1.2px] text-(--color-accent)">
                      Our Brand Promise
                    </h6>
                    <h4 className=" text-[1.375rem]! leading-normal my-3 text-(--color-light-secondary) font-roboto!">
                      Use the technology you need. Keep the flexibility you
                      value.
                    </h4>
                    <p className=" text-xl! text-(--color-accent) font-bold">
                      Technology Without Ownership.
                    </p>
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

export default Page;
