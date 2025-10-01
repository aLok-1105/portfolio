import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Profile", href: "#profile" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Responsibilities", href: "#responsibilities" },
  { name: "Achievements", href: "#achievements" },
  // { name: "Hobbies", href: "#hobbies" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-xl ${
        isScrolled ? "shadow-sm py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold font-heading">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center lg:hidden space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-background/95 backdrop-blur-xl border-t z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6 bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-lg py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
