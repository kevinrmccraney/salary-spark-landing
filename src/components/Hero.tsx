
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-24 px-6 md:px-12 bg-salary-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-salary-100 text-salary-800 mb-6">
              <span className="text-sm font-medium">Get the salary you deserve</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Expert Salary Negotiation for Career Success
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              We've helped professionals increase their offers substantially, sometimes almost 50%. 
              Don't leave money on the table.
            </p>
            
            <div>
              <a href="#contact" className="bg-salary-600 hover:bg-salary-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center">
                Book Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-salary-100">
              <h2 className="text-2xl font-bold text-salary-800 mb-4">Ready to maximize your worth?</h2>
              <p className="text-gray-600 mb-6">
                Our expert negotiators have helped professionals just like you secure better compensation packages.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Personalized negotiation strategies",
                  "Market rate compensation data",
                  "One-on-one coaching sessions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-salary-600 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
