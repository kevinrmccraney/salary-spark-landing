
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with SalaryPro increased my job offer by $25,000. Their approach gave me the confidence to ask for what I'm worth.",
    name: "Sarah J.",
    role: "Product Manager",
    company: "Tech Industry",
    increase: "+28%"
  },
  {
    quote: "I was about to accept my first offer when a friend recommended SalaryPro. Their guidance helped me negotiate an additional $18K plus better benefits.",
    name: "Michael T.",
    role: "Software Engineer",
    company: "Startup",
    increase: "+22%"
  },
  {
    quote: "The personalized coaching and practice sessions were invaluable. I secured a compensation package that was 15% higher than initially offered.",
    name: "Elena R.",
    role: "Marketing Director",
    company: "E-commerce",
    increase: "+15%"
  },
  {
    quote: "As someone who hates negotiating, SalaryPro gave me the tools and confidence to successfully ask for more. Highly recommend their services.",
    name: "David L.",
    role: "Finance Manager",
    company: "Banking",
    increase: "+19%"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section
      id="testimonials"
      className="py-24 px-6 md:px-12 bg-salary-50 relative"
    >
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from professionals who took control of their compensation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-md">
            <div
              className={cn(
                "transition-opacity duration-500",
                isAnimating ? "opacity-0" : "opacity-100"
              )}
            >
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
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === activeIndex
                      ? "w-6 bg-salary-600"
                      : "w-2 bg-gray-300"
                  )}
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
