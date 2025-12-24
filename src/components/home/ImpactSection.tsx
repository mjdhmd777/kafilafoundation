import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Users, FolderOpen, MapPin, HandHelping, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Beneficiaries across programs",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FolderOpen,
    value: 25,
    suffix: "+",
    label: "Active Projects",
    description: "Ongoing initiatives",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: HandHelping,
    value: 500,
    suffix: "+",
    label: "Volunteers",
    description: "Dedicated changemakers",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: "+",
    label: "Villages Reached",
    description: "Border regions covered",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function ImpactSection() {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-wide relative">
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="h-4 w-4" />
                Our Impact
              </span>
            </motion.div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Making a <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Since 2019, we've been transforming lives in the border regions of Kashmir through 
              grassroots initiatives and community-driven programs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="stats-card group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="font-heading font-bold text-lg text-foreground mt-3 mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${stat.gradient} opacity-20 rotate-45`} />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom highlight */}
        <ScrollReveal delay={400}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10 text-center"
          >
            <p className="text-lg text-muted-foreground italic">
              "Main Akela Hi Chala Tha Jaanib-E-Manzil Magar, Loog Sath Aatey Gaye Aur Caravaan Banta Gaya."
            </p>
            <p className="text-sm text-primary font-medium mt-3">— The Spirit of Kafila</p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}