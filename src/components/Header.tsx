import { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'memberships', label: 'Memberships' },
    { id: 'classes', label: 'Classes' },
    { id: 'training', label: 'Personal Training' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-charcoal/95 backdrop-blur-sm z-50 border-b border-electric-blue/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <Dumbbell className="w-8 h-8 text-electric-blue group-hover:text-lime-accent transition-colors" />
            <div className="text-left">
              <div className="text-xl font-heading font-bold text-white tracking-tight">
                BALI STRENGTH & FLOW
              </div>
              <div className="text-xs text-electric-blue font-body">
                Unleash Your Potential
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-body font-semibold transition-all hover:text-electric-blue ${
                  currentPage === item.id
                    ? 'text-electric-blue'
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('memberships')}
              className="bg-electric-blue text-charcoal px-6 py-2.5 rounded-md font-heading font-bold hover:bg-lime-accent transition-all hover:scale-105"
            >
              JOIN NOW
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-electric-blue/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 font-body font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'text-electric-blue bg-electric-blue/10'
                    : 'text-gray-300 hover:text-electric-blue hover:bg-electric-blue/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('memberships');
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-electric-blue text-charcoal px-6 py-3 rounded-md font-heading font-bold hover:bg-lime-accent transition-all"
            >
              JOIN NOW
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
