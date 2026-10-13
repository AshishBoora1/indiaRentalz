
"use client";

import Slider, { Settings } from "react-slick";

interface CommonSliderProps {
  children: React.ReactNode;
  slidesToShow?: number;
}

export default function CommonSlider({
  children,
  slidesToShow = 3,
}: CommonSliderProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
}
