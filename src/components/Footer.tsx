import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-6">
              <img
                src="/placeholder.svg"
                alt="Workist For IT"
                className="h-16 w-auto"
              />
            </Link>
            <a href="#top" className="text-white/80 hover:text-white">
              Back to top
            </a>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">COMPANY</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/about" className="text-white/80 hover:text-white">
                  About Us
                </Link>
                <Link to="/locations" className="text-white/80 hover:text-white">
                  Locations
                </Link>
                <Link to="/careers" className="text-white/80 hover:text-white">
                  Careers
                </Link>
                <Link to="/news" className="text-white/80 hover:text-white">
                  News & Events
                </Link>
              </div>
            </div>

            {/* Website Links */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">WEBSITE</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/privacy" className="text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-white/80 hover:text-white">
                  Terms & Conditions
                </Link>
                <Link to="/contact" className="text-white/80 hover:text-white">
                  Contact Us
                </Link>
                <Link to="/sitemap" className="text-white/80 hover:text-white">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center border-t border-white/20 pt-6">
          <p className="text-white/80">
            © {new Date().getFullYear()} Workist For IT Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;