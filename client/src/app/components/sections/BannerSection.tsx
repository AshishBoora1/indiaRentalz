import bannerImage from "@/../public/images/common/documentationpolicy.jpg";
import Link from "next/link";

function BannerSection() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div
        className="relative isolate overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-80 max-w-5xl flex-col items-center justify-center px-5 py-14 text-center sm:min-h-95 sm:px-10 sm:py-16 lg:min-h-105 lg:py-20">
          <h2 className="mb-2  leading-tight text-white normal-case">
            Share Your Requirement
          </h2>

          <p className="mb-6 max-w-2xl font-arial text-base font-medium leading-7 text-white/90 normal-case sm:text-lg">
            Tell us the type of devices, configuration, quantity, rental
            duration, delivery location, and intended use. Our team will help
            you find the right rental solution.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href="#"
              className="btn-primary inline-flex min-h-12 w-full items-center justify-center rounded-md px-7 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            >
              Share Your Requirement
            </Link>

            <Link
              href="#"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/80 bg-white/10 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
