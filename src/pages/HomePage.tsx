import { useState, useRef, useEffect } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "/images/home-img.webp";
import { homeFeatures } from "../data/home";
import { createPortal } from "react-dom";

const heroVideos = ["/videos/video-1.mp4", "/videos/video-2.mp4", "/videos/video-3.mp4"];

function HeroBackgroundVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
  };

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [currentIndex]);

  return (
    <video
      ref={videoRef}
      key={heroVideos[currentIndex]}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
    >
      <source src={heroVideos[currentIndex]} type="video/mp4" />
    </video>
  );
}

function StoryVideoModal({ isOpen, onClose, videoSrc }: { isOpen: boolean; onClose: () => void; videoSrc: string }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4" onClick={onClose}>
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-electric-blue transition-colors"
        aria-label="Close video"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <video className="w-full h-full rounded-lg" src={videoSrc} controls autoPlay playsInline />
      </div>
    </div>,
    document.body,
  );
}

export default function HomePage() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-br from-dark-navy via-charcoal to-dark-navy overflow-hidden">
        {/* Background video queue */}
        <HeroBackgroundVideo />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark-navy/80 z-[1]"></div>

        <div className="relative z-10 xl:my-6 h-[700px] md:h-[600px] xl:h-[700px] text-center px-4 pt-24 pb-12 md:pb-4 max-w-5xl mx-auto animate-fade-in-up">
          <div className="inline-block mb-6 xl:mb-10 mt-4 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
            <span className="text-electric-blue font-heading font-bold text-xs xl:text-sm tracking-wider">
              BALI'S PREMIER FITNESS DESTINATION
            </span>
          </div>

          <h1 className="text-[2.7rem] md:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 md:mb-2 leading-tight animate-fade-in-delayed">
            Bali's Premier
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-lime-accent  md:leading-normal md:pb-1">
              Strength & Flow Gym
            </span>
          </h1>

          <p className="text-gray-300 md:text-lg font-body mb-6 md:mb-10 xl:mb-12 xl:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Strength training, personal training, group classes, and wellness in Bali.
          </p>

          <div className="mb-6 md:mb-10 xl:mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed-2">
            <Link
              to="/contact"
              className="group w-[80%] text-sm md:text-lg bg-electric-blue text-charcoal px-6 py-3 rounded-lg font-heading font-bold hover:bg-lime-accent transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Visit Bali Strength & Flow
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/memberships"
              className="group w-[80%] text-sm md:text-lg bg-transparent border-2 border-electric-blue text-electric-blue px-6 py-3 rounded-lg font-heading font-bold hover:bg-lime-accent hover:border-lime-accent hover:text-charcoal transition-all hover:scale-105"
            >
              View Memberships
            </Link>
          </div>

          <div className="flex justify-center animate-fade-in-delayed-3">
            <button
              onClick={() => setIsStoryOpen(true)}
              className="group flex items-center gap-2 text-gray-400 hover:text-electric-blue transition-colors"
            >
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="fill-current" />
              </div>
              <span className="font-body text-sm">Watch Our Story</span>
            </button>
          </div>

          <StoryVideoModal isOpen={isStoryOpen} onClose={() => setIsStoryOpen(false)} videoSrc="/videos/video-3.mp4" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-charcoal animate-fade-in-delayed-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Why Choose Us</h2>

            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-lime-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group bg-gradient-to-br from-dark-navy to-charcoal p-8 rounded-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
                    <Icon className="w-8 h-8 text-electric-blue" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-3">{feature.title}</h3>

                  <p className="text-gray-400 font-body leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-br from-dark-navy to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-lime-accent/10 border border-lime-accent/30 rounded-full">
                <span className="text-lime-accent font-heading font-bold text-sm tracking-wider">
                  TRANSFORM YOUR BODY
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Start Your Journey Today
              </h2>

              <p className="text-gray-300 font-body text-lg leading-relaxed mb-8">
                Whether you're a beginner or an experienced athlete, our world-class facilities and expert trainers will
                help you achieve your fitness goals. Join our community and experience the difference.
              </p>

              <Link
                to="/classes"
                className="group bg-lime-accent text-charcoal px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-electric-blue transition-all hover:scale-105 flex items-center gap-2 w-fit"
              >
                View Classes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-electric-blue/20 to-lime-accent/20 rounded-2xl border-2 border-electric-blue/30 overflow-hidden">
                <img
                  src={heroImg}
                  alt="Members training at Bali Strength & Flow gym in Bali"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
