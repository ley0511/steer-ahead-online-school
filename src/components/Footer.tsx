
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:07817367804';
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 relative overflow-hidden">
      {/* Animated L signs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-5 right-5 w-8 h-8 bg-red-500 text-white rounded-md flex items-center justify-center font-bold text-sm animate-bounce">
          L
        </div>
        <div className="absolute bottom-5 left-5 w-10 h-10 bg-red-500 text-white rounded-md flex items-center justify-center font-bold animate-pulse delay-500">
          L
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Car className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mr-2" />
              <span className="text-lg sm:text-2xl font-bold">STEVE'S Driving School</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Professional driving instruction with 25 years of experience. 
              Helping you become a safe, confident driver in Cannock and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer transition-colors">Standard Lessons</li>
              <li className="hover:text-white cursor-pointer transition-colors">Intensive Courses</li>
              <li className="hover:text-white cursor-pointer transition-colors">Test Preparation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Refresher Lessons</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pass Plus Course</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer transition-colors">About Steve</li>
              <li className="hover:text-white cursor-pointer transition-colors">Testimonials</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-white cursor-pointer transition-colors">Book Online</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <button 
                  onClick={handleCallClick}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  07817 367 804
                </button>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Cannock & Surrounding Areas</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/FGxDPkNmaNV1RaYZ7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} STEVE'S Driving School. All rights reserved. | 25 Years Experience</p>
        </div>
      </div>
    </footer>
  );
};
