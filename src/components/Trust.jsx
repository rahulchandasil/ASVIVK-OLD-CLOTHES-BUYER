import React from 'react';
import { motion } from 'motion/react';

export default function Trust() {
  const points = [
    { num: "01", text: "FAIR EVALUATION" },
    { num: "02", text: "LOCAL & TRUSTED" },
    { num: "03", text: "SIMPLE PROCESS" },
    { num: "04", text: "DIRECT CONTACT" }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-antique-gold text-charcoal relative overflow-hidden">
      
      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] leading-none font-serif text-charcoal opacity-[0.03] pointer-events-none whitespace-nowrap hidden sm:block">
        TRUST
      </div>
      
      <div className="site-container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow !text-charcoal mb-6 sm:mb-10">
              <span className="w-8 h-[1px] bg-charcoal/30 hidden sm:block"></span>
              WHY ASVIVK
            </div>
            
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-serif text-warm-ivory leading-[1.05] tracking-tight break-words">
              A SIMPLE WAY<br />
              TO GIVE OLD THINGS<br />
              <span className="text-charcoal">NEW VALUE.</span>
            </h2>
          </motion.div>
          
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-4 lg:mt-0">
            {points.map((point, index) => (
              <motion.div 
                key={point.num}
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-charcoal/50 lg:group-hover:text-warm-ivory/80 transition-colors duration-500 shrink-0">
                  {point.num}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-charcoal lg:group-hover:text-warm-ivory transition-colors duration-500 m-0 break-words w-full">
                  {point.text}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
