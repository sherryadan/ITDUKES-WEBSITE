'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const features = [
  {
    title: "Digital Experience Platforms",
    description:
      "Our data-driven strategies maximize ROI and are tailored to your business goals and audience.",
    icon: "/s1.png", 
  },
  {
    title: "Web Design and Development",
    description:
      "Our website development services provide custom, responsive, and SEO-friendly designs that align with your goals.",
    icon: "/s2.png",
  },
  {
    title: "Cloud Setup and Management",
    description:
      "IT Dukes offers seamless cloud setup, migration, and management services for platforms like Google Workspace.",
    icon: "/s3.png",
  },
  
];

const Feature = () => {
  return (
    <section className="bg-[#FFF5F1] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-8 h-full flex flex-col items-center text-center">
                <img src={feature.icon} alt={feature.title} className="mb-4 w-12 h-12" />
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

export default Feature;
