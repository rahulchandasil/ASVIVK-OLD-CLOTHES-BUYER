import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import pic13 from '../assets/images/pic13.jpeg';
import pic10 from '../assets/images/pic10.png';
import pic16 from '../assets/images/pic16.jpeg';
import pic50 from '../assets/images/pic50.jpeg';
import pic35 from '../assets/images/pic35.jpeg';

const categories = [
  { num: "01", title: "OLD CLOTHES & SAREES", desc: "Vintage garments, traditional sarees, and textiles.", image: pic13, placeholder: "VINTAGE CLOTHING" },
  { num: "02", title: "OLD COINS & CURRENCY", desc: "Rare historical coins, currency, and antique banknotes.", image: pic50 , placeholder: "OLD COINS" },
  { num: "03", title: "ANTIQUE ITEMS", desc: "Genuine antique objects and historical artifacts.", image: pic10, placeholder: "ANTIQUE OBJECTS" },
  { num: "04", title: "VINTAGE WATCHES", desc: "Classic luxury watches and old timepieces.", image: pic35, placeholder: "VINTAGE WATCHES" },
  { num: "05", title: "OTHER VALUABLES", desc: "Well-preserved furniture, decor and household items.", image: pic16, placeholder: "VALUABLES" }
];

export default function WhatWeBuy() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="what-we-buy" className="py-16 sm:py-24 lg:py-32 bg-charcoal text-warm-ivory relative z-20">
      <div className="site-container">
        
        <div className="mb-12 sm:mb-20 lg:mb-32">
          <motion.div 
            className="eyebrow-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-8 h-[1px] bg-warm-ivory/30 hidden sm:block"></span>
            WHAT WE BUY
          </motion.div>
          
          <motion.h2 
            className="text-[clamp(2.5rem,6vw,6rem)] font-serif leading-[1.05] tracking-tight text-warm-ivory max-w-4xl break-words"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            FROM CLOTHING TO<br />
            <span className="italic font-light text-antique-gold">COLLECTIBLES.</span>
          </motion.h2>
        </div>

        {/* Editorial Rows */}
        <div className="border-t border-warm-ivory/10">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.title}
              className="group relative border-b border-warm-ivory/10 py-8 sm:py-10 lg:py-16 transition-colors duration-500 lg:hover:bg-warm-ivory/[0.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Desktop/Tablet Layout */}
              <div className="hidden lg:flex items-center justify-between gap-6 relative z-10 group-hover:translate-x-4 transition-transform duration-500">
                <div className="flex items-center gap-16 w-1/2">
                  <span className="font-serif text-5xl text-warm-ivory/20 group-hover:text-antique-gold transition-colors duration-500 w-16">
                    {cat.num}
                  </span>
                  <h3 className="font-serif text-5xl text-warm-ivory group-hover:text-antique-gold transition-colors duration-500 m-0 leading-none">
                    {cat.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between w-1/2 gap-6">
                  <p className="text-warm-ivory/60 font-light text-base max-w-xs m-0">
                    {cat.desc}
                  </p>
                  <div className="w-12 h-[1px] bg-warm-ivory/10 group-hover:bg-antique-gold transition-colors duration-500"></div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="flex flex-col lg:hidden gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-serif text-2xl sm:text-3xl text-antique-gold/70 mt-1">
                    {cat.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory m-0 leading-tight mb-2 break-words">
                      {cat.title}
                    </h3>
                    <p className="text-warm-ivory/60 font-light text-sm sm:text-base mb-4">
                      {cat.desc}
                    </p>
                    {/* Inline Image for Mobile */}
                    <div className="w-full sm:w-2/3 aspect-video overflow-hidden border border-warm-ivory/10 bg-charcoal">
                      {cat.image ? (
                        <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                          <span className="text-warm-ivory/40 font-serif text-sm tracking-[0.2em] mb-1">{cat.title}</span>
                          <span className="text-antique-gold font-serif text-base sm:text-lg tracking-[0.1em]">{cat.placeholder}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Image Preview (Desktop Only) */}
              <AnimatePresence>
                {hoveredIdx === index && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 aspect-[4/3] z-0 pointer-events-none overflow-hidden border border-warm-ivory/10 shadow-2xl bg-[#1f1f1d]"
                    initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 4 - 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: Math.random() * 4 - 2 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {cat.image ? (
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                        <span className="text-warm-ivory/40 font-serif text-base tracking-[0.2em] mb-2">{cat.title}</span>
                        <span className="text-antique-gold font-serif text-2xl tracking-[0.1em]">{cat.placeholder}</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
