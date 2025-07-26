
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="bg-yellow-500 text-white relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Kano Pillars FC */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/a8f16e82-757d-41bd-ab71-a9a735271f0d.png" 
                  alt="Kano Pillars FC Logo" 
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-bold font-poppins">Kano Pillars FC</h3>
                  <p className="text-white text-sm font-semibold">Sai Masu Gida</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                Pride of Kano since 1990. Nigeria's premier football club dedicated to excellence, 
                passion, and bringing glory to our beloved fans across the nation.
              </p>
              <div className="text-white font-bold text-lg">
                "Total Football - Total Pride"
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-poppins border-b-2 border-white pb-2 inline-block">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">Home</Link>
                <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">About</Link>
                <Link to="/team" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">Team</Link>
                <Link to="/fixtures" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">Fixtures</Link>
                <Link to="/gallery" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">Gallery</Link>
                <Link to="/news" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">News</Link>
                <Link to="/fanzone" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">Fan Zone</Link>
                <Link to="/store" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">Store</Link>
              </div>
            </div>

            {/* Follow Us & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-poppins border-b-2 border-white pb-2 inline-block">
                Follow Us & Newsletter
              </h3>
              
              {/* Social Media Icons */}
              <div className="space-y-4">
                <p className="text-white/90">Stay connected with us on social media</p>
                <div className="flex space-x-4">
                  <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                    <Twitter className="h-5 w-5" />
                  </div>
                  <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                    <Youtube className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-white/90 font-medium">Subscribe to our newsletter</p>
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white/20 border-white/30 text-white placeholder-white/70 flex-1"
                  />
                  <Button className="bg-white text-yellow-500 hover:bg-white/90 font-bold uppercase px-6 rounded-lg shadow-lg transition-all duration-300">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 pt-4">
                <div className="flex items-center space-x-2 text-sm text-white/90">
                  <MapPin className="h-4 w-4 text-white" />
                  <span>Sani Abacha Stadium, Kano</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/90">
                  <Phone className="h-4 w-4 text-white" />
                  <span>+234 803 123 4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/90">
                  <Mail className="h-4 w-4 text-white" />
                  <span>info@kanopillarsfc.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © 2025 Kano Pillars FC • All Rights Reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-white/80 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default Footer;
