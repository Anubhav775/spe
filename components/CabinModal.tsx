"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const cabinImages = [
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694832/Screenshot_20260628-223510_5.jpg_dxawbz.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694830/Screenshot_20260628-223510_4.jpg_fzix6a.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694829/Screenshot_20260628-223510_2.jpg_fd1x87.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694828/Screenshot_20260628-222807_5.jpg_mti3wz.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694826/Screenshot_20260628-222807_4.jpg_efl2am.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694825/Screenshot_20260628-222807_3.jpg_gxph6q.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694825/Screenshot_20260628-222807_2.jpg_dpz236.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694788/Screenshot_20260628-222727_6.jpg_xrqhlb.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694787/Screenshot_20260628-222727_3.jpg_zmeqec.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694787/Screenshot_20260628-222727_5.jpg_zdtprl.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782694787/Screenshot_20260628-222727_2.jpg_tq7ffg.jpg"
];

interface CabinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CabinModal({ isOpen, onClose }: CabinModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;

    // Initialize scroll position to the second set to allow backwards scrolling
    setTimeout(() => {
      if (el.scrollLeft === 0) {
        el.scrollLeft = el.scrollWidth / 3;
      }
    }, 50);

    const scroll = () => {
      if (!el) return;
      const setWidth = el.scrollWidth / 3;

      if (!isInteracting) {
        el.scrollLeft += 1;
      }
      
      // Seamless infinite loop logic
      if (el.scrollLeft >= setWidth * 2) {
        el.scrollLeft -= setWidth;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += setWidth;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isOpen, isInteracting]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-[#0D2B44] uppercase tracking-wide">
            30+ Designed Cabins
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Carousel Content */}
        <div className="py-8 md:py-12 bg-gray-50">
          <div 
            ref={scrollRef}
            className="w-full overflow-x-auto flex"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setIsInteracting(false)}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {/* We render 3 sets to ensure seamless infinite scrolling when dragging */}
            <div className="flex shrink-0 min-w-max px-4 md:px-8">
              {[...cabinImages, ...cabinImages, ...cabinImages].map((imgUrl, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[280px] h-[350px] md:w-[320px] md:h-[400px] bg-white rounded-xl overflow-hidden border border-gray-200 mr-6 shadow-md"
                >
                  <div className="w-full h-full relative pointer-events-none p-2">
                    <Image
                      src={imgUrl}
                      alt={`Cabin Design ${index + 1}`}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 280px, 320px"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
