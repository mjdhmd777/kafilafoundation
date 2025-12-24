import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import focusEducation from "@/assets/focus-education.jpg";
import focusSports from "@/assets/focus-sports.jpg";
import focusHealth from "@/assets/focus-health.jpg";
import focusEnvironment from "@/assets/focus-environment.jpg";
import focusAwareness from "@/assets/focus-awareness.jpg";
import heroEducation from "@/assets/hero-education.jpg";
import heroEnvironment from "@/assets/hero-environment.jpg";

const images = [
  { src: heroEducation, alt: "Education program" },
  { src: focusEducation, alt: "Classroom learning" },
  { src: focusSports, alt: "Sports training" },
  { src: focusHealth, alt: "Health camp" },
  { src: focusEnvironment, alt: "Tree plantation" },
  { src: focusAwareness, alt: "Community awareness" },
  { src: heroEnvironment, alt: "Environmental initiative" },
];

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Kafila Foundation (J&K)</title>
        <meta name="description" content="View photos from Kafila Foundation's activities and events." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Gallery</h1>
                <p className="text-muted-foreground text-lg">Real moments from our field activities.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="relative overflow-hidden rounded-xl group aspect-[4/3]">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors" />
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

export default GalleryPage;
