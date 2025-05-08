"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";

export function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="relative w-full">
      <section className="bg-[#fff5f2] py-16 px-4 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-4xl">
        <div className="flex items-center justify-between px-4 py-2 md:hidden">
          <img src="/logo.png" alt="IT Dukes Logo" className="w-32" />
          <button
            className="text-black"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <Menu size={28} />
          </button>
        </div>
        <div className="hidden md:block">
          <NavigationMenu className="relative z-50">
            <NavigationMenuList className="flex items-center gap-2">
              <NavigationMenuItem>
                <img src="/logo.png" alt="IT Dukes Logo" className="w-40" />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className=" md:w-[300px] lg:w-[300px]">
                  <ul>
                    <ListItem href="#">
                      Cloud Setup Migration, And Management (Google, Microsoft,
                      AWS, Zoho, GoDaddy)
                    </ListItem>
                    <ListItem href="#">
                      Digital Marketing Services (SEO,SEM,SMM)
                    </ListItem>
                    <ListItem href="#">
                      Website Development (Custom, E-Commerce and Responsive
                      Design)
                    </ListItem>
                    <ListItem href="#">
                      IT Infrastructure Setup and Optimization
                    </ListItem>
                    <ListItem href="#">
                      Email Deliverabilty Audit and Optimization
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:w-[300px] lg:w-[300px]">
                  <ul className="p-2">
                    <ListItem href="#">Google Workspace Solutions</ListItem>
                    <ListItem href="#">Microsoft 365</ListItem>
                    <ListItem href="#">AWS Cloud Infrastructure</ListItem>
                    <ListItem href="#">Domain Registration</ListItem>
                    <ListItem href="#">Business Email Solutions</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold"
                >
                  <Link href="#"> About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  href="#"
                  className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold"
                >
                  <Link href="#">News & Articles</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold"
                >
                  <Link href="#">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button asChild className="bg-orange-600 w-40 rounded-3xl">
                  <Link href="#">Get Started</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
        </div>
      </section>
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/girl.png"
              alt="IT Dukes Illustration"
              className="w-full max-w-md mx-auto md:mx-0"
            />
            <div className="absolute top-0 left-0 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2">
              <div>
                <p className="text-sm font-bold text-purple-600">700+</p>
                <p className="text-xs text-gray-500">Project Done</p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2">
              <div>
                <p className="text-sm font-bold text-red-600">300+</p>
                <p className="text-xs text-gray-500">Happy Client</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-orange-500 font-bold text-sm mb-2">
              * ABOUT IT DUKES
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-snug">
              Empowering Businesses with IT Excellence
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to IT Dukes, your one-stop destination for cutting-edge IT
              solutions and cloud services. We specialize in helping businesses
              achieve their goals faster, smarter, and more efficiently by
              leveraging the latest technology innovations.
              <br />
              As trusted partners for <strong>Google Workspace</strong>,{" "}
              <strong>Microsoft 365</strong>, <strong>AWS</strong>,{" "}
              <strong>GoDaddy</strong>, and <strong>Zoho</strong>, we provide
              tailored solutions that enhance collaboration, boost productivity,
              and optimize IT infrastructure.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition">
              EXPLORE US
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 mt-4">
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4 ">
              <img src="/completeproject.png" alt="Projects Completed" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">721</h3>
            <p className="text-gray-600">Completed Projects</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">
              <img src="/satisfiedcustomer.png" alt="Customer Satisfied" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">300</h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">
              <img src="/experiencedstaff.png" alt="Experienced Staff" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50</h3>
            <p className="text-gray-600">Experienced Staff</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">
              <img src="/awardswin.png" alt="" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">30+</h3>
            <p className="text-gray-600">Awards Win</p>
          </div>
        </div>

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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
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
      </section>
      <footer className="bg-gray-900 text-white py-10 w-full">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img src="/logolight.png" alt="IT Dukes" className="mb-4 w-32" />
            <p className="text-sm text-gray-300">
              IT Dukes delivers innovative IT solutions, specializing in Google
              Workspace, Microsoft 365, and AWS Cloud Services. We empower
              businesses with scalable, secure, and efficient technologies,
              backed by expert support and a customer-first approach. Let us
              help you unlock your business’s full potential!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Useful links.</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Help & Support.</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Troubleshooting Guide</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <span>📍 9898 Bissonnet St Ste 375D Houston, TX 77036</span>
              </li>
              <li>
                <span>📞 +1 347 913 6517</span>
              </li>
              <li>
                <span>✉️ consult@itdukes.com</span>
              </li>
              <li>
                <span>✉️ support@itdukes.com</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          COPYRIGHT © 2024 IT DUKES LLC. ALL RIGHTS RESERVED
        </div>
      </footer>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 p-4 space-y-4">
          <ul className="space-y-3">
            <li>
              <Link href="#" className="block font-bold">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="block font-bold">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="#" className="block font-bold">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="block font-bold">
                News & Articles
              </Link>
            </li>
            <li>
              <Link href="#" className="block font-bold">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="block font-bold text-orange-600">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li className="w-full">
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block w-full px-4 py-3 text-sm text-center text-gray-800 hover:bg-orange-600 hover:text-white transition-colors duration-200",
              className
            )}
            {...props}
          >
            <span className="break-words leading-snug">{children}</span>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
