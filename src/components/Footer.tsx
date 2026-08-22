import { Dumbbell, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { path: "/memberships", label: "Memberships" },
    { path: "/classes", label: "Classes" },
    { path: "/training", label: "Personal Training" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-charcoal border-t border-electric-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Dumbbell className="w-8 lg:w-10 h-8 lg:h-10 text-electric-blue" />

              <div className="text-lg font-heading font-bold text-white">BALI STRENGTH & FLOW</div>
            </Link>

            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Bali's premier gym for strength, conditioning, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-electric-blue transition-colors font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4">Opening Hours</h3>

            <ul className="space-y-2 text-gray-400 font-body text-sm">
              <li>Monday - Friday</li>
              <li className="text-electric-blue">5:00 AM - 11:00 PM</li>

              <li className="mt-3">Weekend</li>
              <li className="text-electric-blue">6:00 AM - 10:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4">Contact</h3>

            <ul className="space-y-3 text-gray-400 font-body text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-electric-blue mt-0.5 flex-shrink-0" />

                <span>Jalan Raya Seminyak No. 88, Bali</span>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-electric-blue flex-shrink-0" />

                <a href="mailto:getfit@balistrengthflow.com" className="hover:text-electric-blue transition-colors">
                  getfit@balistrengthflow.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-electric-blue flex-shrink-0" />

                <a href="tel:+6236198765543" className="hover:text-electric-blue transition-colors">
                  +62 361 987 6543
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>

              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-electric-blue/20 pt-8 text-center text-gray-500 font-body text-sm">
          <p>© 2026 Bali Strength & Flow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
