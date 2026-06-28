"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";

export default function EntryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown in this session
    const hasShown = sessionStorage.getItem("hasShownEntryPopup");
    
    if (!hasShown) {
      // Show the popup 5 seconds after page load
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasShownEntryPopup", "true");
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={() => setIsOpen(false)}
      ></div>
      
      <div className="relative w-full max-w-[95vw] sm:max-w-sm max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center animate-[fade-in_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors z-10"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 bg-[#10958C]/10 rounded-full flex items-center justify-center mb-5 mt-2">
          <MessageCircle size={28} className="text-[#10958C]" />
        </div>

        {/* Content */}
        <h2 className="text-xl font-bold text-[#0D2B44] mb-1 leading-tight">
          Struggling what to choose?
        </h2>
        
        <p className="text-gray-600 mb-8 text-sm">
          Talk to Saheenplus Elevator
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col w-full gap-3">
          <a 
            href="https://wa.me/919891200883?text=Hi%20Saheenplus%2C%20I%20am%20interested%20in%20the%20lift.%20Please%20share%20more%20details." 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#E5F7ED] hover:bg-[#d4f2e1] text-[#25D366] font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-sm border border-[#25D366]/20"
          >
            <Image src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475518/whatsapp_lrzhus.png" alt="WhatsApp" width={22} height={22} className="object-contain" />
            WhatsApp
          </a>
          
          <a 
            href="tel:+919891200883" 
            className="w-full bg-[#E8F0FE] hover:bg-[#d7e5fc] text-[#4285F4] font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-sm border border-[#4285F4]/20"
          >
            <Image src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475517/telephone_ga6zif.png" alt="Call" width={20} height={20} className="object-contain" />
            Call Us
          </a>
        </div>

      </div>
    </div>
  );
}
