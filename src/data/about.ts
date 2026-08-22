import { Heart, Target, Users, Trophy, Dumbbell, Droplets, Wind, Shirt, type LucideIcon } from "lucide-react";

import cardioZone from "/images/place-2.webp";
import weightsArea from "/images/place-3.webp";
import functionalTraining from "/images/place-7.webp";
import studioSpace from "/images/place-5.webp";
import recoveryZone from "/images/place-6.webp";
import lockerRoom from "/images/place-4.webp";

export type AboutValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Facility = {
  icon: LucideIcon;
  name: string;
  description: string;
  photo: string;
};

export const aboutValues: AboutValue[] = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe fitness is better together. Our community supports and motivates each other.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Every member has unique goals. We provide the tools and support to achieve them.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "From equipment to trainers, we maintain the highest standards in everything we do.",
  },
  {
    icon: Users,
    title: "Inclusive",
    description: "All fitness levels welcome. Whether beginner or pro, you belong here.",
  },
];

export const facilities: Facility[] = [
  {
    icon: Dumbbell,
    name: "Cardio Zone",
    description: "State-of-the-art treadmills, ellipticals, rowing machines, and bikes",
    photo: cardioZone,
  },
  {
    icon: Trophy,
    name: "Free Weights Area",
    description: "Complete selection of dumbbells, barbells, and Olympic lifting platforms",
    photo: weightsArea,
  },
  {
    icon: Target,
    name: "Functional Training",
    description: "TRX systems, kettlebells, battle ropes, and agility equipment",
    photo: functionalTraining,
  },
  {
    icon: Wind,
    name: "Studio Spaces",
    description: "Dedicated rooms for yoga, spin classes, and group training sessions",
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
