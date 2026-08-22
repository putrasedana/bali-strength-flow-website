import { Dumbbell, Users, Award, CreditCard, type LucideIcon } from "lucide-react";

export type HomeFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const homeFeatures: HomeFeature[] = [
  {
    icon: Dumbbell,
    title: "State-of-the-Art Equipment",
    description: "Premium machines and free weights from leading fitness brands",
  },
  {
    icon: Award,
    title: "Expert Personal Trainers",
    description: "Certified professionals dedicated to your fitness journey",
  },
  {
    icon: Users,
    title: "Inspiring Community",
    description: "Join a supportive network of motivated individuals",
  },
  {
    icon: CreditCard,
    title: "Flexible Memberships",
    description: "Plans that fit your lifestyle and budget",
  },
];
