import {
  Dumbbell,
  Users,
  Award,
  CreditCard,
  ArrowRight,
  Play,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Dumbbell,
      title: 'State-of-the-Art Equipment',
      description:
        'Premium machines and free weights from leading fitness brands',
    },
    {
      icon: Award,
      title: 'Expert Personal Trainers',
      description:
        'Certified professionals dedicated to your fitness journey',
    },
    {
      icon: Users,
      title: 'Inspiring Community',
      description: 'Join a supportive network of motivated individuals',
    },
    {
      icon: CreditCard,
      title: 'Flexible Memberships',
      description: 'Plans that fit your lifestyle and budget',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-dark-navy via-charcoal to-dark-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDIxMiwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
            <span className="text-electric-blue font-heading font-bold text-sm tracking-wider">
              BALI'S PREMIER FITNESS DESTINATION
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight">
            Unleash Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-lime-accent">
              Potential
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-body mb-12 max-w-3xl mx-auto leading-relaxed">
            Bali's Premier Gym for Strength, Conditioning, and Community
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('contact')}
              className="group bg-electric-blue text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-lime-accent transition-all hover:scale-105 flex items-center gap-2"
            >
              Book a Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('memberships')}
              className="group bg-transparent border-2 border-electric-blue text-electric-blue px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-electric-blue hover:text-charcoal transition-all hover:scale-105"
            >
              View Memberships
            </button>
          </div>

          <div className="mt-16 flex justify-center">
            <button className="group flex items-center gap-2 text-gray-400 hover:text-electric-blue transition-colors">
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <span className="font-body text-sm">Watch Our Story</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent"></div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-lime-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-dark-navy to-charcoal p-8 rounded-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-dark-navy to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNjMsMjU1LDE4LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-lime-accent/10 border border-lime-accent/30 rounded-full">
                <span className="text-lime-accent font-heading font-bold text-sm tracking-wider">
                  TRANSFORM YOUR BODY
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Start Your Journey Today
              </h2>
              <p className="text-gray-300 font-body text-lg leading-relaxed mb-8">
                Whether you're a beginner or an experienced athlete, our
                world-class facilities and expert trainers will help you achieve
                your fitness goals. Join our community and experience the
                difference.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="group bg-lime-accent text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-electric-blue transition-all hover:scale-105 flex items-center gap-2"
              >
                Get Your Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-electric-blue/20 to-lime-accent/20 rounded-2xl border-2 border-electric-blue/30 flex items-center justify-center">
                <div className="text-center">
                  <Dumbbell className="w-32 h-32 text-electric-blue mx-auto mb-4" />
                  <p className="text-gray-400 font-body text-sm italic">
                    [Placeholder: High-energy shot of a group fitness class in
                    action]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal border-t border-b border-electric-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-2">
                5000+
              </div>
              <div className="text-gray-400 font-body">Active Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-lime-accent mb-2">
                25+
              </div>
              <div className="text-gray-400 font-body">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-energy-orange mb-2">
                50+
              </div>
              <div className="text-gray-400 font-body">Weekly Classes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-2">
                2000+
              </div>
              <div className="text-gray-400 font-body">Success Stories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
