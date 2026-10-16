import Image from "next/image";
import Link from "next/link";
import { ContentWithImageProps } from "@/app/utils/interface/props.types";

export default function ContentWithImage({
  image,
  bulletIcon,
  heading,
  subtitle,
  description,
  description2,
  buttonText,
  buttonLink,
  buttonText2,
  buttonLink2,
  points,
  showcard,
  cardsData = [],
  swap = "left",
}: ContentWithImageProps) {
  return (
    <div className="my-28">
      <div className="container">
        <div
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
        >
          {/* Image */}
          <div className={`relative mx-auto flex aspect-square w-full max-w-140 items-center justify-center rounded-full bg-[#f7f1ef] ${swap.toLowerCase() === "right" ? "order-2" : "order-1"}`}>
            <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-[#d9747466] shadow-[0_8px_20px_#d974742e]" />

            <div className="absolute bottom-8 left-10 h-16 w-16 rounded-full bg-[#e5b8a98c] shadow-[0_8px_20px_#d974742e]" />

            <div className="mx-auto flex w-full max-w-150 items-center justify-center">
              <Image
                src={image}
                className="w-full max-w-130 object-contain"
                alt={heading}
              />
            </div>
          </div>

          {/* Content */}
          <div className={`items-info ${swap.toLowerCase() === "right" ? "order-1" : "order-2"}`}>
            <h2 className="mb-4">{heading}</h2>

            <p className="mb-4">{subtitle}</p>

            <p className="mb-4">{description}</p>

            {description2 && <p className="mb-8 font-arial">{description2}</p>}

            {showcard && (
              <div className=" grid grid-cols-2 max-xl:grid-cols-1 gap-4 my-8">
                {cardsData.map((_, index) => {
                  return (
                    <div className="card flex items-start gap-3.5" key={index}>
                      <div>
                        <div className="step-circle bg-[#b5121b]">{index + 1}</div>
                      </div>
                      <div>
                        <h3 className=" text-[#b5121b] mb-1.5 font-arial">
                          Share Your Requirement
                        </h3>
                        <p className="font-arial text-[#333] normal-case font-medium">
                          Tell us the type of devices, configuration, quantity,
                          rental duration, delivery location, and intended ivery
                          location, and intended use.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 max-sm:flex-col">
              <Link href={buttonLink} className="btn-primary rounded-md max-sm:w-full text-center">
                {buttonText}
              </Link>

              <Link href={buttonLink2} className="btn-secondary rounded-md max-sm:w-full text-center">
                {buttonText2}
              </Link>
            </div>

            {/* Bullet Points */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
              {points.map((point, index) => (
                <div
                  className="flex items-center gap-2"
                  key={`${point}-${index}`}
                >
                  <Image width={20} height={20} src={bulletIcon} alt="" />

                  <span className="text-xs font-bold tracking-[0.08em] text-text-primary">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
