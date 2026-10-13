import Image from "next/image";
import darkLogo from "@/../public/images/common/logoDark.png";
import LocationIcon from "@/app/data/Icons";
import {
  CircleUserRound,
  SearchIcon,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import LocationPopup from "../ui/LocationPopup";

function Header() {
  return (
    <header className="container-fluid">
      <nav className="flex items-center justify-between py-6">
        <div className="flex items-center gap-[1vw]">
          <Image src={darkLogo} alt="Logo" width={188} height={50} priority />

          <div className="flex items-center gap-1 text-text-secondary text-xs font-poppins font-medium">
            <LocationIcon
              size={16}
              color="currentColor"
              className="text-text-secondary"
            />
            <span>Chandigarh</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-[2vw]">
          <div className="flex items-center justify-between gap-2 border border-[#0000002d] rounded-[0.625rem] p-2 w-[20rem]">
            <input
              className="bg-transparent border-0 focus:outline-none text-black! placeholder:text-[#6c757d] w-full"
              type="text"
              placeholder="Search for Products"
            />
            <SearchIcon size={16} className="text-[#6c757d]" />
          </div>

          <div className="relative inline-block">
            <ShoppingCart
              size={24}
              className="text-text-primary scale-x-[-1]"
            />
            <div className="step-circle h-5 w-5 text-[0.7rem] -right-3 -top-3 absolute">
              1
            </div>
          </div>

          <CircleUserRound size={24} className="text-text-primary" />

          <a
            href="#"
            className=" btn-primary flex text-base! px-4 py-1.5 font-roboto items-center gap-1 rounded-full font-normal capitalize"
          >
            <UsersRound size={17} className=" font-normal" />
            Switch to Enterprise
          </a>
        </div>

        <LocationPopup />
      </nav>
    </header>
  );
}

export default Header;
