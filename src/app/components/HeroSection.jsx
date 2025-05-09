import React from 'react'

const HeroSection = () => {
  return (
     <section className="bg-[#fff5f2] py-16 px-4 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-4xl">
        
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-12">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-orange-600 tracking-wide mb-2">
                ★ MICROSOFT 365 SOLUTIONS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Enhance Productivity with Microsoft 365
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                Empower your workforce with industry-leading tools like Teams,
                Outlook, and OneDrive. IT Dukes provides seamless setup,
                migration, and 24/7 support to drive efficiency and growth.
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                Over{" "}
                <span className="text-orange-600 font-bold">
                  150,000+ Users
                </span>{" "}
                All over the world
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition">
                GET STARTED TODAY
              </button>
            </div>

            <div className="max-w-md w-full">
              <img
                src="/Microsoft-365-Wheel.png"
                alt="Microsoft 365 Wheel"
                className="w-full"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition">
                <img
                  src="/s1.png"
                  alt="Web Design Icon"
                  className="mx-auto mb-4 w-12 h-12"
                />
                <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:text-orange-600">
                  Web Design and Development
                </h3>
                <p className="text-gray-600">
                  Our website development services provide custom, responsive,
                  and SEO-friendly designs that align with your brand.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition">
                <img
                  src="/s2.png"
                  alt="Cloud Setup Icon"
                  className="mx-auto mb-4 w-12 h-12"
                />
                <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:text-orange-600">
                  Cloud Setup, Migration, and Management
                </h3>
                <p className="text-gray-600">
                  IT Dukes offers seamless cloud setup, migration, and
                  management services for platforms like Google Workspace and
                  Microsoft 365.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition">
                <img
                  src="/s3.png"
                  alt="Experience Icon"
                  className="mx-auto mb-4 w-12 h-12"
                />
                <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:text-orange-600">
                  Digital Experience Platforms
                </h3>
                <p className="text-gray-600">
                  Our data-driven strategies maximize ROI and are tailored to
                  your business goals and audience.
                </p>
              </div>
            </div>
          </div>
        
      </section>
  )
}

export default HeroSection
