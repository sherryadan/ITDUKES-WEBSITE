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

const Footer = () => {
  return (
 <footer className="bg-gray-900 text-white py-10 w-full">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img src="/logolight.png" alt="IT Dukes" className="mb-4 w-32" />
            <h1 className="text-2xl font-bold">Your Success, Powered by IT Dukes</h1>
            <br />
            <p className="text-sm text-gray-300">
              IT Dukes delivers innovative IT solutions, specializing in Google
              Workspace, Microsoft 365, and AWS Cloud Services. We empower
              businesses with scalable, secure, and efficient technologies,
              backed by expert support and a customer-first approach. Let us
              help you unlock your business’s full potential!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Useful links.</h4>
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
            <h4 className="text-lg font-bold mb-4">Help & Support.</h4>
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

  )
}

export default Footer
