import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from 'react-icons/fa';

// Reusable Link Section
const LinkSection = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-bold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm text-gray-300">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

// Reusable Contact Info Section
const ContactSection = ({ contacts, socialLinks }) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
    <ul className="space-y-3 text-sm text-gray-300">
      {contacts.map((contact, idx) => (
        <li key={idx}>
          <span>{contact}</span>
        </li>
      ))}
    </ul>
    <div className="flex space-x-3 mt-4">
      {socialLinks.map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const usefulLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Solutions', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  const helpLinks = [
    { label: 'FAQs', href: '#' },
    { label: 'Support Center', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Troubleshooting Guide', href: '#' },
  ];

  const contactInfo = [
    '📍 9898 Bissonnet St Ste 375D Houston, TX 77036',
    '📞 +1 347 913 6517',
    '✉️ consult@itdukes.com',
    '✉️ support@itdukes.com',
  ];

  const socialLinks = [
    { icon: <FaFacebookSquare />, href: '#', label: 'Facebook' },
    { icon: <FaInstagramSquare />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <img src="/logolight.png" alt="IT Dukes" className="mb-4 w-32" />
          <h1 className="text-2xl font-bold">
            Your Success, Powered by IT Dukes
          </h1>
          <br />
          <p className="text-sm text-gray-300">
            IT Dukes delivers innovative IT solutions, specializing in Google
            Workspace, Microsoft 365, and AWS Cloud Services. We empower
            businesses with scalable, secure, and efficient technologies, backed
            by expert support and a customer-first approach. Let us help you
            unlock your business’s full potential!
          </p>
        </div>

        <LinkSection title="Useful links." links={usefulLinks} />
        <LinkSection title="Help & Support." links={helpLinks} />
        <ContactSection contacts={contactInfo} socialLinks={socialLinks} />
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        COPYRIGHT © 2024 IT DUKES LLC. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
