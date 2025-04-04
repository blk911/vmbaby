
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-lg md:text-xl flex items-center">
            <span className="text-emerald-300">GAP</span>Univ
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu className="bg-transparent border-none">
            <NavigationMenuList className="flex gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn("px-3 py-2 text-white hover:text-emerald-300 transition-colors text-sm")}
                  href="#program"
                >
                  Program
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn("px-3 py-2 text-white hover:text-emerald-300 transition-colors text-sm")}
                  href="#testimonials"
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn("px-3 py-2 text-white hover:text-emerald-300 transition-colors text-sm")}
                  href="#schedule"
                >
                  Schedule
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button 
                  onClick={scrollToRegistration}
                  variant="outline" 
                  className="ml-2 border-emerald-400 text-white hover:bg-emerald-500 hover:text-white rounded-full text-sm py-1 h-auto"
                  size="sm"
                >
                  Register Now
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="text-white p-1 hover:bg-white/10"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-gradient-to-br from-violet-900 to-indigo-800 border-t border-white/10 py-4 px-4 shadow-lg backdrop-blur-lg">
          <nav className="flex flex-col space-y-3">
            <a href="#program" className="text-white hover:text-emerald-300 py-2 px-4 transition-colors" onClick={() => setIsOpen(false)}>
              Program
            </a>
            <a href="#testimonials" className="text-white hover:text-emerald-300 py-2 px-4 transition-colors" onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
            <a href="#schedule" className="text-white hover:text-emerald-300 py-2 px-4 transition-colors" onClick={() => setIsOpen(false)}>
              Schedule
            </a>
            <Button 
              onClick={scrollToRegistration}
              className="bg-emerald-500 hover:bg-emerald-600 text-white mt-2 w-full rounded-full"
            >
              Register Now
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navigation;
