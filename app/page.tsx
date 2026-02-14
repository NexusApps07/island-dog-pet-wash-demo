"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors, Dog, Star, Phone, 
  Download, History, User, PlusCircle, 
  RotateCcw, Bell, ArrowUpRight, Crown 
} from 'lucide-react';

export default function PremiumGroomingApp() {
  const [activeTab, setActiveTab] = useState('explore');
  const brandColor = process.env.NEXT_PUBLIC_BRAND_COLOR || "#38bdf8"; // Light sky for contrast

  return (
    <div className="max-w-md mx-auto min-h-screen pb-36 relative bg-neutral-950 overflow-hidden">
      
      {/* BACKGROUND DECOR (Subtle Glow) */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-sky-500/10 blur-[120px] rounded-full" />
      
      {/* HEADER */}
      <header className="px-8 pt-16 pb-8 flex justify-between items-center relative z-10">
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-white leading-none">
            {activeTab === 'explore' ? 'Portal' : activeTab === 'pets' ? 'Family' : 'Vault'}
          </h1>
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">
            {activeTab === 'explore' ? 'Nexus / Island Dog' : 'Client ID: 8821-S'}
          </p>
        </div>
        <div className="h-12 w-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400">
          <Bell size={20} />
        </div>
      </header>

      <main className="px-6 relative z-10">
        <AnimatePresence mode="wait">
          
          {/* TAB: EXPLORE */}
          {activeTab === 'explore' && (
            <motion.div key="explore" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              
              {/* FEATURE CARD: BENTO STYLE */}
              <div className="bg-neutral-900/50 backdrop-blur-md border border-white/5 p-6 rounded-[2rem] shadow-2xl">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-3 bg-sky-500/10 rounded-2xl text-sky-400">
                    <Crown size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest px-3 py-1 bg-neutral-800/50 rounded-full">
                    Active Membership
                  </span>
                </div>
                <h2 className="text-xl font-medium text-white mb-2">Exclusive Spa Care</h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Priority booking and climate-controlled suites for your pets.
                </p>
                <button style={{ backgroundColor: brandColor }} className="w-full py-4 rounded-2xl text-black font-bold text-xs uppercase tracking-widest active:scale-95 transition-all">
                  Book Priority Slot
                </button>
              </div>

              {/* SERVICE LIST */}
              <div className="grid grid-cols-1 gap-3">
                <ServiceRow icon={<Scissors size={18}/>} title="Signature Cut" price="$85" />
                <ServiceRow icon={<Dog size={18}/>} title="Essential Wash" price="$45" />
              </div>
            </motion.div>
          )}

          {/* TAB: HISTORY */}
          {activeTab === 'history' && (
            <motion.div key="history" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="bg-neutral-900/80 border border-white/5 p-8 rounded-[2.5rem]">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center">
                      <RotateCcw size={20} className="text-neutral-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Full Spa Groom</p>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mt-1">Jan 12 • Jessica</p>
                    </div>
                  </div>
                  <span className="text-white font-medium">$65</span>
                </div>
                <button className="w-full py-4 bg-white text-black rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                  Repeat Previous Service
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* PREMIUM FLOATING TAB BAR */}
      <nav className="fixed bottom-10 left-8 right-8 z-50">
        <div className="bg-neutral-900/90 backdrop-blur-2xl border border-white/10 rounded-full p-2 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <TabBtn active={activeTab === 'explore'} icon={<PlusCircle size={20}/>} label="Explore" onClick={() => setActiveTab('explore')} />
          <TabBtn active={activeTab === 'history'} icon={<History size={20}/>} label="Vault" onClick={() => setActiveTab('history')} />
          <TabBtn active={activeTab === 'pets'} icon={<User size={20}/>} label="Profile" onClick={() => setActiveTab('pets')} />
        </div>
      </nav>
    </div>
  );
}

function ServiceRow({ icon, title, price }: any) {
  return (
    <div className="flex justify-between items-center p-5 bg-neutral-900/30 border border-white/5 rounded-3xl hover:bg-neutral-900/50 transition-all group">
      <div className="flex items-center gap-4">
        <span className="text-neutral-500 group-hover:text-white transition-colors">{icon}</span>
        <span className="text-sm font-medium text-neutral-300">{title}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-neutral-400">{price}</span>
        <ArrowUpRight size={14} className="text-neutral-600" />
      </div>
    </div>
  );
}

function TabBtn({ active, icon, label, onClick }: any) {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 px-6 py-4 rounded-full transition-all duration-500 ${active ? 'bg-white text-black' : 'text-neutral-500'}`}>
      {icon}
      {active && <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{label}</span>}
    </button>
  );
}
