import React from "react";

const PartnerSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16" aria-label="Partner Logos">
      <h2 className="text-sm uppercase text-pink-500 font-semibold mb-2">
        Core Feature
      </h2>
      <h3 className="text-2xl md:text-3xl font-bold mb-10">
        Trusted by Leading Companies Worldwide
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={partner.src}
              alt={partner.alt}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const partners = [
  { src: "/Google-Cloud-Partner.png", alt: "Google Cloud Partner" },
  { src: "/microsoft-Cloud-Partner.png", alt: "Microsoft Cloud Partner" },
  { src: "/stage-cloud.png", alt: "Stratos Cloud Alliance" },
  { src: "/aws-cloud.png", alt: "AWS Partner" },
  { src: "/zoho-partner.png", alt: "Zoho Partner" }, // Example: replace or keep AWS if intended
];

export default PartnerSection;