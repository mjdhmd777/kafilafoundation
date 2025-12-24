import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import galleryCricketTrophy from "@/assets/gallery-cricket-trophy.jpg";
import galleryDrugFreeRally from "@/assets/gallery-drug-free-rally.jpg";
import galleryStudentsSession from "@/assets/gallery-students-session.jpg";
import galleryOutdoorClass from "@/assets/gallery-outdoor-class.jpg";
import galleryUmeedKiKiran from "@/assets/gallery-umeed-ki-kiran.jpg";
import galleryCricketBanner from "@/assets/gallery-cricket-banner.jpg";

const images = [
  { src: galleryDrugFreeRally, alt: "Drug free Kashmir awareness rally" },
  { src: galleryCricketTrophy, alt: "Cricket tournament trophy ceremony" },
  { src: galleryStudentsSession, alt: "Addressing students at Tangdhar & Titwal" },
  { src: galleryOutdoorClass, alt: "Outdoor classroom session" },
  { src: galleryUmeedKiKiran, alt: "Umeed Ki Kiran program" },
  { src: galleryCricketBanner, alt: "Cricket tournament with Kafila Foundation" },
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
                className={`relative overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-shadow ${
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
                <div className="absolute bottom-0 left-0 right-0 p-3 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg"
            >
              View Full Gallery
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
