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
     
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
        
        

       
      </section>
      
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
