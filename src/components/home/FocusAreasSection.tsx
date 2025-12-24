import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Heart, Leaf, Trophy, Megaphone, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import focusEducation from "@/assets/focus-education.jpg";
import focusSports from "@/assets/focus-sports.jpg";
import focusHealth from "@/assets/focus-health.jpg";
import focusEnvironment from "@/assets/focus-environment.jpg";
import focusAwareness from "@/assets/focus-awareness.jpg";

const focusAreas = [
  {
    title: "Education",
    description: "Providing quality education and skill development to underprivileged children and youth.",
    icon: BookOpen,
    image: focusEducation,
    gradient: "from-blue-600 to-indigo-700",
    shadowColor: "shadow-blue-500/20",
  },
  {
    title: "Youth & Sports",
    description: "Promoting physical fitness, discipline, and leadership through sports and martial arts.",
    icon: Trophy,
    image: focusSports,
    gradient: "from-amber-500 to-orange-600",
    shadowColor: "shadow-orange-500/20",
  },
  {
    title: "Health & Well-Being",
    description: "Conducting health camps and awareness programs for rural communities.",
    icon: Heart,
    image: focusHealth,
    gradient: "from-rose-500 to-red-600",
    shadowColor: "shadow-red-500/20",
  },
  {
    title: "Environment",
    description: "Tree plantation drives and environmental conservation initiatives.",
    icon: Leaf,
    image: focusEnvironment,
    gradient: "from-emerald-500 to-green-600",
    shadowColor: "shadow-green-500/20",
  },
  {
    title: "Social Awareness",
    description: "Drug-free campaigns, gender equality, and civic engagement programs.",
    icon: Megaphone,
    image: focusAwareness,
    gradient: "from-violet-500 to-purple-600",
    shadowColor: "shadow-purple-500/20",
  },
];

export function FocusAreasSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-accent/3 blur-3xl" />
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
                <Sparkles className="h-4 w-4" />
                What We Do
              </span>
            </motion.div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Focus <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We work across multiple sectors to create holistic and sustainable impact 
              in the communities we serve.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 100}>
              <Link
                to="/projects"
                className={`group relative block overflow-hidden rounded-3xl h-[420px] ${area.shadowColor} shadow-xl hover:shadow-2xl transition-all duration-700`}
              >
                {/* Image with zoom effect */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Gradient overlays */}
                <div className={`absolute inset-0 bg-gradient-to-t ${area.gradient} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  {/* Icon with animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:-translate-y-2 transition-all duration-500`}
                  >
                    <area.icon className="h-7 w-7" />
                  </motion.div>
                  
                  <h3 className="font-heading text-2xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-5 line-clamp-2 leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}