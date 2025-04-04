
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We went back and forth for about two days and eventually negotiated a substantial total compensation increase from my previous position.",
    name: "Sarah M.",
    role: "Software Developer",
    company: "Tech Industry",
    increase: "+40%"
  },
  {
    quote: "[SSN] helped me review a prospective job offer and come up with a template to counter the offer. [They] provided communication strategies targeted to increase the starting salary, bonus, and stock with the recruiter. Ultimately, [SSN] provided me with the tools to negotiate and secure a 7% increase in total compensation.",
    name: "Tiffany K.",
    role: "UX Researcher",
    company: "Startup",
    increase: "+7%"
  },
  {
    quote: "[SSN] helped me navigate a complex international negotiation and ultimately helped me win several thousand dollars as part of my signing bonus, and a more substantial portion of my salary in USD.",
    name: "James K.",
    role: "Professor",
    company: "Foreign University",
    increase: "+11%"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-salary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from professionals who took control of their compensation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white shadow-md">
            <div className="grid md:grid-cols-3 min-h-[300px]">
              <div className="bg-salary-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Quote className="h-10 w-10 mx-auto mb-4 opacity-50" />
                  <div className="text-4xl font-bold mb-2">
                    {testimonials[activeIndex].increase}
                  </div>
                  <div className="text-salary-100">Salary Increase</div>
                </div>
              </div>
              <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-8">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[activeIndex].role},{" "}
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-salary-600 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={
                    index === activeIndex
                      ? "h-2 w-6 rounded-full bg-salary-600"
                      : "h-2 w-2 rounded-full bg-gray-300"
                  }
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-salary-600 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
