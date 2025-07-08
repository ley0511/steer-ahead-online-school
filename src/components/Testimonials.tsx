
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: "Lauren",
    text: "Steve is an absolutely fantastic driving instructor! I started lessons with him in November as an incredibly nervous learner. Steve was so patient, reassuring and understanding. 9 months later (give or take a few weeks off for holiday) and I have just passed my test first time. Would 100% recommend! Thanks for everything Steve!!!",
    timeAgo: "a year ago",
    rating: 5
  },
  {
    name: "Longmod01",
    text: "Steve is a fantastic instructor who also happens to be one you can actually have a laugh with. Passed on my first test despite it featuring all the stuff I was least confident in",
    timeAgo: "4 months ago",
    rating: 5
  },
  {
    name: "Kylesh Ahil",
    text: "Steve is an amazing driving instructor. He helped me all throughout my lessons. He advised me through all the dos and don't's, and I enjoyed coming to his lessons everytime. Thank you Steve :)",
    timeAgo: "9 months ago",
    rating: 5
  },
  {
    name: "Dominic Wood",
    text: "I am really lucky to get an instructor like Steve , he is amazing and is patient with my driving whilst I was learning. He is very quick at analyzing mistakes. Thanks for helping me pass Thank you Steve 👍",
    timeAgo: "10 months ago",
    rating: 5
  },
  {
    name: "rosie hopkins",
    text: "thank you so much steve, passed first time with all thanks to you. best instructor out there",
    timeAgo: "3 months ago",
    rating: 5
  },
  {
    name: "vinod kumar",
    text: "I am really lucky to get an instructor like Steve , he is amazing. He is very quick at analyzing mistakes and provide proper inputs to pass in the exam. His planning is awesome , will split in a way he will cover all topics and routes by the exam date. Thank you Steve 👍",
    timeAgo: "a year ago",
    rating: 5
  },
  {
    name: "Devon Preece",
    text: "Absolutely fantastic! I joined Steve with basic driving experience, Steve quickly shaped me into a confident driver.",
    timeAgo: "4 years ago",
    rating: 5
  },
  {
    name: "Thu Hoang",
    text: "Having driving lessons from Steve was an amazing blast, he taught me so much stuff when going out and about the roads.",
    timeAgo: "9 months ago",
    rating: 5
  },
  {
    name: "Elliot Farmer",
    text: "Really good and straight up with you and tells what you have done wrong and what you have done really well",
    timeAgo: "a month ago",
    rating: 5
  },
  {
    name: "Adam Wycherley",
    text: "I had failed my test twice with a different instructor and then I came to Steve. He taught me how to drive much better than my previous instructor and after only 8 lessons I passed. Would highly recommend to anyone looking to pass there test.",
    timeAgo: "4 years ago",
    rating: 5
  },
  {
    name: "Alfie Pugh",
    text: "Amazing driving instructor, I would 100% recommend to anyone learning to drive. Very laid back and relaxed but safe and professional at the same time. I passed first time with only 1 minor fault, 3 months after I started learning.",
    timeAgo: "4 years ago",
    rating: 5
  },
  {
    name: "Ian Redfern",
    text: "Can't thank Steve enough, as a parent he ensured regular updates were given each lesson and gave us a copy of test routes that might be used.. this was great allowing us to practice routes In between lessons.. Our son passed first time👍",
    timeAgo: "2 years ago",
    rating: 5
  },
  {
    name: "Samuel Pickering",
    text: "Absolutely brilliant instructor, friendly yet professional, helped me pass first time and lessons always worked around my availability, could not praise him more. Thanks Steve 👍",
    timeAgo: "a year ago",
    rating: 5
  },
  {
    name: "Thomas Manship",
    text: "Passed first time. Professional, enjoyable lessons. As a nervous driver, I couldn't have asked for a better instructor.",
    timeAgo: "a year ago",
    rating: 5
  },
  {
    name: "Paige Haytree",
    text: "Just passed first time with Steve! Can't thank him enough for being brilliant, my lessons have been so fun I'm sad we won't be doing anymore! Would recommend him to anyone 💗",
    timeAgo: "3 years ago",
    rating: 5
  },
  {
    name: "Donna Davies",
    text: "Passed today 1st time.with our steve, he's 100% amazing. He's given me confidence I never even knew I had, I couldn't of done it without his help. Thanks so much.",
    timeAgo: "4 years ago",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Google Reviews</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from Google Maps from students who've passed their tests with Steve's expert instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 12).map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 relative">
                <Quote className="w-8 h-8 text-green-500 opacity-20 absolute top-4 right-4" />
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.timeAgo}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Google Review
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Over 40+ 5-star reviews on Google Maps</p>
          <a 
            href="https://maps.app.goo.gl/FGxDPkNmaNV1RaYZ7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline font-semibold"
          >
            View all reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};
