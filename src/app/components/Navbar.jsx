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
import { Menu } from "lucide-react";

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
    <div>
      <div className="flex items-center justify-between px-4 py-2 md:hidden">
        <img src="/logo.png" alt="IT Dukes Logo" className="w-32" />
        <button
          className="text-black"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={28} />
        </button>
      </div>

      <div className="hidden md:block justify-items-center">
        <NavigationMenu className="relative z-40">
          <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem>
              <img src="/logo.png" alt="IT Dukes Logo" className="w-40" />
            </NavigationMenuItem>

            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:w-[300px] lg:w-[300px]">
                  <ul>
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
              <NavigationMenuLink
                href="#"
                className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold"
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold"
              >
                News & Articles
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="bg-transparent hover:bg-transparent hover:text-orange-600 font-bold"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button asChild className="bg-orange-600 w-40 rounded-3xl">
                <Link href="#">Get Started</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 p-4 space-y-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href="#" className="block font-bold">
                  {item.title}
                </Link>
                <ul className="pl-4 space-y-3">
                  {item.subItems.map((subItem, index) => (
                    <li key={index}>
                      <Link href="#" className="block text-sm">
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
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
};

export default Navbar;
