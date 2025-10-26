import { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  User,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert(
      'Thank you for contacting us! We will get back to you within 24 hours.'
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
            <span className="text-electric-blue font-heading font-bold text-sm tracking-wider">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Ready to start your fitness journey? We're here to help. Reach out
            with any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-navy border border-electric-blue/30 rounded-lg pl-11 pr-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-navy border border-electric-blue/30 rounded-lg pl-11 pr-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-navy border border-electric-blue/30 rounded-lg pl-11 pr-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="+62 XXX XXXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark-navy border border-electric-blue/30 rounded-lg px-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="trial">Free Trial</option>
                  <option value="membership">Membership Information</option>
                  <option value="pt">Personal Training</option>
                  <option value="classes">Group Classes</option>
                  <option value="corporate">Corporate/Group Plans</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-dark-navy border border-electric-blue/30 rounded-lg pl-11 pr-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-electric-blue text-charcoal py-4 rounded-lg font-heading font-bold text-lg hover:bg-lime-accent transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-8">
                Visit Our Gym
              </h2>

              <div className="space-y-6">
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

                <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-lime-accent/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-lime-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-lime-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-heading font-bold text-lg mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:getfit@balistrengthflow.com"
                        className="text-gray-300 font-body hover:text-lime-accent transition-colors"
                      >
                        getfit@balistrengthflow.com
                      </a>
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

            <div className="bg-gradient-to-br from-lime-accent/10 to-electric-blue/10 border border-lime-accent/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 font-body mb-6">
                Book your free trial and experience the Bali Strength & Flow
                difference
              </p>
              <button className="group bg-lime-accent text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-electric-blue transition-all hover:scale-105 inline-flex items-center gap-2">
                Book Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-white mb-6 text-center">
            Find Us on the Map
          </h2>
          <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-lime-accent/20 rounded-2xl border-2 border-electric-blue/30 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-24 h-24 text-electric-blue mx-auto mb-4" />
              <p className="text-gray-400 font-body text-sm italic">
                [Placeholder: Google Maps embed showing Jalan Raya Seminyak No.
                88, Bali]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
