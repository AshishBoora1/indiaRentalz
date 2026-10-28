"use client";

import Image from "next/image";
import location1 from "@/../public/images/common/location1.png";
import {useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { cities } from "@/app/data/DummyData";
import { LocationPopupProps } from "@/app/utils/interface/props.types";

function LocationPopup({ onClose, onhandleGetCity }: LocationPopupProps) {
  const [citylistshow, setCityListShow] = useState(false);
  const [showsearch, setShowsearch] = useState(false);
  const [city, setCity] = useState("");

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    localStorage.setItem("selectedCity", selectedCity);
    onhandleGetCity(selectedCity);
    setCityListShow(false);
    onClose();
  };

  const filteredCities = cities.filter((item) =>
    item.toLowerCase().includes(city.toLowerCase().trim()),
  );

  return (
    <div className="bg-layer flex justify-center items-start lg:p-10">
      <div className="bg-white max-lg:mt-5 px-6 max-lg:h-[97%] max-h-full max-sm:max-w-[92%] max-lg:max-w-[95.5vw] max-xl:max-w-[94vw] xl:max-w-[82.5vw] w-full mx-auto rounded-2xl overflow-y-auto overflow-x-hidden">
        <div className="bg-white sticky top-0 z-10 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-base font-roboto! text-text-primary font-medium">
              Select your city
            </h6>

            <button
              type="button"
              onClick={() => {
                setShowsearch((prev) => !prev);
                setCityListShow((prev) => !prev);
                setCity("");
              }}
              className="lg:hidden"
              aria-label={showsearch ? "Close search" : "Open search"}
            >
              {!showsearch ? (
                <SearchIcon size={20} className="text-[#6c757d]" />
              ) : (
                <X size={20} className="text-[#6c757d]" />
              )}
            </button>
          </div>

          <input
            className={`bg-white border border-[#ced4da] rounded-md py-[0.7rem] px-4 mb-6 focus:outline-none text-[#212529] placeholder:text-[#6c757d] w-full ${
              showsearch ? "block" : "hidden lg:block"
            }`}
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setCityListShow(true);
            }}
            onFocus={() => setCityListShow(true)}
            placeholder="Search for your City"
          />

          {!showsearch && (
            <div className="flex justify-between flex-wrap max-lg:gap-10 mt-4 border-b-2 border-[#f2f2f2] pt-2">
              {cities.map((city, index) => (
                <div
                  className="flex flex-col justify-center items-center px-2 lg:px-5 w-2/12 md:w-1/12 cursor-pointer"
                  key={index}
                  onClick={() => handleCitySelect(city)}
                >
                  <Image
                    height={80}
                    width={80}
                    src={location1}
                    alt="location1"
                  />
                  <h6 className="mb-2 text-base md:text-sm xl:text-base font-medium! font-roboto! text-text-primary mt-1">
                    {city}
                  </h6>
                </div>
              ))}
            </div>
          )}
        </div>

        {citylistshow && (
          <div>
            <ul className="flex flex-col gap-2.5 pb-6">
              {filteredCities.length > 0 ? (
                filteredCities.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleCitySelect(item)}
                    className="py-1.5 px-2.5 text-text-primary text-base border-b border-[#f2f2f2] cursor-pointer hover:bg-gray-50"
                  >
                    {item}
                  </li>
                ))
              ) : (
                <li onClick={() => handleCitySelect("Other")} className="py-1.5 px-2.5 text-text-primary text-base border-b border-[#f2f2f2] cursor-pointer">
                  Other
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationPopup;
