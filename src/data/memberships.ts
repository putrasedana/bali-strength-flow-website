import { Star, Zap, Crown, type LucideIcon } from "lucide-react";

export type MembershipPlan = {
  name: string;
  icon: LucideIcon;
  monthlyPrice: string;
  annualPrice: string;
  color: "electric-blue" | "lime-accent" | "energy-orange";
  popular: boolean;
  features: string[];
};

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Basic Fitness",
    icon: Zap,
    monthlyPrice: "299k",
    annualPrice: "3,190k",
    color: "electric-blue",
    popular: false,
    features: [
      "Access to cardio zone",
      "Access to strength equipment",
      "2 Group classes per week",
      "Locker & shower facilities",
      "Free parking",
    ],
  },
  {
    name: "Pro Athlete",
    icon: Star,
    monthlyPrice: "499k",
    annualPrice: "5,390k",
    color: "lime-accent",
    popular: true,
    features: [
      "Access to all gym areas",
      "4 Group classes per week",
      "Free fitness assessment",
      "10% off PT sessions",
      "Nutrition consultation",
      "Guest pass (2/month)",
      "Priority class booking",
      "Complimentary towel service",
    ],
  },
  {
    name: "Ultimate Champion",
    icon: Crown,
    monthlyPrice: "799k",
    annualPrice: "8,590k",
    color: "energy-orange",
    popular: false,
    features: [
      "Unlimited gym access",
      "Unlimited group classes",
      "4 PT sessions per month",
      "Monthly body composition analysis",
      "Personalized meal plan",
      "Recovery zone access (sauna, ice bath)",
      "Unlimited guest passes",
      "Free gym merchandise",
      "VIP member events",
      "Concierge service",
    ],
  },
];
