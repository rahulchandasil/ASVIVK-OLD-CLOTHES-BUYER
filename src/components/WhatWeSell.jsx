import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import pic6 from '../assets/images/pic6.png';
import pic10 from '../assets/images/pic10.png';
import pic14 from '../assets/images/pic14.jpeg';
import pic35 from '../assets/images/pic35.jpeg';
import pic52 from '../assets/images/pic52.jpeg';
import pic19 from '../assets/images/pic19.jpeg';
import pic36 from '../assets/images/pic36.jpeg';
import pic47 from '../assets/images/pic 47.jpeg';
import pic28 from '../assets/images/pic28.jpeg';
import pic8 from '../assets/images/pic8.png';
import pic30 from '../assets/images/pic30.jpeg';
import pic32 from '../assets/images/pic32.jpeg';

export default function WhatWeSell() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      const el = document.getElementById('what-we-sell');
      if (el) {
        const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    } else {
      setShowAll(true);
    }
  };

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
            className="w-full md:w-[60%] lg:w-[50%] h-[40vh] sm:h-[50vh] md:h-[70vh] md:absolute md:left-0 md:bottom-0 z-10 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(pic14)}
          >
            <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
              <img src={pic14} alt="Vintage Sarees" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-warm-ivory drop-shadow-lg break-words">Vintage Sarees</h3>
              </div>
            </div>
          </motion.div>

          {/* Secondary Medium Image (Vintage Watches) */}
          <motion.div 
            className="w-full md:w-[40%] lg:w-[35%] h-[40vh] md:h-[40vh] lg:h-[50vh] md:absolute md:right-12 lg:right-32 md:top-0 z-20 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(pic35)}
          >
            <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
              <img src={pic35} alt="Vintage Watches" className="w-full h-full object-cover object-[center_70%] transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
                <h3 className="font-serif text-2xl md:text-3xl text-warm-ivory drop-shadow-lg break-words">Vintage Watches</h3>
              </div>
            </div>
          </motion.div>

          {/* Third Small Image (Old Coins & Antiques) */}
          <motion.div 
            className="w-full md:w-[35%] lg:w-[25%] h-[40vh] md:h-[35vh] md:absolute md:right-0 md:bottom-12 z-30 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(pic52)}
          >
            <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
              <img src={pic52} alt="Old Coins & Antiques" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory drop-shadow-lg break-words">Coins & Antiques</h3>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Additional Images Gallery */}
        <AnimatePresence>
          {showAll && (
            <motion.div 
              className="mt-16 lg:mt-24 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Image 1 - pic2 */}
            <motion.div 
              className="w-full h-[35vh] sm:h-[40vh] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(pic2)}
            >
              <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
                <img src={pic2} alt="Old Saree" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-lg sm:text-xl text-warm-ivory drop-shadow-lg">Old Saree</h3>
                </div>
              </div>
            </motion.div>

            {/* Image 2 - pic36 */}
            <motion.div 
              className="w-full h-[35vh] sm:h-[40vh] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(pic36)}
            >
              <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
                <img src={pic36} alt="Vintage Watch" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-lg sm:text-xl text-warm-ivory drop-shadow-lg">Vintage Watch</h3>
                </div>
              </div>
            </motion.div>

            {/* Image 3 - pic47 */}
            <motion.div 
              className="w-full h-[35vh] sm:h-[40vh] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(pic47)}
            >
              <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
                <img src={pic47} alt="Old Currency" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-lg sm:text-xl text-warm-ivory drop-shadow-lg">Old Currency</h3>
                </div>
              </div>
            </motion.div>

            {/* Image 4 - pic19 */}
            <motion.div 
              className="w-full h-[35vh] sm:h-[40vh] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(pic19)}
            >
              <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
                <img src={pic19} alt="Classic Saree" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-lg sm:text-xl text-warm-ivory drop-shadow-lg">Classic Saree</h3>
                </div>
              </div>
            </motion.div>

            {/* Image 5 - pic8 */}
            <motion.div 
              className="w-full h-[35vh] sm:h-[40vh] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(pic8)}
            >
              <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
                <img src={pic8} alt="Antique Object" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-lg sm:text-xl text-warm-ivory drop-shadow-lg">Antique Object</h3>
                </div>
              </div>
            </motion.div>

            {/* Image 6 - pic28 */}
            <motion.div 
              className="w-full h-[35vh] sm:h-[40vh] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(pic28)}
            >
              <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
                <img src={pic28} alt="Traditional Saree" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-lg sm:text-xl text-warm-ivory drop-shadow-lg">Traditional Saree</h3>
                </div>
              </div>
            </motion.div>

            {/* Image 7 - pic10 */}
            <motion.div 
              className="w-full h-[35vh] sm:h-[40vh] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(pic10)}
            >
              <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
                <img src={pic10} alt="Antique Decor" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-lg sm:text-xl text-warm-ivory drop-shadow-lg">Antique Decor</h3>
                </div>
              </div>
            </motion.div>

            {/* Image 8 - pic30 */}
            <motion.div 
              className="w-full h-[35vh] sm:h-[40vh] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(pic30)}
            >
              <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
                <img src={pic30} alt="Rare Saree" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-lg sm:text-xl text-warm-ivory drop-shadow-lg">Rare Saree</h3>
                </div>
              </div>
            </motion.div>

            {/* Image 9 - pic32 */}
            <motion.div 
              className="w-full h-[35vh] sm:h-[40vh] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(pic32)}
            >
              <div className="w-full h-full relative group overflow-hidden border border-warm-ivory/10 shadow-2xl">
                <img src={pic32} alt="Vintage Garment" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/30 lg:bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-lg sm:text-xl text-warm-ivory drop-shadow-lg">Vintage Garment</h3>
                </div>
              </div>
            </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 lg:mt-16 flex justify-center w-full">
          <button 
            onClick={handleToggle}
            className="btn-light min-h-[48px] px-10"
          >
            {showAll ? 'SHOW LESS' : 'LOAD MORE'}
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full view"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
