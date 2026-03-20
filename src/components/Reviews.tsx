import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Shaik Farheen",
    time: "10 months ago",
    text: "I had the pleasure of consulting Dr. Yamini Indhireddy at Ora Clinic in KPHB, Hyderabad. From the moment I entered, the clinic exuded professionalism and cleanliness. Dr. Indhireddy took the time to thoroughly understand my concerns.",
    rating: 5,
  },
  {
    name: "Lali Reva",
    time: "a year ago",
    text: "I visited Dr.Yamini for skin related issues. She listened to my concern attentively. Her compassionate approach and expertise reassured me throughout the treatment. The treatment she recommended was effective and I noted improvement.",
    rating: 5,
  },
  {
    name: "Vinay Varma",
    time: "a year ago",
    text: "I visited Dr.Yamini for Hair related issues. She listened to my concern attentively. She is expertise and assured me throughout the treatment. The treatment she recommended was effective and I noted improvement in hair growth quickly.",
    rating: 5,
  },
];

const Reviews = () => {
  const ref = useScrollReveal();

  return (
    <section id="reviews" className="py-24 md:py-32">
      <div ref={ref} className="container section-reveal">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-body text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Patient Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Trusted by Our Patients
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="font-body text-lg font-semibold">4.9</span>
            <span className="font-body text-sm text-muted-foreground">
              from 23 reviews on Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="relative bg-card rounded-2xl p-7 shadow-sm shadow-foreground/[0.03]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/15 mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-sm font-semibold text-primary">
                    {r.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-medium">{r.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{r.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
