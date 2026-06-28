"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function FloatingContactWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    // Only allow left click dragging
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    
    // Don't drag if clicking directly on a button or link
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }

    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX - position.x,
      startY: e.clientY - position.y
    };
    target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const newX = e.clientX - dragRef.current.startX;
    const newY = e.clientY - dragRef.current.startY;
    
    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed z-[100] touch-none bottom-20 right-4 md:bottom-6 md:right-6"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="relative bg-white shadow-[0_8px_30px_rgb(0,0,0,0.16)] rounded-full border border-gray-100 px-3 py-2 flex items-center gap-3 backdrop-blur-md bg-white/90">
        
        {/* Close Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-500 rounded-full p-1 shadow-md transition-colors z-10"
          title="Close widget"
        >
          <X size={14} />
        </button>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919891200883?text=Hi%20Saheenplus%2C%20I%20am%20interested%20in%20the%20lift.%20Please%20share%20more%20details." 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#E5F7ED] flex items-center justify-center hover:scale-105 transition-transform shrink-0"
          draggable={false}
          title="Chat on WhatsApp"
        >
          <Image 
            src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475518/whatsapp_lrzhus.png" 
            alt="WhatsApp" 
            width={24} 
            height={24} 
            className="object-contain pointer-events-none" 
          />
        </a>

        <div className="w-[1px] h-6 bg-gray-200"></div>

        {/* Call Button */}
        <a 
          href="tel:+919891200883" 
          className="w-10 h-10 rounded-full bg-[#E8F0FE] flex items-center justify-center hover:scale-105 transition-transform shrink-0"
          draggable={false}
          title="Call Us"
        >
          <Image 
            src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475517/telephone_ga6zif.png" 
            alt="Call" 
            width={22} 
            height={22} 
            className="object-contain pointer-events-none" 
          />
        </a>
        
      </div>
    </div>
  );
}
