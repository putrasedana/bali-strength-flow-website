import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/memberships", label: "Memberships" },
    { path: "/classes", label: "Classes" },
    { path: "/training", label: "Personal Training" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-dark-navy/5 backdrop-blur-sm z-50 border-b border-electric-blue/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Dumbbell className="w-8 h-8 text-electric-blue group-hover:text-lime-accent transition-colors" />

            <div className="text-left">
              <div className="font-heading font-bold text-white tracking-tight">BALI STRENGTH & FLOW</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-body font-semibold transition-all hover:text-electric-blue ${
                    isActive ? "text-electric-blue" : "text-gray-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-electric-blue/20">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 font-body font-semibold transition-colors ${
                    isActive
                      ? "text-electric-blue bg-electric-blue/10"
                      : "text-gray-300 hover:text-electric-blue hover:bg-electric-blue/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
