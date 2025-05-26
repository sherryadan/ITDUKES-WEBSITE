"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const ListItem = ({ children, href, className }) => (
  <li className="w-full">
    <NavigationMenuLink
      href={href}
      className={cn(
        "block w-full px-4 py-3 text-sm text-gray-700 text-left hover:bg-orange-100 hover:text-orange-600 transition-colors duration-200",
        className
      )}
    >
      <span className="break-words leading-snug">{children}</span>
    </NavigationMenuLink>
  </li>
);

const HeroWithNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const navItems = [
    {
      title: "Services",
      subItems: [
        "Cloud Setup, Migration, and Management (Google, Microsoft, AWS, Zoho, GoDaddy)",
        "Digital Marketing Services (SEO, SEM, SMM)",
        "Website Development (Custom, E-Commerce, Responsive Design)",
        "IT Infrastructure Setup and Optimization",
        "Email Deliverability Audit and Optimization",
      ],
    },
    {
      title: "Solutions",
      subItems: [
        "Google Workspace Solutions",
        "Microsoft 365",
        "AWS Cloud Infrastructure",
        "Domain Registration",
        "Business Email Solutions",
      ],
    },
  ];

  const defaultFeatures = [
    {
      title: "Digital Experience Platforms",
      description:
        "Our data-driven strategies maximize ROI and are tailored to your business goals and audience.",
      icon: "/s1.png",
    },
    {
      title: "Web Design and Development",
      description:
        "Our website development services provide custom, responsive, and SEO-friendly designs.",
      icon: "/s2.png",
    },
    {
      title: "Cloud Setup and Management",
      description:
        "IT Dukes offers seamless cloud setup, migration, and management services for platforms.",
      icon: "/s3.png",
    },
  ];

  return (
    <section className="relative bg-[#fff5f2] bg-[url('/bg-img.jpg')] bg-cover bg-center bg-no-repeat bg-fixed pb-16 px-4 sm:px-6 lg:px-20 rounded-4xl">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between px-4 py-3 lg:hidden">
          <img src="/logo.png" alt="IT Dukes Logo" className="w-32" />
          <button
            className="text-black"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden lg:flex items-center justify-center px-8 py-4">
          <img src="/logo.png" alt="IT Dukes Logo" className="w-40" />
          <NavigationMenu className="flex-grow ml-10">
            <NavigationMenuList className="flex items-center gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title} className="relative">
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-700 hover:text-orange-600 font-semibold">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-2 w-max min-w-[18rem] shadow-lg bg-white border border-gray-200 rounded-md z-50">
                    <ul className="py-2 px-2 w-80">
                      {item.subItems.map((subItem, index) => (
                        <ListItem key={index} href="#">
                          {subItem}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="text-gray-700 hover:text-orange-600 font-semibold">
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="text-gray-700 hover:text-orange-600 font-semibold">
                  News & Articles
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="text-gray-700 hover:text-orange-600 font-semibold">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:bg-black text-white px-6 py-2 rounded-full ml-6">
            <Link href="#">Get Started</Link>
          </Button>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 p-4 space-y-4">
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={item.title}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="w-full text-left font-bold text-gray-700 hover:text-orange-600"
                  >
                    {item.title}
                  </button>
                  {openDropdown === index && (
                    <ul className="pl-4 space-y-2 mt-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href="#" className="block text-sm text-gray-600 hover:text-orange-600">
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li><Link href="#" className="block font-bold text-gray-700 hover:text-orange-600">About Us</Link></li>
              <li><Link href="#" className="block font-bold text-gray-700 hover:text-orange-600">News & Articles</Link></li>
              <li><Link href="#" className="block font-bold text-gray-700 hover:text-orange-600">Contact</Link></li>
              <li><Link href="#" className="block font-bold text-orange-600 border border-orange-600 rounded-full text-center py-2">Get Started</Link></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className={`pt-40 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 transition-all duration-1000 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
        <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ease-out delay-200 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
          <p className="text-sm font-semibold text-orange-600 mb-2">★ MICROSOFT 365 SOLUTIONS</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Enhance Productivity with Microsoft 365
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Empower your workforce with industry-leading tools like Teams, Outlook, and OneDrive. IT Dukes provides seamless setup, migration, and 24/7 support to drive efficiency and growth.
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-6">
            Over <span className="text-orange-600 font-bold text-3xl sm:text-4xl">150,000+ Users</span> All over the world
          </p>
          <button className="relative inline-block px-6 py-3 text-white font-medium bg-gradient-to-r from-orange-500 to-red-500 rounded-full overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
            <span className="relative z-10">GET STARTED TODAY</span>
          </button>
        </div>
        <div className={`relative w-full md:w-1/2 transition-all duration-1000 ease-out delay-400 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
          <img src="/Microsoft-365-Wheel.png" alt="Microsoft 365 Wheel" className="w-full max-w-md mx-auto" />
          <div className="absolute bottom-3 right-21 bg-white rounded-full shadow-lg px-4 py-2 flex items-center">
            <div>
              <p className="text-sm font-bold">24/7</p>
              <p className="text-xs text-gray-500">Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-12 px-2 sm:px-4 md:px-8 lg:px-12">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {defaultFeatures.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 h-full flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                <img src={feature.icon} alt={feature.title} className="mb-4 w-12 h-12" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroWithNavbar;