import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 md:hidden">
          <img src="/logo.png" alt="IT Dukes Logo" className="w-32" />
          <button
            className="text-black"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <Menu size={28} />
          </button>
        </div>
        <div className="hidden md:block justify-items-center">
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
        </div>
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
    
  )
}




export default Navbar
