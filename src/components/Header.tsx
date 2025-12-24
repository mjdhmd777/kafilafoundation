import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/kafila-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "About Organization", href: "/about" },
      { name: "Vision & Mission", href: "/about#vision" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Recognitions", href: "/about#recognitions" },
    ],
  },
  {
    name: "Our Work",
    href: "/projects",
    children: [
      { name: "Projects Overview", href: "/projects" },
      { name: "SDG Mapping", href: "/projects#sdg" },
      { name: "Impact", href: "/projects#impact" },
    ],
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    children: [
      { name: "Volunteer", href: "/get-involved#volunteer" },
      { name: "Internships", href: "/get-involved#internship" },
      { name: "Partner With Us", href: "/get-involved#partner" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Kafila Foundation" className="h-14 w-auto" />
          <div className="hidden sm:block">
            <h1 className={cn(
              "font-heading font-bold text-lg leading-tight transition-colors",
              isScrolled ? "text-primary" : "text-primary"
            )}>
              Kafila Foundation
            </h1>
            <p className={cn(
              "text-xs transition-colors",
              isScrolled ? "text-muted-foreground" : "text-muted-foreground"
            )}>
              Promising People for a Better Tomorrow
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1",
                  location.pathname === item.href
                    ? "text-primary bg-primary/5"
                    : isScrolled
                    ? "text-foreground hover:text-primary hover:bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.name}
                {item.children && (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                )}
              </Link>

              {/* Dropdown */}
              {item.children && openDropdown === item.name && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-background rounded-xl shadow-xl border p-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="donate" size="default" asChild>
            <Link to="/donate">
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t animate-slide-in-left">
          <div className="container-wide py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-secondary"
                  )}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t">
              <Button variant="donate" size="lg" className="w-full" asChild>
                <Link to="/donate">
                  <Heart className="h-4 w-4" />
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
