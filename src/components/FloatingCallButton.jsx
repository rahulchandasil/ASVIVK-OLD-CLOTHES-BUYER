import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:8617289516"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-14 h-14 bg-charcoal text-warm-ivory border border-warm-ivory/10 rounded-full shadow-2xl hover:bg-antique-gold hover:text-charcoal transition-all duration-300 group"
      aria-label="Call ASVIVK"
    >
      <Phone size={22} className="group-hover:scale-110 transition-transform duration-300 relative z-10" />
      <span className="absolute inset-0 rounded-full bg-charcoal shadow-[0_0_0_2px_rgba(184,149,74,0.3)] animate-pulse opacity-50 z-0"></span>
    </a>
  );
}
