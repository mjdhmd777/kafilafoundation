import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AlertCircle } from "lucide-react";

const RefundPage = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | Kafila Foundation (J&K)</title>
        <meta name="description" content="Refund Policy for donations made to Kafila Foundation (J&K)." />
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
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Refund Policy</h1>
                <p className="text-muted-foreground text-lg">Last updated: December 2024</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8 flex gap-4">
                  <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-heading text-xl font-bold text-foreground mb-2">Important Notice</h2>
                    <p className="text-muted-foreground">
                      All donations made to Kafila Foundation (J&K) are voluntary contributions to support our charitable activities. We appreciate every donation and ensure it is used for the betterment of communities we serve.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">General Refund Policy</h2>
                  <p className="text-muted-foreground mb-4">
                    As a registered charitable organization, donations made to Kafila Foundation (J&K) are generally non-refundable. This is because:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Donations are immediately allocated to ongoing programs and initiatives</li>
                    <li>Administrative processes for charitable contributions are designed for one-way transactions</li>
                    <li>Tax benefits (80G) are issued based on the donation amount received</li>
                  </ul>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Exceptions for Refund</h2>
                  <p className="text-muted-foreground mb-4">
                    We may consider refund requests in the following exceptional circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Duplicate Transactions:</strong> If you were charged multiple times for a single donation due to a technical error</li>
                    <li><strong className="text-foreground">Incorrect Amount:</strong> If an amount significantly different from what you intended was charged due to a system error</li>
                    <li><strong className="text-foreground">Unauthorized Transaction:</strong> If the donation was made without your authorization (fraudulent activity)</li>
                    <li><strong className="text-foreground">Failed Service:</strong> If the donation was for a specific event or service that was cancelled by us</li>
                  </ul>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Refund Request Process</h2>
                  <p className="text-muted-foreground mb-4">
                    To request a refund under the exceptional circumstances mentioned above:
                  </p>
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                    <li>Submit your request within <strong className="text-foreground">7 days</strong> of the transaction date</li>
                    <li>Email us at <a href="mailto:info@kafilafoundation.org" className="text-primary hover:underline">info@kafilafoundation.org</a> with the subject "Refund Request"</li>
                    <li>Include your full name, transaction ID/reference number, date of donation, amount, and reason for refund</li>
                    <li>Attach any supporting documents (bank statement, payment confirmation, etc.)</li>
                  </ol>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Processing Time</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Upon receiving your refund request:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>We will review your request within <strong className="text-foreground">5-7 business days</strong></li>
                      <li>You will receive an email notification about the status of your request</li>
                      <li>If approved, the refund will be processed within <strong className="text-foreground">10-15 business days</strong></li>
                      <li>Refunds will be credited to the original payment method used for the donation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Tax Implications</h2>
                  <p className="text-muted-foreground">
                    If a refund is processed for a donation for which you have already claimed tax benefits under Section 80G, you are responsible for making the necessary adjustments in your tax filings. We will cancel the 80G certificate issued for the refunded donation.
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    For any questions regarding our refund policy or to submit a refund request:
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

export default RefundPage;
