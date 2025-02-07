
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#040842] text-white p-4">
      <div className="max-w-md w-full">
        {/* 404 Number */}
        <div className="text-center mb-8">
          <h1 className="text-9xl font-bold text-orange-500 mb-2">404</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto" />
        </div>

        {/* Main Message */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-4">
            We&apos;re currently updating this page to bring you the best experience. 
            The page you&apos;re looking for might have been removed, renamed, or is 
            temporarily unavailable.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <a href="/" className="block">
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              Return to Home
            </Button>
          </a>
          
          {/* Newsletter Signup */}
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter to be the first to know about our latest updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
