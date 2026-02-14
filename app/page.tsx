"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors, Dog, Star, Phone, MapPin, 
  Download, CheckCircle2, ShoppingBag, 
  History, User, PlusCircle, RotateCcw, 
  BellRing, Heart 
} from 'lucide-react';

export default function NexusGroomingApp() {
  const [activeTab, setActiveTab] = useState('explore'); // explore | pets | history
  const [showNotification, setShowNotification] = useState(false);

  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Island Dog Pet Wash";
  const brandColor = process.env.NEXT_PUBLIC_BRAND_COLOR || "#002b5b";

  // Simulate a push notification after 3 seconds for the "Wow" factor
  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-md mx-auto min-h-screen pb-32 relative shadow-2xl bg-white">
      
      {/* 1. PUSH NOTIFICATION SIMULATION */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-4 right-4 z-[100] bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-3xl shadow-2xl flex items-center gap-4"
          >
            <div className="bg-sky-500 p-2 rounded-xl text-white">
              <BellRing size={20} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase text-sky-600">Grooming Reminder</p>
              <p className="text-xs font-bold text-slate-800">It's been 6 weeks! Time for Fluffy's trim?</p>
            </div>
            <button onClick={() => setShowNotification(false)} className="text-slate-400 p-1">✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HEADER DYNAMICS */}
      <header className="p-8 pt-16 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-900 leading-none">
              {activeTab === 'explore' ? 'Services' : activeTab === 'pets' ? 'My Pets' : 'History'}
            </h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
              {activeTab === 'explore' ? businessName : 'Welcome Back, Sarah'}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-slate-100 p-3 rounded-2xl text-slate-600 active:scale-90 transition-all">
              <Download size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="px-6">
        <AnimatePresence mode="wait">
          
          {/* TAB: EXPLORE (Service Menu) */}
          {activeTab === 'explore' && (
            <motion.div key="explore" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100">
                   <h4 className="font-black text-slate-800 uppercase text-xs mb-4">Most Popular</h4>
                   <div className="flex justify-between items-center bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
                     <div className="flex items-center gap-3">
                       <span style={{ color: brandColor }} className="p-2 bg-slate-50 rounded-xl"><Scissors size={18}/></span>
                       <div>
                         <p className="font-bold text-sm text-slate-800">Full Spa Groom</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase">From $65.00</p>
                       </div>
                     </div>
                     <button style={{ backgroundColor: brandColor }} className="text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase">Book</button>
                   </div>
                </div>

                {/* LOYALTY CARD - The "Hook" */}
                <section className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                  <Star className="absolute -right-4 -top-4 w-24 h-24 text-white/5 rotate-12" />
                  <h4 className="text-[10px] font-black mb-4 uppercase tracking-[0.2em] text-white/60">Loyalty Rewards</h4>
                  <div className="flex justify-between mb-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-dashed flex items-center justify-center ${i < 4 ? 'bg-sky-500 border-sky-500' : 'border-white/20'}`}>
                        {i < 4 ? <Star size={16} fill="white" /> : <span className="text-white/20 text-[10px]">{i+1}</span>}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-sky-400 font-black uppercase mt-4">2 more visits for a FREE wash!</p>
                </section>
              </div>
            </motion.div>
          )}

          {/* TAB: PETS (Profiles) */}
          {activeTab === 'pets' && (
            <motion.div key="pets" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-200 rounded-3xl overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200" alt="Pet" className="object-cover h-full" />
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-slate-800 uppercase tracking-tighter">Fluffy</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Golden Retriever • 3 Years</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[8px] bg-red-50 text-red-600 px-2 py-1 rounded-lg font-black uppercase">Dryer Nervous</span>
                  </div>
                </div>
              </div>
              <button className="w-full py-5 border-2 border-dashed border-slate-100 rounded-[2.5rem] text-slate-300 font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                <PlusCircle size={16} /> Add New Pet Profile
              </button>
            </motion.div>
          )}

          {/* TAB: HISTORY (Rebooking) */}
          {activeTab === 'history' && (
            <motion.div key="history" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Last Visit: Jan 12</p>
                    <h4 className="font-black text-slate-800 uppercase tracking-tighter text-lg">Full Spa Grooming</h4>
                    <p className="text-[10px] text-slate-500 font-medium">Pet: Fluffy • Groomer: Jessica</p>
                  </div>
                  <span style={{ color: brandColor }} className="font-black text-lg">$65</span>
                </div>
                <button 
                  style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                  className="w-full py-4 rounded-2xl font-black text-[10px] flex items-center justify-center gap-2 uppercase tracking-[0.2em] active:scale-95 transition-all"
                >
                  <RotateCcw size={14} /> Rebook This Service
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 3. NEW NATIVE TAB BAR */}
      <nav className="fixed bottom-8 left-6 right-6 z-50">
        <div className="bg-slate-900 shadow-2xl rounded-full p-2 flex justify-between items-center border border-white/10">
          <NavButton active={activeTab === 'explore'} icon={<ShoppingBag size={20}/>} label="Shop" onClick={() => setActiveTab('explore')} />
          <NavButton active={activeTab === 'pets'} icon={<Dog size={20}/>} label="Pets" onClick={() => setActiveTab('pets')} />
          <NavButton active={activeTab === 'history'} icon={<History size={20}/>} label="History" onClick={() => setActiveTab('history')} />
        </div>
      </nav>
    </div>
  );
}

// Reusable Sub-component for Navigation
function NavButton({ active, icon, label, onClick }: any) {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${active ? 'bg-white text-slate-900 shadow-xl' : 'text-slate-500'}`}
    >
      {icon}
      {active && <span className="text-[10px] font-black uppercase tracking-widest leading-none">{label}</span>}
    </button>
  );
}
