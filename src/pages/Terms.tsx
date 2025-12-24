import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Kafila Foundation (J&K)</title>
        <meta name="description" content="Terms of Service for Kafila Foundation website and services." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Legal
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
                <p className="text-muted-foreground text-lg">Last updated: December 2024</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using the Kafila Foundation (J&K) website ("Site"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site.
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">About Kafila Foundation</h2>
                  <p className="text-muted-foreground mb-4">
                    Kafila Foundation (J&K) is a registered Non-Governmental Organization dedicated to community development, education, health, sports, and environmental initiatives in Jammu & Kashmir.
                  </p>
                  <div className="text-muted-foreground text-sm">
                    <p><strong className="text-foreground">Registration Details:</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>MCA CSR Registration: CSR00019816</li>
                      <li>NITI Aayog / Darpan: JK/2020/0266431</li>
                      <li>12A of Income Tax: AAETK3208JE20251</li>
                      <li>80G of Income Tax: AAETK3208JF20251</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Use of Website</h2>
                  <p className="text-muted-foreground mb-4">You agree to use our Site only for lawful purposes and in a way that does not:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Interfere with the proper working of the Site</li>
                    <li>Attempt to gain unauthorized access to any part of the Site</li>
                    <li>Transmit any harmful code, viruses, or malware</li>
                    <li>Collect or harvest personal information of other users</li>
                  </ul>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Donations</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>All donations made through our Site are voluntary contributions to support our charitable activities.</p>
                    <p>Donations are eligible for tax benefits under Section 80G of the Income Tax Act, 1961 (subject to applicable limits).</p>
                    <p>We will issue donation receipts for all contributions received.</p>
                    <p>By making a donation, you confirm that you are using your own funds and not engaging in any fraudulent activity.</p>
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground mb-4">
                    All content on this Site, including text, graphics, logos, images, and software, is the property of Kafila Foundation (J&K) or its content suppliers and is protected by intellectual property laws.
                  </p>
                  <p className="text-muted-foreground">
                    You may view and download content for personal, non-commercial use only. Any other use, including reproduction, modification, or distribution, requires our prior written consent.
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
                  <p className="text-muted-foreground mb-4">
                    The information provided on this Site is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
                  </p>
                  <p className="text-muted-foreground">
                    We are not liable for any losses or damages arising from your use of this Site or reliance on its content.
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
                  <p className="text-muted-foreground">
                    Our Site may contain links to third-party websites. These links are provided for convenience only, and we do not endorse or assume responsibility for the content or practices of these external sites.
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on the Site. Your continued use of the Site after any changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="text-muted-foreground">
                    <p><strong className="text-foreground">Kafila Foundation (J&K)</strong></p>
                    <p>Cherakote (Lolab)-193223, District Kupwara, Kashmir-193222</p>
                    <p>Email: info@kafilafoundation.org</p>
                    <p>Phone: +91 9596 573 672</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
