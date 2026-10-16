import Image from "next/image";
import login from "@/../public/images/login/login.png";
import { WhatsappIcon } from "../data/Icons";
function page() {
  return (
    <main>
      <section>
        <div className=" container">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-18">
            <div className=" bg-brand-dark max-md:hidden shadow-[-2px_2px_10px_#808080] px-1.5 flex justify-center items-center">
              <Image
                className="w-full h-full object-none"
                src={login}
                alt="loginImg"
              />
            </div>
            <div className="h-full bg-[#faf6f6] py-16 px-5 md:p-4 flex justify-center items-center">
              <div className=" flex justify-center items-center flex-col w-full sm:w-10/12 mx-auto">
                <h3 className=" text-[1.5rem]! tracking-[1.5] font-roboto! text-[#6c757d] font-bold mb-2">
                  Login To Indiarentalz
                </h3>

                <div className="mb-4 flex items-center gap-1">
                  <span className="text-[#25D366]">
                    <WhatsappIcon />
                  </span>
                  <p className=" text-base text-[#555] uppercase font-poppins">
                    Mobile{" "}
                    <span className=" text-xs text-[#6c757d] font-semibold font-poppins">
                      (You will recieve the code on whatsapp)
                    </span>
                  </p>
                </div>

                <input
                  className="py-1.5 px-3 text-base tracking-[1.5] text-[#212529] bg-white font-normal border border-[#ced4da] rounded-md w-full outline-0 font-roboto!"
                  type="email"
                />

                <button className=" btn-primary mt-3 w-full">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
