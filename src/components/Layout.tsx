import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Linkedin, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Cyber Consulting", href: "/cyber-consulting" },
  { label: "Workforce Development", href: "/workforce-development" },
  { label: "Legacy Initiatives", href: "/legacy-initiatives" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Brandmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg gradient-brand-bg shadow-glow">
        <Shield className="w-4 h-4" color="#FFFFFF" strokeWidth={2.5} />
      </span>
      <span className="font-heading text-lg font-extrabold tracking-tight leading-none">
        <span style={{ color: onDark ? "#FFFFFF" : "#1E293B" }}>Bridge</span>
        <span className="gradient-text">Forward</span>
      </span>
    </span>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0]">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
          <Link to="/"><Brandmark /></Link>

          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((l) => {
              const active = location.pathname === l.href;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-sm font-medium tracking-wide transition-colors"
                  style={{ color: active ? "#1E293B" : "#475569" }}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="btn-brand inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Request Consultation
            </Link>
          </nav>

          <button
            className="xl:hidden"
            style={{ color: "#1E293B" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden overflow-hidden bg-white border-b border-[#E2E8F0]"
            >
              <nav className="flex flex-col gap-4 p-6">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="text-base font-medium"
                    style={{ color: "#475569" }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="btn-brand inline-flex w-fit items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Request Consultation
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bf-dark relative overflow-hidden border-t border-white/5 pt-20 pb-10">
        <div className="absolute inset-0 hex-grid opacity-30" />
        <div className="absolute inset-x-0 -bottom-10 h-64 glow-bg" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl tracking-[0.2em] gradient-text">
              SECURING BUSINESSES. EMPOWERING FUTURES.
            </h2>
            <p className="mt-4 text-xs tracking-[0.3em] uppercase text-silver/70">
              Cybersecurity · Workforce · Legacy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 pb-10 border-b border-white/5 text-left">
            <div>
              <div className="mb-4">
                <Brandmark onDark />
              </div>
              <p className="text-xs text-silver/60 italic mb-3">Cybersecurity. Workforce. Legacy.</p>
              <p className="text-sm text-silver leading-relaxed max-w-sm">
                Cybersecurity consulting that funds workforce development and legacy initiatives — building resilient businesses and empowered communities.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-4">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/cyber-consulting" className="text-silver hover:text-white transition-colors">Cyber Consulting</Link></li>
                <li><Link to="/workforce-development" className="text-silver hover:text-white transition-colors">Workforce Development</Link></li>
                <li><Link to="/legacy-initiatives" className="text-silver hover:text-white transition-colors">Legacy Initiatives</Link></li>
                <li><Link to="/about" className="text-silver hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-silver hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/investors" className="text-silver hover:text-white transition-colors">Investors</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-silver">
                <li>hello@bridgeforwardcollective.org</li>
                <li>Tulsa, Oklahoma</li>
                <li>
                  <Link to="/contact" className="text-silver hover:text-white transition-colors underline">
                    Request a Consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-silver/60 tracking-wide">
            © {new Date().getFullYear()} Bridge Forward Collective. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
