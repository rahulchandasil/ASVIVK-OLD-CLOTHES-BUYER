import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Location() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Bansdroni+Peer+Pukur+Road,+Ramkrishna+Pally,+Surya+Gym,+Kolkata";

  return (
    <section id="location" className="py-16 sm:py-24 lg:py-32 bg-warm-ivory relative z-10 border-t border-muted/10">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          {/* Info Side */}
          <motion.div
            className="order-1 lg:order-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow">VISIT ASVIVK</div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-serif text-charcoal mb-8 sm:mb-12 tracking-tight leading-[1.05] break-words">
              LOCAL KOLKATA<br />
              <span className="italic font-light text-antique-gold">PRESENCE.</span>
            </h2>
            
            <div className="space-y-8 sm:space-y-12 max-w-lg">
              <div className="flex items-start">
                <MapPin className="text-antique-gold shrink-0 mt-1 mr-4 sm:mr-6" size={24} />
                <div>
                  <h3 className="font-semibold text-charcoal tracking-widest text-[11px] uppercase mb-3 sm:mb-4">Address</h3>
                  <p className="text-charcoal/70 font-light leading-relaxed text-sm sm:text-base lg:text-lg">
                    <strong className="font-semibold text-charcoal block mb-1 sm:mb-2">ASVIVK OLD CLOTHES BUYER</strong>
                    Bansdroni Peer Pukur Road<br />
                    Ramkrishna Pally<br />
                    Landmark: Surya Gym<br />
                    Kolkata, South 24 Parganas<br />
                    West Bengal - 700070
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div className="flex items-start">
                  <Phone className="text-antique-gold shrink-0 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold text-charcoal tracking-widest text-[11px] uppercase mb-2 sm:mb-3">Phone</h3>
                    <p className="text-charcoal/70 font-light text-base sm:text-lg">
                      <a href="tel:8617289516" className="hover:text-antique-gold transition-colors py-1 block">8617289516</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-antique-gold shrink-0 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-semibold text-charcoal tracking-widest text-[11px] uppercase mb-2 sm:mb-3">Email</h3>
                    <p className="text-charcoal/70 font-light text-sm sm:text-base lg:text-lg">
                      <a href="mailto:bijoykhaoria61@gmail.com" className="hover:text-antique-gold transition-colors py-1 block">bijoykhaoria61@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 sm:mt-16 w-full sm:w-auto">
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-center"
              >
                GET DIRECTIONS
              </a>
            </div>
          </motion.div>

          {/* Map Embed Side */}
          <motion.div
            className="w-full h-[40vh] sm:h-[50vh] lg:h-[70vh] relative p-1 sm:p-2 border border-muted/20 bg-white shadow-xl order-2 lg:order-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14745.385474328227!2d88.35515!3d22.482087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270c5e7b5f1cd%3A0x8e826b00b7933100!2sBansdroni%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 lg:grayscale lg:opacity-80 lg:mix-blend-multiply transition-all duration-700 lg:hover:grayscale-0 lg:hover:opacity-100 lg:hover:mix-blend-normal" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="ASVIVK Location Map"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
