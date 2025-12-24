import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Kafila Foundation (J&K)</title>
        <meta name="description" content="Get in touch with Kafila Foundation. Located in Kupwara, Kashmir." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We'd love to hear from you. Reach out to us for partnerships, volunteering, or inquiries.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <ScrollReveal>
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Address</h3>
                  <p className="text-sm text-muted-foreground">Cherakote (Lolab)-193223, District Kupwara, Kashmir-193222</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 9596 573 672<br />+91 7051 753 672</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">info@kafilafoundation.org</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104543.16!2d74.2!3d34.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1a6a6a6a6a6a7%3A0x0!2sKupwara%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kafila Foundation Location"
                />
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
