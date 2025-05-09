import React, { useState } from 'react';

const TestimonialCard = ({ name, image, text, bgColor = 'bg-blue-50' }) => {
  return (
    <div className={`flex items-center ${bgColor} rounded-3xl p-6 shadow-lg`}>
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mr-4 object-cover"
      />
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-1">{name}</h4>
        <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [testimonials] = useState([
    {
      name: 'Liam Brown Jr.',
      image: '/liam.png',
      text:
        'The team at IT Dukes provided seamless migration to Microsoft 365 for our growing business. Their professionalism and expertise are top-notch.',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Sofia Williams',
      image: '/sofia.jpg',
      text:
        'From website development to cloud services, IT Dukes has been our go-to partner. They always deliver on time and exceed expectations.',
      bgColor: 'bg-orange-50',
    },
  ]);

  return (
    <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center mt-24">
      <div>
        <h2 className="text-orange-500 text-sm font-semibold uppercase mb-2">
          Testimonial
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
          What Our Happy Clients Say
        </h3>
        <p className="text-gray-500 text-lg leading-relaxed">
          We empower businesses with world-class cloud solutions, digital
          marketing expertise, and custom IT services to drive growth and
          efficiency.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            text={testimonial.text}
            bgColor={testimonial.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
