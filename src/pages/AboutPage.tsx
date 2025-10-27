import {
  Heart,
  Target,
  Users,
  Trophy,
  Dumbbell,
  Droplets,
  Wind,
  Shirt,
} from "lucide-react";
import { motion } from "framer-motion";

import gymInterior from "../assets/images/place-10.jpg";
import cardioZone from "../assets/images/place-2.jpg";
import weightsArea from "../assets/images/place-3.jpg";
import functionalTraining from "../assets/images/place-7.jpg";
import studioSpace from "../assets/images/place-5.jpg";
import recoveryZone from "../assets/images/place-6.jpg";
import lockerRoom from "../assets/images/place-4.jpg";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description:
        "We believe fitness is better together. Our community supports and motivates each other.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Every member has unique goals. We provide the tools and support to achieve them.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description:
        "From equipment to trainers, we maintain the highest standards in everything we do.",
    },
    {
      icon: Users,
      title: "Inclusive",
      description:
        "All fitness levels welcome. Whether beginner or pro, you belong here.",
    },
  ];

  const facilities = [
    {
      icon: Dumbbell,
      name: "Cardio Zone",
      description:
        "State-of-the-art treadmills, ellipticals, rowing machines, and bikes",
      photo: cardioZone,
    },
    {
      icon: Trophy,
      name: "Free Weights Area",
      description:
        "Complete selection of dumbbells, barbells, and Olympic lifting platforms",
      photo: weightsArea,
    },
    {
      icon: Target,
      name: "Functional Training",
      description:
        "TRX systems, kettlebells, battle ropes, and agility equipment",
      photo: functionalTraining,
    },
    {
      icon: Wind,
      name: "Studio Spaces",
      description:
        "Dedicated rooms for yoga, spin classes, and group training sessions",
      photo: studioSpace,
    },
    {
      icon: Droplets,
      name: "Recovery Zone",
      description: "Sauna, ice baths, and stretching area for optimal recovery",
      photo: recoveryZone,
    },
    {
      icon: Shirt,
      name: "Locker Rooms",
      description: "Modern facilities with showers, lockers, and amenities",
      photo: lockerRoom,
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate("contact")}
              className="mt-8 bg-lime-accent text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-electric-blue transition-all"
            >
              Visit Us Today
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border-2 border-lime-accent/30">
              <img
                src={gymInterior}
                alt="Bali Strength & Flow Gym Interior"
                className="object-cover object-center w-full h-full hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
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
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 overflow-hidden hover:scale-105 transition-all"
              >
                <div className="aspect-video relative overflow-hidden border-b border-electric-blue/20">
                  <img
                    src={facility.photo}
                    alt={facility.name}
                    className="object-cover object-center w-full h-full hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-300 font-body text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-electric-blue/10 to-energy-orange/10 border border-electric-blue/30 rounded-2xl p-8 md:p-12"
        >
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
              <div className="text-gray-300 font-body">Goals Achieved</div>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-energy-orange mb-2">
                98%
              </div>
              <div className="text-gray-300 font-body">Member Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
