import React from 'react';
import { motion } from 'motion/react';
import pic22 from '../assets/images/pic22.jpeg';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-warm-ivory relative overflow-hidden z-10 border-t border-muted/10">
      <div className="site-container relative">
        
        {/* Large Statement Background (Desktop) */}
        <div className="hidden lg:block absolute -top-12 left-0 right-0 text-center pointer-events-none">
          <motion.div 
            className="text-[12vw] font-serif text-charcoal/[0.03] leading-none whitespace-nowrap overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
          >
            OLD OBJECTS
          </motion.div>
        </div>

        {/* Mobile: Vertical Stack | Tablet/Desktop: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
          
          {/* Left/Top: Typography & Overlapping Text */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-5 flex flex-col order-1 lg:order-none"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow">ABOUT ASVIVK</div>
            
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-serif leading-[1.05] tracking-tight text-charcoal mb-8 lg:mb-16 lg:-mr-32 relative z-30 break-words">
              OLD OBJECTS.<br />
              <span className="italic font-light text-antique-gold">STORIES THAT REMAIN.</span>
            </h2>
            
            <div className="max-w-lg bg-warm-ivory/95 lg:bg-transparent p-0 lg:p-0 z-30 relative mt-4 lg:mt-0">
              <p className="text-charcoal/80 font-light leading-relaxed text-base lg:text-lg mb-8">
                ASVIVK Old Clothes Buyer helps people find value in old clothes, coins, antique pieces, vintage products and other old belongings. We believe that every item from the past carries history.
              </p>
              
              <div className="flex flex-col gap-4 border-l border-antique-gold pl-6">
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-charcoal">Trust & Fair Dealing</span>
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-charcoal">Local Kolkata Presence</span>
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-charcoal">Simple Communication</span>
              </div>
            </div>
            
          </motion.div>

          {/* Right/Bottom: Large Overlapping Image */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-7 relative z-10 flex justify-center lg:justify-end order-2 lg:order-none"
            initial={{ opacity: 0, clipPath: 'inset(10% 0 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Controlled aspect ratio on mobile, fixed height on desktop */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:w-[110%] lg:h-[70vh] bg-charcoal overflow-hidden border border-muted/20">
              <img 
                src={pic22} 
                alt="Vintage stack" 
                className="w-full h-full object-cover object-center opacity-90 transition-transform duration-[3000ms] hover:scale-105"
                loading="lazy"
              />
              
              {/* Vertical Label (Hidden on small mobile) */}
              <div className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 -rotate-90 hidden sm:block z-20">
                <span className="text-[10px] font-bold tracking-[0.4em] text-charcoal uppercase bg-warm-ivory px-6 py-2 shadow-sm border border-muted/10">
                  BANSDRONI · KOLKATA
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
