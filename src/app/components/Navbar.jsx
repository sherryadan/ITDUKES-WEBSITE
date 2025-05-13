"use client";
import React from "react";
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
import { Menu, X } from "lucide-react";

const ListItem = ({ children, href, className }) => (
  <li className="w-full">
    <NavigationMenuLink
      href={href}
      className={cn(
        "block w-full px-4 py-3 text-sm text-center text-gray-800 hover:bg-orange-600 hover:text-white transition-colors duration-200",
        className
      )}
    >
      <span className="break-words leading-snug">{children}</span>
    </NavigationMenuLink>
  </li>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <img src="/logo.png" alt="IT Dukes Logo" className="w-32" />
        <button
          className="text-black"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <nav className="hidden md:flex items-center justify-between px-8 py-4">
        <img src="/logo.png" alt="IT Dukes Logo" className="w-40" />
        <NavigationMenu className="flex-grow ml-10">
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-700 hover:text-orange-600 font-semibold">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-72">
                  <ul>
                    {item.subItems.map((subItem, index) => (
                      <ListItem key={index} href="#" >
                        {subItem}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-gray-700 hover:text-orange-600 font-semibold"
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-gray-700 hover:text-orange-600 font-semibold"
              >
                News & Articles
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-gray-700 hover:text-orange-600 font-semibold"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full ml-6">
          <Link href="#">Get Started</Link>
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 p-4 space-y-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.title}>
                <span className="block font-bold text-gray-700">{item.title}</span>
                <ul className="pl-4 space-y-2">
                  {item.subItems.map((subItem, index) => (
                    <li key={index}>
                      <Link href="#" className="block text-sm text-gray-600 hover:text-orange-600">
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <Link href="#" className="block font-bold text-gray-700 hover:text-orange-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="block font-bold text-gray-700 hover:text-orange-600">
                News & Articles
              </Link>
            </li>
            <li>
              <Link href="#" className="block font-bold text-gray-700 hover:text-orange-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="block font-bold text-orange-600 border border-orange-600 rounded-full text-center py-2">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
