"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PartnerSection = () => {
  return (
    <section
      className="max-w-6xl mx-auto px-4 py-16 "
      aria-label="Partner Logos"
    >
      <h2 className="text-sm uppercase text-pink-500 font-semibold mb-2">
        Core Feature
      </h2>
      <h3 className="text-2xl md:text-3xl font-bold mb-10">
        Trusted by Leading Companies Worldwide
      </h3>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={partner.src}
              alt={partner.alt}
              className="max-h-24 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const partners = [
  { src: "/Google-Cloud-Partner.png", alt: "Google Cloud Partner" },
  { src: "/microsoft-Cloud-Partner.png", alt: "Microsoft Cloud Partner" },
  { src: "/stage-cloud.png", alt: "Stratos Cloud Alliance" },
  { src: "/aws-cloud.png", alt: "AWS Partner" },
   { src: "/Google-Cloud-Partner.png", alt: "Google Cloud Partner" },
  { src: "/microsoft-Cloud-Partner.png", alt: "Microsoft Cloud Partner" },
  { src: "/stage-cloud.png", alt: "Stratos Cloud Alliance" },
  { src: "/aws-cloud.png", alt: "AWS Partner" },
];

export default PartnerSection;
