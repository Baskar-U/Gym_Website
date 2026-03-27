import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/trainers", label: "Trainers" },
  { href: "/transformations", label: "Results" },
  { href: "/membership", label: "Membership" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`} 
              alt="Warriors Fitness Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl md:text-2xl text-white leading-none tracking-tight">WARRIORS</span>
              <span className="font-sans font-bold text-primary text-[10px] md:text-xs tracking-[0.2em] leading-none">FITNESS CENTER</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary relative group
                  ${location === link.href ? "text-primary" : "text-white/80"}`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-300
                  ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button size="sm">Join Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-background border-l border-white/10 z-50 p-6 flex flex-col lg:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-display font-black text-xl text-white">MENU</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white p-2 bg-white/5 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`text-xl font-display font-bold uppercase tracking-wide transition-colors
                      ${location === link.href ? "text-primary" : "text-white/80"}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-[1px] w-full bg-white/10 my-4" />
                <Link href="/contact" className="mt-4">
                  <Button className="w-full">Join Now</Button>
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
