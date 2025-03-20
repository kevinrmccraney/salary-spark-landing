
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
              We've helped professionals increase their offers by an average of 15-30%. 
              Don't leave money on the table.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-salary-600 hover:bg-salary-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center">
                Book Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="bg-white text-salary-800 border border-salary-200 px-6 py-3 rounded-full font-medium inline-flex items-center justify-center">
                Explore Services
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="p-6 bg-white rounded-xl shadow-sm mb-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold text-gray-900">Negotiation Results</div>
                  <div className="text-salary-600 text-sm font-medium">2023-2024</div>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Average Increase", value: "$17,500" },
                    { title: "Success Rate", value: "94%" },
                    { title: "Clients Served", value: "1,200+" }
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="text-gray-600">{stat.title}</div>
                      <div className="text-gray-900 font-bold">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center text-center">
                {[
                  { label: "Tech", value: "+24%" },
                  { label: "Finance", value: "+18%" },
                  { label: "Healthcare", value: "+15%" }
                ].map((industry, index) => (
                  <div key={index} className={
                    index === 0 
                      ? "py-3 px-4 rounded-lg bg-salary-600 text-white" 
                      : "py-3 px-4 rounded-lg bg-white"
                  }>
                    <div className={
                      index === 0 
                        ? "text-xl font-bold text-white" 
                        : "text-xl font-bold text-salary-600"
                    }>{industry.value}</div>
                    <div className={
                      index === 0 
                        ? "text-sm text-salary-100" 
                        : "text-sm text-gray-500"
                    }>{industry.label}</div>
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

export default Hero;
