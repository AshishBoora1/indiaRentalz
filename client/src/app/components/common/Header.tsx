"use client";

import Image from "next/image";
import darkLogo from "@/../public/images/common/logoDark.png";
import mobileLogo from "@/../public/images/common/mobile-logo.png";
import LocationIcon from "@/app/data/Icons";
import {
  CircleUserRound,
  SearchIcon,
  ShoppingCart,
  UsersRound,
  House,
  LayoutGrid,
} from "lucide-react";
import LocationPopup from "../ui/LocationPopup";
import { useEffect, useRef, useState } from "react";
import ProductListPop from "../ui/ProductListPop";
import { products } from "@/app/data/DummyData";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppContext";

function Header() {
  const [showlocationpopup, setShowLocationPopup] = useState(false);
  const [showproductpopup, setShowProductPopup] = useState(false);
  const [productname, setProductName] = useState("");
 const { selectedCity, setSelectedCity } = useAppContext();

  const searchPopupRef = useRef<HTMLDivElement>(null);
  const mobileSearchButtonRef = useRef<HTMLButtonElement>(null);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(productname.trim().toLowerCase()),
  );

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Node)) return;

      const clickedDesktopSearch =
        searchPopupRef.current?.contains(target) ?? false;

      const clickedMobileSearchButton =
        mobileSearchButtonRef.current?.contains(target) ?? false;

      const clickedProductPopup =
        target instanceof Element &&
        target.closest(".product-list-popup") !== null;

      if (
        !clickedDesktopSearch &&
        !clickedMobileSearchButton &&
        !clickedProductPopup
      ) {
        setShowProductPopup(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function getcity(cityname: string) {
    if (cityname) setSelectedCity(cityname);
  }

  return (
    <header className="container-fluid relative">
      <nav className="flex items-center justify-between py-6 gap-2">
        <div className="flex items-center gap-[1vw]">
          <Link href={"/"}>
            <Image
              className=" max-lg:hidden h-[5vh] object-contain max-w-fit max-h-10!"
              src={darkLogo}
              alt="IndiaRentalz Logo"
              loading="eager"
            />
            <Image
              className=" lg:hidden"
              src={mobileLogo}
              alt="Logo"
              width={41}
              height={49}
              loading="eager"
            />
          </Link>

          <button
            type="button"
            onClick={() => setShowLocationPopup(true)}
            className="flex items-center gap-1 text-text-secondary text-xs font-poppins font-medium cursor-pointer"
          >
            <LocationIcon
              size={16}
              color="currentColor"
              className="text-text-secondary"
            />
            {selectedCity && <span>{selectedCity}</span>}
          </button>
        </div>

        <div className="flex items-center justify-between gap-[3vw] lg:gap-[2vw]">
          {/* Desktop Search */}
          <div
            className="hidden lg:flex items-center justify-between gap-2 border border-[#0000002d] rounded-[0.625rem] p-2 w-[18rem] xl:w-[20rem]"
            ref={searchPopupRef}
          >
            <input
              className="bg-transparent border-0 focus:outline-none text-black! placeholder:text-[#6c757d] w-full"
              type="text"
              placeholder="Search for Products"
              value={productname}
              onFocus={() => setShowProductPopup(true)}
              onChange={(e) => {
                setProductName(e.target.value);
                setShowProductPopup(true);
              }}
            />

            <SearchIcon size={16} className="text-[#6c757d] shrink-0" />
          </div>

          {/* Mobile Search Button */}
          <button
            ref={mobileSearchButtonRef}
            type="button"
            aria-label="Search products"
            aria-expanded={showproductpopup}
            onClick={() => setShowProductPopup((prev) => !prev)}
            className="lg:hidden max-md:hidden"
          >
            <SearchIcon size={24} className="text-[#6c757d] shrink-0" />
          </button>

          <div className="relative inline-block max-md:hidden">
            <ShoppingCart
              size={24}
              className="text-text-primary scale-x-[-1]"
            />
            <div className="step-circle h-5 w-5 text-[0.7rem] -right-3 -top-3 absolute">
              1
            </div>
          </div>

          <div className="max-md:hidden">
            <Link href={"/login"}>
              {" "}
              <CircleUserRound
                size={24}
                className="text-text-primary cursor-pointer"
              />
            </Link>
          </div>

          <a
            href="#"
            className="btn-primary flex text-base! px-4 py-1.5 font-roboto items-center gap-1 rounded-full font-normal capitalize"
          >
            <UsersRound size={17} className="font-normal" />
            Switch to Enterprise
          </a>
        </div>

        {/* mobile bar */}

        <div className="bg-white flex justify-around gap-1.5 items-center w-full fixed bottom-0 left-0 z-50 shadow-[0_4px_24px_#00000040] px-2 py-4 md:hidden">
          <Link href={"#"}>
            <House
              size={24}
              color="currentColor"
              className="text-text-secondary"
            />
          </Link>
          <Link href={"#"}>
            <LayoutGrid
              size={24}
              color="currentColor"
              className="text-text-secondary"
            />
          </Link>
          <Link href={"/login"}>
            <CircleUserRound
              size={24}
              color="currentColor"
              className="text-text-secondary"
            />
          </Link>
        </div>

        {/* popups */}

        {showlocationpopup && (
          <LocationPopup
            onClose={() => setShowLocationPopup(false)}
            onhandleGetCity={getcity}
          />
        )}

        {showproductpopup && (
          <ProductListPop
            productsdata={filteredProducts}
            productname={productname}
            onClose={() => setShowProductPopup(false)}
            onProductNameChange={setProductName}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
