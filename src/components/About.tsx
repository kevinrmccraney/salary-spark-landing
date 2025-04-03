
import { Award, Briefcase, HandCoins, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Seattle Salary Negotiation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've been helping professionals maximize their compensation for over a decade.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-700">
            <p>
              Founded by former hiring managers and HR professionals, Seattle Salary Negotiation brings insider knowledge to the negotiation table. Our team has sat on both sides of the salary discussion, giving us unique insights into what works—and what doesn't.
            </p>
            <p>
              We believe that proper compensation isn't just about money—it's about recognizing your true value. Our data-driven approach combines industry research with personalized coaching to help you negotiate with confidence.
            </p>
            <p>
              Every client receives a custom strategy based on their specific situation, industry, and career goals. We don't use cookie-cutter approaches because we know your career is unique.
            </p>
          </div>

          <div className="mt-8">
            <div className="font-semibold text-lg text-gray-900 mb-2">Our Promise</div>
            <div className="bg-salary-50 rounded-lg p-6 border border-salary-100">
              <p className="italic text-gray-700">
                "We're committed to helping you secure the best possible compensation package. If we don't believe we can improve your offer, we'll tell you upfront—no charges, no obligations."
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-salary-100 p-8 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <Users className="h-6 w-6 text-salary-600" />
                </div>
                <div className="text-2xl font-bold mb-1 text-salary-800">1,200+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <Briefcase className="h-6 w-6 text-salary-600" />
                </div>
                <div className="text-2xl font-bold mb-1 text-salary-800">94%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <HandCoins className="h-6 w-6 text-salary-600" />
                </div>
                <div className="text-2xl font-bold mb-1 text-salary-800">$17,500</div>
                <div className="text-sm text-gray-600">Avg. Increase</div>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <Award className="h-6 w-6 text-salary-600" />
                </div>
                <div className="text-2xl font-bold mb-1 text-salary-800">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
