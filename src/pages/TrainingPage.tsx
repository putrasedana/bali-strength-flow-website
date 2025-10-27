import { motion } from "framer-motion";
import { Target, TrendingUp, Shield, Award } from "lucide-react";
import sarahPhoto from "../assets/images/person-2.jpg";
import madePhoto from "../assets/images/person.jpg";
import jessicaPhoto from "../assets/images/person-4.jpg";
import tomPhoto from "../assets/images/person-3.jpg";
import alexPhoto from "../assets/images/person-5.jpg";

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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        {/* Benefits with animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-energy-orange/20 p-6 hover:scale-105 transition-all"
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trainers section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            Meet Our Expert Trainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 overflow-hidden transition-all"
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          className="grid grid-cols-1 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-heading font-bold text-energy-orange mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 font-body leading-relaxed">
                    {reason.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 bg-energy-orange/10 border border-energy-orange/30 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
