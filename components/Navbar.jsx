"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-500">AMARG SoftDev</h1>

        <div className="hidden md:flex gap-6">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black px-4 pb-4 flex flex-col gap-4 animate-fade-in">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}