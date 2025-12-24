import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
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
import galleryForestYouth from "@/assets/gallery-forest-youth.jpg";
import galleryCricketBanner from "@/assets/gallery-cricket-banner.jpg";
import galleryPrizeDistribution from "@/assets/gallery-prize-distribution.jpg";
import galleryOutdoorClass from "@/assets/gallery-outdoor-class.jpg";
import galleryCovidRelief from "@/assets/gallery-covid-relief.jpg";
import galleryUmeedKiKiran from "@/assets/gallery-umeed-ki-kiran.jpg";

const images = [
  { src: galleryCricketTrophy, alt: "Cricket tournament trophy ceremony" },
  { src: galleryDrugFreeRally, alt: "Drug free Kashmir awareness rally" },
  { src: galleryStudentsSession, alt: "Addressing students at Tangdhar & Titwal" },
  { src: galleryYouthCricket, alt: "Youth cricket team" },
  { src: galleryPrizeCeremony, alt: "Prize distribution ceremony" },
  { src: galleryPlantationDrive, alt: "Plantation drive initiative" },
  { src: galleryCovidAwareness, alt: "COVID-19 awareness program" },
  { src: galleryCommunityTalk, alt: "Community interaction session" },
  { src: galleryVolunteers, alt: "Foundation volunteers" },
  { src: galleryYouthGroup, alt: "Youth group activities" },
  { src: galleryForestYouth, alt: "Youth outdoor activities in forest" },
  { src: galleryCricketBanner, alt: "Cricket tournament with Kafila Foundation banner" },
  { src: galleryPrizeDistribution, alt: "Certificate distribution ceremony" },
  { src: galleryOutdoorClass, alt: "Outdoor classroom session during COVID" },
  { src: galleryCovidRelief, alt: "COVID-19 relief distribution" },
  { src: galleryUmeedKiKiran, alt: "Umeed Ki Kiran program for youth of Kupwara" },
];

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Kafila Foundation (J&K)</title>
        <meta name="description" content="View photos from Kafila Foundation's activities and events in Kupwara, Kashmir." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Journey in Pictures
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Gallery</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Real moments from our field activities capturing the spirit of change and hope.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="relative overflow-hidden rounded-xl group aspect-[4/3] shadow-md hover:shadow-xl transition-shadow">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm font-medium line-clamp-2">{image.alt}</p>
                    </div>
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
