import React from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-64 bg-charcoal text-warm-ivory text-center relative overflow-hidden z-20">
      
      <div className="site-container relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow-light justify-center !text-antique-gold mb-6 sm:mb-10">
            <span className="w-8 sm:w-12 h-[1px] bg-antique-gold/50 hidden sm:block"></span>
            GET IN TOUCH
            <span className="w-8 sm:w-12 h-[1px] bg-antique-gold/50 hidden sm:block"></span>
          </div>
          
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-serif text-warm-ivory mb-6 sm:mb-8 tracking-tight leading-[1.1] break-words">
            HAVE SOMETHING OLD?<br />
            <span className="italic text-antique-gold font-light">LET'S FIND ITS VALUE.</span>
          </h2>

          <p className="text-warm-ivory/60 font-light text-base sm:text-lg mb-12 sm:mb-20 max-w-2xl mx-auto px-4">
            Have old clothes, coins, antiques or other old items? Get in touch with ASVIVK.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl mx-auto">
            <a 
              href="tel:8617289516" 
              className="inline-flex items-center justify-center px-8 lg:px-12 py-5 lg:py-6 bg-antique-gold text-charcoal text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-warm-ivory w-full sm:w-auto min-h-[56px] text-center"
            >
              CALL - 8617289516
            </a>
            
            <a 
              href="tel:7003356490" 
              className="inline-flex items-center justify-center px-8 lg:px-12 py-5 lg:py-6 bg-antique-gold text-charcoal text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-warm-ivory w-full sm:w-auto min-h-[56px] text-center"
            >
              CALL - 7003356490
            </a>
            
            <a 
              href="tel:9330263780" 
              className="inline-flex items-center justify-center px-8 lg:px-12 py-5 lg:py-6 bg-antique-gold text-charcoal text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-warm-ivory w-full sm:w-auto min-h-[56px] text-center"
            >
              CALL - 9330263780
            </a>
            
            <a 
              href="mailto:bijoykhaoria61@gmail.com" 
              className="inline-flex items-center justify-center px-8 lg:px-12 py-5 lg:py-6 bg-transparent border border-warm-ivory/20 text-warm-ivory text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:border-warm-ivory hover:bg-white/5 w-full sm:w-auto min-h-[56px] text-center"
            >
              SEND EMAIL
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
