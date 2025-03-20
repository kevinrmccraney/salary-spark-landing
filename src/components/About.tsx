
import { Award, Briefcase, HandCoins, Users } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-6 w-6 text-salary-600" />,
    value: "1,200+",
    label: "Clients Served",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-salary-600" />,
    value: "94%",
    label: "Success Rate",
  },
  {
    icon: <HandCoins className="h-6 w-6 text-salary-600" />,
    value: "$17,500",
    label: "Avg. Increase",
  },
  {
    icon: <Award className="h-6 w-6 text-salary-600" />,
    value: "10+",
    label: "Years Experience",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About SalaryPro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've been helping professionals maximize their compensation for over a decade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 text-gray-700">
              <p>
                Founded by former hiring managers and HR professionals, SalaryPro brings insider knowledge to the negotiation table. Our team has sat on both sides of the salary discussion, giving us unique insights into what works—and what doesn't.
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
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-salary-100 p-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={
                    index === 0
                      ? "text-center p-6 rounded-lg bg-salary-600 text-white"
                      : "text-center p-6 rounded-lg bg-salary-50 text-gray-900"
                  }
                >
                  <div className="flex justify-center mb-3">
                    {index === 0 ? (
                      <Users className="h-6 w-6 text-white" />
                    ) : (
                      stat.icon
                    )}
                  </div>
                  <div
                    className={
                      index === 0 
                        ? "text-2xl md:text-3xl font-bold mb-1 text-white" 
                        : "text-2xl md:text-3xl font-bold mb-1 text-salary-800"
                    }
                  >
                    {stat.value}
                  </div>
                  <div
                    className={
                      index === 0 
                        ? "text-sm text-salary-100" 
                        : "text-sm text-gray-600"
                    }
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-salary-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Industry Experience
              </h3>
              <div className="space-y-4">
                {[
                  { industry: "Technology", percentage: 40 },
                  { industry: "Finance", percentage: 25 },
                  { industry: "Healthcare", percentage: 20 },
                  { industry: "Other Industries", percentage: 15 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.industry}</span>
                      <span className="text-salary-800 font-medium">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-salary-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-salary-600 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
