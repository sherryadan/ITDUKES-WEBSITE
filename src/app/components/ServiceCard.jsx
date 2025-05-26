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

const ServiceCard = () => {
  const serviceData = {
    image: "/girl.png",
    projectsDone: "700+",
    happyClients: "300+",
    title: "Empowering Businesses with IT Excellence",
    description: `Welcome to IT Dukes, your one-stop destination for cutting-edge IT solutions and cloud services. We help businesses achieve their goals faster, smarter, and more efficiently by leveraging the latest technology. 

    As trusted partners of Google Workspace, Microsoft 365, AWS, GoDaddy, and Zoho, we provide tailored solutions that enhance collaboration, boost productivity, and optimize IT infrastructure.`,
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      aria-label="About IT Dukes"
    >
      <div className="relative">
        <img
          src={serviceData.image}
          alt="Illustration showing IT Dukes services"
          className="w-full max-w-md mx-auto md:mx-0"
        />
        <Badge
          number={serviceData.projectsDone}
          label="Projects Done"
          position="top-2 left-2"
        />
        <Badge
          number={serviceData.happyClients}
          label="Happy Clients"
          position="bottom-10 right-30"
        />
      </div>

      <div>
        <p className="text-orange-500 font-bold text-sm mb-2">
          * ABOUT IT DUKES
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-snug">
          {serviceData.title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {serviceData.description}
        </p>
        <button className="relative inline-block px-6 py-2 text-white font-medium bg-gradient-to-r from-orange-500 to-red-500 rounded-xl overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></span>
          <span className="relative text-white group-hover:text-white transition-colors duration-300 cursor-pointer">
            Learn More
          </span>
        </button>
      </div>
    </section>
  );
};

export default ServiceCard;
