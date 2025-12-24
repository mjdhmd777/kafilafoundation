import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const sdgs = [
  {
    number: 1,
    title: "No Poverty",
    description: "Skill development and sustainable livelihoods for border communities",
    color: "bg-[#E5243B]",
    hoverGlow: "group-hover:shadow-[#E5243B]/30",
  },
  {
    number: 3,
    title: "Good Health",
    description: "Health camps, awareness programs, and sports activities",
    color: "bg-[#4C9F38]",
    hoverGlow: "group-hover:shadow-[#4C9F38]/30",
  },
  {
    number: 4,
    title: "Quality Education",
    description: "Educational support, vocational training, and mentorship",
    color: "bg-[#C5192D]",
    hoverGlow: "group-hover:shadow-[#C5192D]/30",
  },
  {
    number: 5,
    title: "Gender Equality",
    description: "Empowering women through skill training and leadership programs",
    color: "bg-[#FF3A21]",
    hoverGlow: "group-hover:shadow-[#FF3A21]/30",
  },
  {
    number: 8,
    title: "Decent Work",
    description: "Entrepreneurship development and job readiness training",
    color: "bg-[#A21942]",
    hoverGlow: "group-hover:shadow-[#A21942]/30",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description: "Inclusive programs for tribal and underrepresented groups",
    color: "bg-[#DD1367]",
    hoverGlow: "group-hover:shadow-[#DD1367]/30",
  },
  {
    number: 13,
    title: "Climate Action",
    description: "Tree plantation and environmental conservation drives",
    color: "bg-[#3F7E44]",
    hoverGlow: "group-hover:shadow-[#3F7E44]/30",
  },
  {
    number: 16,
    title: "Peace & Justice",
    description: "Promoting peace, stability, and community harmony",
    color: "bg-[#00689D]",
    hoverGlow: "group-hover:shadow-[#00689D]/30",
  },
];

export function SDGSection() {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
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
                <Globe className="h-4 w-4" />
                Global Alignment
              </span>
            </motion.div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              UN Sustainable <span className="text-gradient">Development Goals</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our initiatives are deeply aligned with the United Nations SDGs, 
              reflecting our commitment to fostering inclusive and holistic development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdgs.map((sdg, index) => (
            <ScrollReveal key={sdg.number} delay={index * 75}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative p-7 rounded-2xl bg-background border-2 border-border/50 hover:border-transparent transition-all duration-500 overflow-hidden ${sdg.hoverGlow} hover:shadow-xl`}
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${sdg.color.replace('bg-[', '').replace(']', '')} 0%, transparent 100%)` }} />
                
                {/* SDG Number Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${sdg.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                >
                  <span className="text-white font-heading font-bold text-2xl">{sdg.number}</span>
                </motion.div>
                
                <h3 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {sdg.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {sdg.description}
                </p>
                
                {/* Corner accent */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${sdg.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}