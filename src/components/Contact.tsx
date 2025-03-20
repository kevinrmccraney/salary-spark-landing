import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For GitHub Pages (static site), we'll just show a message
    // explaining how to contact instead of simulating a form submission
    setTimeout(() => {
      toast({
        title: "Static Site Notice",
        description: "This is a static site. In a real implementation, this form would send an email or store data in a database.",
        variant: "default",
      });
      setIsSubmitting(false);
      // We don't clear the form to allow the user to copy their message
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-salary-50 relative"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us by email or phone, or fill out this form and we'll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div
            ref={formRef}
            className="bg-white rounded-xl shadow-sm p-8 opacity-0 translate-y-10 transition-all duration-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-salary-500 focus:border-transparent"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-salary-500 focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-salary-500 focus:border-transparent min-h-[120px]"
                  placeholder="Tell us about your situation..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-salary-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all",
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-salary-700 hover-lift"
                )}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div
            ref={infoRef}
            className="opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-salary-600 text-white rounded-xl shadow-sm p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Book a Call</h3>
              <p className="mb-6">
                Schedule a free 15-minute consultation to discuss your needs and how we can help.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-salary-800 px-6 py-3 rounded-lg font-medium hover:bg-salary-100 transition-colors hover-lift"
              >
                Book Your Free Call
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-salary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-salary-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <a
                      href="mailto:hello@salarypro.com"
                      className="text-salary-700 hover:text-salary-800"
                    >
                      hello@salarypro.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-salary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-salary-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Phone</div>
                    <a
                      href="tel:+11234567890"
                      className="text-salary-700 hover:text-salary-800"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-salary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-salary-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">
                      Business Hours
                    </div>
                    <div>Monday - Friday: 9AM - 6PM EST</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-salary-100">
                <div className="font-semibold text-gray-900 mb-4">
                  Common Questions
                </div>
                <div className="space-y-4">
                  {[
                    "How soon can we start working together?",
                    "Do you work with international clients?",
                    "What is your success rate?",
                  ].map((question, index) => (
                    <div
                      key={index}
                      className="bg-salary-50 rounded-lg p-4 cursor-pointer hover:bg-salary-100 transition-colors"
                    >
                      {question}
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

export default Contact;
