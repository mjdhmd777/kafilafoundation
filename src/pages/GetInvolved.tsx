import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, GraduationCap, Building, ArrowRight } from "lucide-react";

const GetInvolvedPage = () => {
  return (
    <>
      <Helmet>
        <title>Get Involved | Kafila Foundation (J&K)</title>
        <meta name="description" content="Join Kafila Foundation as a volunteer, intern, or partner." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Get Involved</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Join our mission to create lasting change. There are many ways to contribute.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal>
                <div id="volunteer" className="bg-secondary rounded-2xl p-8">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-4">Volunteer With Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our team of dedicated changemakers. Help us with education programs, health camps, environmental drives, and community outreach.
                  </p>
                  <Button asChild><a href="mailto:info@kafilafoundation.org">Apply Now <ArrowRight className="h-4 w-4" /></a></Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div id="internship" className="bg-secondary rounded-2xl p-8">
                  <GraduationCap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-4">Internship Program</h3>
                  <p className="text-muted-foreground mb-6">
                    Gain hands-on experience in social development. Open to students and young professionals passionate about community service.
                  </p>
                  <Button asChild><a href="mailto:info@kafilafoundation.org">Apply Now <ArrowRight className="h-4 w-4" /></a></Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div id="partner" className="bg-secondary rounded-2xl p-8">
                  <Building className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-4">Corporate Partnership</h3>
                  <p className="text-muted-foreground mb-6">
                    Partner with us for CSR initiatives. We're registered under MCA and eligible for CSR funding.
                  </p>
                  <Button asChild><a href="mailto:info@kafilafoundation.org">Partner With Us <ArrowRight className="h-4 w-4" /></a></Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-secondary rounded-2xl p-8">
                  <Briefcase className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-4">Work With Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Looking for opportunities in the social sector? Check out our current openings and join our team.
                  </p>
                  <Button asChild><a href="mailto:info@kafilafoundation.org">View Openings <ArrowRight className="h-4 w-4" /></a></Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GetInvolvedPage;
