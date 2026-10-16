"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Link from "next/link";
import "./css/landingpage.css";
import headerImage from "@/../public/images/home/header-img1.jpg";
import headerImage2 from "@/../public/images/home/header-img2.jpg";
import headerImage3 from "@/../public/images/home/header-img3.jpg";
import productImage from "@/../public/images/home/product-image.webp";
import categoriesLaptopImage from "@/../public/images/home/categories-laptop-image.png";
import contentWithImage from "@/../public/images/home/content-with-image.png";
import bulletIcon from "@/../public/images/home/bulleticon.png";
import ProductSection from "./components/sections/ProductSection";
import ContentWithImage from "./components/sections/ContentWithImage";
import BannerSection from "./components/sections/BannerSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import { categoryList, products } from "./data/DummyData";

export default function Home() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <main>
      <section>
        <div className="w-full overflow-hidden">
          <div className="container-fluid mt-6 mb-12">
            <Slider {...settings}>
              <Link href="#">
                <Image
                  className="max-h-178.25 object-cover h-full w-full rounded-2xl"
                  src={headerImage}
                  alt="Header Banner 1"
                  priority
                />
              </Link>
              <Link href="#">
                <Image
                  className="max-h-178.25 object-cover h-full w-full rounded-2xl"
                  src={headerImage2}
                  alt="Header Banner 2"
                  priority
                />
              </Link>
              <Link href="#">
                <Image
                  className="max-h-178.25 object-cover h-full w-full rounded-2xl"
                  src={headerImage3}
                  alt="Header Banner 3"
                  priority
                />
              </Link>
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="items-info text-center">
            <h2>Find the Right Technology for Every Requirement</h2>
            <p className="text-base font-bold capitalize tracking-normal text-text-primary">
              Explore laptops, MacBooks, desktops, workstations and enterprise
              IT equipment available on flexible rental plans.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {categoryList.map((category) => (
              <div className="px-1.5" key={category.categories}>
                <Link
                  href={`/shop/${category.categories}`}
                  className="mx-auto flex w-fit flex-col items-center justify-center gap-2"
                >
                  <Image
                    src={categoriesLaptopImage}
                    alt={category.title}
                    className="h-[3.3rem] w-[3.3rem] object-cover"
                  />

                  <span className="text-[0.8rem] font-semibold leading-[1.2rem] text-text-secondary">
                    {category.title}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <ProductSection
          image={productImage}
          title="RELIABLE LAPTOPS FOR EVERYDAY WORK"
          subtitle="Affordable devices for office teams, students and remote professionals."
          description="Choose dependable Intel Core i3 and i5 laptops for documentation, browsing, online meetings, accounting, CRM and everyday business applications. Available with flexible monthly rental plans and doorstep delivery."
          productData={products}
          buttonText="RENT NOW"
          showbtn={true}
          btnlink="#"
        />
      </section>

      <section>
        <ProductSection
          image={productImage}
          title="IT RENTALS DESIGNED FOR GROWING TEAMS"
          subtitle="Bulk devices, flexible contracts and PAN-India employee delivery."
          description="Equip new employees, distributed teams, temporary projects and expanding offices without heavy capital investment. IndiaRentalz can configure, dispatch and support devices across multiple locations through one coordinated rental solution."
          productData={products}
          showbtn={false}
        />
      </section>

      <section>
        <ProductSection
          image={productImage}
          title="MORE POWER FOR DEMANDING WORK"
          subtitle="Performance laptops for developers, designers and business professionals."
          description="Rent high-performance Intel Core i7 laptops with faster processors, increased memory and SSD storage. Ideal for software development, analytics, multitasking, creative applications and resource-intensive projects."
          productData={products}
          showbtn={true}
          btnlink="#"
          buttonText="Explore Developer Laptops"
        />
      </section>

      <section>
        <ProductSection
          image={productImage}
          title="High-Performance GPU Workstations for AI, Machine Learning & Advanced Computing"
          subtitle="High-performance GPU workstations built for AI, machine learning, data science, model training and advanced computing workloads."
          productData={products}
          showbtn={true}
          btnlink="#"
          buttonText="GET CUSTOM QUOTE"
          showbtn2={true}
          btnlink2="#"
          buttonText2="Explore AI Machines"
        />
      </section>

      <section>
        <div className=" my-28 container">
          <BannerSection />
        </div>
      </section>

      <section>
        <div className="container">
          <TestimonialsSection />
        </div>
      </section>

      <section>
        <ContentWithImage
          image={contentWithImage}
          bulletIcon={bulletIcon}
          heading="WHY INDIARENTALZ"
          subtitle="Reliable IT Rentals for Every Business Need"
          description="From bulk laptops and desktops to MacBooks, employee onboarding kits, event setups, and training lab solutions, IndiaRentalz provides flexible rental plans, quality-checked devices, responsive support, and PAN India delivery—helping businesses scale their IT infrastructure without heavy upfront investment."
          buttonText="GET CUSTOM QUOTE"
          buttonLink="#"
          buttonText2="Explore Devices"
          buttonLink2="#"
          points={[
            "1000+ Clients",
            "Quality Devices",
            "PAN India Delivery",
            "24/7 Support",
          ]}
        />
      </section>

      <section>
        <ContentWithImage
          image={contentWithImage}
          bulletIcon={bulletIcon}
          heading="How renting works"
          subtitle="Get the IT Devices You Need—Without Heavy Upfront Investment"
          description="Whether you need one laptop for a remote employee or hundreds of systems for an office, event, onboarding programme, or training lab, IndiaRentalz makes IT deployment faster and more flexible."
          description2="Renting from IndiaRentalz is simple, transparent, and designed around your business requirements. Share your device needs, complete the required documentation, approve the rental plan, and get quality-checked equipment delivered to your location."
          buttonText="GET CUSTOM QUOTE"
          buttonLink="#"
          buttonText2="Explore Devices"
          buttonLink2="#"
          showcard={true}
          cardsData={[1, 2, 3, 4]}
          swap="right"
          points={[
            "1000+ Clients",
            "Quality Devices",
            "PAN India Delivery",
            "24/7 Support",
          ]}
        />
      </section>
    </main>
  );
}
