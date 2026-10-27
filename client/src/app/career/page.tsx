import Image from "next/image";
import career from "@/../public/images/banner/about-us.png";
import "../css/career.css";
import "../css/commonpolicypages.css";
import Link from "next/link";
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
                  src={career}
                  alt={"career"}
                />
              </div>
              <div className="w-full md:w-8/12 md:ps-4">
                <div className="card mb-7.5 py-6 px-6.5 bg-[linear-gradient(135deg,#fff3f3,#ffe7e9)]">
                  <h6 className="font-roboto! text-(--color-light-accent)">
                    Technology Without Ownership
                  </h6>
                  <h1 className="my-4 text-(--color-accent) font-roboto!">
                    Careers at IndiaRentalz
                  </h1>
                  <p className="text-text-muted leading-[1.65]">
                    People are the heartbeat of IndiaRentalz. Our growth depends
                    on the energy, ownership, ideas and commitment of our team.
                    We believe a strong company is built by people who are
                    encouraged to learn, take responsibility, solve problems and
                    grow with the organization.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    At IndiaRentalz, we work every day to create a workplace
                    where people feel trusted, respected, empowered and
                    motivated to do their best work.
                  </p>

                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-light-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    We are building a culture where team members are encouraged
                    to think, question, improve, collaborate and take
                    initiative.
                  </div>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">Our Culture</h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    At IndiaRentalz, our culture is built around openness,
                    responsibility, learning and teamwork.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    We believe in clear communication, honest feedback,
                    practical problem-solving and continuous improvement. Our
                    team members are encouraged to take ownership of their roles
                    and contribute ideas that can improve customer experience,
                    internal processes, technology, operations and business
                    growth.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    We want our people to feel confident in challenging old ways
                    of working, suggesting better solutions and expanding their
                    capabilities.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    IndiaRentalz is a growing company, and growth brings
                    opportunities. As the company expands, we want our people to
                    grow with it — in skills, responsibility, leadership and
                    career direction.
                  </p>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-3">
                  <h2 className=" mb-2 text-(--color-accent) font-bold">
                    Our Values
                  </h2>
                  <div className=" grid grid-cols-1 xl:grid-cols-2 gap-3">
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Keep Things Simple
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        We believe in keeping work clear, practical and
                        result-oriented. This means improving continuously,
                        avoiding unnecessary complications, communicating
                        clearly and focusing on what truly helps customers and
                        the business.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Stay Curious and Deliver Better
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Curiosity helps us improve. We encourage our team to ask
                        questions, explore better ways of working, learn new
                        tools and find practical solutions across sales,
                        operations, inventory, support, accounts and technology.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Take Initiative Without Fear
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        We believe people should not be afraid to try, improve
                        and take responsibility. Honest effort, clear intention
                        and learning from experience are valued. We encourage
                        our team to suggest ideas and act with ownership.
                      </p>
                    </div>
                    <div className="bg-(--bg-card-bg) border border-(--color-delivery-border) rounded-[10px] py-3.5 px-4">
                      <p className="text-(--color-accent) mb-1.5 font-medium">
                        Work as One Team
                      </p>
                      <p className=" text-sm! text-(--color-text-paragraph)">
                        Sales, documentation, accounts, inventory, dispatch,
                        support, logistics and management must work together to
                        deliver a smooth rental experience. We believe in
                        solving problems without blame and improving systems
                        together.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    Where Potential Is Fulfilled
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz supports people who want to learn, perform and
                    grow.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    We aim to help every team member achieve their potential
                    through:
                  </p>
                  <ul className=" list-disc marker:text-(--color-text-dark) ps-5 mt-2">
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      On-the-job learning
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Mentoring and guidance
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Role clarity
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Performance feedback
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Training and development
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7] mb-1">
                      Career growth opportunities
                    </li>
                    <li className=" text-(--color-text-dark) leading-[1.7]">
                      Exposure to real business challenges
                    </li>
                  </ul>
                  <div className=" bg-(--color-delivery-highlight) border-l-4 border-l-(--color-light-accent) rounded-lg py-3.5 px-4 mt-3 text-(--color-text-dark)">
                    As the company grows, new roles and leadership opportunities
                    will continue to open for people who show ownership,
                    discipline, learning ability and commitment.
                  </div>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-3">
                  <h2 className=" mb-2 text-(--color-accent) font-bold">
                    Rewards and Workplace Experience
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    Our goal is to create an environment where people can do
                    meaningful work and grow with confidence.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    IndiaRentalz believes in fairness, performance-based growth
                    and equal opportunity. We continuously work towards building
                    a workplace that is supportive, practical, flexible where
                    possible, and focused on learning.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-2">
                    We value people who are sincere, responsible,
                    customer-focused and willing to improve.
                  </p>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    At IndiaRentalz, rewards are not limited to salary alone. We
                    believe in recognizing contribution, giving responsibility,
                    supporting development and creating opportunities for
                    long-term growth.
                  </p>
                </div>

                <div className=" bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-5">
                  <h2 className=" mb-2 text-(--color-accent)">
                    Current Openings
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7] mb-4">
                    We are currently hiring for the following roles:
                  </p>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className=" bg-(--bg-clr-card) border-b border-b-(--color-table-border-bottom) text-(--color-accent) font-semibold py-3 px-3.5 text-sm text-left">
                          Position
                        </th>
                        <th className=" bg-(--bg-clr-card) border-b border-b-(--color-table-border-bottom) text-(--color-accent) font-semibold py-3 px-3.5 text-sm text-left">
                          Openings
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className=" border-b border-b-(--color-table-border-bottom) px-3.5 py-3 text-text-primary text-sm text-left">
                          Inventory Specialist
                        </td>
                        <td className=" border-b border-b-(--color-table-border-bottom) px-3.5 py-3 text-text-primary text-sm text-left">
                          1
                        </td>
                      </tr>
                      <tr>
                        <td className=" border-b border-b-(--color-table-border-bottom) px-3.5 py-3 text-text-primary text-sm text-left">
                          Sales Executive
                        </td>
                        <td className=" border-b border-b-(--color-table-border-bottom) px-3.5 py-3 text-text-primary text-sm text-left">
                          1
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3.5 py-3 text-text-primary text-sm text-left">
                          Technical Engineer
                        </td>
                        <td className="px-3.5 py-3 text-text-primary text-sm text-left">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className=" bg-white border border-(--color-delivery-border) rounded-[14px] py-5.5 px-6 mb-3">
                  <h2 className=" mb-2 text-(--color-accent) font-bold">
                    Our Hiring Process
                  </h2>
                  <p className=" text-(--color-text-dark) leading-[1.7]">
                    Our hiring process is simple and transparent:
                  </p>
                  <div className=" flex items-center gap-3 flex-wrap mt-3.5">
                    <span className="max-sm:w-full text-center bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-full py-2 px-5 font-semibold text-(--color-btn-text-dark) text-sm">
                      Application
                    </span>
                    <span className="text-(--color-light-accent) font-bold max-sm:hidden">→</span>
                    <span className="max-sm:w-full text-center bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-full py-2 px-5 font-semibold text-(--color-btn-text-dark) text-sm">
                      Interview
                    </span>
                    <span className="text-(--color-light-accent) font-bold max-sm:hidden">→</span>
                    <span className="max-sm:w-full text-center bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-full py-2 px-5 font-semibold text-(--color-btn-text-dark) text-sm">
                      Assessment
                    </span>
                    <span className="text-(--color-light-accent) font-bold max-sm:hidden">→</span>
                    <span className="max-sm:w-full text-center bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-full py-2 px-5 font-semibold text-(--color-btn-text-dark) text-sm">
                      Offer
                    </span>
                    <span className="text-(--color-light-accent) font-bold max-sm:hidden">→</span>
                    <span className="max-sm:w-full text-center bg-(--bg-clr-card) border border-(--color-delivery-border) rounded-full py-2 px-5 font-semibold text-(--color-btn-text-dark) text-sm">
                      Welcome to IndiaRentalz
                    </span>
                  </div>
                  <p className=" text-(--color-text-dark) leading-[1.7] mt-4">
                    Depending on the role, candidates may be asked to complete a
                    practical assessment, technical discussion or role-based
                    task.
                  </p>
                </div>

                <div className="bg-[linear-gradient(135deg,#fff0f1,#ffe2e5)] border border-(--color-delivery-border) rounded-2xl p-6 mt-6 text-center">
                  <h3 className=" mb-2 text-(--color-accent) font-bold">
                    Want to Work With Us?
                  </h3>
                  <p className=" text-text-muted leading-[1.7] mb-5 lg:mb-3">
                    If you do not find a suitable opening but are interested in
                    working with IndiaRentalz, we would still like to hear from
                    you.
                  </p>
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@indiarentalz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-sm:w-full inline-block py-3 px-6 text-white bg-(--color-light-accent) rounded-md font-semibold text-base text-center"
                  >
                    Send Your CV to hr@indiarentalz.com
                  </Link>
                  <p className=" text-text-muted leading-[1.7] mt-5 lg:mt-3">
                    Join IndiaRentalz and be part of a growing company that is
                    making IT equipment rental simple, flexible and accessible
                    across India. growth.
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
