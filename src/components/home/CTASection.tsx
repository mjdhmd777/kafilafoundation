import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Briefcase, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import heroEnvironment from "@/assets/hero-environment.jpg";

const ctaOptions = [
  {
    icon: Heart,
    title: "Donate",
    description: "Support our mission with a tax-deductible contribution",
    href: "/donate",
    cta: "Donate Now",
    gradient: "from-rose-500 to-red-600",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our team of dedicated changemakers",
    href: "/get-involved#volunteer",
    cta: "Join Us",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Briefcase,
    title: "Partner",
    description: "Collaborate with us for greater impact",
    href: "/get-involved#partner",
    cta: "Partner With Us",
    gradient: "from-amber-500 to-orange-600",
  },
];

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <img
          src={heroEnvironment}
          alt="Community work"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        {/* Animated grain texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-30, 30, -30], x: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [30, -30, 30], x: [10, -10, 10] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="relative container-wide">
        <ScrollReveal>
          <div className="text-center mb-20 text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
                <Sparkles className="h-4 w-4" />
                Make an Impact
              </span>
            </motion.div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-hero">
              Be Part of the <span className="opacity-90">Change</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Together, we can create lasting impact. Choose how you want to contribute 
              to building a better tomorrow for communities in need.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => (
            <ScrollReveal key={option.title} delay={index * 100}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-dark rounded-3xl p-10 text-center group hover:bg-white/10 transition-all duration-500"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${option.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                >
                  <option.icon className="h-10 w-10 text-white" />
                </motion.div>
                
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                  {option.title}
                </h3>
                
                <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                  {option.description}
                </p>
                
                <Button variant="hero-outline" size="lg" asChild className="group/btn w-full justify-center">
                  <Link to={option.href}>
                    {option.cta}
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom tagline */}
        <ScrollReveal delay={400}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-primary-foreground/60 text-lg italic">
              "Every contribution, big or small, creates ripples of change."
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}