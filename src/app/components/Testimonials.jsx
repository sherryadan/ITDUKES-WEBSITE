"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TestimonialCard = ({ name, image, text, bgColor = "bg-blue-50" }) => (
  <div className={`flex items-center ${bgColor} rounded-4xl p-6 shadow-lg`}>
    <img
      src={image}
      alt={name}
      className="w-20 h-20 rounded-full mr-4 object-cover"
    />
    <div>
      <h4 className="text-lg font-bold text-gray-900 mb-1">{name}</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
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
    <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-4 items-center mt-24">
      <div>
        <h2 className="text-orange-500 text-sm font-semibold uppercase mb-2">
          Testimonial
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
          What Our Happy Clients Say
        </h3>
        <p className="text-gray-500 text-lg leading-relaxed">
          We empower businesses with world-class cloud solutions, digital
          marketing expertise, and custom IT services to drive growth and
          efficiency.
        </p>
      </div>

      <div className="h-[420px] overflow-hidden">
        <Swiper
          direction="vertical"
          slidesPerView={2}
          spaceBetween={4}
          loop={true}
          autoplay={{
            delay: 2000,
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
    </section>
  );
};

export default Testimonials;
