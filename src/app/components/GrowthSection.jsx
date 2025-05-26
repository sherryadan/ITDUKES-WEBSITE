import React from "react";

const Badge = ({ number, label, position }) => {
  return (
    <div
      className={`absolute ${position} bg-white rounded-full shadow-lg px-4 py-2 flex items-center`}
    >
      <div>
        <p className="text-sm font-bold">{number}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );
};

const GrowthSection = ({
  subtitle = "COMMON IDEA",
  title = "A Hub for Growth and Innovation",
  description = `At IT Dukes, we don’t just provide services; we create solutions tailored to your business needs. From cloud solutions and digital marketing to custom IT development, our goal is to empower your team with the tools and strategies to succeed.

Ready to take the next step? Let’s build your success story together. Reach out to us today!`,
  buttonLabel = "CONTACT US",
  onButtonClick,
  imageSrc = "/girl2.png",
  imageAlt = "IT Dukes Illustration",
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-md mx-auto md:mx-0"
        />
        <Badge number="70+" label="Employees" position="top-2 left-2" />
      </div>

      <div>
        <p className="text-orange-500 font-bold text-sm mb-2">{subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-snug">
          {title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
          {description}
        </p>
        <button className="relative inline-block px-6 py-2 h-12 w-40 text-white font-medium bg-gradient-to-r from-orange-500 to-red-500 rounded-4xl overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></span>
          <span className="relative text-white group-hover:text-white-500 transition-colors duration-300 cursor-pointer">
            {buttonLabel}
          </span>
        </button>
      </div>
    </section>
  );
};

export default GrowthSection;