"use client";

import Image from "next/image";
import { Maximize, Settings, DoorOpen, LayoutGrid } from "lucide-react";
import { useState } from "react";
import CabinModal from "./CabinModal";
import CopsVopsModal from "./CopsVopsModal";

const products = [
  {
    title: "30+",
    subtitle: "DESIGNED CABIN",
    desc: "Elegant, modern & customized cabin designs to match every space and style.",
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782549215/30_designed_cabin_h8swtr.png",
    icon: <Maximize size={24} className="text-white" />
  },
  {
    title: "GEAR /",
    subtitle: "GEARLESS MOTOR",
    desc: "High efficiency, energy-saving motors for smooth, reliable and quiet performance.",
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782695874/ChatGPT_Image_Jun_29_2026_06_47_15_AM_scxfdn.png",
    icon: <Settings size={24} className="text-white" />
  },
  {
    title: "10+",
    subtitle: "STYLE OF DOORS",
    desc: "Sleek, durable & safe door options to complement every building design.",
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782549884/10_variety_doors_rf6ihv.png",
    icon: <DoorOpen size={24} className="text-white" />
  },
  {
    title: "VARIETY OF",
    subtitle: "COPS & VOPS",
    desc: "Wide range of control panels with advanced features and stylish finishes.",
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782550146/variety_of_cop_vop_jsn50o.png",
    icon: <LayoutGrid size={24} className="text-white" />
  }
];


export default function OurRangeOfProducts() {
  const [isCabinModalOpen, setIsCabinModalOpen] = useState(false);
  const [isCopsVopsModalOpen, setIsCopsVopsModalOpen] = useState(false);

  return (
    <section className="w-full bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0D2B44] mb-4 text-center">
          Engineered for Every Need
        </h2>
        
        <div className="w-12 h-1 bg-[#0D2B44] rounded-full mb-16"></div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full">
          {products.map((product, idx) => {
            const isCabinCard = product.title === "30+";
            const isCopsVopsCard = product.title.includes("VARIETY");
            const isClickable = isCabinCard || isCopsVopsCard;
            return (
              <div 
                key={idx}
                onClick={() => {
                  if (isCabinCard) setIsCabinModalOpen(true);
                  if (isCopsVopsCard) setIsCopsVopsModalOpen(true);
                }}
                className={`bg-[var(--color-primary-light)] rounded-xl border border-[var(--color-primary-light)] p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center relative pt-4 pb-8 ${isClickable ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''}`}
              >
              <div className="w-full aspect-[4/5] relative rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-3xl font-bold text-[#10958C] leading-tight">
                  {product.title}
                </h3>
                <h4 className="text-[17px] font-bold text-[#0D2B44] mb-4 uppercase">
                  {product.subtitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
                  {product.desc}
                </p>
              </div>
            </div>
            );
          })}
        </div>

        <CabinModal 
          isOpen={isCabinModalOpen}
          onClose={() => setIsCabinModalOpen(false)}
        />

        <CopsVopsModal 
          isOpen={isCopsVopsModalOpen}
          onClose={() => setIsCopsVopsModalOpen(false)}
        />


      </div>
    </section>
  );
}
