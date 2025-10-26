import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';

interface MembershipsPageProps {
  onNavigate: (page: string) => void;
}

export default function MembershipsPage({ onNavigate }: MembershipsPageProps) {
  const plans = [
    {
      name: 'Basic Fitness',
      icon: Zap,
      monthlyPrice: '299k',
      annualPrice: '3,190k',
      color: 'electric-blue',
      popular: false,
      features: [
        'Access to cardio zone',
        'Access to strength equipment',
        '2 Group classes per week',
        'Locker & shower facilities',
        'Free parking',
        'Mobile app access',
      ],
    },
    {
      name: 'Pro Athlete',
      icon: Star,
      monthlyPrice: '499k',
      annualPrice: '5,390k',
      color: 'lime-accent',
      popular: true,
      features: [
        'Access to all gym areas',
        '4 Group classes per week',
        'Free fitness assessment',
        '10% off PT sessions',
        'Nutrition consultation',
        'Guest pass (2/month)',
        'Priority class booking',
        'Complimentary towel service',
      ],
    },
    {
      name: 'Ultimate Champion',
      icon: Crown,
      monthlyPrice: '799k',
      annualPrice: '8,590k',
      color: 'energy-orange',
      popular: false,
      features: [
        'Unlimited gym access',
        'Unlimited group classes',
        '4 PT sessions per month',
        'Monthly body composition analysis',
        'Personalized meal plan',
        'Recovery zone access (sauna, ice bath)',
        'Unlimited guest passes',
        'Free gym merchandise',
        'VIP member events',
        'Concierge service',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'electric-blue':
        return {
          bg: 'bg-electric-blue',
          text: 'text-electric-blue',
          border: 'border-electric-blue',
          bgLight: 'bg-electric-blue/10',
          borderLight: 'border-electric-blue/30',
        };
      case 'lime-accent':
        return {
          bg: 'bg-lime-accent',
          text: 'text-lime-accent',
          border: 'border-lime-accent',
          bgLight: 'bg-lime-accent/10',
          borderLight: 'border-lime-accent/30',
        };
      case 'energy-orange':
        return {
          bg: 'bg-energy-orange',
          text: 'text-energy-orange',
          border: 'border-energy-orange',
          bgLight: 'bg-energy-orange/10',
          borderLight: 'border-energy-orange/30',
        };
      default:
        return {
          bg: 'bg-electric-blue',
          text: 'text-electric-blue',
          border: 'border-electric-blue',
          bgLight: 'bg-electric-blue/10',
          borderLight: 'border-electric-blue/30',
        };
    }
  };

  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
            <span className="text-electric-blue font-heading font-bold text-sm tracking-wider">
              FLEXIBLE PRICING
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Select the membership that fits your lifestyle and fitness goals.
            All plans include access to our premium facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color);
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-dark-navy to-charcoal rounded-2xl border-2 ${
                  plan.popular
                    ? 'border-lime-accent scale-105 lg:scale-110'
                    : colors.borderLight
                } transition-all hover:scale-105 ${
                  plan.popular ? 'lg:hover:scale-115' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-lime-accent text-charcoal px-6 py-2 rounded-full font-heading font-bold text-sm">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div
                    className={`w-16 h-16 ${colors.bgLight} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-end gap-2 mb-2">
                      <span
                        className={`text-5xl font-heading font-bold ${colors.text}`}
                      >
                        {plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 font-body mb-2">
                        IDR/month
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 font-body">
                      or {plan.annualPrice} IDR/year (save 2 months)
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`}
                        />
                        <span className="text-gray-300 font-body text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onNavigate('contact')}
                    className={`group w-full ${
                      plan.popular
                        ? 'bg-lime-accent hover:bg-electric-blue'
                        : colors.bg + ' hover:bg-lime-accent'
                    } text-charcoal py-4 rounded-lg font-heading font-bold text-lg transition-all flex items-center justify-center gap-2`}
                  >
                    Select Plan
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-electric-blue/10 to-lime-accent/10 border border-electric-blue/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Corporate & Family Plans Available
          </h2>
          <p className="text-gray-300 font-body text-lg mb-6 max-w-2xl mx-auto">
            Looking for a custom solution for your team or family? We offer
            special rates for groups of 5 or more.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-electric-blue text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-lime-accent transition-all hover:scale-105"
          >
            Contact Us for Custom Plans
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-dark-navy rounded-xl p-6 border border-electric-blue/20">
            <h3 className="text-electric-blue font-heading font-bold text-lg mb-2">
              No Joining Fee
            </h3>
            <p className="text-gray-400 font-body text-sm">
              Start your fitness journey with zero upfront costs
            </p>
          </div>
          <div className="bg-dark-navy rounded-xl p-6 border border-lime-accent/20">
            <h3 className="text-lime-accent font-heading font-bold text-lg mb-2">
              Cancel Anytime
            </h3>
            <p className="text-gray-400 font-body text-sm">
              No long-term contracts or hidden fees
            </p>
          </div>
          <div className="bg-dark-navy rounded-xl p-6 border border-energy-orange/20">
            <h3 className="text-energy-orange font-heading font-bold text-lg mb-2">
              Money-Back Guarantee
            </h3>
            <p className="text-gray-400 font-body text-sm">
              30-day satisfaction guarantee on all memberships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
