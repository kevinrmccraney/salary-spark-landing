
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { HandCoins, BarChart3, HeartHandshake, GraduationCap } from "lucide-react";

const services = [
  {
    icon: <HandCoins className="h-10 w-10 text-salary-600" />,
    title: "Salary Negotiation Coaching",
    description: "One-on-one coaching to prepare you for all aspects of the negotiation process, from initial offer to final agreement.",
    includes: ["Personalized strategy", "Script preparation", "Role-playing practice", "Unlimited email support"]
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-salary-600" />,
    title: "Compensation Analysis",
    description: "Get detailed insights into market rates for your skills, experience, and location to ensure you know your true value.",
    includes: ["Custom market research", "Compensation benchmarking", "Benefits valuation", "Total package assessment"]
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-salary-600" />,
    title: "Offer Review & Strategy",
    description: "Expert review of your job offers with actionable advice on what to negotiate and how to maximize your compensation.",
    includes: ["Offer evaluation", "Negotiation strategy", "Counter-offer development", "Risk assessment"]
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-salary-600" />,
    title: "Career Advancement Planning",
    description: "Long-term planning to position yourself for ongoing salary growth throughout your career trajectory.",
    includes: ["Career path mapping", "Promotion strategy", "Skill development plan", "Networking guidance"]
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support to help you negotiate with confidence and secure the compensation you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={cn(
                "bg-white rounded-xl p-8 shadow-sm border border-salary-100 hover:shadow-md transition-all duration-300 opacity-0 translate-y-10",
                "hover:border-salary-200 hover-lift"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 min-h-[80px]">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-salary-500 mr-2"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: "400ms" }}>
          <a
            href="#contact"
            className="inline-block bg-salary-600 hover:bg-salary-700 text-white px-6 py-3 rounded-full font-medium shadow-sm hover:shadow transition-all hover-lift"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
