import React from 'react';

export default function Logo({ className = "h-8 w-auto", showText = true, size = "h-10 w-10" }: { className?: string, showText?: boolean, size?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-lavender rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <img 
          src="https://ik.imagekit.io/6dxwsh8nl/Web_design_demo-removebg-preview.png" 
          alt="LyKSpire Logo" 
          className={`relative ${size} object-contain rounded-lg`}
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <span className="font-display font-bold text-2xl tracking-tight">
          LyK<span className="text-accent">Spire</span>
        </span>
      )}
    </div>
  );
}
