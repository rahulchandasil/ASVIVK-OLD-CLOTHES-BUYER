import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

// Featured masonry images
import pic2 from '../assets/images/pic2.png';
import pic4 from '../assets/images/pic4.jpeg';
import pic14 from '../assets/images/pic14.jpeg';
import pic5 from '../assets/images/pic5.png';
import pic17 from '../assets/images/pic17.jpeg';

// Extra images for Load More
import pic1 from '../assets/images/pic1.png';
import pic3 from '../assets/images/pic3.png';
import pic6 from '../assets/images/pic6.png';
import pic7 from '../assets/images/pic7.png';
import pic8 from '../assets/images/pic8.png';
import pic9 from '../assets/images/pic9.png';
import pic10 from '../assets/images/pic10.png';
import pic11 from '../assets/images/pic11.png';
import pic12 from '../assets/images/pic12.png';
import pic13 from '../assets/images/pic13.jpeg';
import pic15 from '../assets/images/pic15.jpeg';
import pic16 from '../assets/images/pic16.jpeg';
import pic18 from '../assets/images/pic18.jpeg';
import pic19 from '../assets/images/pic19.jpeg';
import pic20 from '../assets/images/pic20.jpeg';
import pic21 from '../assets/images/pic21.jpeg';
import pic22 from '../assets/images/pic22.jpeg';
import pic23 from '../assets/images/pic23.jpeg';
import pic24 from '../assets/images/pic24.jpeg';
import pic25 from '../assets/images/pic25.jpeg';
import pic26 from '../assets/images/pic26.jpeg';
import pic27 from '../assets/images/pic27.jpeg';
import pic28 from '../assets/images/pic28.jpeg';
import pic29 from '../assets/images/pic29.jpeg';
import pic30 from '../assets/images/pic30.jpeg';
import pic32 from '../assets/images/pic32.jpeg';

const extraImages = [
  pic1, pic3, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic15, pic16, 
  pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, 
  pic29, pic30, pic32
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-warm-ivory border-t border-muted/10 relative z-10">
      <div className="site-container relative z-10">
        
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

        {/* Responsive Editorial Collage Grid (First 5 Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Large Wide Image */}
          <motion.div 
            className="col-span-1 sm:col-span-2 md:col-span-12 lg:col-span-8 relative group overflow-hidden border border-muted/10 bg-white cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(pic14)}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/9] overflow-hidden">
              <img src={pic14} alt="Vintage Collection" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

          {/* Tall Image */}
          <motion.div 
            className="col-span-1 md:col-span-6 lg:col-span-4 relative group overflow-hidden border border-muted/10 bg-white lg:translate-y-24 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(pic4)}
          >
            <div className="relative w-full aspect-square sm:aspect-[3/4] overflow-hidden">
              <img src={pic4} alt="Vintage Items" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

          {/* Square Image */}
          <motion.div 
            className="col-span-1 md:col-span-6 lg:col-span-4 relative group overflow-hidden border border-muted/10 bg-white cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(pic2)}
          >
            <div className="relative w-full aspect-square overflow-hidden">
              <img src={pic2} alt="Old Textlies" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

          {/* Large Offset Image */}
          <motion.div 
            className="col-span-1 sm:col-span-2 md:col-span-12 lg:col-span-6 relative group overflow-hidden border border-muted/10 bg-white lg:mt-32 lg:translate-x-12 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(pic17)}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] overflow-hidden">
              <img src={pic17} alt="Antique Objects" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

          {/* Small Offset Image */}
          <motion.div 
            className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-3 lg:col-start-9 relative group overflow-hidden border border-muted/10 bg-white lg:-translate-y-16 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(pic5)}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square overflow-hidden">
              <img src={pic5} alt="Unique Items" className="w-full h-full object-cover transition-transform duration-[3000ms] lg:group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 lg:group-hover:bg-charcoal/20 transition-colors duration-700"></div>
            </div>
          </motion.div>

        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="mt-16 lg:mt-24 flex justify-center w-full clear-both pt-8 lg:pt-16">
            <button 
              onClick={() => setShowAll(true)}
              className="btn-secondary min-h-[48px] px-10"
            >
              LOAD MORE IMAGES
            </button>
          </div>
        )}

        {/* Extra Images Grid */}
        <AnimatePresence>
          {showAll && (
            <motion.div 
              className="mt-16 lg:mt-24 overflow-hidden pt-8 lg:pt-16 border-t border-muted/10"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {extraImages.map((img, index) => (
                  <motion.div 
                    key={index}
                    className="relative w-full aspect-square overflow-hidden border border-muted/10 bg-white cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`Gallery item ${index + 6}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 sm:-top-4 sm:-right-4 bg-charcoal hover:bg-antique-gold border border-white/10 text-warm-ivory hover:text-charcoal p-3 rounded-full transition-all duration-300 shadow-xl"
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
