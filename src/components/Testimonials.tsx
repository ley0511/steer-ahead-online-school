
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    age: 19,
    location: "Cannock",
    text: "Steve was brilliant! Really patient and helped me pass first time. His Suzuki Swift is lovely to drive and the dual controls made me feel safe whilst learning.",
    rating: 5,
    verified: true
  },
  {
    name: "Michael Thompson",
    age: 23,
    location: "Rugeley", 
    text: "After failing twice with another instructor, Steve got me through on my third attempt. 25 years experience really shows - highly recommend!",
    rating: 5,
    verified: true
  },
  {
    name: "Emma Williams",
    age: 17,
    location: "Heath Hayes",
    text: "Steve made learning to drive so much less stressful. The red Swift is easy to handle and Steve explains everything clearly. Passed with only 3 minors!",
    rating: 5,
    verified: true
  },
  {
    name: "James Parker",
    age: 28,
    location: "Hednesford",
    text: "Needed refresher lessons after years off the road. Steve was understanding and got my confidence back quickly. Professional service at fair prices.",
    rating: 5,
    verified: true
  },
  {
    name: "Lucy Davis",
    age: 20,
    location: "Stafford",
    text: "Steve's intensive course was perfect for me. Well structured lessons and plenty of practice. The dual control car made me feel secure throughout.",
    rating: 5,
    verified: true
  },
  {
    name: "Robert Clarke",
    age: 35,
    location: "Cannock",
    text: "Excellent instructor with years of experience. Steve is patient, professional and really knows the local test routes. Would definitely recommend.",
    rating: 5,
    verified: true
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from students who've passed their tests and become confident drivers 
            with Steve's expert instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 relative">
                <Quote className="w-8 h-8 text-green-500 opacity-20 absolute top-4 right-4" />
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Age {testimonial.age}, {testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
