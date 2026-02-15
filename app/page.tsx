"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Zero-Dependency Icons
const IconCalendar = () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IconHistory = () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconPaw = () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.25 15.25a4.5 4.5 0 01-6.5 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>;

export default function Home() {
  const [dna, setDna] = useState({ name: "Nexus Local", city: "Service Area" });

  useEffect(() => {
    // Client-side hydration of DNA to prevent Server/Client mismatch
    setDna({
      name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Nexus Local",
      city: process.env.NEXT_PUBLIC_BUSINESS_CITY || "Service Area"
    });
  }, []);

  const features = [
    { id: 'book', title: 'Experience', sub: 'Book Appointment', icon: <IconCalendar />, color: 'from-blue-600/20 to-cyan-500/20', border: 'border-blue-500/30' },
    { id: 'vault', title: 'The Vault', sub: 'Booking History', icon: <IconHistory />, color: 'from-emerald-600/20 to-teal-500/20', border: 'border-emerald-500/30' },
    { id: 'family', title: 'Family', sub: 'Pet Profiles', icon: <IconPaw />, color: 'from-violet-600/20 to-fuchsia-500/20', border: 'border-violet-500/30' },
  ];

  return (
    <div className="flex-1 flex flex-col p-6 relative overflow-hidden">
      
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 mb-12"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500">System Online</span>
        </div>
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 tracking-tight">
          {dna.name}
        </h1>
        <p className="text-gray-400 mt-2 font-medium flex items-center gap-2">
          <span className="opacity-50">📍</span> {dna.city}
        </p>
      </motion.header>

      {/* Interactive Grid */}
      <section className="flex-1 flex flex-col gap-5">
        {features.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <button className={`w-full group relative overflow-hidden rounded-2xl border ${item.border} bg-[#121212] p-1 transition-all active:scale-95`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative z-10 flex items-center justify-between bg-[#121212]/90 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-white/5 text-gray-300 group-hover:text-white transition-colors`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg font-bold text-gray-100">{item.title}</h2>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item.sub}</p>
                  </div>
                </div>
                
                <div className="text-gray-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-auto pt-10 pb-4 text-center"
      >
        <p className="text-[10px] text-gray-700 uppercase tracking-widest font-semibold">
          Nexus Factory v2.0
        </p>
      </motion.footer>
    </div>
  );
}
