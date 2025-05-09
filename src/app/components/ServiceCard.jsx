import React from 'react'
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

const ServiceCard = () => {
  return (
   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/girl.png"
              alt="IT Dukes Illustration"
              className="w-full max-w-md mx-auto md:mx-0"
            />
            <div className="absolute top-2 left-0 bg-white rounded-full shadow-lg px-4 py-2 flex items-center">
              <div>
                <p className="text-sm font-bold text-purple-600">700+</p>
                <p className="text-xs text-gray-500">Project Done</p>
              </div>
            </div>

            <div className="absolute bottom-5 right-15  bg-white rounded-full shadow-lg px-4 py-2 flex items-center ">
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
  )
}

export default ServiceCard
