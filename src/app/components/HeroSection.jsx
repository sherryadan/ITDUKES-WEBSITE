import React from 'react';

const Badge = ({ number, label, position }) => {
  return (
    <div className={`absolute ${position} bg-white rounded-full shadow-lg px-4 py-2 flex items-center`}>
      <div>
        <p className="text-sm font-bold">{number}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );
};

const HeroSection = ({
  badge = '★ MICROSOFT 365 SOLUTIONS',
  headline = 'Enhance Productivity with Microsoft 365',
  description = 'Empower your workforce with industry-leading tools like Teams, Outlook, and OneDrive. IT Dukes provides seamless setup, migration, and 24/7 support to drive efficiency and growth.',
  highlightText = '150,000+ Users',
  highlightLabel = 'All over the world',
  buttonLabel = 'GET STARTED TODAY',
  onButtonClick,
  heroImage = { src: '/Microsoft-365-Wheel.png', alt: 'Microsoft 365 Wheel' },
  features = [],
}) => {
  return (
    <section className="bg-[#fff5f2] py-16 px-4 md:px-12 lg:px-20 flex flex-col justify-center items-center gap-10 rounded-4xl">
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-12 max-w-screen-xl">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm font-semibold text-orange-600 tracking-wide mb-2">
            {badge}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-gray-700 text-lg mb-6">{description}</p>
          <p className="text-lg font-semibold text-gray-800 mb-6">
            Over{' '}
            <span className="text-orange-600 font-bold">{highlightText}</span>{' '}
            {highlightLabel}
          </p>
          <button
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        </div>

        <div className="relative max-w-md w-full">
          <img src={heroImage.src} alt={heroImage.alt} className="w-full" />
          {/* Badge on image for "150,000+ Users" */}
          <Badge number="150,000+" label="Users" position="top-2 left-2" />
          <Badge number="24/7" label="Support" position="bottom-5 right-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition"
            >
              <img
                src={feature.icon}
                alt={feature.alt}
                className="mx-auto mb-4 w-12 h-12"
              />
              <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:text-orange-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
