"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TestimonialCard = ({ name, image, text, bgColor = "bg-blue-50" }) => (
  <div
    className={`flex items-start ${bgColor} rounded-3xl p-5 sm:p-6 shadow-md gap-4`}
  >
    <img
      src={image}
      alt={name}
      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
    />
    <div>
      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
        {name}
      </h4>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Liam Brown Jr.",
      image: "/liam.png",
      text:
        "The team at IT Dukes provided seamless migration to Microsoft 365 for our growing business. Their professionalism and expertise are top-notch.",
      bgColor: "bg-blue-50",
    },
    {
      name: "Sofia Williams",
      image: "/sofia.jpg",
      text:
        "From website development to cloud services, IT Dukes has been our go-to partner. They always deliver on time and exceed expectations.",
      bgColor: "bg-orange-50",
    },
    {
      name: "Jackson Lee",
      image: "/liam.png",
      text:
        "Their cloud optimization solutions saved us both time and money. IT Dukes is truly a reliable tech partner.",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left column (heading) */}
        <div>
          <h2 className="text-orange-500 text-sm font-semibold uppercase mb-2">
            Testimonial
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Our Happy Clients Say
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We empower businesses with world-class cloud solutions, digital
            marketing expertise, and custom IT services to drive growth and
            efficiency.
          </p>
        </div>

        {/* Right column (testimonials swiper) */}
        <div className="h-[400px] sm:h-[420px] overflow-hidden">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
