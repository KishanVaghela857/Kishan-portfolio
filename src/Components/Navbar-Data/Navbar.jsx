import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Variants from '../variants/Vriants';

function Navbar() {


  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="bg-trasparent w-full sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <span className="text-white font-bold text-2xl tracking-tight select-none">Portfolio<span className="text-cyan-400">.</span></span>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { label: "Home", id: "homeScreen" },
              { label: "About", id: "Overview" },
              { label: "Skills", id: "Skills" },
              { label: "Projects", id: "Projects" },
              { label: "Contact", id: "contact" },
            ].map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-medium px-2 py-1 rounded transition-colors duration-200 focus:outline-none ${idx === 0 ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Mobile menu button (optional, can be added later) */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
