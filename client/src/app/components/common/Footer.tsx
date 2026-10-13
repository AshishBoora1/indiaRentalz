import Image from "next/image";
import logoLight from "@/../public/images/common/logoLight.png";
import Link from "next/link";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/app/data/Icons";
import { laptopLinks, macbookLinks, quickLinks } from "@/app/data/DummyData";

function Footer() {
  return (
    <footer className="bg-[#282828] pt-10">
      <div className=" container">
        <div className=" grid grid-cols-4 pb-10">
          <div>
            <Image
              width={200}
              height={68}
              src={logoLight}
              alt="logo"
              priority
            />
            <h5 className=" capitalize my-8 font-roboto text-white">
              sunsoft erp solutions pvt ltd
            </h5>
            <div className=" flex items-center gap-1">
              <Link
                target="_blank"
                href={"facebook.com/IndiaRentalz"}
                className="bg-[#3B5998] w-10 h-10 rounded-[3px] flex justify-center items-center"
              >
                <FaceBookIcon />
              </Link>
              <Link
                target="_blank"
                href={"https://www.twitter.com/IRentalz"}
                className="bg-[#00ACEE] w-10 h-10 rounded-[3px] flex justify-center items-center"
              >
                <TwitterIcon />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/company/indiarentalz"}
                className="bg-[#0E76A8] w-10 h-10 rounded-[3px] flex justify-center items-center"
              >
                <LinkedinIcon />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/indiarentalz/"}
                className="bg-[#8A3AB9] w-10 h-10 rounded-[3px] flex justify-center items-center"
              >
                <InstagramIcon />
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.youtube.com/watch?v=5fJEk5TUlT0&feature=youtu.be"
                }
                className="bg-[#C4302B] w-10 h-10 rounded-[3px] flex justify-center items-center"
              >
                <YoutubeIcon />
              </Link>
            </div>
          </div>

          {[
            { title: "Quick Links", links: quickLinks },
            { title: "Other Quick Links", links: laptopLinks },
            { title: "Other Quick Links", links: macbookLinks },
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-[1.2rem] mb-4 font-bold text-white font-roboto!">
                {column.title}
              </h4>

              <ul className="flex flex-col gap-[0.7rem]">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-roboto text-[#ffffffbf] font-semibold text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-4 flex items-center justify-between gap-2">
          <span className=" text-white text-[0.8rem] font-semibold">Copyrights © 2026 All Rights Reserved by IndiaRentalz</span>
          <span className=" text-white text-[0.8rem] font-semibold">info@indiarentalz.com · +91-9738-030303 ·</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
