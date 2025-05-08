import React from 'react'

const HeroSection = () => {

    return (
        <section className="bg-[#fff5f2] py-16 px-4 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-orange-600 tracking-wide mb-2">
              ★ MICROSOFT 365 SOLUTIONS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Enhance Productivity with Microsoft 365
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Empower your workforce with industry-leading tools like Teams, Outlook,
              and OneDrive. IT Dukes provides seamless setup, migration, and 24/7
              support to drive efficiency and growth.
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-6">
              Over <span className="text-orange-600 font-bold">150,000+ Users</span> All over the world
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              GET STARTED TODAY
            </button>
          </div>
    
          {/* Image */}
          <div>
            <img
              src="/Microsoft-365-Wheel.png" // Make sure this image exists in your public/images folder
              alt="Microsoft 365 Wheel"
              className="max-w-md w-full"
            />
          </div>
        </section>
      );
}

export default HeroSection
