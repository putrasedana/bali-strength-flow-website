import { Target, TrendingUp, Shield, Award, type LucideIcon } from "lucide-react";

import sarahPhoto from "/images/person-2.webp";
import madePhoto from "/images/person.webp";
import jessicaPhoto from "/images/person-4.webp";
import tomPhoto from "/images/person-3.webp";
import alexPhoto from "/images/person-5.webp";

export type Trainer = {
  name: string;
  specialty: string;
  experience: string;
  certifications: string;
  photo: string;
};

export type TrainingBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TrainingReason = {
  title: string;
  text: string;
};

export type TrainingPrice = {
  name: string;
  price: string;
};

export const trainers: Trainer[] = [
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

export const trainingBenefits: TrainingBenefit[] = [
  {
    icon: Target,
    title: "Personalized Programs",
    description: "Custom workout plans tailored to your specific goals and fitness level",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Regular assessments and adjustments to ensure continuous improvement",
  },
  {
    icon: Shield,
    title: "Injury Prevention",
    description: "Proper form and technique guidance to keep you safe and injury-free",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Work with certified professionals who are invested in your success",
  },
];

export const trainingReasons: TrainingReason[] = [
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
];

export const trainingPrices: TrainingPrice[] = [
  {
    name: "Single Session",
    price: "500k IDR",
  },
  {
    name: "5 Session Package",
    price: "2,250k IDR",
  },
  {
    name: "10 Session Package",
    price: "4,200k IDR",
  },
];

export const trainingPricingNote = "Members receive 10% off all PT packages";
