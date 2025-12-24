import { ScrollReveal } from "@/components/ScrollReveal";

const partners = [
  { name: "NITI Aayog", category: "Government" },
  { name: "Ministry of Corporate Affairs", category: "Government" },
  { name: "Piramal Foundation", category: "Foundation" },
  { name: "District Administration Kupwara", category: "Government" },
  { name: "Nehru Yuva Kendra Sangathan", category: "Government" },
  { name: "Haifa Welfare Foundation", category: "NGO" },
  { name: "Yash Foundation", category: "NGO" },
  { name: "CCS NIAM", category: "Government" },
  { name: "APIC New Delhi", category: "Partner" },
  { name: "Aamhi Punekar", category: "NGO" },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Network
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Collaborations & Supporters
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="px-6 py-3 bg-background rounded-full border border-border hover:border-primary/50 hover:shadow-md transition-all"
              >
                <span className="font-medium text-foreground text-sm">{partner.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
