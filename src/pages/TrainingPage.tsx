import { useState } from 'react';
import {
  Target,
  TrendingUp,
  Shield,
  Award,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

export default function TrainingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: '',
    message: '',
  });

  const trainers = [
    {
      name: 'Sarah Chen',
      specialty: 'HIIT & Functional Training',
      experience: '8 years',
      certifications: 'NASM-CPT, CrossFit L2',
    },
    {
      name: 'Made Surya',
      specialty: 'Yoga & Flexibility',
      experience: '10 years',
      certifications: 'RYT-500, Ashtanga Certified',
    },
    {
      name: 'Jessica Lee',
      specialty: 'Strength & Bodybuilding',
      experience: '6 years',
      certifications: 'ISSA-CPT, Sports Nutrition',
    },
    {
      name: 'Tom Harrison',
      specialty: 'Boxing & Combat Sports',
      experience: '12 years',
      certifications: 'USA Boxing Coach, NASM-CPT',
    },
    {
      name: 'Alex Rodriguez',
      specialty: 'Endurance & Cycling',
      experience: '7 years',
      certifications: 'Spinning Certified, ACSM-CPT',
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Personalized Programs',
      description:
        'Custom workout plans tailored to your specific goals and fitness level',
    },
    {
      icon: TrendingUp,
      title: 'Track Your Progress',
      description:
        'Regular assessments and adjustments to ensure continuous improvement',
    },
    {
      icon: Shield,
      title: 'Injury Prevention',
      description:
        'Proper form and technique guidance to keep you safe and injury-free',
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description:
        'Work with certified professionals who are invested in your success',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      goals: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
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
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            Meet Our Expert Trainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-navy to-charcoal rounded-xl border border-electric-blue/20 overflow-hidden hover:scale-105 transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-electric-blue/20 to-lime-accent/20 flex items-center justify-center border-b border-electric-blue/20">
                  <User className="w-24 h-24 text-electric-blue" />
                  <p className="absolute bottom-4 text-gray-500 font-body text-xs italic text-center px-4">
                    [Placeholder: Professional trainer photo]
                  </p>
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
                      </span>{' '}
                      {trainer.experience}
                    </p>
                    <p>
                      <span className="text-gray-300 font-semibold">
                        Certified:
                      </span>{' '}
                      {trainer.certifications}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-2xl border border-energy-orange/20 p-8">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Why Choose Personal Training?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-energy-orange mb-2">
                  Achieve Results Faster
                </h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  With one-on-one attention and a customized program, you'll
                  reach your fitness goals more efficiently than working out
                  alone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-energy-orange mb-2">
                  Stay Motivated & Accountable
                </h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  Your trainer will keep you on track, push you when needed, and
                  celebrate your victories along the way.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-energy-orange mb-2">
                  Learn Proper Technique
                </h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  Master the fundamentals and advanced techniques to maximize
                  your workouts and minimize injury risk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-energy-orange mb-2">
                  Flexible & Personalized
                </h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  Whether you're training for a specific event, recovering from
                  an injury, or just getting started, we'll create a plan that
                  works for you.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-energy-orange/10 border border-energy-orange/30 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                PT Pricing
              </h3>
              <ul className="space-y-3 text-gray-300 font-body">
                <li className="flex justify-between">
                  <span>Single Session</span>
                  <span className="text-energy-orange font-bold">
                    500k IDR
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>5 Session Package</span>
                  <span className="text-energy-orange font-bold">
                    2,250k IDR
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>10 Session Package</span>
                  <span className="text-energy-orange font-bold">
                    4,200k IDR
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-4 italic">
                Members receive 10% off all PT packages
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-dark-navy to-charcoal rounded-2xl border border-electric-blue/20 p-8">
            <h2 className="text-3xl font-heading font-bold text-white mb-2">
              Start Your PT Journey
            </h2>
            <p className="text-gray-300 font-body mb-6">
              Fill out the form below and we'll match you with the perfect
              trainer for your goals
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-electric-blue/30 rounded-lg pl-11 pr-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-electric-blue/30 rounded-lg pl-11 pr-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-electric-blue/30 rounded-lg pl-11 pr-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="+62 XXX XXXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="goals"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Fitness Goals
                </label>
                <select
                  id="goals"
                  name="goals"
                  required
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full bg-charcoal border border-electric-blue/30 rounded-lg px-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors"
                >
                  <option value="">Select your primary goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Build Muscle</option>
                  <option value="strength">Increase Strength</option>
                  <option value="endurance">Improve Endurance</option>
                  <option value="flexibility">Flexibility & Mobility</option>
                  <option value="sports">Sports Performance</option>
                  <option value="general">General Fitness</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-body font-semibold mb-2"
                >
                  Additional Information
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-electric-blue/30 rounded-lg pl-11 pr-4 py-3 text-white font-body focus:outline-none focus:border-electric-blue transition-colors resize-none"
                    placeholder="Tell us about your fitness background, any injuries, or special requirements..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-electric-blue text-charcoal py-4 rounded-lg font-heading font-bold text-lg hover:bg-lime-accent transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Request PT Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
