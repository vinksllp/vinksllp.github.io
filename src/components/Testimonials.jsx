import { useState, useEffect } from 'react';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials] = useState(testimonialsData);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-secondary-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-secondary-300">
            Hear what our clients say about working with VINKS Services
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="p-8 md:p-12">
                    {/* Quote Icon */}
                    <div className="text-primary-600 mb-6">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-xl md:text-2xl text-secondary-700 leading-relaxed mb-8 italic">
                      "{testimonial.testimonial}"
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-bold text-lg text-secondary-900">
                          {testimonial.name}
                        </div>
                        <div className="text-secondary-600">{testimonial.role}</div>
                        <div className="text-primary-600 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-secondary-50 text-secondary-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-secondary-50 text-secondary-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 pb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary-600 w-8'
                      : 'bg-secondary-300 hover:bg-secondary-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-400 mb-2">98%</div>
            <div className="text-secondary-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-400 mb-2">4.9/5</div>
            <div className="text-secondary-300">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-400 mb-2">50+</div>
            <div className="text-secondary-300">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
