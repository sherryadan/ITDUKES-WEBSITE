"use client";
import React, { useState } from 'react';

const StatCard = ({ image, number, label }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
      <div className="mb-4 flex justify-center">
        <img src={image} alt={label} className="h-16 object-contain" />
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">{number}</h3>
      <p className="text-gray-600 text-center">{label}</p>
    </div>
  );
};

const StatsCard = () => {
  const [stats] = useState([
    {
      image: '/completeproject.png',
      number: 721,
      label: 'Completed Projects',
    },
    {
      image: '/satisfiedcustomer.png',
      number: 300,
      label: 'Satisfied Clients',
    },
    {
      image: '/experiencedstaff.png',
      number: 50,
      label: 'Experienced Staff',
    },
    {
      image: '/awardswin.png',
      number: '30+',
      label: 'Awards Won',
    },
  ]);

  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 mt-8 px-4"
      aria-label="Company Stats"
    >
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          image={stat.image}
          number={stat.number}
          label={stat.label}
        />
      ))}
    </section>
  );
};

export default StatsCard;
