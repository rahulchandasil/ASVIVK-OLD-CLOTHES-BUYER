import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import pic1 from '../assets/images/pic1.png';
import pic14 from '../assets/images/pic14.jpeg';
import pic18 from '../assets/images/pic18.jpeg';
import pic17 from '../assets/images/pic17.jpeg';
import pic22 from '../assets/images/pic22.jpeg';

const heroImages = [
  { src: pic1, alt: "Curated vintage items and old clothes at ASVIVK Kolkata", position: "center 30%" },
  { src: pic14, alt: "Vintage clothing collection", position: "center" },
  { src: pic18, alt: "Collectible pieces", position: "center 70%" },
  { src: pic17, alt: "Antique items", position: "center" },
  { src: pic22, alt: "Old stacked objects", position: "center" }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Handle Autoplay and Visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (isPaused || prefersReducedMotion) {
      return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPaused, prefersReducedMotion, currentIndex]);

  // Preload Next Image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % heroImages.length;
    const img = new Image();
    img.src = heroImages[nextIndex].src;
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full h-auto min-h-[auto] lg:min-h-[calc(100svh-80px)] pt-[100px] lg:pt-[120px] pb-16 flex flex-col justify-center bg-warm-ivory overflow-hidden z-10"
    >
      <style>
        {`
          @keyframes progress-fill {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
        `}
      </style>

      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] lg:text-[30rem] leading-none font-serif text-charcoal opacity-[0.03] select-none pointer-events-none hidden sm:block whitespace-nowrap">
        ASVIVK
      </div>

      <div className="site-container relative z-10 w-full h-full flex flex-col">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)] gap-8 lg:gap-12 xl:gap-16 items-center flex-1">
          
          {/* LEFT ZONE: Content */}
          <div className="flex flex-col w-full z-20">
            
            {/* Brand Identity */}
            <motion.div 
              className="flex flex-col items-start mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-serif text-xl text-charcoal tracking-wide mb-2">ASVIVK</span>
              <span className="w-12 h-[1px] bg-antique-gold mb-2"></span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/70">
                OLD CLOTHES BUYER
              </span>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-[clamp(3rem,7vw,7rem)] font-serif leading-[0.95] tracking-tight text-charcoal mb-6 break-words"
              >
                <span className="block">OLD THINGS.</span>
                <span className="block italic font-light text-antique-gold">NEW VALUE.</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants} 
                className="text-charcoal/70 font-sans font-light text-base sm:text-lg lg:text-xl max-w-[480px] leading-relaxed mb-10"
              >
                We buy old clothes, coins, antiques and other old items with a simple, direct and fair evaluation process.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center px-8 lg:px-10 py-4 bg-charcoal text-warm-ivory text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-antique-gold w-full sm:w-auto min-h-[48px]"
                  aria-label="Sell your old items"
                >
                  SELL YOUR OLD ITEMS
                  <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a 
                  href="tel:8617289516" 
                  className="group inline-flex items-center justify-center px-8 lg:px-10 py-4 bg-transparent border border-charcoal/30 text-charcoal text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:border-charcoal hover:bg-charcoal/5 w-full sm:w-auto min-h-[48px]"
                  aria-label="Call ASVIVK"
                >
                  <Phone size={14} className="mr-3" />
                  CALL ASVIVK
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* RIGHT ZONE: Image Carousel */}
          <div className="relative mt-8 lg:mt-0 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-[500px] mx-auto lg:ml-auto lg:mr-0">
              
              {/* Offset Frame */}
              <div className="absolute inset-0 border border-charcoal/10 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 pointer-events-none z-0"></div>
              
              {/* Image Container Wrapper */}
              <div className="relative z-10">
                {/* Image Container */}
                <motion.div 
                  className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-muted/10 z-10"
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  animate={{ clipPath: 'inset(0 0 0% 0)' }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={currentIndex}
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.02 }}
                      transition={{
                        opacity: { duration: 1.2, ease: "easeInOut" },
                        scale: { duration: 6, ease: "easeOut" }
                      }}
                    >
                      <img 
                        src={heroImages[currentIndex].src}
                        alt={heroImages[currentIndex].alt}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: heroImages[currentIndex].position }}
                        fetchPriority={currentIndex === 0 ? "high" : "auto"}
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Image Overlay Label (Outside overflow-hidden to prevent clipping) */}
                <motion.div 
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-12 lg:-left-12 z-20 bg-warm-ivory px-4 py-3 sm:px-6 sm:py-4 shadow-xl border border-charcoal/5 flex flex-col whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-serif text-sm sm:text-base text-charcoal leading-none tracking-widest uppercase mb-1">
                    BANSDRONI
                  </span>
                  <span className="font-serif italic text-xs sm:text-sm text-antique-gold leading-none tracking-widest uppercase">
                    · KOLKATA
                  </span>
                </motion.div>
              </div>

              {/* Carousel Controls & Progress */}
              <div className="flex items-center justify-between mt-8 w-full z-10 relative">
                <div className="flex items-center gap-4 w-full pr-4 sm:pr-6">
                  
                  {/* Indicator */}
                  <div className="font-serif text-sm tracking-widest text-charcoal/50 tabular-nums">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
                  </div>
                  
                  {/* Progress Line */}
                  <div className="flex-1 h-[1px] bg-charcoal/10 relative overflow-hidden">
                    <div 
                      key={currentIndex}
                      className="h-full bg-antique-gold origin-left w-full"
                      style={{ 
                        animation: prefersReducedMotion ? 'none' : `progress-fill 5s linear forwards`,
                        animationPlayState: isPaused ? 'paused' : 'running'
                      }}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 shrink-0">
                    <button 
                      aria-label="Previous image" 
                      onClick={handlePrev}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onFocus={() => setIsPaused(true)}
                      onBlur={() => setIsPaused(false)}
                      className="w-11 h-11 flex items-center justify-center border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-warm-ivory transition-colors focus:outline-none focus:ring-2 focus:ring-antique-gold"
                    >
                      <ArrowRight className="rotate-180" size={16} />
                    </button>
                    <button 
                      aria-label="Next image" 
                      onClick={handleNext}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onFocus={() => setIsPaused(true)}
                      onBlur={() => setIsPaused(false)}
                      className="w-11 h-11 flex items-center justify-center border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-warm-ivory transition-colors focus:outline-none focus:ring-2 focus:ring-antique-gold"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* BOTTOM ZONE: Location & Scroll Indicator */}
        <div className="mt-12 lg:mt-auto pt-8 lg:pt-16 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-8 w-full border-t border-charcoal/10 pb-4">
          
          {/* Location Micro-label */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-charcoal uppercase">
              BANSDRONI · KOLKATA
            </span>
            <span className="hidden sm:block text-charcoal/30">|</span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-charcoal/60 uppercase">
              SOUTH 24 PARGANAS · WEST BENGAL
            </span>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-charcoal/50 uppercase writing-vertical-rl sm:writing-horizontal-tb">
              SCROLL TO EXPLORE
            </span>
            <div className="w-[1px] h-12 bg-charcoal/20 relative overflow-hidden">
              <motion.div 
                className="w-full bg-antique-gold absolute top-0 left-0"
                initial={{ height: "0%" }}
                animate={{ height: prefersReducedMotion ? "0%" : "100%" }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatType: "loop"
                }}
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
