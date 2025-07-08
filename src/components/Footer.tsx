
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="w-8 h-8 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold">DriveRight</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional driving instruction with a personal touch. 
              Helping you become a safe, confident driver.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Standard Lessons</li>
              <li className="hover:text-white cursor-pointer transition-colors">Intensive Courses</li>
              <li className="hover:text-white cursor-pointer transition-colors">Test Preparation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Refresher Lessons</li>
              <li className="hover:text-white cursor-pointer transition-colors">Defensive Driving</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">About Me</li>
              <li className="hover:text-white cursor-pointer transition-colors">Testimonials</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>07123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>sarah@driveright.co.uk</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Manchester & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DriveRight. All rights reserved. | ADI License No: 123456</p>
        </div>
      </div>
    </footer>
  );
};
