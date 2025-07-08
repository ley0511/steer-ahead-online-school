
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Car } from 'lucide-react';

export const Contact = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:07817367804';
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Animated L signs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-5 w-8 h-8 bg-red-500 text-white rounded-md flex items-center justify-center font-bold text-sm animate-pulse">
          L
        </div>
        <div className="absolute top-40 right-10 w-10 h-10 bg-red-500 text-white rounded-md flex items-center justify-center font-bold animate-bounce delay-700">
          L
        </div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-red-500 text-white rounded-md flex items-center justify-center font-bold text-lg animate-pulse delay-300">
          L
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Ready to start your driving journey? Contact Steve today to book your first lesson 
            or ask any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Phone className="w-5 h-5 text-green-500 mr-2" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <button 
                  onClick={handleCallClick}
                  className="text-xl sm:text-2xl font-semibold text-blue-600 hover:text-blue-800 mb-2 transition-colors"
                >
                  07817 367 804
                </button>
                <p className="text-gray-600 text-sm sm:text-base">Available Monday to Friday, 7am - 4:30pm</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <MapPin className="w-5 h-5 text-green-500 mr-2" />
                  Coverage Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900 mb-2 text-sm sm:text-base">Cannock & Surrounding Areas</p>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">Including Rugeley, Hednesford, Heath Hayes, and Stafford</p>
                <a 
                  href="https://maps.app.goo.gl/FGxDPkNmaNV1RaYZ7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline mt-2 inline-block text-sm sm:text-base"
                >
                  View on Google Maps
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Car className="w-5 h-5 text-green-500 mr-2" />
                  Training Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900 mb-2 text-sm sm:text-base">2024 Red Suzuki Swift (3 Door)</p>
                <p className="text-gray-600 text-sm sm:text-base">Dual control vehicle with L plates • Modern and reliable</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Clock className="w-5 h-5 text-green-500 mr-2" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-gray-900 text-sm sm:text-base">
                  <p><strong>Monday:</strong> 7am - 4:30pm</p>
                  <p><strong>Tuesday:</strong> 7am - 4:30pm</p>
                  <p><strong>Wednesday:</strong> 7am - 4:30pm</p>
                  <p><strong>Thursday:</strong> 7am - 4:30pm</p>
                  <p><strong>Friday:</strong> 7am - 4:30pm</p>
                  <p><strong>Saturday:</strong> Closed</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <MessageCircle className="w-5 h-5 text-green-500 mr-2" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interested In
                </label>
                <Input placeholder="e.g., Standard lessons, Intensive course" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell Steve about your driving experience and what you'd like to achieve..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
