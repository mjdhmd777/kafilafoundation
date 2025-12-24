import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Building, Shield } from "lucide-react";

const DonatePage = () => {
  return (
    <>
      <Helmet>
        <title>Donate | Kafila Foundation (J&K)</title>
        <meta name="description" content="Support Kafila Foundation's mission. All donations are 50% tax exempt under 80G." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Support Our Cause
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Make a Donation</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Your contribution helps us empower communities. All donations are 50% tax exempt under Section 80G.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal>
                <div className="bg-secondary rounded-2xl p-8">
                  <Building className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-4">State Bank of India</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Account Name:</span> KAFILA FOUNDATION</p>
                    <p><span className="text-muted-foreground">Account No:</span> 39749563974</p>
                    <p><span className="text-muted-foreground">IFSC:</span> SBIN0006660</p>
                    <p><span className="text-muted-foreground">Branch:</span> Kupwara</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-secondary rounded-2xl p-8">
                  <Building className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-4">J&K Bank</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Account Name:</span> KAFILA FOUNDATION</p>
                    <p><span className="text-muted-foreground">Account No:</span> 0666040520000007</p>
                    <p><span className="text-muted-foreground">IFSC:</span> JAKA0KHUMRI</p>
                    <p><span className="text-muted-foreground">Branch:</span> Khumriyal</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <CreditCard className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">UPI Payment</h3>
                <p className="text-2xl font-mono text-primary">39749563974@SBI</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-8 flex items-start gap-4 bg-green-50 border border-green-200 rounded-xl p-6">
                <Shield className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">Tax Benefit</h4>
                  <p className="text-green-700 text-sm">
                    All donations to Kafila Foundation are 50% exempt from tax under Section 80G of the Income Tax Act, 1961.
                  </p>
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

export default DonatePage;
