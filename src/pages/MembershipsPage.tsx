import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { membershipPlans } from "../data/memberships";

export default function MembershipsPage() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "electric-blue":
        return {
          bg: "bg-electric-blue",
          text: "text-electric-blue",
          border: "border-electric-blue",
          bgLight: "bg-electric-blue/10",
          borderLight: "border-electric-blue/30",
        };

      case "lime-accent":
        return {
          bg: "bg-lime-accent",
          text: "text-lime-accent",
          border: "border-lime-accent",
          bgLight: "bg-lime-accent/10",
          borderLight: "border-lime-accent/30",
        };

      case "energy-orange":
        return {
          bg: "bg-energy-orange",
          text: "text-energy-orange",
          border: "border-energy-orange",
          bgLight: "bg-energy-orange/10",
          borderLight: "border-energy-orange/30",
        };

      default:
        return {
          bg: "bg-electric-blue",
          text: "text-electric-blue",
          border: "border-electric-blue",
          bgLight: "bg-electric-blue/10",
          borderLight: "border-electric-blue/30",
        };
    }
  };

  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
            <span className="text-electric-blue font-heading font-bold text-sm tracking-wider">FLEXIBLE PRICING</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Choose Your Plan</h1>

          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Select the membership that fits your lifestyle and fitness goals. All plans include access to our premium
            facilities.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in-delayed">
          {membershipPlans.map((plan) => {
            const colors = getColorClasses(plan.color);
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative bg-gradient-to-br from-dark-navy to-charcoal rounded-2xl border-2 ${
                  plan.popular ? "border-lime-accent" : colors.borderLight
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-lime-accent text-charcoal px-6 py-2 rounded-full font-heading font-bold text-sm">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className={`w-16 h-16 ${colors.bgLight} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  <h2 className="text-2xl font-heading font-bold text-white mb-2">{plan.name}</h2>

                  <div className="mb-6">
                    <div className="flex items-end gap-2 mb-2">
                      <span className={`text-5xl font-heading font-bold ${colors.text}`}>{plan.monthlyPrice}</span>

                      <span className="text-gray-400 font-body mb-2">IDR/month</span>
                    </div>

                    <div className="text-sm text-gray-400 font-body">
                      or {plan.annualPrice} IDR/year (save 2 months)
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />

                        <span className="text-gray-300 font-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-electric-blue/10 to-lime-accent/10 border border-electric-blue/30 rounded-2xl p-8 md:p-12 text-center animate-fade-in-delayed-2">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Corporate & Family Plans Available
          </h2>

          <p className="text-gray-300 font-body text-lg mb-6 max-w-2xl mx-auto">
            Looking for a custom solution for your team or family? We offer special rates for groups of 5 or more.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-electric-blue text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-lime-accent transition-all hover:scale-105"
          >
            Contact Us for Custom Plans
          </Link>
        </div>

        {/* Footer Feature Boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-dark-navy rounded-xl p-6 border border-electric-blue/20">
            <h3 className="text-electric-blue font-heading font-bold text-lg mb-2">No Joining Fee</h3>

            <p className="text-gray-400 font-body text-sm">Start your fitness journey with zero upfront costs</p>
          </div>

          <div className="bg-dark-navy rounded-xl p-6 border border-lime-accent/20">
            <h3 className="text-lime-accent font-heading font-bold text-lg mb-2">Cancel Anytime</h3>

            <p className="text-gray-400 font-body text-sm">No long-term contracts or hidden fees</p>
          </div>

          <div className="bg-dark-navy rounded-xl p-6 border border-energy-orange/20">
            <h3 className="text-energy-orange font-heading font-bold text-lg mb-2">Money-Back Guarantee</h3>

            <p className="text-gray-400 font-body text-sm">30-day satisfaction guarantee on all memberships</p>
          </div>
        </div>
      </div>
    </div>
  );
}
