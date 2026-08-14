import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatWeBuy from '../components/WhatWeBuy';
import WhatWeSell from '../components/WhatWeSell';
import HowItWorks from '../components/HowItWorks';
import Trust from '../components/Trust';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeBuy />
        <WhatWeSell />
        <HowItWorks />
        <Trust />
        <Testimonials />
        <Gallery />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
