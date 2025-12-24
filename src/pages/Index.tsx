import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { FocusAreasSection } from "@/components/home/FocusAreasSection";
import { SDGSection } from "@/components/home/SDGSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kafila Foundation (J&K) | Promising People for a Better Tomorrow</title>
        <meta 
          name="description" 
          content="Kafila Foundation is a registered NGO in Jammu & Kashmir working for education, community development, and empowerment of underprivileged communities since 2019." 
        />
        <meta name="keywords" content="NGO Kashmir, Kafila Foundation, Education NGO, Community Development, Kupwara, J&K NGO" />
        <link rel="canonical" href="https://kafilafoundation.org" />
      </Helmet>

      <Header />
      
      <main>
        <HeroSection />
        <ImpactSection />
        <FocusAreasSection />
        <SDGSection />
        <GalleryPreview />
        <PartnersSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
