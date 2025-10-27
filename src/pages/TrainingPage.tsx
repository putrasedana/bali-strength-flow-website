import { Target, TrendingUp, Shield, Award } from "lucide-react";
import sarahPhoto from "../assets/images/person-2.webp";
import madePhoto from "../assets/images/person.webp";
import jessicaPhoto from "../assets/images/person-4.webp";
import tomPhoto from "../assets/images/person-3.webp";
import alexPhoto from "../assets/images/person-5.webp";

export default function TrainingPage() {
  const trainers = [
    {
      name: "Sarah Chen",
      specialty: "HIIT & Functional Training",
      experience: "8 years",
      certifications: "NASM-CPT, CrossFit L2",
      photo: sarahPhoto,
    },
    {
      name: "Made Surya",
      specialty: "Yoga & Flexibility",
      experience: "10 years",
      certifications: "RYT-500, Ashtanga Certified",
      photo: madePhoto,
    },
    {
      name: "Jessica Lee",
      specialty: "Strength & Bodybuilding",
      experience: "6 years",
      certifications: "ISSA-CPT, Sports Nutrition",
      photo: jessicaPhoto,
    },
    {
      name: "Tom Harrison",
      specialty: "Boxing & Combat Sports",
      experience: "12 years",
      certifications: "USA Boxing Coach, NASM-CPT",
      photo: tomPhoto,
    },
    {
      name: "Alex Rodriguez",
      specialty: "Endurance & Cycling",
      experience: "7 years",
      certifications: "Spinning Certified, ACSM-CPT",
      photo: alexPhoto,
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Personalized Programs",
      description:
        "Custom workout plans tailored to your specific goals and fitness level",
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description:
        "Regular assessments and adjustments to ensure continuous improvement",
    },
    {
      icon: Shield,
      title: "Injury Prevention",
      description:
        "Proper form and technique guidance to keep you safe and injury-free",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description:
        "Work with certified professionals who are invested in your success",
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Only section with animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-energy-orange/10 border border-energy-orange/30 rounded-full">
            <span className="text-energy-orange font-heading font-bold text-sm tracking-wider">
              1-ON-1 COACHING
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Personal Training
          </h1>
          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Transform your fitness with personalized attention from our expert
            trainers
          </p>
        </div>

        {/* Benefits - No animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-energy-orange/20 p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="bg-energy-orange/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-energy-orange" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 font-body text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trainers section - No animation */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            Meet Our Expert Trainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 overflow-hidden transition-all duration-300"
              >
                <div className="aspect-square relative border-b border-electric-blue/20 overflow-hidden">
                  <img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="object-cover object-top w-full h-full transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-electric-blue font-body font-semibold mb-3">
                    {trainer.specialty}
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 font-body">
                    <p>
                      <span className="text-gray-300 font-semibold">
                        Experience:
                      </span>{" "}
                      {trainer.experience}
                    </p>
                    <p>
                      <span className="text-gray-300 font-semibold">
                        Certified:
                      </span>{" "}
                      {trainer.certifications}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section - No animation */}
        <div className="grid grid-cols-1 items-start">
          <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-2xl border border-energy-orange/20 p-8">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Why Choose Personal Training?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Achieve Results Faster",
                  text: "With one-on-one attention and a customized program, you'll reach your fitness goals more efficiently than working out alone.",
                },
                {
                  title: "Stay Motivated & Accountable",
                  text: "Your trainer will keep you on track, push you when needed, and celebrate your victories along the way.",
                },
                {
                  title: "Learn Proper Technique",
                  text: "Master the fundamentals and advanced techniques to maximize your workouts and minimize injury risk.",
                },
                {
                  title: "Flexible & Personalized",
                  text: "Whether you're training for a specific event, recovering from an injury, or just getting started, we'll create a plan that works for you.",
                },
              ].map((reason, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-heading font-bold text-energy-orange mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 font-body leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-energy-orange/10 border border-energy-orange/30 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                PT Pricing
              </h3>
              <ul className="text-gray-300 font-body divide-y divide-energy-orange/30">
                <li className="flex justify-between py-2">
                  <span>Single Session</span>
                  <span className="text-energy-orange font-bold">500k IDR</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>5 Session Package</span>
                  <span className="text-energy-orange font-bold">
                    2,250k IDR
                  </span>
                </li>
                <li className="flex justify-between py-2">
                  <span>10 Session Package</span>
                  <span className="text-energy-orange font-bold">
                    4,200k IDR
                  </span>
                </li>
                <li>
                  <p className="text-sm text-gray-400 mt-4 italic">
                    Members receive 10% off all PT packages
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
