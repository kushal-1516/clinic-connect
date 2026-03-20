import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-display text-xl font-semibold text-foreground">
            ORA Clinic
          </span>
          <p className="font-body text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} ORA Clinic. All rights reserved.
          </p>
        </div>
        <a
          href="tel:07981241900"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Phone className="w-4 h-4" />
          079812 41900
        </a>
      </div>
    </footer>
  );
};

export default Footer;
