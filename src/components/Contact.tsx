
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

declare global {
  interface Window {
    Calendly: any;
  }
}

const Contact = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Add Calendly scripts
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/k11m13/salary-negotiation-initial-call?hide_event_type_details=1&hide_gdpr_banner=1'
      });
    } else {
      window.open('https://calendly.com/k11m13/salary-negotiation-initial-call?hide_event_type_details=1&hide_gdpr_banner=1', '_blank');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-salary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us by email or schedule a call. We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-salary-600 text-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Book a Call</h3>
            <p className="mb-6">
              Schedule a free 15-minute consultation to discuss your needs and how we can help.
            </p>
            <Button
              onClick={openCalendly}
              className="bg-white text-salary-800 px-6 py-3 rounded-lg font-medium hover:bg-salary-100 transition-colors"
            >
              Book Your Free Call
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Send Us an Email
            </h3>
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                Have questions or want to discuss how we can help with your salary negotiation?
                Reach out directly via email, and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:hello@seattlesalarynegotiation.com" 
                className="inline-flex items-center bg-salary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-salary-700 transition-colors"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
