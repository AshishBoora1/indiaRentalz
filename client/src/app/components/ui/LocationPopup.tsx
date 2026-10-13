import Image from "next/image";
import location1 from "@/../public/images/common/location1.png";

function LocationPopup() {
  return (
    <div className=" bg-layer">
      <div className="bg-white max-lg:mt-5 px-6 pt-6 max-lg:h-full max-sm:max-w-[99vw] max-lg:max-w-[95.5vw] max-xl:max-w-[94vw] xl:max-w-[82.5vw] w-full mx-auto mt-10 rounded-2xl overflow-y-auto overflow-x-hidden">
        <h6 className=" text-base font-roboto! text-text-primary font-medium mb-4">
          Select your city
        </h6>
        <input
          className="bg-white border border-[#ced4da] rounded-md py-[0.7rem] px-4 mb-6 focus:outline-none text-[#212529] placeholder:text-[#6c757d] w-full"
          type="text"
          placeholder="Search for your City"
        />
        <div className=" flex justify-between flex-wrap max-lg:gap-10 mt-4 border-b-2 border-[#f2f2f2]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
            return (
              <div
                className=" flex flex-col justify-center items-center px-2 lg:px-5 w-1/12"
                key={index}
              >
                <Image
                  height={80}
                  width={80}
                  src={location1}
                  alt="location1"
                  priority
                />
                <h6 className=" mb-2 text-sm xl:text-base font-medium! font-roboto! text-text-primary mt-1">
                  Chandigarh
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LocationPopup;
