
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your driving journey? Contact me today to book your first lesson 
            or ask any questions about my services.
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
                <p className="text-2xl font-semibold text-gray-900 mb-2">07123 456 789</p>
                <p className="text-gray-600">Available 7 days a week, 8am - 8pm</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 text-green-500 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-900 mb-2">sarah@driveright.co.uk</p>
                <p className="text-gray-600">I'll respond within 24 hours</p>
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
                <p className="text-gray-900 mb-2">Manchester & Surrounding Areas</p>
                <p className="text-gray-600">Including Salford, Stockport, Oldham, and Bolton</p>
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
                  <p>Monday - Friday: 8am - 8pm</p>
                  <p>Saturday: 8am - 6pm</p>
                  <p>Sunday: 10am - 4pm</p>
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
                  Email Address
                </label>
                <Input type="email" placeholder="your.email@example.com" />
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
                  placeholder="Tell me about your driving experience and what you'd like to achieve..."
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
