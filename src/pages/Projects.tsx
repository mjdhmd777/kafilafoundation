import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BookOpen, Heart, Leaf, Users, Trophy, Megaphone, MapPin, Target } from "lucide-react";
import focusEducation from "@/assets/focus-education.jpg";
import focusSports from "@/assets/focus-sports.jpg";
import focusHealth from "@/assets/focus-health.jpg";
import focusEnvironment from "@/assets/focus-environment.jpg";

const projects = [
  {
    title: "Educational Support Program",
    description: "Providing quality education, mentorship, and vocational training to underprivileged children in border regions.",
    icon: BookOpen,
    image: focusEducation,
    impact: "5000+ students supported",
  },
  {
    title: "Youth Sports Initiative",
    description: "Martial arts training, fitness programs, and sports activities promoting discipline and leadership.",
    icon: Trophy,
    image: focusSports,
    impact: "2000+ youth trained",
  },
  {
    title: "Health & Wellness Camps",
    description: "Regular health check-ups, awareness programs, and medical support for rural communities.",
    icon: Heart,
    image: focusHealth,
    impact: "10000+ beneficiaries",
  },
  {
    title: "Green Kashmir Initiative",
    description: "Tree plantation drives and environmental conservation across Kupwara district.",
    icon: Leaf,
    image: focusEnvironment,
    impact: "5000+ trees planted",
  },
];

const sdgMapping = [
  { number: 1, title: "No Poverty", initiatives: ["Skill development", "Livelihood programs", "Relief distribution"] },
  { number: 3, title: "Good Health", initiatives: ["Health camps", "Sports programs", "Mental health awareness"] },
  { number: 4, title: "Quality Education", initiatives: ["Tutoring centers", "Vocational training", "Mentorship"] },
  { number: 5, title: "Gender Equality", initiatives: ["Women empowerment", "Tailoring centers", "Leadership programs"] },
  { number: 8, title: "Decent Work", initiatives: ["Entrepreneurship", "Job training", "Business support"] },
  { number: 10, title: "Reduced Inequalities", initiatives: ["Tribal inclusion", "Border area focus", "Cultural preservation"] },
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | Kafila Foundation (J&K)</title>
        <meta 
          name="description" 
          content="Explore Kafila Foundation's projects in education, health, environment, and community development across Jammu & Kashmir." 
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Work
                </span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Projects & Impact
                </h1>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  Grassroots initiatives creating sustainable change in the border regions of Kashmir.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Impact Numbers */}
        <section id="impact" className="py-16 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <ScrollReveal>
                <div>
                  <AnimatedCounter end={15000} suffix="+" />
                  <p className="mt-2 font-medium">Lives Impacted</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div>
                  <AnimatedCounter end={50} suffix="+" />
                  <p className="mt-2 font-medium">Villages Reached</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div>
                  <AnimatedCounter end={25} suffix="+" />
                  <p className="mt-2 font-medium">Active Projects</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div>
                  <AnimatedCounter end={500} suffix="+" />
                  <p className="mt-2 font-medium">Volunteers</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Key Initiatives
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.title} delay={index * 100}>
                  <div className="bg-secondary rounded-2xl overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm rounded-full">
                          {project.impact}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <project.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reach & Presence */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Reach
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Where We Work
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our operations are focused on Kupwara district, particularly the border regions 
                  of Machil, Keran & Tangdhar Valley.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="max-w-3xl mx-auto bg-background rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Primary Focus Areas
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Kupwara District, Jammu & Kashmir</li>
                      <li>• Border regions: Machil, Keran & Tangdhar Valley</li>
                      <li>• Tribal and underserved communities</li>
                      <li>• Lolab Valley region</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SDG Mapping */}
        <section id="sdg" className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Global Framework
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  SDG Alignment
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our work contributes to multiple United Nations Sustainable Development Goals.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdgMapping.map((sdg, index) => (
                <ScrollReveal key={sdg.number} delay={index * 75}>
                  <div className="bg-secondary rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-heading font-bold text-lg">
                          {sdg.number}
                        </span>
                      </div>
                      <h4 className="font-heading font-semibold text-foreground">
                        {sdg.title}
                      </h4>
                    </div>
                    <ul className="space-y-1">
                      {sdg.initiatives.map((initiative) => (
                        <li key={initiative} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Target className="h-3 w-3 text-primary" />
                          {initiative}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
