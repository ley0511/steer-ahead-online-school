
import { Card, CardContent } from '@/components/ui/card';
import { Star, User } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Lauren",
      text: "Steve is an absolutely fantastic driving instructor! I started lessons with him in November as an incredibly nervous learner. Steve was so patient, reassuring and understanding. 9 months later and I have just passed my test first time. Would 100% recommend! Thanks for everything Steve!!!",
      rating: 5,
      timeAgo: "a year ago"
    },
    {
      name: "Longmod01",
      text: "Steve is a fantastic instructor who also happens to be one you can actually have a laugh with. Passed on my first test despite it featuring all the stuff I was least confident in",
      rating: 5,
      timeAgo: "4 months ago"
    },
    {
      name: "Dominic Wood",
      text: "I am really lucky to get an instructor like Steve, he is amazing and is patient with my driving whilst I was learning. He is very quick at analyzing mistakes. Thanks for helping me pass. Thank you Steve 👍",
      rating: 5,
      timeAgo: "10 months ago"
    },
    {
      name: "rosie hopkins",
      text: "thank you so much steve, passed first time with all thanks to you. best instructor out there",
      rating: 5,
      timeAgo: "3 months ago"
    },
    {
      name: "vinod kumar",
      text: "I am really lucky to get an instructor like Steve, he is amazing. He is very quick at analyzing mistakes and provide proper inputs to pass in the exam. His planning is awesome, will split in a way he will cover all topics and routes by the exam date. Thank you Steve 👍",
      rating: 5,
      timeAgo: "a year ago"
    },
    {
      name: "Adam Wycherley",
      text: "I had failed my test twice with a different instructor and then I came to Steve. He taught me how to drive much better than my previous instructor and after only 8 lessons I passed. Would highly recommend to anyone looking to pass there test.",
      rating: 5,
      timeAgo: "4 years ago"
    },
    {
      name: "Ian Redfern",
      text: "Can't thank Steve enough, as a parent he ensured regular updates were given each lesson and gave us a copy of test routes that might be used.. this was great allowing us to practice routes in between lessons.. Our son passed first time👍",
      rating: 5,
      timeAgo: "2 years ago"
    },
    {
      name: "Thomas Manship",
      text: "Passed first time. Professional, enjoyable lessons. As a nervous driver, I couldn't have asked for a better instructor.",
      rating: 5,
      timeAgo: "a year ago"
    },
    {
      name: "Paige Haytree",
      text: "Just passed first time with Steve! Can't thank him enough for being brilliant, my lessons have been so fun I'm sad we won't be doing anymore! Would recommend him to anyone 💗",
      rating: 5,
      timeAgo: "3 years ago"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Animated L signs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-10 h-10 bg-red-500 text-white rounded-md flex items-center justify-center font-bold animate-pulse">
          L
        </div>
        <div className="absolute top-1/2 right-5 w-8 h-8 bg-red-500 text-white rounded-md flex items-center justify-center font-bold text-sm animate-bounce delay-300">
          L
        </div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-red-500 text-white rounded-md flex items-center justify-center font-bold text-lg animate-pulse delay-700">
          L
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from real students who've learned to drive with Steve
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">{testimonial.text}</p>
                <p className="text-xs sm:text-sm text-gray-400">{testimonial.timeAgo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
