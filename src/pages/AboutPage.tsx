import { Link } from "react-router-dom";

import gymInterior from "/images/place-10.webp";
import { aboutValues, facilities } from "../data/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section - Only section with animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-lime-accent/10 border border-lime-accent/30 rounded-full">
            <span className="text-lime-accent font-heading font-bold text-sm tracking-wider">OUR STORY</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            More than a gym, we're a community dedicated to helping you become the strongest version of yourself
          </p>
        </div>

        {/* Mission Section - No animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center animate-fade-in-delayed">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Our Mission</h2>
            <div className="space-y-4 text-gray-300 font-body text-lg leading-relaxed">
              <p>
                Founded on the belief that everyone deserves to feel strong and confident, Bali Strength & Flow opened
                its doors in 2018 with a vision to create Bali's premier fitness destination.
              </p>
              <p>
                We're not just about building muscle or losing weight. We're about building a lifestyle that empowers
                you to take on any challenge, in the gym and in life.
              </p>
              <p>
                Our state-of-the-art facility combines cutting-edge equipment with expert coaching and a supportive
                community atmosphere. From Olympic weightlifting to restorative yoga, we offer everything you need to
                achieve your fitness goals.
              </p>
              <p>
                Today, we're proud to serve over 5,000 members who inspire us daily with their dedication, progress, and
                positive energy. Join us and discover what you're truly capable of.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-8 bg-lime-accent text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-electric-blue transition-all hover:scale-105"
            >
              Visit Us Today
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border-2 border-lime-accent/30">
              <img
                src={gymInterior}
                alt="Bali Strength & Flow Gym Interior"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Values Section - No animation */}
        <div className="mb-20 animate-fade-in-delayed-2 ">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-lime-accent/20 p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-lime-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-lime-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 font-body text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Facilities Section - No animation */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {facilities.map((facility) => (
              <div
                key={facility.name}
                className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden border-b border-electric-blue/20">
                  <img src={facility.photo} alt={facility.name} className="object-cover object-center w-full h-full " />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{facility.name}</h3>
                  <p className="text-gray-300 font-body text-sm leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section - No animation */}
        <div className="mt-20 bg-gradient-to-br from-electric-blue/10 to-energy-orange/10 border border-electric-blue/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-heading font-bold text-electric-blue mb-2">7+</div>
              <div className="text-gray-300 font-body">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-lime-accent mb-2">15,000+</div>
              <div className="text-gray-300 font-body">Goals Achieved</div>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-energy-orange mb-2">98%</div>
              <div className="text-gray-300 font-body">Member Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
