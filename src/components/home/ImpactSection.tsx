import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Users, FolderOpen, MapPin, HandHelping } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Beneficiaries across programs",
  },
  {
    icon: FolderOpen,
    value: 25,
    suffix: "+",
    label: "Active Projects",
    description: "Ongoing initiatives",
  },
  {
    icon: HandHelping,
    value: 500,
    suffix: "+",
    label: "Volunteers",
    description: "Dedicated changemakers",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: "+",
    label: "Villages Reached",
    description: "Border regions covered",
  },
];

export function ImpactSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Impact
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Making a Difference
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Since 2019, we've been transforming lives in the border regions of Kashmir through 
              grassroots initiatives and community-driven programs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="bg-background rounded-2xl p-6 lg:p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="font-heading font-semibold text-foreground mt-2 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
