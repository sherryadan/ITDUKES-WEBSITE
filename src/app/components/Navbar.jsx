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
        "block w-full px-4 py-3 text-sm text-gray-700 text-left hover:bg-orange-100 hover:text-orange-600 transition-colors duration-200",
        className
      )}
    >
      <span className="break-words leading-snug">{children}</span>
    </NavigationMenuLink>
  </li>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [hideNavbar, setHideNavbar] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);

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

  // Scroll detection logic
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideNavbar(true); // Hide on scroll down
      } else {
        setHideNavbar(false); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-300",
        hideNavbar ? "translate-y-full" : "translate-y-0"
      )}
    >
      {/* Mobile/Tablet Header */}
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

      {/* Desktop Navigation */}
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
        <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:bg-black text-white px-6 py-2 rounded-full ml-6">
          <Link href="#">Get Started</Link>
        </Button>
      </nav>

      {/* Mobile/Tablet Menu */}
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
                        <Link
                          href="#"
                          className="block text-sm text-gray-600 hover:text-orange-600"
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
