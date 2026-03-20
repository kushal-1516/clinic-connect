import { useScrollReveal } from "@/hooks/useScrollReveal";
import drYamini from "@/assets/dr-yamini.jpg";
import { Award, Heart, Clock } from "lucide-react";

const highlights = [
  { icon: Award, label: "Certified Dermatologist" },
  { icon: Heart, label: "Women-Owned Practice" },
  { icon: Clock, label: "Open Till 8:30 PM" },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className="container section-reveal">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-foreground/5">
              <img
                src={drYamini}
                alt="Dr. Yamini Indhireddy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-2xl -z-10" />
          </div>

          <div className="space-y-6">
            <p className="font-body text-sm font-medium tracking-widest uppercase text-primary">
              Meet Your Doctor
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
              Dr. Yamini Indhireddy
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed max-w-lg">
              With years of dedicated practice in dermatology, Dr. Yamini brings a
              compassionate, patient-first approach to every consultation. Known for
              her expertise in skin and hair treatments, she takes the time to
              thoroughly understand each patient's concerns and recommends effective,
              personalised treatment plans.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-card rounded-xl px-4 py-3.5 shadow-sm shadow-foreground/[0.03]"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
