
import { Button } from '@/components/ui/button';
import { Car, Phone, Star } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:07817367804';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated L signs */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-10 left-10 w-12 h-12 bg-red-500 text-white rounded-md flex items-center justify-center font-bold text-xl animate-bounce">
          L
        </div>
        <div className="absolute top-32 right-20 w-10 h-10 bg-red-500 text-white rounded-md flex items-center justify-center font-bold text-lg animate-pulse">
          L
        </div>
        <div className="absolute bottom-32 left-20 w-14 h-14 bg-red-500 text-white rounded-md flex items-center justify-center font-bold text-xl animate-bounce delay-500">
          L
        </div>
        <div className="absolute bottom-20 right-10 w-10 h-10 bg-red-500 text-white rounded-md flex items-center justify-center font-bold text-lg animate-pulse delay-1000">
          L
        </div>
      </div>

      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-green-600/90 z-10"></div>
      
      {/* Background image - Busy London scene */}
      <div className="absolute inset-0 bg-gray-800">
        <img 
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Busy London street scene"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Car className="w-8 h-8 sm:w-10 md:w-12 text-yellow-400 mr-2 sm:mr-4" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              STEVE'S Driving School
            </h1>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-blue-100 max-w-2xl mx-auto leading-relaxed px-2">
            Professional driving instruction with 25 years of experience. 
            Learn to drive safely and confidently in our modern Suzuki Swift.
          </p>

          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-yellow-300 font-semibold">
            2024 Red Suzuki Swift • Dual Control Vehicle • Cannock Area
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={handleCallClick}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call 07817 367 804
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 bg-white/10 backdrop-blur-sm w-full sm:w-auto"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-1" />
              <span>25 Years Experience</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-blue-200"></div>
            <div>Modern Dual Control Car</div>
            <div className="hidden sm:block w-px h-6 bg-blue-200"></div>
            <div>Cannock & Surrounding Areas</div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
