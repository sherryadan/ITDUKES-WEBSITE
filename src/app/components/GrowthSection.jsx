import React from 'react';

const GrowthSection = ({
  subtitle = 'COMMON IDEA',
  title = 'A Hub for Growth and Innovation',
  description = `At IT Dukes, we don’t just provide services; we create solutions tailored to your business needs. From cloud solutions and digital marketing to custom IT development, our goal is to empower your team with the tools and strategies to succeed.

Ready to take the next step? Let’s build your success story together. Reach out to us today!`,
  buttonLabel = 'CONTACT US',
  onButtonClick,
  imageSrc = '/girl2.png',
  imageAlt = 'IT Dukes Illustration',
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2">
      <div className="md:w-1/2">
        <p className="text-orange-500 font-bold text-sm mb-2">{subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-snug">
          {title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
          {description}
        </p>
        <button
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      </div>
      <div className="relative md:w-1/2 mt-6 md:mt-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-md mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default GrowthSection;
