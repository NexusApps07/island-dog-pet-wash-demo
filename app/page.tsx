"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Dog, Cat, Heart, Phone, Star, MapPin, Download, CheckCircle2 } from 'lucide-react';

export default function NexusAgencyDemo() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // --- DYNAMIC DATA FROM ENV ---
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "BARKS N BUBBLES";
  const locationText = process.env.NEXT_PUBLIC_LOCATION || "Local Professional Care";
  const heroImageUrl = process.env.NEXT_PUBLIC_HERO_IMAGE || "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80";
  const promiseText = process.env.NEXT_PUBLIC_PROMISE_TEXT || "We specialize in slow-paced appointments. No cages, no rush—just one-on-one attention from local experts.";
  const brandColor = process.env.NEXT_PUBLIC_BRAND_COLOR || "#0ea5e9"; // Default sky-500

  useEffect(() => {
    // Dynamic Tab Name
    document.title = `${businessName} | Mobile App Demo`;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, [businessName]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
    } else {
      alert("To install: Tap the 'Share' icon then 'Add to Home Screen' 📲");
    }
  };

  const services = [
    {
      title: "Full Spa Grooming",
      price: "$65+",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
      desc: "Deep bath, breed-specific haircut, and nail trimming.",
      icon: <Scissors size={20} />
    },
    {
      title: "The Refresh",
      price: "$40+",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
      desc: "Premium wash, blow-dry, and ear cleaning. No cut.",
      icon: <Dog size={20} />
    },
    {
      title: "Feline Luxe",
      price: "$75+",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=400",
      desc: "Gentle cat grooming including Lion Cuts.",
      icon: <Cat size={20} />
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-32 font-sans antialiased text-slate-900">
      
      {/* 1. Dynamic Hero Section */}
      <header className="relative h-80 rounded-b-[3.5rem] overflow-hidden shadow-2xl">
        <img 
          src={heroImageUrl} 
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt={businessName}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
        
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase leading-none drop-shadow-md">
                {businessName}
              </h1>
              <p className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase mt-2 bg-black/20 backdrop-blur-sm inline-block px-2 py-1 rounded">
                {locationText}
              </p>
            </motion.div>
            <button 
              onClick={handleInstall} 
              className="bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white hover:bg-white/40 transition-all active:scale-90"
            >
              <Download size={22} />
            </button>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 p-5 rounded-3xl"
          >
            <div className="flex items-center gap-2 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" className="text-yellow-400" />)}
              <span className="text-white text-xs font-bold ml-1">Top Rated Local Choice</span>
            </div>
            <h2 className="text-xl font-extrabold text-white leading-tight">Elite Care for Your Best Friend</h2>
          </motion.div>
        </div>
      </header>

      {// 2. The Service Chart (Professional List View)}
<main className="p-6">
  <div className="flex justify-between items-end mb-6 px-1">
    <div>
      <h3 className="text-lg font-black uppercase tracking-tight text-slate-800">Service Menu</h3>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Select to view details</p>
    </div>
    <span style={{ color: brandColor }} className="text-xs font-bold bg-slate-100 px-3 py-1 rounded-full uppercase">
      Fixed Rates
    </span>
  </div>

  <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
    {services.map((service, i) => (
      <motion.div 
        key={i}
        whileTap={{ scale: 0.98 }}
        className={`p-6 flex items-center justify-between ${i !== services.length - 1 ? 'border-b border-slate-50' : ''}`}
      >
        <div className="flex items-center gap-4">
          {/* Automatic Numbering: 01, 02, etc. */}
          <span className="text-2xl font-black opacity-10 italic">
            {(i + 1).toString().padStart(2, '0')}
          </span>
          
          <div>
            <h4 className="font-bold text-slate-800 leading-none mb-1">{service.title}</h4>
            <p className="text-slate-400 text-xs font-medium">{service.desc.substring(0, 35)}...</p>
          </div>
        </div>

        <div className="text-right">
          <span 
            style={{ backgroundColor: `${brandColor}15`, color: brandColor }} 
            className="text-sm font-black px-3 py-2 rounded-2xl"
          >
            {service.price}
          </span>
        </div>
      </motion.div>
    ))}
  </div>

  {/* 3. The Promise Section (Stays the same) */}
  <section 
    style={{ backgroundColor: brandColor }}
    className="mt-8 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl"
  >
    <Heart className="absolute -top-6 -right-6 text-white/10 w-32 h-32" />
    <h4 className="text-lg font-black mb-4 flex items-center gap-2 uppercase tracking-tighter">
      <CheckCircle2 size={24} /> The {businessName} Guarantee
    </h4>
    <p className="text-white/90 text-sm leading-relaxed font-medium">
      {promiseText}
    </p>
  </section>
</main>

      {/* 4. Sticky Mobile Bar */}
      <nav className="fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] p-3 flex items-center justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <a href="tel:#" className="w-14 h-14 flex items-center justify-center text-white/70 hover:text-white transition-colors">
            <Phone size={24} />
          </a>
          
          <button 
            onClick={() => alert(`Opening ${businessName} Booking System...`)}
            style={{ backgroundColor: brandColor }}
            className="hover:brightness-110 text-white flex-1 mx-2 py-4 rounded-3xl font-black text-sm tracking-widest shadow-lg active:scale-95 transition-all uppercase"
          >
            BOOK NOW
          </button>

          <a href="#" className="w-14 h-14 flex items-center justify-center text-white/70 hover:text-white transition-colors">
            <MapPin size={24} />
          </a>
        </div>
      </nav>
    </div>
  );
}
