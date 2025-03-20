
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-xl font-semibold mb-4">SalaryPro</div>
            <p className="text-gray-400 max-w-xs">
              Helping professionals negotiate better compensation packages since 2013.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-salary-600 transition-colors"
                  aria-label={`Visit our ${social} page`}
                >
                  <div className="h-5 w-5 bg-gray-400 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-lg font-medium mb-4">Services</div>
            <ul className="space-y-3">
              {[
                "Salary Negotiation",
                "Compensation Analysis",
                "Offer Review",
                "Career Planning",
                "Interview Coaching"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-lg font-medium mb-4">Resources</div>
            <ul className="space-y-3">
              {[
                "Salary Guides",
                "Negotiation Scripts",
                "Industry Reports",
                "Case Studies",
                "FAQ"
              ].map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-lg font-medium mb-4">Subscribe</div>
            <p className="text-gray-400 mb-4">
              Get our latest negotiation tips and industry insights.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-salary-500"
                  required
                />
                <button
                  type="submit"
                  className={cn(
                    "absolute right-1.5 top-1.5 h-9 w-9 flex items-center justify-center",
                    "bg-salary-600 rounded-md hover:bg-salary-700 transition-colors"
                  )}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} SalaryPro. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
