"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TestimonialCard = ({ name, image, text, bgColor }) => (
  <div
    className={`${bgColor} rounded-[3rem] p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center md:items-start gap-4 w-full transition-all duration-300`}
  >
    <div className="flex-shrink-0">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
      />
    </div>
    <div className="text-center md:text-left">
      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{name}</h4>
      <p className="text-slate-800 text-sm sm:text-base leading-relaxed max-w-md">
        {text}
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  useEffect(() => {
    // Fixes Swiper breakpoints in React/Next.js
    window.dispatchEvent(new Event("resize"));
  }, []);

  const testimonials = [
    {
      name: "John Mitchell",
      image: "/liam.png",
      text:
        "IT Dukes transformed the way we collaborate with Google Workspace. Their support team is always available, ensuring we face zero downtime. Highly recommend their services!",
      bgColor: "bg-cyan-100",
    },
    {
      name: "Sofia Karter",
      image: "/sofia.jpg",
      text:
        "Our digital marketing campaigns skyrocketed after partnering with IT Dukes. Their SEO and SEM strategies are unparalleled, and the results speak for themselves!",
      bgColor: "bg-orange-100",
    },
    {
      name: "Sofia Karter",
      image: "/liam.png",
      text:
        "Our digital marketing campaigns skyrocketed after partnering with IT Dukes. Their SEO and SEM strategies are unparalleled, and the results speak for themselves!",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="w-full bg-[#fffdfb] px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-orange-500 text-sm font-semibold uppercase mb-2">
            Testimonial
          </h2>
          <h3 className="text-4xl sm:text-4xl font-bold text-slate-900 mb-4">
            What our Happy Client Say.
          </h3>
          <p className="text-slate-700 text-base sm:text-lg max-w-md">
            We empower businesses with world-class cloud solutions, digital marketing expertise, and custom IT services to drive growth and efficiency.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative h-[320px] sm:h-[380px] md:h-[420px]">
         <Swiper
  modules={[Autoplay]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  slidesPerView={1}
  direction="horizontal"
  spaceBetween={20}
  breakpoints={{
    1280: {
      slidesPerView: 2,
      direction: "vertical",
      spaceBetween: 20,
    },
  }}
  className="h-full"
>
  {testimonials.map((t, i) => (
    <SwiperSlide key={i} className="flex justify-center">
      <TestimonialCard {...t} />
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
