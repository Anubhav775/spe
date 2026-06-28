"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const products = [
  { name: "Power Plant Lifts", image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475519/powerplant-lift_ef2n0r.png" },
  { name: "Passenger Lifts", image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475518/passanger-lift_cndkn7.png" },
  { name: "Hydraulic Lifts", image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475515/hydraulic-lift_iddh4f.png" },
  { name: "Hospital Lifts", image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475514/hospital-lift_fvisf6.png" },
  { name: "Dumb Waiter Lifts", image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475506/dumb_waiter-lift_tcvxia.png" },
  { name: "Capsule Lifts", image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475506/capsule-lift_oim5r5.png" },
  { name: "Car Lifts", image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475506/car-lift_zuwdwc.png" },
  { name: "Goods Lifts", image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475506/goods-lifts_cy1q9l.jpg" },
  { name: "MRL Elevators", image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475516/mrl-elevator_o0nnow.png" }
];

export default function PremiumProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
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
  }, [isInteracting]);

  const handleInteractStart = () => setIsInteracting(true);
  const handleInteractEnd = () => setIsInteracting(false);

  return (
    <div id="products" className="w-full py-10 bg-white overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0D2B44] uppercase tracking-wider">
          Our Premium Product
        </h2>
        <div className="w-16 h-[3px] bg-[#0D2B44] mx-auto mt-4 rounded-full"></div>
      </div>

      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto flex bg-white"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={handleInteractStart}
        onMouseLeave={handleInteractEnd}
        onTouchStart={handleInteractStart}
        onTouchEnd={handleInteractEnd}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {/* We render 3 sets to ensure seamless infinite scrolling when dragging */}
        <div className="flex shrink-0 min-w-max">
          {[...products, ...products, ...products].map((product, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-44 md:w-48 bg-[var(--color-primary-light)] rounded-lg overflow-hidden border border-[var(--color-primary-light)] flex flex-col mr-6 shadow-sm"
            >
              <div className="w-full h-[200px] md:h-[220px] relative pointer-events-none">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover p-3"
                  sizes="(max-width: 768px) 176px, 192px"
                  draggable={false}
                />
              </div>
              <div className="w-full py-3 px-2 text-center pointer-events-none">
                <h3 className="font-semibold text-gray-800 text-xs md:text-sm tracking-wide">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
