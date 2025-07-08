import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Clock, Star, Shield, Award, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Steve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With 25 years of driving instruction experience, Steve is dedicated to providing 
            high-quality, patient, and effective driving lessons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
              </div>
              <p className="text-gray-700">25 years of professional driving instruction.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Car className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Modern Vehicle</h3>
              </div>
              <p className="text-gray-700">Training in a 2024 Red Suzuki Swift with dual controls.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Safe & Patient</h3>
              </div>
              <p className="text-gray-700">Creating a supportive environment for all learners.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Flexible Hours</h3>
              </div>
              <p className="text-gray-700">Lessons available 7 days a week to fit your schedule.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Pass Plus Registered</h3>
              </div>
              <p className="text-gray-700">Further develop your skills after passing your test.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Cannock & Area</h3>
              </div>
              <p className="text-gray-700">Serving Cannock, Rugeley, Hednesford, and surrounding areas.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
