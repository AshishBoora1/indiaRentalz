import Image from "next/image";
import Link from "next/link";
import orderconfirmation from "@/../public/images/mail/orderconfirmation.png";
export default function Page() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="bg-[#faf9f9] px-5 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-18">
            <div className="flex flex-col items-center sm:w-10/12 lg:max-w-7/12  mx-auto  text-center">
              <div className="w-full">
                <Image
                  src={orderconfirmation}
                  alt="Order confirmation"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="mt-8 w-full">
                <p className="text-justify font-[Verdana,Geneva,Tahoma,sans-serif] text-base text-text-primary sm:text-lg">
                  Thank you for giving us this opportunity. Your order request
                  is under review,{" "}
                  <strong>
                    click the following button to initiate your Documentation
                    process. Once the process is done your order will be shipped
                    to you.
                  </strong>
                </p>
              </div>

              <div className="mt-6 flex w-full justify-center">
                <Link
                  href="/kycform"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-dark px-7 py-3 text-center font-bold text-white transition-colors max-sm:w-full duration-200 hover:bg-brand text-base sm:text-lg"
                >
                  Start Documentation Process
                </Link>
              </div>

              <div className="mt-6 w-full max-w-2xl">
                <p className="text-center text-base font-semibold! text-[#808080] sm:text-lg">
                  Kindly Note, your order will only be processed once the
                  <span className="lg:block">
                    Documentation process is completed.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
