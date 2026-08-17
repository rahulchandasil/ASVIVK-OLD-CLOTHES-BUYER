import React from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'What We Buy', href: '#what-we-buy' },
  { name: 'What We Sell', href: '#what-we-sell' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-16 text-warm-ivory border-t border-white/5 relative z-20">
      <div className="site-container">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-8 mb-16 lg:mb-32">
          
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start lg:pr-12">
            <a href="#home" className="flex flex-col group mb-6 sm:mb-8">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-ivory leading-none tracking-wide group-hover:text-antique-gold transition-colors duration-300">
                ASVIVK
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-warm-ivory/50 uppercase mt-2">
                Old Clothes Buyer
              </span>
            </a>
            <p className="text-warm-ivory/50 font-light text-sm sm:text-base lg:text-lg max-w-sm leading-relaxed">
              Evaluating and buying vintage items, old clothes, coins, and antiques with fairness and transparency in Kolkata.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-3 lg:pl-12 lg:border-l border-white/10 lg:pt-0">
            <h4 className="font-semibold text-[11px] tracking-widest uppercase text-antique-gold mb-6 sm:mb-8">Navigation</h4>
            <ul className="flex flex-col space-y-3 sm:space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-warm-ivory/70 hover:text-warm-ivory lg:hover:pl-2 transition-all duration-300 text-sm font-light py-1 block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-4 lg:pl-12 lg:border-l border-white/10 lg:pt-0">
            <h4 className="font-semibold text-[11px] tracking-widest uppercase text-antique-gold mb-6 sm:mb-8">Contact & Location</h4>
            <ul className="flex flex-col space-y-4 sm:space-y-6 text-warm-ivory/70 text-sm font-light">
              <li>
                <a href="tel:8617289516" className="text-base sm:text-lg font-serif hover:text-warm-ivory transition-colors block py-1">
                  8617289516
                </a>
              </li>
              <li>
                <a href="mailto:bijoykhaoria61@gmail.com" className="text-base sm:text-lg font-serif hover:text-warm-ivory transition-colors block py-1 break-all">
                  bijoykhaoria61@gmail.com
                </a>
              </li>
              <li className="pt-4 mt-2 sm:mt-4 border-t border-white/5">
                <span className="block mb-2 font-medium text-warm-ivory uppercase tracking-widest text-[10px]">VISIT US</span>
                <span className="leading-relaxed block">
                  Bansdroni Peer Pukur Road<br />
                  Ramkrishna Pally, Near Surya Gym<br />
                  Kolkata, West Bengal - 700070
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pt-8 border-t border-white/10 text-warm-ivory/30 text-[10px] uppercase tracking-widest font-semibold text-center sm:text-left gap-4">
          <p>&copy; {currentYear} ASVIVK Old Clothes Buyer. Developed by
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>.
          </p>
          <p>Premium Design</p>
        </div>

      </div>
    </footer>
  );
}
