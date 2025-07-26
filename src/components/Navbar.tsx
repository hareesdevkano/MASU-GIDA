
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Fixtures", path: "/fixtures" },
    { name: "Gallery", path: "/gallery" },
    { name: "News", path: "/news" },
    { name: "Fan Zone", path: "/fanzone" },
    { name: "Store", path: "/store" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/a8f16e82-757d-41bd-ab71-a9a735271f0d.png" 
                  alt="Kano Pillars FC Logo" 
                  className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-black tracking-tight font-poppins ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  KANO PILLARS FC
                </span>
                <span className={`text-xs font-semibold ${
                  scrolled ? 'text-green-600' : 'text-yellow-300'
                }`}>
                  SAI MASU GIDA
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-bold font-poppins transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? scrolled 
                      ? "text-green-600" 
                      : "text-yellow-300"
                    : scrolled
                      ? "text-gray-700 hover:text-green-600"
                      : "text-white/90 hover:text-yellow-300"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              asChild
              className="bg-yellow-500 hover:bg-green-600 text-white font-bold px-6 py-2 uppercase rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/store">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:bg-white/20`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-lg shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-3 rounded-lg text-base font-bold font-poppins transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Button 
                  asChild
                  className="w-full bg-yellow-500 hover:bg-green-600 text-white font-bold uppercase rounded-lg shadow-lg"
                >
                  <Link to="/store" onClick={() => setIsOpen(false)}>Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
