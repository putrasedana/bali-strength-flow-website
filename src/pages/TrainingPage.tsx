import { trainers, trainingBenefits, trainingReasons, trainingPrices, trainingPricingNote } from "../data/training";

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-energy-orange/10 border border-energy-orange/30 rounded-full">
            <span className="text-energy-orange font-heading font-bold text-sm tracking-wider">1-ON-1 COACHING</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Personal Training</h1>
          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Transform your fitness with personalized attention from our expert trainers
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-in-delayed">
          {trainingBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-energy-orange/20 p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="bg-energy-orange/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-energy-orange" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 font-body text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trainers */}
        <div className="mb-20 animate-fade-in-delayed-2">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Meet Our Expert Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 overflow-hidden transition-all duration-300"
              >
                <div className="aspect-square relative border-b border-electric-blue/20 overflow-hidden">
                  <img
                    src={trainer.photo}
                    alt={`${trainer.name}, ${trainer.specialty} trainer`}
                    className="object-cover object-top w-full h-full transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{trainer.name}</h3>

                  <p className="text-electric-blue font-body font-semibold mb-3">{trainer.specialty}</p>

                  <div className="space-y-2 text-sm text-gray-400 font-body">
                    <p>
                      <span className="text-gray-300 font-semibold">Experience:</span> {trainer.experience}
                    </p>

                    <p>
                      <span className="text-gray-300 font-semibold">Certified:</span> {trainer.certifications}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="grid grid-cols-1 items-start">
          <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-2xl border border-energy-orange/20 p-8">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Why Choose Personal Training?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingReasons.map((reason) => (
                <div key={reason.title}>
                  <h3 className="text-xl font-heading font-bold text-energy-orange mb-2">{reason.title}</h3>

                  <p className="text-gray-300 font-body leading-relaxed">{reason.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-energy-orange/10 border border-energy-orange/30 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-white mb-4">PT Pricing</h3>
              <ul className="text-gray-300 font-body divide-y divide-energy-orange/30">
                {trainingPrices.map((item) => (
                  <li key={item.name} className="flex justify-between py-2">
                    <span>{item.name}</span>

                    <span className="text-energy-orange font-bold">{item.price}</span>
                  </li>
                ))}

                <li>
                  <p className="text-sm text-gray-400 mt-4 italic">{trainingPricingNote}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
