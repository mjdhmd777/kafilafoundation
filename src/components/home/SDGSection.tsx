import { ScrollReveal } from "@/components/ScrollReveal";

const sdgs = [
  {
    number: 1,
    title: "No Poverty",
    description: "Skill development and sustainable livelihoods for border communities",
    color: "bg-red-600",
  },
  {
    number: 3,
    title: "Good Health & Well-Being",
    description: "Health camps, awareness programs, and sports activities",
    color: "bg-green-600",
  },
  {
    number: 4,
    title: "Quality Education",
    description: "Educational support, vocational training, and mentorship",
    color: "bg-red-700",
  },
  {
    number: 5,
    title: "Gender Equality",
    description: "Empowering women through skill training and leadership programs",
    color: "bg-orange-500",
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    description: "Entrepreneurship development and job readiness training",
    color: "bg-rose-700",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description: "Inclusive programs for tribal and underrepresented groups",
    color: "bg-pink-600",
  },
  {
    number: 13,
    title: "Climate Action",
    description: "Tree plantation and environmental conservation drives",
    color: "bg-green-700",
  },
  {
    number: 16,
    title: "Peace, Justice & Strong Institutions",
    description: "Promoting peace, stability, and community harmony",
    color: "bg-blue-800",
  },
];

export function SDGSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Global Alignment
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Making a Difference – SDGs
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our initiatives are deeply aligned with the United Nations Sustainable Development Goals, 
              reflecting our commitment to fostering inclusive and holistic development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdgs.map((sdg, index) => (
            <ScrollReveal key={sdg.number} delay={index * 75}>
              <div className="sdg-card bg-background border-border hover:border-primary group">
                <div className={`w-14 h-14 ${sdg.color} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <span className="text-white font-heading font-bold text-xl">{sdg.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {sdg.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {sdg.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
