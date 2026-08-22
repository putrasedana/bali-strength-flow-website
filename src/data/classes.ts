import { Flame, Heart, Dumbbell, Box, Bike, type LucideIcon } from "lucide-react";

export type ClassColor = "electric-blue" | "lime-accent" | "energy-orange";

export interface ClassItem {
  icon: LucideIcon;
  name: string;
  description: string;
  duration: string;
  intensity: string;
  color: ClassColor;
}

export interface ClassSession {
  time: string;
  class: string;
  trainer: string;
}

export interface ClassSchedule {
  day: string;
  sessions: ClassSession[];
}

export const classes: ClassItem[] = [
  {
    icon: Flame,
    name: "HIIT",
    description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness",
    duration: "45 min",
    intensity: "High",
    color: "energy-orange",
  },
  {
    icon: Heart,
    name: "Yoga",
    description: "Build flexibility, balance, and inner peace with our guided yoga sessions",
    duration: "60 min",
    intensity: "Low-Medium",
    color: "lime-accent",
  },
  {
    icon: Dumbbell,
    name: "Strength & Conditioning",
    description: "Build muscle and power through progressive resistance training",
    duration: "60 min",
    intensity: "Medium-High",
    color: "electric-blue",
  },
  {
    icon: Box,
    name: "Boxing",
    description: "Learn proper boxing technique while getting an incredible full-body workout",
    duration: "50 min",
    intensity: "High",
    color: "energy-orange",
  },
  {
    icon: Bike,
    name: "Spin",
    description: "Indoor cycling classes that will push your limits and burn serious calories",
    duration: "45 min",
    intensity: "High",
    color: "electric-blue",
  },
];

export const schedule: ClassSchedule[] = [
  {
    day: "Monday",
    sessions: [
      { time: "06:00 AM", class: "HIIT", trainer: "Sarah Chen" },
      { time: "09:00 AM", class: "Yoga", trainer: "Made Surya" },
      { time: "12:00 PM", class: "Spin", trainer: "Alex Rodriguez" },
      { time: "06:00 PM", class: "Boxing", trainer: "Tom Harrison" },
      {
        time: "07:30 PM",
        class: "Strength & Conditioning",
        trainer: "Jessica Lee",
      },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "06:00 AM", class: "Spin", trainer: "Alex Rodriguez" },
      {
        time: "09:00 AM",
        class: "Strength & Conditioning",
        trainer: "Jessica Lee",
      },
      { time: "12:00 PM", class: "Yoga", trainer: "Made Surya" },
      { time: "06:00 PM", class: "HIIT", trainer: "Sarah Chen" },
      { time: "07:30 PM", class: "Boxing", trainer: "Tom Harrison" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "06:00 AM", class: "Boxing", trainer: "Tom Harrison" },
      { time: "09:00 AM", class: "Yoga", trainer: "Made Surya" },
      { time: "12:00 PM", class: "HIIT", trainer: "Sarah Chen" },
      {
        time: "06:00 PM",
        class: "Strength & Conditioning",
        trainer: "Jessica Lee",
      },
      { time: "07:30 PM", class: "Spin", trainer: "Alex Rodriguez" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      {
        time: "06:00 AM",
        class: "Strength & Conditioning",
        trainer: "Jessica Lee",
      },
      { time: "09:00 AM", class: "Boxing", trainer: "Tom Harrison" },
      { time: "12:00 PM", class: "Spin", trainer: "Alex Rodriguez" },
      { time: "06:00 PM", class: "Yoga", trainer: "Made Surya" },
      { time: "07:30 PM", class: "HIIT", trainer: "Sarah Chen" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { time: "06:00 AM", class: "HIIT", trainer: "Sarah Chen" },
      { time: "09:00 AM", class: "Spin", trainer: "Alex Rodriguez" },
      { time: "12:00 PM", class: "Boxing", trainer: "Tom Harrison" },
      { time: "06:00 PM", class: "Yoga", trainer: "Made Surya" },
      {
        time: "07:30 PM",
        class: "Strength & Conditioning",
        trainer: "Jessica Lee",
      },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { time: "08:00 AM", class: "Yoga", trainer: "Made Surya" },
      { time: "10:00 AM", class: "HIIT", trainer: "Sarah Chen" },
      { time: "12:00 PM", class: "Boxing", trainer: "Tom Harrison" },
      { time: "02:00 PM", class: "Spin", trainer: "Alex Rodriguez" },
    ],
  },
  {
    day: "Sunday",
    sessions: [
      { time: "08:00 AM", class: "Yoga", trainer: "Made Surya" },
      {
        time: "10:00 AM",
        class: "Strength & Conditioning",
        trainer: "Jessica Lee",
      },
      { time: "12:00 PM", class: "HIIT", trainer: "Sarah Chen" },
    ],
  },
];
