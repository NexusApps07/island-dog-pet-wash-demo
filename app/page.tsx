"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Dog, Cat, Star, Phone, MapPin, Download, CheckCircle2, ShoppingBag } from 'lucide-react';

export default function IslandDogBespokeDemo() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // --- DYNAMIC DATA SYNCED WITH ISLANDDOGPETWASH.COM ---
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Island Dog Pet Wash & Market";
  const locationText = process.env.NEXT_PUBLIC_LOCATION || "West Ashley, Charleston, SC";
  const brandColor = process.env.NEXT_PUBLIC_BRAND_COLOR || "#002b5b"; // Their official Navy Blue
  const heroImageUrl = process.env.NEXT_PUBLIC_HERO_IMAGE || "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000";

  useEffect(() => {
    document.title = `${businessName} | Charleston's Premier Dog Wash`;

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
      alert("To install: Tap 'Share' then 'Add to Home Screen' 📲");
    }
  };

  // Services exactly as listed on their official site
  const services = [
    {
      title: "You Wash (Self-Service)",
      price: "$15+",
      desc: "State-of-the-art tubs & shampoos. You wash, we clean up!",
      icon: <Dog size={20} />
    },
    {
      title: "We Wash (Full-Service)",
      price: "By Size",
      desc: "We wash and dry while you run errands. Reservation recommended.",
      icon: <CheckCircle2 size={20} />
    },
    {
      title: "Professional Grooming",
      price: "Quote",
      desc: "Full-service grooming by our expert staff. Call to schedule.",
      icon: <Scissors size={20} />
    },
    {
      title: "Natural Pet Market",
      price: "Market",
      desc: "Holistic foods, treats, and toys for your Low Country dog.",
      icon: <ShoppingBag size={20} />
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-32 font-sans antialiased text-slate-900">
      
      {/* 1. Hero Section with Brand Navy */}
      <header className="relative h-80 rounded-b-[3.5rem] overflow-hidden shadow-2xl">
        <img 
          src={heroImageUrl} 
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt={businessName}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />
        
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <h1 className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none drop-shadow-lg">
                ISLAND DOG
              </h1>
              <p className="text-white/90 text-[10px] font-bold tracking-[0.3em] uppercase mt-2 bg-black/30 backdrop-blur-sm inline-block px-2 py-1 rounded">
                {locationText}
              </p>
            </motion.div>
            <button onClick={handleInstall} className="bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white">
              <Download size={22} />
            </button>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl"
          >
            <div className="flex items-center gap-2 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" className="text-yellow-400" />)}
              <span className="text-white text-xs font-bold ml-1">Best of Charleston Winner</span>
            </div>
            <h2 className="text-xl font-extrabold text-white leading-tight">Charleston's Premier Pet Wash & Market</h2>
          </motion.div>
        </div>
      </header>

      {/* 2. Numbered Service Chart */}
      <main className="p-6">
        <div className="flex justify-between items-end mb-6 px-1">
          <h3 className="text-lg font-black uppercase tracking-tight text-slate-800">Service Menu</h3>
          <span style={{ color: brandColor }} className="text-[10px] font-black tracking-widest uppercase">West Ashley</span>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden mb-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileTap={{ scale: 0.98 }}
              className={`p-6 flex items-center justify-between ${i !== services.length - 1 ? 'border-b border-slate-50' : ''}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-black opacity-10 italic">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-bold text-slate-800 leading-none mb-1">{service.title}</h4>
                  <p className="text-slate-400 text-[10px] font-medium uppercase tracking-tight">{service.desc}</p>
                </div>
              </div>
              <div className="text-right ml-4">
                <span style={{ color: brandColor }} className="text-sm font-black whitespace-nowrap">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. The Vision (from their website) */}
        <section 
          style={{ backgroundColor: brandColor }}
          className="rounded-[3rem] p-8 text-white relative overflow-hidden shadow-xl"
        >
          <Dog className="absolute -bottom-6 -right-6 text-white/10 w-32 h-32" />
          <h4 className="text-lg font-black mb-4 flex items-center gap-2 tracking-tighter">
            <CheckCircle2 size={24} /> THE ISLAND DOG VISION
          </h4>
          <p className="text-white/90 text-sm leading-relaxed font-medium italic">
            "A pleasurable bonding experience with your canine companion, affordable convenience with no clean up, and friendly staff to assist you."
          </p>
        </section>
      </main>

      {/* 4. Contact Bar with REAL Data */}
      <nav className="fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] p-3 flex items-center justify-between border border-white/10 shadow-2xl">
          <a href="tel:8436374235" className="w-14 h-14 flex items-center justify-center text-white/70 hover:text-white transition-colors">
            <Phone size={24} />
          </a>
          
          <button 
            onClick={() => window.open('mailto:hello@islanddogpetwash.com?subject=Grooming App Inquiry')}
            style={{ backgroundColor: brandColor }}
            className="text-white flex-1 mx-2 py-4 rounded-3xl font-black text-sm tracking-widest shadow-lg active:scale-95 transition-all"
          >
            BOOK A WASH
          </button>

          <a href="https://www.google.com/maps/dir//1964+Ashley+River+Rd+#A" className="w-14 h-14 flex items-center justify-center text-white/70 hover:text-white transition-colors">
            <MapPin size={24} />
          </a>
        </div>
      </nav>
    </div>
  );
}
