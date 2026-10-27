"use client";
import Link from "next/link";
import "../css/locationproducts.css";
import { faqs, products } from "../data/DummyData";
import ProductCard from "../templates/ProductCard";
import productImage from "@/../public/images/home/product-image.webp";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq((currentId) => (currentId === id ? null : id));
  };

  return (
    <main>
      <section>
        <div className=" container">
          <h1 className=" mb-2 mt-10 text-text-primary text-center text-4xl md:text-[2.5rem] max-md:leading-[1.3]">
            Affordable Laptop on Rent in Gurgaon: Boost Your Work Performance
          </h1>
          <div>
            <div className="mb-3 py-6 grid-cols-2 gap-4 md:grid md:grid-cols-3 lg:grid-cols-4">
              {products.map((product, index) => (
                <div key={index}>
                  <ProductCard
                    image={productImage}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    deliveryText={product.deliveryText}
                    badge={product.badge}
                  />
                </div>
              ))}
            </div>
            <div className=" text-center">
              <Link
                className=" btn-primary inline-block px-12 py-3 text-base"
                href={"/shop"}
              >
                Expore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-12 location-content-parent">
          <div className="container">
            <p>
              Many people today who own a business online and even offline rely
              on laptops to execute their operations. Even people working from
              home or students learning online do need laptops for obvious
              reasons. However, if purchasing one isn’t what you are looking
              for, then you can get a laptop on rent in Gurgaon from India
              Rentalz.
            </p>
            <p>
              India Rentalz is an online website where you can get your hands on
              laptops with the high end configurations as per your requirements.
              Not just businesses, we strive to render assistance to individuals
              working from home or working on a project for a fixed period of
              time.
            </p>
            <p>
              Additionally, explore our wide range of laptops on rent in Noida,
              which guarantees excellent performance tailored to your specific
              needs.
            </p>
            <p>
              Be it for your personal or professional use, our wide range of
              laptops will provide you the freedom to find the best-suited
              laptop. Renting a laptop has become a new cool these days because
              of the various benefits this service brings along. Firstly, you
              will be saving a good amount upon renting a laptop rather than
              buying one.
            </p>
            <p>
              Secondly, we at India Rentalz cover maintenance and technical
              malfunctions, so you won’t have to sweat for updates and other
              expenses. The best part is that when you choose our services
              online, you can rent laptops for as short as a day and can extend
              up to a year easily.
            </p>
            <p>
              You can avail the additional advantage of renting the laptop for
              longer durations, how? We offer impressive discounts on longer
              rental durations. For example: If your laptop rental duration is
              more than 6 months, then you can get a laptop starting from 1000
              INR/month. Isn’t that interesting? Wait, there’s more.
            </p>
            <p>
              For big enterprises or companies looking to rent laptops in bulk,
              we have exclusive offers for you as well. Reach out to our team
              and brief your current and future requirements to get the best
              rental quotation, maintenance support, optional future upgrades,
              and free delivery at your doorstep. So, wait no more and check out
              our basic to high-end laptops such as Apple MAC, Lenovo, Dell, HP,
              Asus, Acer, and more.
            </p>

            <div className=" text-center pt-4">
              <Link
                className=" btn-primary inline-block px-12 py-3 text-base"
                href={"/shop"}
              >
                RENT NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="location-content-parent">
          <div className="container ">
            <h2 className=" mb-9 mt-4 text-text-primary text-center">
              What our Customers are Saying
            </h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className=" rounded-xl p-4 border border-[#0000002d]">
                <p className=" font-poppins text-text-primary text-base italic font-normal!">
                  <strong className=" font-semibold not-italic">Tanvi Mehta Says,</strong>{" "}
                  {`" Being a student in engineering 1st year, affording a laptop was not feasible for me. After checking the website I finally chose a laptop and rented it at a minimal price for 2 months."`}
                </p>
              </div>
              <div className=" rounded-xl p-4 border border-[#0000002d]">
                <p className=" font-poppins text-text-primary text-base italic font-normal!">
                  <strong className=" font-semibold not-italic">
                    Rakesh Chawla Says,
                  </strong>{" "}
                  {`" My sister recommended this website and every year I rent a laptop for 6 months for my online projects. Highly recommended."`}
                </p>
              </div>
              <div className=" rounded-xl p-4 border border-[#0000002d]">
                <p className=" font-poppins text-text-primary text-base italic font-normal!">
                  <strong className=" font-semibold not-italic">Vicky Sharma Says,</strong>{" "}
                  {`"I love operating updated
                  laptops but cannot afford new laptops. So, I ve been using
                  India Rentalz and enjoying their latest configuration
                  laptops."`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="location-content-parent">
          <div className="container ">
            <h2 className=" mb-2 mt-11 text-text-primary text-center">FAQs</h2>
            <div>
              {faqs.map((faq, index) => {
                const faqId = index;
                const isOpen = openFaq === faqId;

                return (
                  <div
                    key={faqId}
                    className=" border-b-2 border-b-[#d9d9d9] transition-all duration-300 ease-in-out"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faqId)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faqId}`}
                      className="w-full cursor-pointer py-4 px-2 flex items-center justify-between gap-4 text-left"
                    >
                      <h5 className="text-brand-dark leading-[1.45]">
                        {faq.question}
                      </h5>

                      <span className="text-[#e4c8c8]">
                        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${faqId}`}
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div
                          className="text-base font-poppins text-text-primary pb-4 px-4"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-12 location-content-parent">
          <div className="container ">
            <h2 className=" mb-7.5 md:mt-6 text-text-primary text-center">
              Getting Laptops to Rent in Gurgaon Made Easy with Industry
              Leading: India Rentalz
            </h2>
            <p>
              Earlier, getting laptop rental services was not a thing. A lot of
              stress was created for individuals, start-ups, or huge enterprises
              upon having to invest money in laptop purchases.
            </p>
            <p>
              Well, not anymore! India Rentalz is a one-of-a-kind website where
              you can choose any laptop online and check the detailed
              specifications. Moreover, you can compare performance and best use
              based on your needs.
            </p>
            <p>
              Individuals or organisations residing outside of Gurgaon can also
              get a laptop on rent in Delhi.
            </p>
            <p>
              We also allow our hirer to review the actual images and videos of
              chosen laptops uploaded on the website. We have a wide collection
              of high-quality laptops all loaded with the latest OS, office, and
              other software required to enhance your working experience with
              our rental laptops.
            </p>
            <p>
              So, stop stressing over your budget and get actual deals with
              India Rentalz. Wondering if rental charges are high for longer
              rental duration? Well, you would be impressed to acknowledge that
              the longer the rental duration will be, the cheaper the rental
              charge will be.
            </p>
            <p>
              If you wish to rent a laptop for 6 or more months, you will save
              20-25% more as compared to a rental duration of 15 days or a
              month.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="location-content-parent">
          <div className="container ">
            <h2 className="mb-7.5 md:mt-6 text-text-primary text-center">
              One Stop Rental Solution for Laptop on Rent in Gurgaon
            </h2>
            <p>
              Gone are the days when getting a laptop on rent in Gurgaon was an
              uphill battle. No need to get indulged in those long-term
              contracts and N numbers of formalities that earlier were
              inevitable.
            </p>
            <p>
              With India Rentalz, you can enjoy laptop rental services for a
              week, a month, 6 months, or a year. It all depends upon your
              choice. Yes, you heard that right.
            </p>
            <p>
              We offer flexibility in various aspects to our customers. To
              elaborate, if you choose to rent a laptop for 6 months, you won’t
              need to pay rental charges for 6 months in one go, rather, you can
              pay month on month. We intend to keep you burden-free when
              availing our services.
            </p>
            <p>
              You may even submit an application for a deposit waiver, which is
              approved based on the verification of your documentation. Also, at
              the time of payment, you will get an option of paying rental
              charges online or you can even pay after getting your order
              confirmation.
            </p>
            <p>
              So, hurry up, and choose India Rentas today for your rental needs.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-12 location-content-parent">
          <div className="container ">
            <h2 className="mb-7.5 md:mt-6 text-text-primary text-center">
              Single Or Multiple Laptops on Rent: 24*7 Assistance from India
              Rentalz
            </h2>
            <p>
              Are you still wondering how to get a laptop for rent in Gurugram?
              Well, once you browse our website, it won’t be a brain-storming
              task anymore.
            </p>
            <p>
              With step-by-step guidance given on our website, you can easily
              find the desired laptop and order it with ease through our online
              payment. Be rest assured of a secured online payment mode.
            </p>
            <p>
              If you still get stuck while carrying out the online ordering
              process, you can reach out to our helpdesk or WhatsApp us at
              9738030303 and our team will be happy to assist you.
            </p>
            <p>
              We have a vision to help students in completing their assignments
              on time, without compulsorily purchasing a laptop. The best part
              is, that you won’t be even burning a hole in your pocket to rent a
              laptop for any rental duration.
            </p>
            <p>
              We have the most competitive prices across the vertical and make
              sure to offer the optimal quality services that our clients look
              forward to. So, place your order today and get a doorstep
              delivery.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className=" pb-12 location-content-parent">
          <div className="container ">
            <h2 className="mb-7.5 md:mt-6 text-text-primary text-center">
              Know Why India Rentalz is the No. 1 Choice for Renting Laptops
              Online
            </h2>
            <p>
              India Rentalz is the most preferred choice for individuals,
              start-ups, and businesses when it comes to renting a laptop in
              Gurgaon.
            </p>
            <p>
              We have been making rounds in this vertical for 23 years and made
              sure to deliver more than expected to our clientele. Our extensive
              clientele is the reciprocation of the quality services we have
              been providing.
            </p>
            <p>
              Be it the good condition of our laptops to our unparalleled
              doorstep delivery services, we excel in each service that we
              offer.
            </p>
            <p>
              We have you covered for everything from resolving any technical
              issues to having the laptop delivered, upgraded, or replaced, and
              devices installed wherever you want.
            </p>
            <p>
              You can contact our team via a variety of channels, including
              direct IVR call support, WhatsApp chat support, and online support
              systems, and we will be at your service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
