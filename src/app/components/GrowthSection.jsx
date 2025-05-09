import React from 'react'

const GrowthSection = () => {
  return (
     <div className="flex items-center justify-between px-4 py-2 ">
          <div>
            <p className="text-orange-500 font-bold text-sm mb-2">
              COMMON IDEA
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-snug">
              A Hub for Growth and Innovation{" "}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At IT Dukes, we don’t just provide services; we create solutions
              tailored to your business needs. From cloud solutions and digital
              marketing to custom IT development, our goal is to empower your
              team with the tools and strategies to succeed.
              <br />
              <br />
              Ready to take the next step? Let’s build your success story
              together. Reach out to us today!
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition">
              CONTACT US
            </button>
          </div>
          <div className="relative">
            <img
              src="/girl2.png"
              alt="IT Dukes Illustration"
              className="w-full max-w-md mx-auto md:mx-0"
            />
          </div>
        </div>
  )
}

export default GrowthSection
