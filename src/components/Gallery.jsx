import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

function GalleryCategory({ id, title, images, setSelectedImage }) {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 4;
  
  const displayedImages = showAll ? images : images.slice(0, initialCount);
  const hasMore = images.length > initialCount;

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      const el = document.getElementById(`category-${id}`);
      if (el) {
        // scroll back up smoothly
        const offsetTop = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    } else {
      setShowAll(true);
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div id={`category-${id}`} className="mb-16 lg:mb-24 scroll-mt-24">
      <div className="flex items-center justify-between mb-8 border-b border-charcoal/10 pb-4">
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal">{title}</h3>
        <span className="text-sm font-medium text-charcoal/50 uppercase tracking-widest">{images.length} Items</span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <AnimatePresence initial={false}>
          {displayedImages.map((img, index) => (
            <motion.div 
              key={`${id}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-square overflow-hidden border border-muted/10 bg-white cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`${title} item ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center w-full">
          <button 
            onClick={handleToggle}
            className="btn-secondary min-h-[48px] px-8 text-sm"
          >
            {showAll ? 'SHOW LESS' : 'LOAD MORE'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Load all images automatically from the folder without manually typing 54 imports
  const categories = useMemo(() => {
    // import.meta.glob is a Vite feature to dynamically import all matching files
    const modules = import.meta.glob('../assets/images/*.{png,jpeg,jpg}', { eager: true, query: '?url', import: 'default' });
    
    // Helper to safely extract images by their number
    const getImages = (numbers) => {
      return numbers.map(n => {
        const key = Object.keys(modules).find(k => k.match(new RegExp(`pic\\s?${n}\\.(png|jpe?g)$`, 'i')));
        return key ? modules[key] : null;
      }).filter(Boolean);
    };

    const sarees = getImages([1, 2, 3, 5, 6, 7, 9, 11, 12, 13, 14, 15, 17, 19, 24, 25, 26, 27, 28, 29, 30, 32, 41, 42, 43, 44]);
    const watches = getImages([33, 35, 36, 37, 38, 39, 40, 45]);
    const antiques = getImages([4, 8, 10]);
    const coins = getImages([46, 47, 48, 49, 50, 51, 52, 53, 54]);

    return [
      { id: 'sarees', title: 'Sarees & Old Clothes', images: sarees },
      { id: 'watches', title: 'Vintage Watches', images: watches },
      { id: 'antiques', title: 'Antiques', images: antiques },
      { id: 'coins', title: 'Old Coins & Currency', images: coins },
    ];
  }, []);

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

        {/* Render Each Category */}
        <div className="flex flex-col gap-8">
          {categories.map((cat) => (
            <GalleryCategory 
              key={cat.id}
              id={cat.id}
              title={cat.title}
              images={cat.images}
              setSelectedImage={setSelectedImage}
            />
          ))}
        </div>

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
