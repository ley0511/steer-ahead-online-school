
import { Button } from '@/components/ui/button';
import { Car, Phone, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-green-600/90 z-10"></div>
      
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gray-800">
        <img 
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Driving lesson background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Car className="w-12 h-12 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              DriveRight
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Professional driving instruction with over 15 years of experience. 
            Learn to drive safely and confidently with our expert instructors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Lesson
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg transition-all duration-300">
              Learn More
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="w-px h-6 bg-blue-200"></div>
            <div>500+ Students Taught</div>
            <div className="w-px h-6 bg-blue-200"></div>
            <div>95% Pass Rate</div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
