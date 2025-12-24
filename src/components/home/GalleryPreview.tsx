import { ScrollReveal } from "@/components/ScrollReveal";
import focusEducation from "@/assets/focus-education.jpg";
import focusSports from "@/assets/focus-sports.jpg";
import focusHealth from "@/assets/focus-health.jpg";
import focusEnvironment from "@/assets/focus-environment.jpg";
import focusAwareness from "@/assets/focus-awareness.jpg";
import heroEducation from "@/assets/hero-education.jpg";

const images = [
  { src: heroEducation, alt: "Children learning" },
  { src: focusEducation, alt: "Classroom session" },
  { src: focusSports, alt: "Sports training" },
  { src: focusHealth, alt: "Health camp" },
  { src: focusEnvironment, alt: "Tree plantation" },
  { src: focusAwareness, alt: "Community awareness" },
];

export function GalleryPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Visual Stories
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Moments That Matter
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real photos from our field activities capturing the spirit of change and hope.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <ScrollReveal key={index} delay={index * 75}>
              <div 
                className={`relative overflow-hidden rounded-2xl group ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
