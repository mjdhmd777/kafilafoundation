import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Heart, Leaf, Users, Trophy, Megaphone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
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
    color: "from-blue-600/80 to-blue-800/80",
  },
  {
    title: "Youth & Sports",
    description: "Promoting physical fitness, discipline, and leadership through sports and martial arts.",
    icon: Trophy,
    image: focusSports,
    color: "from-orange-600/80 to-orange-800/80",
  },
  {
    title: "Health & Well-Being",
    description: "Conducting health camps and awareness programs for rural communities.",
    icon: Heart,
    image: focusHealth,
    color: "from-red-600/80 to-red-800/80",
  },
  {
    title: "Environment",
    description: "Tree plantation drives and environmental conservation initiatives.",
    icon: Leaf,
    image: focusEnvironment,
    color: "from-green-600/80 to-green-800/80",
  },
  {
    title: "Social Awareness",
    description: "Drug-free campaigns, gender equality, and civic engagement programs.",
    icon: Megaphone,
    image: focusAwareness,
    color: "from-purple-600/80 to-purple-800/80",
  },
];

export function FocusAreasSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Focus Areas
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work across multiple sectors to create holistic and sustainable impact 
              in the communities we serve.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 100}>
              <Link
                to="/projects"
                className="group relative block overflow-hidden rounded-2xl h-80 focus-card"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${area.color} opacity-70`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1">
                    <area.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {area.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
