import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Only section with animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
            <span className="text-electric-blue font-heading font-bold text-sm tracking-wider">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Ready to start your fitness journey? Reach out to us on WhatsApp or
            via email — we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Options - No animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-8">
              Talk to Us Directly
            </h2>

            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-lime-accent text-charcoal px-6 py-5 rounded-lg font-heading font-bold text-lg transition-all hover:scale-105 group"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Chat via WhatsApp
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Email */}
              <a
                href="mailto:getfit@balistrengthflow.com"
                className="flex items-center justify-between bg-electric-blue text-charcoal px-6 py-5 rounded-lg font-heading font-bold text-lg transition-all hover:scale-105 group"
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  Send Email
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Location and Info - No animation */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-electric-blue/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">
                    Location
                  </h3>
                  <p className="text-gray-300 font-body leading-relaxed">
                    Jalan Raya Seminyak No. 88
                    <br />
                    Seminyak, Bali 80361
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-energy-orange/20 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-energy-orange/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-energy-orange" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+6236198765543"
                    className="text-gray-300 font-body hover:text-energy-orange transition-colors"
                  >
                    +62 361 987 6543
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-electric-blue/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-heading font-bold text-lg mb-3">
                    Opening Hours
                  </h3>
                  <div className="space-y-2 text-gray-300 font-body">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-electric-blue font-semibold">
                        5:00 AM - 11:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="text-electric-blue font-semibold">
                        6:00 AM - 10:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - No animation */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-white mb-6 text-center">
            Find Us on the Map
          </h2>

          <div className="aspect-video rounded-2xl overflow-hidden border-2 border-electric-blue/30 shadow-lg">
            <iframe
              title="Bali Strength & Flow Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4775841364453!2d115.16278307593375!3d-8.689990391365184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2470c8c6f12cf%3A0x4bb392a853c2d3d7!2sJl.%20Raya%20Seminyak%20No.88%2C%20Seminyak%2C%20Kec.%20Kuta%2C%20Kabupaten%20Badung%2C%20Bali%2080361%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1730025800000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
