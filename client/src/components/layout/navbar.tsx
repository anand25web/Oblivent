import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import LogoLight from "@assets/Add a heading_20250809_115854_0000_1756097199382.png";
import LogoDark from "@assets/Add a heading_20250809_121205_0000_1756097191995.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/legal", label: "Legal" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-deep-gray/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <img 
              src={LogoLight}
              alt="Oblivent Logo"
              className="h-8 w-auto dark:hidden transition-opacity duration-300"
              data-testid="logo-light"
            />
            <img 
              src={LogoDark}
              alt="Oblivent Logo"
              className="h-8 w-auto hidden dark:block transition-opacity duration-300"
              data-testid="logo-dark"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-gray-700 dark:text-gray-300 hover:text-electric-violet dark:hover:text-electric-violet transition-colors duration-200",
                  location === link.href && "text-electric-violet"
                )}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-lg"
              data-testid="theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <Button className="hidden md:block bg-gradient-to-r from-electric-violet to-sky-blue text-white hover:shadow-lg hover:shadow-electric-violet/25 transition-all duration-300 animate-pulse-glow">
              Get Free Quote
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-gray-700 dark:text-gray-300 hover:text-electric-violet dark:hover:text-electric-violet transition-colors duration-200 py-2",
                    location === link.href && "text-electric-violet"
                  )}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-4 bg-gradient-to-r from-electric-violet to-sky-blue text-white">
                Get Free Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
