/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page !== 'Dashboard') {
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  if (currentPage === 'Dashboard') {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-primary selection:bg-accent selection:text-white">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        <div id="Home">
          <Hero />
        </div>
        
        <div id="Features">
          <Features />
        </div>

        <div id="About">
          <About />
        </div>
        
        <div id="Reviews">
          <Reviews />
        </div>
        
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
