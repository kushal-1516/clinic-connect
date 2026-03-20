import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles, Leaf, Scissors, Sun, Droplets, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Acne & Scar Treatment",
    desc: "Advanced solutions for acne, blemishes, and post-acne scarring with proven clinical results.",
  },
  {
    icon: Leaf,
    title: "Hair Fall Treatment",
    desc: "Comprehensive hair loss diagnosis and regrowth therapies tailored to your specific condition.",
  },
  {
    icon: Sun,
    title: "Pigmentation & Tan",
    desc: "Targeted treatments for melasma, dark spots, and uneven skin tone restoration.",
  },
  {
    icon: Droplets,
    title: "Hydration & Glow",
    desc: "Medical-grade facials and peels for deep hydration and lasting skin radiance.",
  },
  {
    icon: Scissors,
    title: "Aesthetic Procedures",
    desc: "Safe, minimally invasive cosmetic treatments to enhance your natural features.",
  },
  {
    icon: ShieldCheck,
    title: "Skin Allergy Care",
    desc: "Expert diagnosis and management of eczema, rashes, and chronic skin conditions.",
  },
];

const Services = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="container section-reveal">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-body text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Our Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Comprehensive Skin & Hair Care
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group bg-background rounded-2xl p-7 shadow-sm shadow-foreground/[0.03] hover:shadow-lg hover:shadow-foreground/[0.06] transition-shadow duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
