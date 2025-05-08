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

export function NavBar() {
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
              <NavigationMenuItem >
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
              <NavigationMenuItem >
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:w-[300px] lg:w-[300px]" >
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
        </div>
      </section>

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
