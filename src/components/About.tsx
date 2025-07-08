
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: "500+", label: "Students Taught" },
  { icon: Trophy, value: "95%", label: "Pass Rate" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: CheckCircle, value: "100%", label: "Satisfaction Rate" }
];

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Your Instructor
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hi, I'm Sarah Johnson, a fully qualified driving instructor with over 15 years of experience. 
              I'm passionate about helping students become safe, confident drivers through patient, 
              professional instruction tailored to each individual's learning style.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I hold a Grade A ADI license and am committed to providing the highest standard of 
              driving instruction. My calm, encouraging approach has helped hundreds of students 
              pass their tests and become lifelong safe drivers.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Grade A ADI Qualified Instructor</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">DBS Checked for Your Safety</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Fully Insured Dual Control Vehicle</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Flexible Scheduling Available</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c240d1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Sarah Johnson - Driving Instructor"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-gray-600 mb-4">Grade A ADI Qualified Instructor</p>
                <div className="text-sm text-gray-500">
                  "Teaching people to drive safely is not just my job - it's my passion. 
                  Every student is unique, and I adapt my teaching style to help them succeed."
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
