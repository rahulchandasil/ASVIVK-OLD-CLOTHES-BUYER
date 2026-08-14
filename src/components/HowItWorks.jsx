import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  { num: "01", title: "CONTACT US" },
  { num: "02", title: "SHOW YOUR ITEMS" },
  { num: "03", title: "GET EVALUATED" },
  { num: "04", title: "COMPLETE THE SALE" }
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-warm-ivory relative overflow-hidden" ref={containerRef}>
      <div className="site-container">
        
        <div className="mb-16 sm:mb-24 lg:mb-40 text-center">
          <motion.div 
            className="eyebrow justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-8 h-[1px] bg-charcoal hidden sm:block"></span>
            PROCESS
            <span className="w-8 h-[1px] bg-charcoal hidden sm:block"></span>
          </motion.div>
          
          <motion.h2 
            className="text-[clamp(2.5rem,6vw,6rem)] font-serif leading-[1.05] tracking-tight text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            HOW IT WORKS
          </motion.h2>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-0">
          
          {/* Desktop Animated Horizontal Line */}
          <div className="hidden lg:block absolute top-[5rem] left-[5%] right-[5%] h-[1px] bg-muted/20 z-0">
            <motion.div 
              className="absolute top-0 left-0 bottom-0 bg-antique-gold" 
              style={{ width: lineWidth }}
            />
          </div>
          
          {/* Mobile Animated Vertical Line */}
          <div className="lg:hidden absolute top-[10%] bottom-[10%] left-[calc(1rem+1.5rem)] sm:left-[calc(3rem)] w-[1px] bg-muted/20 z-0">
             <motion.div 
              className="absolute top-0 left-0 right-0 bg-antique-gold" 
              style={{ height: lineHeight }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                className="relative z-10 flex flex-row lg:flex-col items-center lg:items-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Number Circle */}
                <div className="w-12 h-12 sm:w-24 sm:h-24 lg:w-40 lg:h-40 rounded-full border border-muted/30 bg-warm-ivory flex items-center justify-center relative z-10 lg:mb-12 shrink-0 lg:group-hover:border-antique-gold transition-colors duration-500 shadow-sm">
                  <span className="font-serif text-lg sm:text-3xl lg:text-5xl text-charcoal/30 lg:group-hover:text-antique-gold transition-colors duration-500">
                    {step.num}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-serif text-charcoal ml-6 sm:ml-8 lg:ml-0 text-left lg:text-center tracking-tight lg:group-hover:text-antique-gold transition-colors duration-500 break-words w-full">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
