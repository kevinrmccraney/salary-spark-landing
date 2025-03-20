
import { ArrowRight, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-salary-50 via-white to-salary-50/20 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-salary-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-salary-100/30 blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-salary-100 text-salary-800 mb-6">
              <DollarSign size={16} className="mr-1" />
              <span className="text-sm font-medium">Get the salary you deserve</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-gray-900 mb-6">
              Expert Salary Negotiation for Career Success
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              We've helped professionals increase their offers by an average of 15-30%. 
              Don't leave money on the table.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-salary-600 hover:bg-salary-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center shadow-sm hover:shadow transition-all hover-lift">
                Book Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="bg-white text-salary-800 border border-salary-200 px-6 py-3 rounded-full font-medium inline-flex items-center justify-center hover:bg-salary-50 transition-colors hover-lift">
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-salary-100 rounded-2xl rotate-3 transform-gpu" />
              <div className="glass relative rounded-2xl p-6 overflow-hidden shadow-xl">
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
                    <div key={index} className={cn(
                      "py-3 px-4 rounded-lg",
                      index === 0 ? "bg-salary-600 text-white" : "bg-white"
                    )}>
                      <div className={cn(
                        "text-xl font-bold",
                        index === 0 ? "text-white" : "text-salary-600"
                      )}>{industry.value}</div>
                      <div className={cn(
                        "text-sm",
                        index === 0 ? "text-salary-100" : "text-gray-500"
                      )}>{industry.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
