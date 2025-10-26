import {
  Heart,
  Target,
  Users,
  Trophy,
  Dumbbell,
  Droplets,
  Wind,
  Shirt,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description:
        'We believe fitness is better together. Our community supports and motivates each other.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description:
        'Every member has unique goals. We provide the tools and support to achieve them.',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description:
        'From equipment to trainers, we maintain the highest standards in everything we do.',
    },
    {
      icon: Users,
      title: 'Inclusive',
      description:
        'All fitness levels welcome. Whether beginner or pro, you belong here.',
    },
  ];

  const facilities = [
    {
      icon: Dumbbell,
      name: 'Cardio Zone',
      description:
        'State-of-the-art treadmills, ellipticals, rowing machines, and bikes',
    },
    {
      icon: Trophy,
      name: 'Free Weights Area',
      description:
        'Complete selection of dumbbells, barbells, and Olympic lifting platforms',
    },
    {
      icon: Target,
      name: 'Functional Training',
      description:
        'TRX systems, kettlebells, battle ropes, and agility equipment',
    },
    {
      icon: Wind,
      name: 'Studio Spaces',
      description:
        'Dedicated rooms for yoga, spin classes, and group training sessions',
    },
    {
      icon: Droplets,
      name: 'Recovery Zone',
      description:
        'Sauna, ice baths, and stretching area for optimal recovery',
    },
    {
      icon: Shirt,
      name: 'Locker Rooms',
      description: 'Modern facilities with showers, lockers, and amenities',
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-lime-accent/10 border border-lime-accent/30 rounded-full">
            <span className="text-lime-accent font-heading font-bold text-sm tracking-wider">
              OUR STORY
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            More than a gym, we're a community dedicated to helping you become
            the strongest version of yourself
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-gray-300 font-body text-lg leading-relaxed">
              <p>
                Founded on the belief that everyone deserves to feel strong and
                confident, Bali Strength & Flow opened its doors in 2018 with a
                vision to create Bali's premier fitness destination.
              </p>
              <p>
                We're not just about building muscle or losing weight. We're
                about building a lifestyle that empowers you to take on any
                challenge, in the gym and in life.
              </p>
              <p>
                Our state-of-the-art facility combines cutting-edge equipment
                with expert coaching and a supportive community atmosphere. From
                Olympic weightlifting to restorative yoga, we offer everything
                you need to achieve your fitness goals.
              </p>
              <p>
                Today, we're proud to serve over 5,000 members who inspire us
                daily with their dedication, progress, and positive energy. Join
                us and discover what you're truly capable of.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-8 bg-lime-accent text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-electric-blue transition-all hover:scale-105"
            >
              Visit Us Today
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-lime-accent/20 to-electric-blue/20 rounded-2xl border-2 border-lime-accent/30 flex items-center justify-center">
              <div className="text-center">
                <Dumbbell className="w-32 h-32 text-lime-accent mx-auto mb-4" />
                <p className="text-gray-400 font-body text-sm italic px-8">
                  [Placeholder: Inspiring photo of gym interior with members
                  training]
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-lime-accent/20 p-6 text-center hover:scale-105 transition-all"
                >
                  <div className="bg-lime-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-lime-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 font-body text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 overflow-hidden hover:scale-105 transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-lime-accent/20 flex items-center justify-center border-b border-electric-blue/20">
                    <Icon className="w-16 h-16 text-electric-blue" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-gray-300 font-body text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center text-gray-400 font-body text-sm italic">
            <p>
              [Gallery placeholder: Professional photos of each facility area -
              Cardio Zone with rows of equipment, Free Weights Area with squat
              racks and platforms, Functional Training Area with battle ropes
              and TRX, Clean and modern Locker Rooms]
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-electric-blue/10 to-energy-orange/10 border border-electric-blue/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-heading font-bold text-electric-blue mb-2">
                7+
              </div>
              <div className="text-gray-300 font-body">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-lime-accent mb-2">
                15,000+
              </div>
              <div className="text-gray-300 font-body">
                Goals Achieved
              </div>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-energy-orange mb-2">
                98%
              </div>
              <div className="text-gray-300 font-body">
                Member Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
