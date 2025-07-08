
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Car } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your driving journey? Contact Steve today to book your first lesson 
            or ask any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 text-green-500 mr-2" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-gray-900 mb-2">07817 367 804</p>
                <p className="text-gray-600">Available Monday to Friday, 7am - 4:30pm</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-500 mr-2" />
                  Coverage Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900 mb-2">Cannock & Surrounding Areas</p>
                <p className="text-gray-600">Including Rugeley, Hednesford, Heath Hayes, and Stafford</p>
                <a 
                  href="https://maps.app.goo.gl/FGxDPkNmaNV1RaYZ7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="w-5 h-5 text-green-500 mr-2" />
                  Training Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900 mb-2">2024 Red Suzuki Swift (3 Door)</p>
                <p className="text-gray-600">Dual control vehicle with L plates • Modern and reliable</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 text-green-500 mr-2" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-gray-900">
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
              <CardTitle className="flex items-center">
                <MessageCircle className="w-5 h-5 text-green-500 mr-2" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
