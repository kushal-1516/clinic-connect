import { Phone, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-end md:items-center pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="ORA Clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-xl space-y-6">
          <div className="flex items-center gap-2 text-accent">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-body text-sm font-medium tracking-wide">
              4.9 Rating · 23 Reviews
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-semibold text-primary-foreground leading-[1.05] tracking-tight">
            Your Skin,
            <br />
            Our Expertise
          </h1>

          <p className="font-body text-primary-foreground/80 text-base md:text-lg max-w-md leading-relaxed">
            Expert dermatology care by Dr. Yamini. Trusted treatments
            for skin, hair, and aesthetic concerns in Hyderabad.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="tel:999999999"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 active:scale-[0.97] transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-primary-foreground/10 active:scale-[0.97] transition-all duration-200"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
