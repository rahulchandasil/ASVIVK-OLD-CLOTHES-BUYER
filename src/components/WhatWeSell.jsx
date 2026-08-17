import React from 'react';
import { motion } from 'motion/react';
import pic14 from '../assets/images/pic14.jpeg';
import pic18 from '../assets/images/pic18.jpeg';
import pic3 from '../assets/images/pic3.png';
import pic10 from '../assets/images/pic10.png'

export default function WhatWeSell() {
  return (
    <section id="what-we-sell" className="py-16 sm:py-24 lg:py-32 bg-warm-brown text-warm-ivory relative z-10 overflow-hidden">
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>

      <div className="site-container relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 sm:gap-12 mb-16 lg:mb-32">
          <div className="max-w-2xl w-full">
            <motion.div 
              className="eyebrow-light !text-antique-gold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-8 h-[1px] bg-antique-gold/50 hidden sm:block"></span>
              WHAT WE OFFER
            </motion.div>
            
            <motion.h2 
              className="text-[clamp(2.5rem,6vw,6rem)] font-serif leading-[1.05] tracking-tight text-warm-ivory break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              EVERY FIND<br />
              <span className="italic font-light">HAS A STORY.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            className="w-full lg:max-w-xs"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-warm-ivory/70 font-light leading-relaxed text-sm sm:text-base">
              Available items change as new pieces arrive. We offer a rotating, curated selection of unique history.
            </p>
          </motion.div>
        </div>

        {/* Desktop: Artistic Composition | Mobile: Vertical Stack */}
        <div className="flex flex-col md:block md:relative w-full md:h-[80vh] lg:h-[90vh] gap-6">
          
          {/* Main Large Image (Vintage Clothing) */}
          <motion.div 
            className="w-full md:w-[60%] lg:w-[50%] h-[40vh] sm:h-[50vh] md:h-[70vh] md:absolute md:left-0 md:bottom-0 z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
              <img src={pic14} alt="Vintage Clothing" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-warm-ivory drop-shadow-lg break-words">Vintage Clothing</h3>
              </div>
            </div>
          </motion.div>

          {/* Secondary Medium Image (Collectible Pieces) */}
          <motion.div 
            className="w-full md:w-[40%] lg:w-[35%] h-[40vh] md:h-[40vh] lg:h-[50vh] md:absolute md:right-12 lg:right-32 md:top-0 z-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
              <img src={pic18} alt="Collectible Pieces" className="w-full h-full object-cover object-[center_70%] transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
                <h3 className="font-serif text-2xl md:text-3xl text-warm-ivory drop-shadow-lg break-words">Collectible Pieces</h3>
              </div>
            </div>
          </motion.div>

          {/* Third Small Image (Old Coins & Antiques) */}
          <motion.div 
            className="w-full md:w-[35%] lg:w-[25%] h-[40vh] md:h-[35vh] md:absolute md:right-0 md:bottom-12 z-30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
              <img src={pic10} alt="Antiques" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory drop-shadow-lg break-words"> Antiques</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
