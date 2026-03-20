import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const Contact = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="container section-reveal">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <p className="font-body text-sm font-medium tracking-widest uppercase text-primary mb-3">
                Visit Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                Get in Touch
              </h2>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium mb-1">Address</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    16-31, 9th Phase Road, Plot No. 254 HIG-VI, KPHB Phase 6,
                    above OM Sai Medicals, Kukatpally, Hyderabad, Telangana 500085
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium mb-1">Phone</p>
                  <a
                    href="tel:07981241900"
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    079812 41900
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium mb-1">Hours</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Open daily · Closes 8:30 PM
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=ORA+Clinic+KPHB+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-200"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg shadow-foreground/[0.05] aspect-square md:aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7!2d78.3902!3d17.4882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzE3LjUiTiA3OMKwMjMnMjQuNyJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ORA Clinic Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
