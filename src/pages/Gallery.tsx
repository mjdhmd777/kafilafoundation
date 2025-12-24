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
import galleryCricketTrophy from "@/assets/gallery-cricket-trophy.jpg";
import galleryCovidAwareness from "@/assets/gallery-covid-awareness.jpg";
import galleryCommunityTalk from "@/assets/gallery-community-talk.jpg";
import galleryYouthCricket from "@/assets/gallery-youth-cricket.jpg";
import galleryDrugFreeRally from "@/assets/gallery-drug-free-rally.jpg";
import galleryPrizeCeremony from "@/assets/gallery-prize-ceremony.jpg";
import galleryPlantationDrive from "@/assets/gallery-plantation-drive.jpg";
import galleryVolunteers from "@/assets/gallery-volunteers.jpg";
import galleryYouthGroup from "@/assets/gallery-youth-group.jpg";
import galleryStudentsSession from "@/assets/gallery-students-session.jpg";

const images = [
  { src: heroEducation, alt: "Education program" },
  { src: galleryCricketTrophy, alt: "Cricket tournament trophy ceremony" },
  { src: galleryDrugFreeRally, alt: "Drug free Kashmir awareness rally" },
  { src: focusEducation, alt: "Classroom learning" },
  { src: galleryStudentsSession, alt: "Addressing students at Tangdhar & Titwal" },
  { src: galleryYouthCricket, alt: "Youth cricket team" },
  { src: focusSports, alt: "Sports training" },
  { src: galleryPrizeCeremony, alt: "Prize distribution ceremony" },
  { src: galleryPlantationDrive, alt: "Plantation drive initiative" },
  { src: focusHealth, alt: "Health camp" },
  { src: galleryCovidAwareness, alt: "COVID-19 awareness program" },
  { src: galleryCommunityTalk, alt: "Community interaction session" },
  { src: focusEnvironment, alt: "Tree plantation" },
  { src: galleryVolunteers, alt: "Foundation volunteers" },
  { src: galleryYouthGroup, alt: "Youth group activities" },
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
