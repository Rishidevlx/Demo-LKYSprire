import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo className="h-8" />
          
          <div className="flex gap-8 text-white/60 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Contact Us</a>
          </div>

          <p className="text-white/40 text-sm">
            © 2026 LyKSpire SaaS Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
