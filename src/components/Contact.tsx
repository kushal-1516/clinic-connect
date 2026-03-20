import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName) errs.name = "Name is required";
    else if (trimmedName.length > 100) errs.name = "Name is too long";

    if (!trimmedEmail) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errs.email = "Invalid email";

    if (form.phone.trim() && !/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) {
      errs.phone = "Invalid phone number";
    }

    if (!trimmedMessage) errs.message = "Message is required";
    else if (trimmedMessage.length > 1000) errs.message = "Message is too long (max 1000 chars)";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    // Simulate sending — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="container section-reveal">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-body text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Contact Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Get in Touch
          </h2>
          <p className="font-body text-muted-foreground mt-4 leading-relaxed">
            Have a question or want to book an appointment? Send us a message
            and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value:
                    "16-31, 9th Phase Road, Plot No. 254 HIG-VI, KPHB Phase 6, above OM Sai Medicals, Kukatpally, Hyderabad, Telangana 500085",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "079812 41900",
                  href: "tel:07981241900",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Open daily · Closes 8:30 PM",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-4 bg-background rounded-xl p-4 shadow-sm shadow-foreground/[0.03]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium text-primary tracking-wide uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-sm font-medium">Response Guarantee</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  We respond to all inquiries within 24 hours. Your health is important to us!
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm shadow-foreground/[0.03] aspect-video">
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

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-7 md:p-8 shadow-md shadow-foreground/[0.04] space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-body text-sm font-medium mb-1.5 block">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  maxLength={100}
                  className="w-full font-body text-sm bg-muted/50 border border-border rounded-lg px-4 py-2.5 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
                />
                {errors.name && (
                  <p className="font-body text-xs text-destructive mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="font-body text-sm font-medium mb-1.5 block">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  maxLength={255}
                  className="w-full font-body text-sm bg-muted/50 border border-border rounded-lg px-4 py-2.5 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
                />
                {errors.email && (
                  <p className="font-body text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="font-body text-sm font-medium mb-1.5 block">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Your phone number (optional)"
                maxLength={15}
                className="w-full font-body text-sm bg-muted/50 border border-border rounded-lg px-4 py-2.5 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
              />
              {errors.phone && (
                <p className="font-body text-xs text-destructive mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="font-body text-sm font-medium mb-1.5 block">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your concern..."
                rows={5}
                maxLength={1000}
                className="w-full font-body text-sm bg-muted/50 border border-border rounded-lg px-4 py-2.5 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 resize-none"
              />
              {errors.message && (
                <p className="font-body text-xs text-destructive mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none transition-all duration-200"
            >
              {sending ? (
                <span className="inline-block w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : sent ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {sending ? "Sending..." : sent ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
