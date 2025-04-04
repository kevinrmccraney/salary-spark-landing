
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
            Hands-on negotiation coaching to get you a higher salary. That's it.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-700">
            <p>
            We're not trying to collect your personal information, sell you an online course, or market artisanal coffee. Instead, we will provide you with strategies and tactics to get an increase in compensation during your most recent job search or in your current role.
            </p>
            <p>
              We believe that proper compensation isn't just about money—it's about recognizing your true value. Our data-driven approach combines industry research with personalized coaching to help you negotiate with confidence.
            </p>
            <p>
            Whether you're starting your first job right out of school or have been working for decades, we will work together to identify what your objectives are, and practice using psychological tools you can use to get what you want. Every client receives a custom strategy based on their specific situation, industry, and career goals.
            </p>
          </div>

          <div className="mt-8">
            <div className="font-semibold text-lg text-gray-900 mb-2">Our Promise</div>
            <div className="bg-salary-50 rounded-lg p-6 border border-salary-100">
              <p className="italic text-gray-700">
                "We're committed to helping you secure the best possible compensation package. We don't get paid unless you get paid."
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-salary-100 p-8 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <Users className="h-6 w-6 text-salary-600" />
                </div>
                <div className="text-2xl font-bold mb-1 text-salary-800">20+</div>
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
                <div className="text-2xl font-bold mb-1 text-salary-800">$22,500</div>
                <div className="text-sm text-gray-600">Avg. Increase</div>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <Award className="h-6 w-6 text-salary-600" />
                </div>
                <div className="text-2xl font-bold mb-1 text-salary-800">5+</div>
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
