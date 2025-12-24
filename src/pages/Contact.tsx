import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Kafila Foundation (J&K)</title>
        <meta name="description" content="Get in touch with Kafila Foundation. Located in Cherakote, Lolab, District Kupwara, Kashmir." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Get In Touch
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We'd love to hear from you. Reach out to us for partnerships, volunteering, or inquiries.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <ScrollReveal>
                <div className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Cherakote (Lolab)-193223,<br />
                    District Kupwara, Kashmir-193222
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:+919596573672" className="hover:text-primary transition-colors">+91 9596 573 672</a><br />
                    <a href="tel:+917051753672" className="hover:text-primary transition-colors">+91 7051 753 672</a>
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    <a href="mailto:info@kafilafoundation.org" className="hover:text-primary transition-colors">info@kafilafoundation.org</a>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.5!2d74.3167!3d34.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1a1a1a1a1a1a1%3A0x0!2sLolab%2C%20Kupwara%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1703184000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kafila Foundation Location - Cherakote, Lolab, District Kupwara, Kashmir"
                  className="w-full"
                />
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://www.google.com/maps/search/Cherakote+Lolab+Kupwara+Kashmir+193223" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
