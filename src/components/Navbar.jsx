import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'What We Buy', href: '#what-we-buy' },
  { name: 'What We Sell', href: '#what-we-sell' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
  { name: 'Location', href: '#location' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center ${
          isScrolled 
            ? 'h-[76px] lg:h-[84px] bg-warm-ivory/95 shadow-sm border-b border-muted/10 text-charcoal backdrop-blur-md' 
            : 'h-[80px] lg:h-[100px] bg-warm-ivory/80 lg:bg-transparent text-charcoal'
        }`}
      >
        <div className="site-container mx-auto grid grid-cols-2 xl:grid-cols-3 items-center w-full gap-4">
          
          {/* Logo (Left) */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col z-50 group justify-self-start"
          >
            <span className="font-serif text-xl sm:text-2xl leading-none tracking-wide group-hover:text-antique-gold transition-colors duration-300">
              ASVIVK
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase mt-1 opacity-80 whitespace-nowrap">
              Old Clothes Buyer
            </span>
          </a>

          {/* Desktop Nav (Center) xl (1280px+) */}
          <ul className="hidden xl:flex items-center justify-center space-x-5 justify-self-center w-full">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[11px] font-bold tracking-[0.1em] uppercase hover:text-antique-gold transition-colors duration-300 relative group py-2 whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-antique-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA (Right) */}
          <div className="hidden xl:flex justify-self-end">
            <a 
              href="tel:8617289516" 
              className={`text-[11px] font-bold tracking-[0.15em] uppercase border px-6 py-3 transition-all duration-500 whitespace-nowrap min-h-[44px] flex items-center justify-center ${
                isScrolled 
                  ? 'border-charcoal/20 hover:bg-charcoal hover:text-warm-ivory' 
                  : 'border-charcoal/40 hover:bg-charcoal hover:text-warm-ivory bg-warm-ivory/50 backdrop-blur-sm'
              }`}
            >
              CALL NOW <span className="ml-2 font-normal opacity-80">8617289516</span>
            </a>
          </div>

          {/* Mobile & Tablet Toggle */}
          <div className="xl:hidden flex items-center gap-2 sm:gap-4 z-50 justify-self-end">
            <a href="tel:8617289516" className="w-[44px] h-[44px] flex items-center justify-center border border-charcoal/20 hover:bg-charcoal hover:text-warm-ivory transition-colors rounded-full" aria-label="Call Us">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
            <button 
              className={`w-[44px] h-[44px] flex items-center justify-center border hover:bg-charcoal hover:text-warm-ivory transition-colors rounded-full ${isMobileMenuOpen ? 'border-transparent text-warm-ivory bg-charcoal' : 'border-charcoal/20'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-charcoal text-warm-ivory overflow-y-auto"
          >
            <div className="site-container pt-[120px] pb-12 min-h-screen flex flex-col justify-center">
              
              <ul className="flex flex-col space-y-2 my-auto">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.5, ease: "easeOut" }}
                  >
                    <a 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-serif text-3xl sm:text-4xl md:text-5xl hover:text-antique-gold transition-colors duration-300 block py-2"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="mt-12 pt-8 border-t border-warm-ivory/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-antique-gold mb-3">REACH OUT</p>
                <a 
                  href="tel:8617289516" 
                  className="font-serif text-2xl sm:text-3xl block hover:text-antique-gold transition-colors"
                >
                  8617289516
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
