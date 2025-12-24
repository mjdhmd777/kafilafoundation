import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroEnvironment from "@/assets/hero-environment.jpg";

const ctaOptions = [
  {
    icon: Heart,
    title: "Donate",
    description: "Support our mission with a tax-deductible contribution",
    href: "/donate",
    cta: "Donate Now",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our team of dedicated changemakers",
    href: "/get-involved#volunteer",
    cta: "Join Us",
  },
  {
    icon: Briefcase,
    title: "Partner",
    description: "Collaborate with us for greater impact",
    href: "/get-involved#partner",
    cta: "Partner With Us",
  },
];

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroEnvironment}
          alt="Community work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
      </div>

      <div className="relative container-wide">
        <ScrollReveal>
          <div className="text-center mb-16 text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Be Part of the Change
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Together, we can create lasting impact. Choose how you want to contribute 
              to building a better tomorrow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctaOptions.map((option, index) => (
            <ScrollReveal key={option.title} delay={index * 100}>
              <div className="bg-background/10 backdrop-blur-lg border border-primary-foreground/20 rounded-2xl p-8 text-center hover:bg-background/20 transition-colors group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <option.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-primary-foreground/70 mb-6">
                  {option.description}
                </p>
                <Button variant="hero-outline" asChild>
                  <Link to={option.href}>
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
