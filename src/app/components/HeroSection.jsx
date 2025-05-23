"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Badge = ({ number, label, position }) => (
  <div
    className={`absolute ${position} bg-white rounded-full shadow-lg px-4 py-2 flex items-center`}
  >
    <div>
      <p className="text-sm font-bold">{number}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  </div>
);

const defaultFeatures = [
  {
    title: "Digital Experience Platforms",
    description:
      "Our data-driven strategies maximize ROI and are tailored to your business goals and audience.",
    icon: "/s1.png",
  },
  {
    title: "Web Design and Development",
    description:
      "Our website development services provide custom, responsive, and SEO-friendly designs.",
    icon: "/s2.png",
  },
  {
    title: "Cloud Setup and Management",
    description:
      "IT Dukes offers seamless cloud setup, migration, and management services for platforms.",
    icon: "/s3.png",
  },
  {
    title: "Digital Experience Platforms",
    description:
      "Our data-driven strategies maximize ROI and are tailored to your business goals and audience.",
    icon: "/s1.png",
  },
  {
    title: "Web Design and Development",
    description:
      "Our website development services provide custom, responsive, and SEO-friendly designs.",
    icon: "/s2.png",
  },
  {
    title: "Cloud Setup and Management",
    description:
      "IT Dukes offers seamless cloud setup, migration, and management services for platforms.",
    icon: "/s3.png",
  },
];

const HeroSection = ({
  badge = "★ MICROSOFT 365 SOLUTIONS",
  headline = "Enhance Productivity with Microsoft 365",
  description = "Empower your workforce with industry-leading tools like Teams, Outlook, and OneDrive. IT Dukes provides seamless setup, migration, and 24/7 support to drive efficiency and growth.",
  highlightText = "150,000+ Users",
  highlightLabel = "All over the world",
  buttonLabel = "GET STARTED TODAY",
  onButtonClick,
  heroImage = { src: "/Microsoft-365-Wheel.png", alt: "Microsoft 365 Wheel" },
  features = defaultFeatures,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-[#fff5f2] bg-[url('/bg-img.jpg')] bg-cover bg-center bg-no-repeat bg-fixed py-16 px-4 sm:px-6 lg:px-20 rounded-4xl">
      <div
        className={`relative flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div
          className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ease-out delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold text-orange-600 mb-2">
            {badge}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6">{description}</p>
          <p className="text-lg font-semibold text-gray-800 mb-6">
            Over{" "}
            <span className="text-orange-600 font-bold text-3xl sm:text-4xl">
              {highlightText}
            </span>{" "}
            {highlightLabel}
          </p>
          <button
            onClick={onButtonClick}
            className="relative inline-block px-6 py-3 text-white font-medium bg-gradient-to-r from-orange-500 to-red-500 rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
            <span className="relative z-10">{buttonLabel}</span>
          </button>
        </div>

        <div
          className={`relative w-full md:w-1/2 transition-all duration-1000 ease-out delay-400 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <img src={heroImage.src} alt={heroImage.alt} className="w-full max-w-md mx-auto" />
          <Badge number="24/7" label="Support" position="bottom-3 right-21" />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-12 px-2 sm:px-4 md:px-8 lg:px-12">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 h-full flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mb-4 w-12 h-12"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
