"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors, Dog, Star, Phone, History, 
  User, PlusCircle, RotateCcw, Bell, 
  ArrowUpRight, CheckCircle, X 
} from 'lucide-react';

export default function FunctionalPremiumApp() {
  const [activeTab, setActiveTab] = useState('explore');
  const [bookings, setBookings] = useState<any[]>([]);
  const [pets, setPets] = useState([{ name: "Fluffy", breed: "Golden Retriever" }]);
  const [toast, setToast] = useState<string | null>(null);

  const brandColor = process.env.NEXT_PUBLIC_BRAND_COLOR || "#38bdf8";

  // LOAD DATA ON START
  useEffect(() => {
    const savedBookings = localStorage.getItem('nexus_bookings');
    if (savedBookings) setBookings(JSON.parse(savedBookings));
  }, []);

  // FUNCTION: HANDLE BOOKING
  const handleBooking = (service: string, price: string) => {
    const newBooking = {
      id: Math.random().toString(36).substr(2, 9),
      service,
      price,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      status: 'Confirmed'
    };
    
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem('nexus_bookings', JSON.stringify(updated));
    
    setToast(`Booked: ${service}! Check your Vault.`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen pb-36 relative bg-neutral-950 overflow-hidden font-sans">
      
      {/* 1. FUNCTIONAL TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }} animate={{ y: 20, opacity: 1 }} exit={{ y: -50, opacity: 0 }}
            className="fixed top-0 left-6 right-6 z-[100] bg-white text-black p-4 rounded-2xl shadow-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-green-500" />
              <p className="text-xs font-bold uppercase tracking-tight">{toast}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="px-8 pt-16 pb-8 flex justify-between items-center relative z-10">
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-white leading-none capitalize">{activeTab}</h1>
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">Nexus Client Portal</p>
        </div>
      </header>

      <main className="px-6 relative z-10">
        <AnimatePresence mode="wait">
          
          {/* TAB: EXPLORE (Service Booking) */}
          {activeTab === 'explore' && (
            <motion.div key="explore" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-[2rem]">
                <h2 className="text-lg font-medium text-white mb-6 italic">Signature Services</h2>
                <div className="space-y-3">
                  <ServiceItem 
                    title="Full Spa Groom" price="$65" 
                    onBook={() => handleBooking("Full Spa Groom", "$65")} 
                    color={brandColor} 
                  />
                  <ServiceItem 
                    title="Self-Wash Session" price="$20" 
                    onBook={() => handleBooking("Self-Wash Session", "$20")} 
                    color={brandColor} 
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: VAULT (Booking History) */}
          {activeTab === 'history' && (
            <motion.div key="history" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              {bookings.length === 0 ? (
                <div className="text-center py-20">
                  <History size={48} className="mx-auto text-neutral-800 mb-4" />
                  <p className="text-neutral-500 text-sm">No past appointments found.</p>
                </div>
              ) : (
                bookings.map((b) => (
                  <div key={b.id} className="bg-neutral-900/80 border border-white/5 p-6 rounded-[2rem] flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">{b.date}</p>
                      <h4 className="text-white font-medium">{b.service}</h4>
                    </div>
                    <button 
                      onClick={() => handleBooking(b.service, b.price)}
                      className="p-3 bg-neutral-800 rounded-xl text-neutral-400 hover:text-white transition-colors"
                    >
                      <RotateCcw size={16} />
                    </button>
                  </div>
                ))
              )}
            </motion.div>
          )}

          {/* TAB: PROFILE (Pets) */}
          {activeTab === 'pets' && (
            <motion.div key="pets" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              {pets.map((pet, i) => (
                <div key={i} className="bg-neutral-900/50 border border-white/5 p-5 rounded-3xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-500 font-bold uppercase">
                    {pet.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{pet.name}</h4>
                    <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">{pet.breed}</p>
                  </div>
                </div>
              ))}
              <button className="w-full py-5 border border-dashed border-neutral-800 rounded-3xl text-neutral-600 font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                <PlusCircle size={16} /> Add New Pet Profile
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* NAVIGATION */}
      <nav className="fixed bottom-10 left-8 right-8 z-50">
        <div className="bg-neutral-900/90 backdrop-blur-2xl border border-white/10 rounded-full p-2 flex justify-between items-center shadow-2xl">
          <NavBtn active={activeTab === 'explore'} icon={<PlusCircle size={20}/>} label="Book" onClick={() => setActiveTab('explore')} />
          <NavBtn active={activeTab === 'history'} icon={<History size={20}/>} label="Vault" onClick={() => setActiveTab('history')} />
          <NavBtn active={activeTab === 'pets'} icon={<User size={20}/>} label="Pets" onClick={() => setActiveTab('pets')} />
        </div>
      </nav>
    </div>
  );
}

function ServiceItem({ title, price, onBook, color }: any) {
  return (
    <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group">
      <div>
        <h4 className="text-white text-sm font-medium">{title}</h4>
        <p className="text-neutral-500 text-[10px] font-bold uppercase">{price}</p>
      </div>
      <button 
        onClick={onBook}
        style={{ backgroundColor: color }}
        className="px-4 py-2 rounded-xl text-black text-[10px] font-black uppercase tracking-widest active:scale-90 transition-all"
      >
        Book Now
      </button>
    </div>
  );
}

function NavBtn({ active, icon, label, onClick }: any) {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 px-6 py-4 rounded-full transition-all duration-300 ${active ? 'bg-white text-black' : 'text-neutral-500'}`}>
      {icon}
      {active && <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{label}</span>}
    </button>
  );
}
