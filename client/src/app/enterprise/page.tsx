"use client";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Menu,
  Minus,
  Phone,
  Plus,
  Search,
  User,
  X,
} from "lucide-react";
import "../css/enterprise.css";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@/../public/images/enterprise/logoDark.png";
import InfiniteMarquee from "../components/common/InfiniteMarquee";
import cta from "@/../public/images/enterprise/cta.png";
import { useState } from "react";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../data/Icons";
import {
  enterpriseBenefits,
  enterpriseCategories,
  enterpriseFaqs,
  enterprisePlans,
  enterpriseReviews,
  enterpriseSteps,
  enterpriseUseCases,
} from "../data/enterprise.data";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import EnterpriseBusinessPopup from "../components/ui/EnterpriseBusinessPopup";
import { Business } from "../utils/interface/props.types";
import EnterpriseCtaForm from "../components/ui/EnterpriseCtaForm";

function Page() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(() => new Set([0]));
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null,
  );
  const [showCta, setShowCta] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sliderRef = useRef<Slider | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqs((current) => {
      const updated = new Set(current);

      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }

      return updated;
    });
  };

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMenuOpen(false);
  };

  const settings: Settings = {
    dots: false,
    infinite: enterpriseReviews.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          infinite: enterpriseReviews.length > 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: enterpriseReviews.length > 1,
        },
      },
    ],
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about-us" },
    { name: "Products", id: "products" },
    { name: "Industries", id: "industries" },
  ];

  return (
    <>
      <header className=" sticky top-0 z-50">
        <div className="bg-(--clr-bg-text-border) text-[0.8125rem] text-white">
          <div className="enterprise-container">
            <div className=" flex justify-between items-center flex-wrap py-1 gap-1">
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>info@indiarentalz.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>+91-9738-030303</span>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="bg-white py-4">
            <div className="enterprise-container">
              <div className="flex items-center justify-between relative">
                {/* Logo */}
                <Link href="/enterprise" className="shrink-0 p-0!">
                  <Image
                    className="h-[5vh] object-contain max-w-fit max-h-10!"
                    src={logoDark}
                    alt="logoDark"
                  />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                  <ul className="flex items-center gap-2">
                    {navItems.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => handleNavClick(item.id)}
                        className="text-[1.05rem] text-[#000000a6] font-medium! p-2 cursor-pointer"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desktop Switch Button */}
                <Link
                  target="_blank"
                  href="/"
                  className="max-sm:hidden! lg:flex items-center gap-2 bg-(--clr-bg-text-border) text-white rounded-full px-4 py-2 text-sm"
                >
                  <User size={17} />
                  Switch to Individual
                </Link>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden! border-2 border-[#666]! rounded-lg! p-1.5! text-[#555]!"
                  aria-label="Toggle navigation"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <div
                  className={`absolute top-full left-0 w-full bg-white z-50 lg:hidden border-t border-[#eee] shadow-md rounded-b-xl px-3 overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? "max-h-80 opacity-100 visible py-3"
                      : "max-h-0 opacity-0 invisible py-0"
                  }`}
                >
                  <ul className="flex flex-col gap-1">
                    {navItems.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => (
                          handleNavClick(item.id),
                          setIsMenuOpen(false)
                        )}
                        className="text-[15px] text-[#000000a6] px-2 py-2.5 cursor-pointer hover:bg-[#f8f3f3] rounded-md"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>

                  <Link
                    target="_blank"
                    href="/"
                    className="sm:hidden! items-center gap-2 bg-(--clr-bg-text-border) text-white rounded-2xl px-4 py-2.5 text-sm mt-3"
                  >
                    <User size={17} />
                    Switch to Individual
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section>
          <div className="py-8" id="home">
            <div className=" enterprise-container h-full">
              <div className=" shadow-[0_8px_32px_#2c002c1a] md:h-[calc(100vh-140px)] rounded-4xl hero-bg flex items-center justify-center relative h-full max-w-full mx-auto text-white bg-no-repeat bg-center bg-cover p-8 sm:p-12 max-md:aspect-5/8!">
                <div className=" text-center relative z-10">
                  <h1 className=" mb-5 font-bold! display-4">
                    India’s Trusted IT Rental Partner for Enterprises
                  </h1>
                  <h6 className=" text-white uppercase mb-6 font-extralight! leading-[1.6]!">
                    From Startups to Corporates—Affordable, Fast, and Fully
                    Supported
                  </h6>
                  <div className=" flex max-sm:flex-wrap items-center justify-center gap-4">
                    <button
                      className="hover:scale-110 duration-1000 text-white max-sm:w-full bg-(--clr-bg-text-border) px-5!"
                      type="button"
                      onClick={() => setShowCta(true)}
                    >
                      GET FREE QUOTE
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCta(true)}
                      className="hover:scale-110 duration-1000 gap-2 max-sm:w-full py-2.5 px-6 text-white cursor-pointer  border bg-transparent border-white"
                    >
                      <Phone size={16} /> <span>SCHEDULE CALL</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-12" id="about-us">
            <div className="md:min-h-[calc(100vh-115px)] flex items-center justify-center">
              <div className="enterprise-container">
                <div className="enterprise-items-header text-center">
                  <h2 className="mb-3">
                    Built for Business • Priced for Growth
                  </h2>
                  <h6>
                    Flexible Rentals <span className="mx-2.5">|</span>{" "}
                    End-to-End Service <span className="mx-2.5">|</span> PAN
                    India Reach
                  </h6>
                </div>

                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-12">
                  {enterpriseBenefits.map((v, i) => {
                    return (
                      <div className="flex flex-col items-center" key={i}>
                        <div className="aspect-square overflow-hidden mb-6 relative w-full group rounded-lg">
                          <Image
                            className="rounded-lg w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125"
                            src={v.image}
                            alt={v.alt}
                          />
                        </div>
                        <h3 className=" font-bold! mb-2 text-(--color-heading)">
                          {v.title}
                        </h3>
                        <p className=" text-(--color-muted) text-center leading-[1.4]! xl:w-7/12">
                          {v.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className=" flex justify-center mt-6">
                  <button
                    type="button"
                    onClick={() => setShowCta(true)}
                    className="hover:bg-white hover:text-(--color-primary) duration-1000 text-white border border-(--color-primary) bg-(--color-primary) px-6! rounded-4xl!"
                  >
                    Consult Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-25 flex items-center justify-center">
            <div className="enterprise-container">
              <div className="enterprise-items-header text-center">
                <h2>Explore from a Wide Range of Products</h2>
                <div className="pt-12">
                  <InfiniteMarquee>
                    {enterpriseCategories.map((v, i) => {
                      return (
                        <div key={i} className="  min-w-35 mr-10">
                          <Link
                            href={v.link}
                            target="_blank"
                            className="flex flex-col items-center justify-center"
                          >
                            <Image
                              className=" w-16 h-16 object-contain"
                              src={v.image}
                              alt={v.title}
                            />
                            <p className=" mt-4 text-black!">{v.title}</p>
                          </Link>
                        </div>
                      );
                    })}
                  </InfiniteMarquee>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="md:min-h-[calc(100vh-115px)] flex items-center justify-center" id="products">
            <div className="enterprise-container">
              <div className="enterprise-items-header text-center mb-12 md:pt-12">
                <h2 className="mb-3">Service Packs Tailored to Your Growth </h2>
                <h6>
                  Each plan includes enterprise-grade{" "}
                  <span className="mx-2.5">|</span> high-performance computing
                  devices
                </h6>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-7">
                {enterprisePlans.map((v, i) => {
                  const isExpanded = expandedCards.includes(i);
                  const visibleFeatures = isExpanded
                    ? v.features
                    : v.features.slice(0, 3);

                  return (
                    <div
                      key={i}
                      className={`self-start ${
                        isExpanded ? "h-auto" : "min-h-140"
                      } border ${
                        i % 2 === 0
                          ? "border-(--border-muted) bg-(--bg-light-muted)"
                          : "border-[#e7cbcb] bg-(--bg-muted)"
                      } rounded-md p-6 flex flex-col shadow-[0_2px_4px_#00000013] transition-all duration-500 ease-in-out`}
                    >
                      <div className="text-center">
                        <h3 className="text-(--color-muted) font-bold!">
                          <span className="text-[2.5rem]">{v.devices}</span>{" "}
                          {v.deviceLabel}
                        </h3>

                        <h6 className="text-(length:--fs-12)! opacity-80 text-[#212529bf]! uppercase tracking-[0.1rem]! mt-0.5">
                          {v.title}
                        </h6>
                      </div>

                      <div className="text-center my-3">
                        <Image
                          className="w-[40%] h-auto mx-auto"
                          src={v.image}
                          alt={v.title}
                        />
                      </div>

                      <hr className="mb-4 border-t border-black opacity-25" />

                      <p className="text-(--color-muted)! font-semibold! my-4">
                        {v.description}
                      </p>

                      <ul className="list-disc marker:text-(--color-muted) mb-4 ps-4 flex flex-col gap-1">
                        {visibleFeatures.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-(--color-muted)"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-2">
                        {v.features.length > 5 && (
                          <button
                            type="button"
                            onClick={() => toggleCard(i)}
                            aria-expanded={isExpanded}
                            className="bg-transparent py-0! rounded-none! px-0! text-[#212529bf] border-b border-(--color-muted) cursor-pointer"
                          >
                            {isExpanded ? "View Less" : "View More"}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className=" flex justify-center my-12">
                <button
                  type="button"
                  onClick={() => setShowCta(true)}
                  className="hover:bg-white hover:text-(--color-primary) duration-1000 text-white border border-(--color-primary) bg-(--color-primary) px-6! rounded-4xl!"
                >
                  Consult Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="md:min-h-[calc(100vh-115px)] flex items-center justify-center py-12">
            <div className="enterprise-container">
              <div className="enterprise-items-header text-center">
                <h2 className="mb-3">Performance-Ready. Business-Focused</h2>
                <h6 className="flex gap-2.5 items-center justify-center">
                  ONE RENTAL PARTNER FOR ALL YOUR DEVICE NEEDS
                </h6>
              </div>

              <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-7 mt-12">
                {enterpriseUseCases.map((v, i) => (
                  <div key={i}>
                    <div
                      className="relative aspect-5/6 cursor-pointer rounded-md bg-cover bg-center bg-no-repeat shadow-[0_2px_4px_#00000013] duration-700 hover:-translate-y-6"
                      style={{
                        backgroundImage: `url(${v.image.src})`,
                      }}
                    >
                      <div className="flex h-full w-full flex-col justify-between rounded-md bg-[#00000073] p-4 text-white">
                        <h4 className="text-left font-medium! uppercase">
                          {v.title}
                        </h4>

                        <div>
                          <p className="mb-4 text-left text-white!">
                            {v.subtitle}
                          </p>

                          <button
                            type="button"
                            onClick={() => setSelectedBusiness(v)}
                            className="rounded-none! border-b border-white bg-transparent px-0! py-0! text-white"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" flex justify-center my-12">
                <button
                  type="button"
                  onClick={() => setShowCta(true)}
                  className="hover:bg-white hover:text-(--color-primary) duration-1000 text-white border border-(--color-primary) bg-(--color-primary) px-6! rounded-4xl!"
                >
                  Consult Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="enterprise-container">
              <div className="flex max-lg:flex-wrap items-start">
                <div className=" w-full lg:w-6/12 xl:w-5/12 lg:sticky lg:top-[25vh]">
                  <h2 className="mb-10">
                    How It Works – Simple, Structured, Scalable IT Rentals
                  </h2>
                  <div className=" flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setShowCta(true)}
                      className="hover:bg-white hover:text-(--color-primary) duration-1000 text-white border flex items-center gap-2 border-(--color-primary) bg-(--color-primary) px-6! rounded-4xl!"
                    >
                      <User size={18} /> Consult Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCta(true)}
                      className="hover:bg-(--color-primary) hover:text-white duration-1000 bg-transparent border border-(--color-primary) text-(--color-primary) px-6! rounded-4xl!"
                    >
                      Consult Now
                    </button>
                  </div>
                </div>
                <div className=" w-full lg:w-6/12 xl:w-7/12 md:ps-1 xl:ps-6">
                  <div className=" flex flex-col gap-[clamp(1rem,4vw,4rem)] pt-12 lg:py-20 lg:pb-28 h-full">
                    {enterpriseSteps.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className=" flex items-start gap-4 md:gap-3"
                        >
                          <div>
                            <div className=" step-circle">{v.number}</div>
                          </div>
                          <div>
                            <h3 className=" mb-2 font-semibold">{v.title}</h3>
                            <p className=" text-[6c757d]">{v.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className=" py-12 md:min-h-[calc(100vh-115px)] mt-12 lg:mt-16 flex items-center justify-center">
            <div className="enterprise-container">
              <div className="enterprise-items-header text-center">
                <h2 className="mb-3">
                  Proven Track Record. Delivered at Scale
                </h2>
                <h6 className="flex gap-2.5 items-center justify-center">
                  RELIABLE SERVICE, DEPENDABLE SUPPORT, & SCALABLE IT RENTALS
                </h6>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-6 lg:gap-10 mt-12">
                <div className=" border-[1.5px] border-(--border-muted) rounded-[20px] pt-8 px-6 pb-6 flex flex-col justify-between h-full max-md:min-h-112.5 min-h-75 xl:min-h-50 bg-(--bg-light-muted)">
                  <div className="flex flex-col items-center gap-2 justify-between mb-4">
                    <h2 className=" text-3xl! md:text-[1.75rem]! lg:text-[2rem]! leading-[1.2]! text-(--color-heading)">
                      25,000+ Devices
                    </h2>
                    <p className="text-(--color-muted) text-center">
                      Extensive Inventory Range
                    </p>
                  </div>
                  <p className="text-(--color-muted) text-center">
                    Laptops, MacBooks, Graphic PC, Tablets, Servers, and more
                  </p>
                </div>

                <div className=" border-[1.5px] border-(--border-muted) rounded-[20px] pt-8 px-6 pb-6 flex flex-col justify-between h-full max-md:min-h-112.5 min-h-75 xl:min-h-50 bg-(--bg-light-muted)">
                  <div className="flex flex-col items-center gap-2 justify-between mb-4">
                    <h2 className=" text-3xl! md:text-[1.75rem]! lg:text-[2rem]! leading-[1.2]! text-(--color-heading)">
                      12+ Service Point
                    </h2>
                    <p className="text-(--color-muted) text-center">
                      Pan-India Delivery Network
                    </p>
                  </div>
                  <p className="text-(--color-muted) text-center">
                    Across India coverage with last-mile coordination delivery &
                    pickup
                  </p>
                </div>

                <div className=" border-[1.5px] border-(--border-muted) rounded-[20px] pt-8 px-6 pb-6 flex flex-col justify-between h-full max-md:min-h-112.5 min-h-75 xl:min-h-50 bg-(--bg-light-muted)">
                  <div className="flex flex-col items-center gap-2 justify-between mb-4">
                    <h2 className=" text-3xl! md:text-[1.75rem]! lg:text-[2rem]! leading-[1.2]! text-(--color-heading)">
                      24×7 Support
                    </h2>
                    <p className="text-(--color-muted) text-center">
                      Dedicated Support System
                    </p>
                  </div>
                  <p className="text-(--color-muted) text-center">
                    Prompt support, quick resolution, and hassle-free service
                    experience
                  </p>
                </div>

                <div className=" col-span-1 border-[1.5px] border-(--border-muted) rounded-[20px] pt-8 px-6 pb-6 flex flex-col justify-between h-full max-md:min-h-112.5 min-h-75 xl:min-h-50 bg-(--bg-light-muted)">
                  <div className="flex flex-col items-center gap-2 justify-between mb-4">
                    <h2 className=" text-3xl! md:text-[1.75rem]! lg:text-[2rem]! leading-[1.2]! text-(--color-heading)">
                      1 Day to Multi-year
                    </h2>
                    <p className="text-(--color-muted) text-center">
                      Flexible Rental
                    </p>
                  </div>
                  <p className="text-(--color-muted) text-center">
                    Flexibility to extend tenure without service disruption
                  </p>
                </div>

                <div className=" md:col-span-2 border-[1.5px] border-transparent h-120 sm:h-[40vh] md:max-h-112.5 rounded-[20px] relative p-8 flex flex-col justify-between bg-(--color-primary) overflow-hidden">
                  <div className="flex flex-col items-start gap-2 justify-between mb-4 sm:w-8/12 ">
                    <h2 className=" text-3xl! md:text-[1.75rem]! lg:text-[2rem]! leading-[1.2]! text-white">
                      Join the Growing Network of Enterprises
                    </h2>
                    <p className="text-white! mt-1">
                      POWERING THEIR TEAMS WITH IndiaRENTALZ
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowCta(true)}
                      className="hover:scale-110 duration-1000 text-(--clr-bg-text-border) border uppercase flex items-center gap-2 border-white bg-white px-6! rounded-4xl! relative z-20!"
                    >
                      <span>SCHEDULE DISCOVERY</span> <Phone size={18} />
                    </button>
                  </div>
                  <Image
                    className=" absolute right-[-19%] md:right-[-10%] w-auto -bottom-18 md:-bottom-8 h-full max-h-96.25 max-sm:object-contain"
                    src={cta}
                    alt="cta"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="flex items-center relative justify-center min-h-[calc(100vh-115px)] cta-hero-bg bg-center bg-cover bg-no-repeat bg-fixed w-full mt-12">
              <div className=" relative z-10 w-full max-w-200 mx-auto flex flex-col items-center justify-center py-20 px-12 text-center">
                <h2 className=" text-[#f8f9fa]!">
                  The Right Tech Starts with the Right Advice
                </h2>
                <p className="text-[#f8f9fa]! mt-3 mb-6">
                  NO GUESSWORK. JUST THE RIGHT HARDWARE, DELIVERED WITH
                  CONFIDENCE.
                </p>
                <div className=" flex flex-wrap justify-center items-center gap-4 max-md:pt-5.5">
                  <button
                    type="button"
                    onClick={() => setShowCta(true)}
                    className=" hover:scale-110 duration-1000 bg-white max-sm:w-full border border-white text-(--clr-bg-text-border) px-6! rounded-[5rem]!"
                  >
                    Book a Free Consultation
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCta(true)}
                    className="hover:scale-110 duration-1000 text-white max-sm:w-full border flex items-center gap-1 border-white bg-transparent px-6! rounded-4xl!"
                  >
                    <Search size={16} /> Explore Device Categories
                  </button>
                </div>
                <h6 className=" mt-12 text-white uppercase tracking-[0.1rem]! leading-[1.8]! font-semibold!">
                  Trusted by 7,200+ Businesses Across India | Technical
                  Assistance | Test Before Use
                </h6>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-12 md:min-h-[calc(100vh-115px)] flex items-center relative justify-center">
            <div className="enterprise-container">
              <div className="enterprise-items-header text-center">
                <h2 className="mb-3">Voices from the Teams We Empower</h2>
                <h6 className="flex gap-2.5 items-center justify-center">
                  See how businesses across India rely on IndiaRENTALZ to stay
                  agile and equipped.
                </h6>
              </div>

              <div className="mt-12">
                <Slider ref={sliderRef} {...settings}>
                  {enterpriseReviews.map((review, i) => (
                    <div key={i} className="md:px-4 h-full">
                      <div className="bg-(--bg-muted) rounded-4xl px-8 pb-6 pt-8.5 text-[1.15rem] text-(--color-dark) flex flex-col justify-between h-full min-h-55">
                        <div className="italic">{review.review}</div>

                        <div className="mt-6 flex flex-col">
                          <span className="font-bold!">{review.name}</span>
                          <span className="text-(length:--fs-p)! font-medium!">
                            {review.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-(--color-heading) text-(--color-heading) transition-all duration-300 hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-white p-0!"
                >
                  <ArrowLeft size={24} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => sliderRef.current?.slickNext()}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-(--color-heading) text-(--color-heading) transition-all duration-300 hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-white p-0!"
                >
                  <ArrowRight
                    size={24}
                    strokeWidth={1.5}
                    className="transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="md:min-h-[calc(100vh-115px)] flex items-center relative justify-center py-12">
            <div className="enterprise-container">
              <div className="flex max-lg:flex-wrap items-start">
                <div className="w-full lg:w-6/12 xl:w-5/12 lg:sticky lg:top-[25vh] lg:pe-4">
                  <div className="enterprise-items-header">
                    <h2 className="mb-6">Frequently Asked Questions</h2>
                    <h6 className="flex gap-2.5 items-center justify-center mb-10">
                      All you need to know about enterprise IT rentals with
                      IndiaRENTALZ — policies, processes, support, and more.
                    </h6>
                  </div>
                  <div className=" flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setShowCta(true)}
                      className="hover:bg-white hover:text-(--color-primary) duration-1000 text-white border flex items-center gap-2 border-(--color-primary) bg-(--color-primary) px-6! rounded-4xl!"
                    >
                      <User size={18} /> Consult Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCta(true)}
                      className="hover:bg-(--color-primary) hover:text-white duration-1000 bg-transparent border border-(--color-primary) text-(--color-primary) px-6! rounded-4xl!"
                    >
                      Custom Quotation
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 xl:w-7/12 xl:ps-6 max-lg:pt-12">
                  <div className="flex flex-col gap-4 md:gap-6">
                    {enterpriseFaqs.map((faq, i) => {
                      const isOpen = openFaqs.has(i);

                      return (
                        <div
                          key={i}
                          className="bg-(--bg-muted) rounded-2xl md:rounded-4xl md:text-[1.15rem] text-(--color-dark)"
                        >
                          <div
                            onClick={() => toggleFaq(i)}
                            className={`flex items-center justify-between gap-2 font-bold! cursor-pointer ${isOpen ? "md:px-8 md:pt-8 px-6 pt-4" : "p-6 md:p-8"}`}
                          >
                            <span>{faq.question}</span>

                            <span className="text-(--color-primary)">
                              {isOpen ? (
                                <Minus strokeWidth={2.5} size={28} />
                              ) : (
                                <Plus strokeWidth={2.5} size={28} />
                              )}
                            </span>
                          </div>

                          <div
                            className={`overflow-hidden transition-all duration-300 px-6 md:px-8 ${
                              isOpen
                                ? "max-h-250 opacity-100 mt-4 pb-6 md:pb-8"
                                : "max-h-0 opacity-0 mt-0"
                            }`}
                          >
                            <div className="text-(--color-text) text-[1.05rem]">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="bg-(--bg-muted) text-[#111111] py-6 mt-6 lg:mt-32">
          <div className=" enterprise-container">
            <div className=" text-center">
              <div>
                <div>
                  <Link href={"/enterprise"} className="p-0!">
                    <Image
                      className="h-[5vh] object-contain max-w-fit max-h-10! mx-auto"
                      src={logoDark}
                      alt="logoDark"
                    />
                  </Link>
                </div>
                <div className=" mt-4 mb-3 flex items-center gap-4 justify-center">
                  <Link
                    href="https://www.facebook.com/indiarentalz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="svg-fill p-0! rounded-none! hover:text-[#1877F2]!"
                  >
                    <FaceBookIcon />
                  </Link>

                  <Link
                    href="https://x.com/indiarentalz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="svg-fill p-0! rounded-none! hover:text-black!"
                  >
                    <TwitterIcon />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/indiarentalz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="svg-fill p-0! rounded-none! hover:text-[#0A66C2]!"
                  >
                    <LinkedinIcon />
                  </Link>

                  <Link
                    href="https://www.instagram.com/indiarentalz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="svg-fill p-0! rounded-none! hover:text-[#E4405F]!"
                  >
                    <InstagramIcon />
                  </Link>
                </div>
                <p className="text-[#212529]! text-sm!">
                  © 2026 IndiaRentalz. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <EnterpriseBusinessPopup
        isOpen={selectedBusiness !== null}
        onClose={() => setSelectedBusiness(null)}
        title={selectedBusiness?.modalTitle ?? ""}
        image={selectedBusiness?.image.src ?? ""}
        description={selectedBusiness?.description ?? ""}
      />

      <EnterpriseCtaForm isOpen={showCta} onClose={() => setShowCta(false)} />
    </>
  );
}

export default Page;
