import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "Oblivent transformed our online presence completely. Our website traffic increased by 400% and conversions by 250% within just 3 months. Their team is incredibly professional and delivers beyond expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "The video campaign they created for us went viral and brought in over $500K in new business. Their creative approach and attention to detail is unmatched in the industry.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "Our brand identity was completely transformed. The new design increased our brand recognition by 300% and helped us secure major partnerships. Absolutely phenomenal work!",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-electric-violet/5 via-sky-blue/5 to-neon-lime/5 dark:from-electric-violet/10 dark:via-sky-blue/10 dark:to-neon-lime/10" data-testid="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            What Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="testimonial-slider overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              data-testid="testimonial-track"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl p-8 mx-4 border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-400 text-xl">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            data-testid="prev-testimonial"
          >
            <ChevronLeft className="text-electric-violet w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            data-testid="next-testimonial"
          >
            <ChevronRight className="text-electric-violet w-5 h-5" />
          </Button>

          {/* Slider Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? "bg-electric-violet" : "bg-gray-300 dark:bg-gray-600"
                }`}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
