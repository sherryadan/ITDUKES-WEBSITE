import React from 'react'

const Testimonials = () => {
  return (
   <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center mt-24">
          <div>
            <h2 className="text-orange-500 text-sm font-semibold uppercase mb-2">
              Testimonial
            </h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
              What our Happy Client Say.
            </h3>
            <p className="text-gray-500 text-lg">
              We empower businesses with world-class cloud solutions, digital
              marketing expertise, and custom IT services to drive growth and
              efficiency.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center bg-blue-50 rounded-3xl p-6 shadow-lg">
              <img
                src="liam.png"
                alt="Liam Brown Jr."
                className="w-20 h-20 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Liam Brown Jr.
                </h4>
                <p className="text-gray-700 text-sm">
                  The team at IT Dukes provided seamless migration to Microsoft
                  365 for our growing business. Their professionalism and
                  expertise are top-notch.
                </p>
              </div>
            </div>

            <div className="flex items-center bg-orange-50 rounded-3xl p-6 shadow-lg">
              <img
                src="/sofia.jpg"
                alt="Dave Reynolds"
                className="w-20 h-20 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Dave Reynolds
                </h4>
                <p className="text-gray-700 text-sm">
                  From website development to cloud services, IT Dukes has been
                  our go-to partner. They always deliver on time and exceed
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Testimonials
