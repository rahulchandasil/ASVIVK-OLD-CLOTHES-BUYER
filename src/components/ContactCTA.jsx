import React from 'react';
import { motion } from 'motion/react';

export default function ContactCTA() {
  return (
    <section id="contact" className="section bg-charcoal text-warm-ivory relative overflow-hidden">
      
      {/* Decorative large ampersand in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] leading-none font-serif text-white opacity-[0.02] pointer-events-none select-none">
        ?
      </div>

      <div className="site-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="eyebrow justify-center !text-warm-ivory/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="w-4 h-[1px] bg-warm-ivory/20"></span>
            LET'S TALK
            <span className="w-4 h-[1px] bg-warm-ivory/20"></span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-7xl text-warm-ivory leading-[1.1] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            HAVE SOMETHING OLD?<br className="hidden md:block"/>
            <span className="italic font-light text-antique-gold">IT MIGHT BE WORTH MORE<br className="hidden md:block"/> THAN YOU THINK.</span>
          </motion.h2>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="tel:8617289516" 
              className="inline-flex items-center justify-center px-10 py-5 bg-warm-ivory text-charcoal text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-antique-gold"
            >
              CALL 8617289516
            </a>
            <a 
              href="mailto:bijoykhaoria61@gmail.com" 
              className="inline-flex items-center justify-center px-10 py-5 border border-warm-ivory/20 text-warm-ivory text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:border-warm-ivory hover:bg-white/5"
            >
              EMAIL US
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
