import { MapPin, Mail, Phone, Clock, ArrowRight, MessageCircle } from "lucide-react";

import { contactInfo } from "../data/contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
            <span className="text-electric-blue font-heading font-bold text-sm tracking-wider">GET IN TOUCH</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Contact Us</h1>

          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Ready to start your fitness journey? Reach out to us on WhatsApp or via email — we'll respond as soon as
            possible.
          </p>
        </header>

        {/* Contact Options */}
        <section aria-labelledby="contact-options-heading" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-delayed">
            <h2 id="contact-options-heading" className="text-3xl font-heading font-bold text-white mb-8">
              Talk to Us Directly
            </h2>

            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href={contactInfo.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Bali Strength & Flow on WhatsApp"
                className="flex items-center justify-between bg-lime-accent text-charcoal px-6 py-5 rounded-lg font-heading font-bold text-lg transition-all hover:scale-105 group"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  {contactInfo.whatsapp.label}
                </span>

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Email */}
              <a
                href={contactInfo.email.url}
                aria-label={`Email ${contactInfo.email.address}`}
                className="flex items-center justify-between bg-electric-blue text-charcoal px-6 py-5 rounded-lg font-heading font-bold text-lg transition-all hover:scale-105 group"
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  {contactInfo.email.label}
                </span>

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <address className="space-y-8 not-italic animate-fade-in-delayed-2">
            {/* Location */}
            <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-electric-blue/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-electric-blue" />
                </div>

                <div>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">Location</h3>

                  <p className="text-gray-300 font-body leading-relaxed">
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.city}
                    <br />
                    {contactInfo.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-energy-orange/20 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-energy-orange/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-energy-orange" />
                </div>

                <div>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">Phone</h3>

                  <a
                    href={contactInfo.phone.url}
                    className="text-gray-300 font-body hover:text-energy-orange transition-colors"
                  >
                    {contactInfo.phone.display}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-electric-blue/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-electric-blue" />
                </div>

                <div className="flex-1">
                  <h3 className="text-white font-heading font-bold text-lg mb-3">Opening Hours</h3>

                  <div className="space-y-2 text-gray-300 font-body">
                    {contactInfo.hours.map((item) => (
                      <div key={item.days} className="flex justify-between gap-4">
                        <span>{item.days}</span>

                        <span className="text-electric-blue font-semibold text-right">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </address>
        </section>

        {/* Map */}
        <section aria-labelledby="map-heading animate-fade-in-delayed-3">
          <h2 id="map-heading" className="text-3xl font-heading font-bold text-white mb-6 text-center">
            Find Us on the Map
          </h2>

          <div className="aspect-video rounded-2xl overflow-hidden border-2 border-electric-blue/30 shadow-lg">
            <iframe
              title="Map showing the location of Bali Strength & Flow in Seminyak, Bali"
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
