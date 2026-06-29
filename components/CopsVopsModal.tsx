"use client";

import { X } from "lucide-react";

interface CopsVopsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CopsVopsModal({ isOpen, onClose }: CopsVopsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 shrink-0">
          <h3 className="text-lg md:text-xl font-bold text-[#0D2B44] uppercase tracking-wide">
            Variety of Cops & Vops
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Image Content */}
        <div className="relative w-full h-[60vh] md:h-[70vh] bg-gray-50 p-4 md:p-8 flex-1 flex items-center justify-center overflow-y-auto overflow-x-hidden">
          <img
            src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782696445/Screenshot_20260628-222612_o6vjue.png"
            alt="Variety of Cops & Vops"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
