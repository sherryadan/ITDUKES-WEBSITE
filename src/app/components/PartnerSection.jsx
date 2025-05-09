import React from 'react'

const PartnerSection = () => {
  return (
      <div className="max-w-6xl mx-auto">
          <h2 className="text-sm uppercase text-pink-500 font-semibold mb-2">
            Core Feature
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Trusted by Leading Companies Worldwide
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            <div className="flex justify-center items-center">
              <img
                src="/Google-Cloud-Partner.png"
                alt="Google Cloud Partner"
                className="max-h-24 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/microsoft-Cloud-Partner.png"
                alt="Microsoft"
                className="max-h-24 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/stage-cloud.png"
                alt="Stratos Cloud Alliance"
                className="max-h-24 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/aws-cloud.png"
                alt="AWS Partner"
                className="max-h-24 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/aws-cloud.png"
                alt="AWS Partner"
                className="max-h-24 object-contain"
              />
            </div>
          </div>
        </div>
       
  )
}

export default PartnerSection
