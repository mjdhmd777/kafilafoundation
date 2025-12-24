import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, ChevronDown, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";
import { useRef } from "react";

const trustBadges = [
  { icon: Shield, text: "Govt. Registered" },
  { icon: Award, text: "NITI Aayog" },
  { icon: Users, text: "15,000+ Lives" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroImage}
          alt="Kafila Foundation - Education for all"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
        {/* Animated grain overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative container-wide py-32 text-primary-foreground">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground/10 backdrop-blur-md rounded-full text-sm font-medium border border-primary-foreground/20 badge-shimmer">
              <Shield className="h-4 w-4" />
              Registered under Govt. of India, MCA & NITI Aayog
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 text-shadow-hero"
          >
            Promising People
            <br />
            <span className="relative inline-block">
              for a{" "}
              <span className="relative">
                Better Tomorrow
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 w-full h-4"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 10C50 4 150 4 298 10"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 mb-6 font-light tracking-wide"
          >
            <span className="inline-block mr-3">Education</span>
            <span className="inline-block w-2 h-2 rounded-full bg-primary-foreground/60 mx-2 align-middle" />
            <span className="inline-block mx-3">Awareness</span>
            <span className="inline-block w-2 h-2 rounded-full bg-primary-foreground/60 mx-2 align-middle" />
            <span className="inline-block ml-3">Community Development</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-foreground/75 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Empowering underprivileged communities in Jammu & Kashmir through education, 
            skill development, and sustainable initiatives. Join us in building a brighter future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/donate">
                <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Donate Now
                <motion.span
                  className="absolute inset-0 rounded-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ background: "radial-gradient(circle, hsla(0,0%,100%,0.1) 0%, transparent 70%)" }}
                />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="group">
              <Link to="/get-involved">
                Get Involved
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 text-primary-foreground/70"
              >
                <badge.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}