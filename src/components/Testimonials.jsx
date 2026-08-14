import React from 'react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-warm-ivory border-t border-muted/10 relative overflow-hidden z-10">
      <div className="site-container text-center relative z-20">
        
        <motion.div 
          className="eyebrow justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-8 h-[1px] bg-charcoal hidden sm:block"></span>
          TESTIMONIALS
          <span className="w-8 h-[1px] bg-charcoal hidden sm:block"></span>
        </motion.div>
        
        <motion.div
          className="relative max-w-4xl mx-auto py-12 sm:py-16 lg:py-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Huge Decorative Quote */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[8rem] sm:text-[10rem] lg:text-[15rem] leading-none font-serif text-charcoal/[0.03] select-none pointer-events-none">
            "
          </div>
          
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-serif text-charcoal leading-[1.2] relative z-10 tracking-tight break-words px-4">
            CUSTOMER STORIES<br />
            <span className="italic font-light text-antique-gold">COMING SOON</span>
          </h2>
          
          <p className="mt-6 sm:mt-8 text-charcoal/50 tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs font-semibold px-4">
            Real feedback from our clients in Kolkata will be featured here.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
