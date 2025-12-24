import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Kafila Foundation (J&K)</title>
        <meta name="description" content="Privacy Policy of Kafila Foundation - Learn how we collect, use, and protect your personal information." />
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
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
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
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p className="text-muted-foreground">
                    Kafila Foundation (J&K) ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong className="text-foreground">Personal Information:</strong> When you donate, volunteer, or contact us, we may collect your name, email address, phone number, postal address, and payment information.</p>
                    <p><strong className="text-foreground">Donation Information:</strong> We collect transaction details for donations including amount, date, and payment method for tax receipt purposes.</p>
                    <p><strong className="text-foreground">Usage Data:</strong> We automatically collect information about your device and how you interact with our website, including IP address, browser type, and pages visited.</p>
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Process donations and issue tax receipts under Section 80G</li>
                    <li>Communicate with you about our programs and initiatives</li>
                    <li>Send newsletters and updates (with your consent)</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Data Protection</h2>
                  <p className="text-muted-foreground mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your payment information is processed through secure, encrypted channels.
                  </p>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our activities, subject to confidentiality agreements.
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Cookies</h2>
                  <p className="text-muted-foreground">
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, but this may limit some features of our website.
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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

export default PrivacyPage;
