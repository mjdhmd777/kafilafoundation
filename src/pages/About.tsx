import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Target, Eye, Award, Users, BookOpen, CheckCircle } from "lucide-react";
import logo from "@/assets/kafila-logo.png";

const objectives = [
  "Empowerment of Underprivileged Communities through education and vocational training",
  "Welfare and Support for Women, Children, Elderly & Persons with Disabilities",
  "Promoting Social Justice, Equality & Eradication of Social Evils",
  "Spreading Awareness through Development Programs & Advocacy",
  "Youth Engagement for National & Societal Progress",
  "Gender Sensitization by Empowering Women",
];

const affiliations = [
  { name: "Ministry of Corporate Affairs (MCA)", id: "CSR00019816", validity: "Lifetime" },
  { name: "NITI Aayog / Darpan", id: "JK/2020/0266431", validity: "Lifetime" },
  { name: "12A of Income Tax", id: "AAETK3208JE20251", validity: "AY 2028-2029" },
  { name: "80G of Income Tax", id: "AAETK3208JF20251", validity: "AY 2028-2029" },
  { name: "Ministry of Information & Broadcasting", id: "5305", validity: "Lifetime" },
  { name: "MSME Udyam", id: "UDYAMJK-12-0000041", validity: "Lifetime" },
  { name: "Nehru Yuva Kendra Sangathan", id: "NYK/DYCK/KFAC/077/2019-20", validity: "Lifetime" },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Kafila Foundation (J&K)</title>
        <meta 
          name="description" 
          content="Learn about Kafila Foundation, a registered NGO in Jammu & Kashmir dedicated to education, community development, and empowerment since 2019." 
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  About Kafila Foundation
                </span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Who We Are
                </h1>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  A caravan of changemakers dedicated to empowering communities through 
                  education, awareness, and sustainable development.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <img 
                  src={logo} 
                  alt="Kafila Foundation Logo" 
                  className="max-w-sm mx-auto"
                />
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                    About the Organization
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Kafila Foundation is a Non-Governmental Organization (NGO) based in Kupwara, Kashmir. 
                    The word "Kafila," derived from Urdu & Persian, means "Caravan" or "Group of People," 
                    symbolizing a collective effort towards a common goal based on the principle of Unity in Diversity.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Founded by Mr. Ishfaq Ahmad Bhat in 2019, we are dedicated to promoting peace, harmony & stability 
                    across the state & country. We render services in education, health, sports, environment & 
                    economic development.
                  </p>
                  <p className="text-muted-foreground italic">
                    "Main Akela Hi Chala Tha Jaanib-E-Manzil Magar, Loog Sath Aatey Gaye Aur Caravaan Banta Gaya."
                    <br />
                    <span className="text-sm not-italic">
                      — "I Set Out Alone Towards The Goal, People Kept Joining In & It Became A Procession."
                    </span>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal>
                <div className="bg-background rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To nurture a digitalization by empowering women & bringing them into the mainstream 
                    through targeted programs & initiatives. We strive to create a just, inclusive & 
                    progressive society for all.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-background rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To strengthen the capacities of youth in Kashmir through integrated programs in 
                    Mental Health, Education & Entrepreneurship by promoting psychosocial resilience, 
                    Life Skills, Gender Equality & maintaining Peace & Stability in the region.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Objectives */}
            <ScrollReveal>
              <div className="mt-12 bg-background rounded-2xl p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                  Our Objectives
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Strategic Affiliations */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Compliance & Trust
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Strategic Affiliations
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Registered and recognized by key government bodies, ensuring transparency and accountability.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {affiliations.map((affiliation, index) => (
                <ScrollReveal key={affiliation.name} delay={index * 50}>
                  <div className="bg-secondary rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      {affiliation.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      ID: {affiliation.id}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      Valid: {affiliation.validity}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="section-padding bg-secondary">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Leadership
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Meet Our Founder
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Mr. Ishfaq Ahmad Bhat
                    </h3>
                    <p className="text-primary font-medium mb-4">Founder & President</p>
                    <p className="text-muted-foreground mb-4">
                      An alumnus of Army Public School, Beas Punjab & University of Pune. Selected under 
                      Sadbhavana initiative by Rashtriya Rifles. Held the rank of Junior Under Officer (JUO) 
                      in NCC and is recognized as a Peace Ambassador from Kashmir by Gandhi Peace Foundation, Nepal.
                    </p>
                    <p className="text-muted-foreground">
                      During COVID-19, he worked closely with District Administration Kupwara for relief efforts. 
                      His work has been recognized by LG of J&K, NITI Aayog/Piramal Foundation, and Defence forces.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Recognitions */}
        <section id="recognitions" className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Achievements
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Recognitions & Awards
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="max-w-3xl mx-auto bg-secondary rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Award className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Surakshit Hum Surakshit Tum Abhiyan
                    </h4>
                    <p className="text-muted-foreground">
                      Recognized by Piramal Foundation and NITI Aayog for selfless contributions in protecting 
                      Senior Citizens in Aspirational District Kupwara during COVID-19, impacting 2.9 Million 
                      Senior Citizens across 112 Aspirational Districts.
                    </p>
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

export default AboutPage;
