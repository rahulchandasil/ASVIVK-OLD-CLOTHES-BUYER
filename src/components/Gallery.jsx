import React from 'react';
import { motion } from 'motion/react';
import pic2 from '../assets/images/pic2.png';
import pic4 from '../assets/images/pic4.jpeg';
import pic14 from '../assets/images/pic14.jpeg';
import pic5 from '../assets/images/pic5.png';
import pic17 from '../assets/images/pic17.jpeg';

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-warm-ivory border-t border-muted/10">
      <div className="site-container">
        
        <div className="mb-12 sm:mb-20 lg:mb-32">
          <motion.div 
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-8 h-[1px] bg-charcoal hidden sm:block"></span>
            OUR COLLECTION
          </motion.div>
          
          <motion.h2 
            className="text-[clamp(2.5rem,6vw,6rem)] font-serif leading-[1.05] tracking-tight text-charcoal break-words"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A COLLECTION OF<br />
            <span className="italic font-light text-antique-gold">OLD & INTERESTING THINGS.</span>
          </motion.h2>
        </div>

        {/* Responsive Editorial Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Large Wide Image */}
          <motion.div 
            className="col-span-1 sm:col-span-2 md:col-span-12 lg:col-span-8 relative group overflow-hidden border border-muted/10 bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/9] overflow-hidden">
              <img src={pic14} alt="Vintage Collection" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

          {/* Tall Image */}
          <motion.div 
            className="col-span-1 md:col-span-6 lg:col-span-4 relative group overflow-hidden border border-muted/10 bg-white lg:translate-y-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-square sm:aspect-[3/4] overflow-hidden">
              <img src={pic4} alt="Vintage Items" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

          {/* Square Image */}
          <motion.div 
            className="col-span-1 md:col-span-6 lg:col-span-4 relative group overflow-hidden border border-muted/10 bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-square overflow-hidden">
              <img src={pic2} alt="Old Textlies" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

          {/* Large Offset Image */}
          <motion.div 
            className="col-span-1 sm:col-span-2 md:col-span-12 lg:col-span-6 relative group overflow-hidden border border-muted/10 bg-white lg:mt-32 lg:translate-x-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] overflow-hidden">
              <img src={pic17} alt="Antique Objects" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

          {/* Small Offset Image */}
          <motion.div 
            className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-3 lg:col-start-9 relative group overflow-hidden border border-muted/10 bg-white lg:-translate-y-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square overflow-hidden">
              <img src={pic5} alt="Unique Items" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
