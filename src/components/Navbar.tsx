
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/k11m13/salary-negotiation-initial-call?hide_event_type_details=1&hide_gdpr_banner=1'
      });
    } else {
      window.open('https://calendly.com/k11m13/salary-negotiation-initial-call?hide_event_type_details=1&hide_gdpr_banner=1', '_blank');
    }
  };

  const navLinks = [
    { name: "Services", href: "services" },
    { name: "Testimonials", href: "testimonials" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-salary-800 font-semibold text-xl md:text-2xl"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Seattle Salary Negotiation
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className="text-gray-700 hover:text-salary-600 font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="bg-salary-600 hover:bg-salary-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-sm hover:shadow"
            onClick={openCalendly}
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 z-40 pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className="text-gray-800 hover:text-salary-600 text-lg font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="bg-salary-600 hover:bg-salary-700 text-white px-5 py-3 rounded-full font-medium text-center shadow-sm"
            onClick={openCalendly}
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
