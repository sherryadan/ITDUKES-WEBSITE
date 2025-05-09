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

const StatsCard = () => {
  return (
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

      
  )
}

export default StatsCard
