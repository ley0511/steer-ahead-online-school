
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Clock, Award, Users, Shield, MapPin } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: "Standard Driving Lessons",
    description: "Professional one-on-one driving instruction for beginners and experienced drivers",
    price: "£35",
    duration: "per hour",
    features: ["Dual control vehicle", "Flexible scheduling", "Pick-up service"]
  },
  {
    icon: Clock,
    title: "Intensive Courses",
    description: "Fast-track your learning with our intensive driving courses",
    price: "£450",
    duration: "10 hours",
    features: ["Rapid progression", "Theory test support", "Test booking included"]
  },
  {
    icon: Award,
    title: "Test Preparation",
    description: "Focused lessons to prepare you for your practical driving test",
    price: "£40",
    duration: "per hour",
    features: ["Mock tests", "Route familiarization", "Confidence building"]
  },
  {
    icon: Users,
    title: "Refresher Lessons",
    description: "Perfect for drivers who need to regain confidence behind the wheel",
    price: "£35",
    duration: "per hour",
    features: ["Personalized approach", "Anxiety management", "Skill assessment"]
  },
  {
    icon: Shield,
    title: "Defensive Driving",
    description: "Advanced techniques to help you become a safer, more confident driver",
    price: "£45",
    duration: "per hour",
    features: ["Hazard perception", "Advanced techniques", "Safety focus"]
  },
  {
    icon: MapPin,
    title: "Area Knowledge",
    description: "Learn to navigate local roads and test routes with confidence",
    price: "£35",
    duration: "per hour",
    features: ["Local expertise", "Test routes", "Navigation skills"]
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our range of professional driving instruction services, 
            tailored to meet your individual needs and learning style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-green-600">{service.price}</span>
                  <span className="text-gray-500 ml-2">{service.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
