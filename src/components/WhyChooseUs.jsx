import React from 'react';
import { motion } from 'motion/react';

const reasons = [
  'Fair Valuation',
  'Simple Process',
  'Local Kolkata Buyer',
  'Wide Range of Items',
  'Friendly Service',
  'Direct Contact'
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-charcoal text-warm-ivory border-y border-charcoal overflow-hidden">
      <div className="site-container relative">
        
        {/* Subtle background ornament */}
        <div className="absolute top-0 right-0 text-[200px] leading-none font-serif text-warm-ivory opacity-5 pointer-events-none select-none">
          &
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
          <motion.div 
            className="lg:col-span-7 pr-4 lg:pr-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow !text-warm-ivory/50">Why Choose ASVIVK</div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl leading-[1.05] text-warm-ivory mb-8">
              A SIMPLE WAY TO GIVE<br className="hidden md:block"/> OLD THINGS<br className="hidden md:block"/> NEW VALUE.
            </h2>
          </motion.div>

          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-warm-ivory/20">
            <ul className="flex flex-col gap-6 lg:gap-8">
              {reasons.map((reason, index) => (
                <motion.li
                  key={reason}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-baseline gap-4 group"
                >
                  <span className="text-antique-gold text-sm font-semibold tracking-widest">0{index + 1}</span>
                  <span className="text-2xl md:text-3xl font-serif text-warm-ivory/90 group-hover:text-antique-gold transition-colors duration-300">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
