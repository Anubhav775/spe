"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Download, Menu, X, MapPin } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

export default function Header() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    
    const link = document.createElement("a");
    link.href = "/Saheen Plus Elevator.pdf";
    link.download = "Saheen Plus Elevator.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <header className="h-16 w-full flex items-center justify-between px-4 sm:px-8 text-sm sticky top-0 bg-cyan-500 text-white shadow-md z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 h-full pt-[2px] leading-none hover:opacity-80 transition-opacity">
        <Image src="/logo.png" alt="Saheenplus Logo" width={32} height={32} className="object-contain" />
        <div className="flex flex-col items-center justify-center">
          <span className="text-[18px] tracking-wide font-bold" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <span className="text-2xl leading-none">S</span>aheenplus
          </span>
          <div className="flex items-center gap-[4px] w-full mt-[3px]">
            <div className="h-[1px] bg-black/40 flex-1"></div>
            <span className="text-[9px] tracking-[0.2em] font-medium text-black/80" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
              E L E V A T O R
            </span>
            <div className="h-[1px] bg-black/40 flex-1"></div>
          </div>
        </div>
      </Link>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-8 font-medium">
        <Link href="/" className="hover:text-black/70 transition-colors">
          Home
        </Link>
        <Link href="/#products" className="hover:text-black/70 transition-colors">
          Product
        </Link>
        <Link href="/#services" className="hover:text-black/70 transition-colors">
          Our Services
        </Link>
        <Link href="/#about" className="hover:text-black/70 transition-colors">
          About Us
        </Link>
        <Link href="/gallery" className="hover:text-black/70 transition-colors">
          Gallery
        </Link>
        <Link href="/contact" className="hover:text-black/70 transition-colors">
          Contact Us
        </Link>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-3">
        <button 
          onClick={() => setIsEnquiryModalOpen(true)}
          className="flex items-center gap-2 bg-white text-cyan-600 px-4 py-2 rounded-full text-xs hover:bg-gray-50 transition-colors font-semibold shadow-sm"
        >
          <MessageCircle size={14} />
          Inquiry Now
        </button>
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className={`flex items-center gap-2 bg-white text-cyan-600 border-none px-4 py-2 rounded-full text-xs transition-colors font-medium ${isDownloading ? "opacity-80 cursor-not-allowed" : "hover:bg-gray-50"}`}
        >
          <Download size={14} className={isDownloading ? "animate-bounce" : ""} />
          {isDownloading ? "Downloading..." : "Download Brochure"}
        </button>
        <a href="https://www.google.com/maps?q=28.499727249145508,77.28582000732422&z=17&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white hover:bg-gray-50 p-1.5 rounded-full transition-colors shadow-sm" title="Map">
          <Image
            src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475507/google-maps_oe0qfy.png"
            alt="Map"
            width={20}
            height={20}
            className="object-contain"
          />
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden p-2 text-black hover:bg-gray-100 rounded-md transition-colors"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar (Right to Left) */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white text-gray-800 z-[110] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="text-[#10958C] font-bold text-lg">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-6 flex flex-col gap-6">
          {/* Links */}
          <nav className="flex flex-col gap-4 font-medium text-gray-700">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10958C]">Home</Link>
            <Link href="/#products" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10958C]">Product</Link>
            <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10958C]">Our Services</Link>
            <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10958C]">About Us</Link>
            <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10958C]">Gallery</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#10958C]">Contact Us</Link>
          </nav>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gray-200"></div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className={`flex items-center gap-3 w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-xl text-sm transition-colors font-medium ${isDownloading ? "bg-gray-100 opacity-80 cursor-not-allowed" : "hover:bg-gray-50"}`}
            >
              <Download size={18} className={`text-gray-500 ${isDownloading ? "animate-bounce" : ""}`} />
              {isDownloading ? "Downloading..." : "Download Brochure"}
            </button>

            <a href="https://www.google.com/maps?q=28.499727249145508,77.28582000732422&z=17&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors font-medium">
              <MapPin size={18} className="text-gray-500" />
              Go to Location
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsEnquiryModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full bg-[#10958C] text-white px-4 py-3 rounded-xl text-sm hover:bg-[#0e7f77] transition-colors font-semibold shadow-sm mt-2"
            >
              <MessageCircle size={16} />
              Inquiry Now
            </button>

            <a 
              href="tel:+919891200883" 
              className="flex items-center justify-center gap-2 w-full bg-[#E8F0FE] text-[#4285F4] px-4 py-3 rounded-xl text-sm hover:bg-[#d7e5fc] transition-colors font-bold shadow-sm mt-2"
            >
              <Image src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475517/telephone_ga6zif.png" alt="Call Now" width={18} height={18} className="object-contain" />
              Call Now
            </a>

            <a 
              href="https://wa.me/919891200883?text=Hi%20Saheenplus%2C%20I%20am%20interested%20in%20the%20lift.%20Please%20share%20more%20details." 
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#E5F7ED] text-[#25D366] px-4 py-3 rounded-xl text-sm hover:bg-[#d4f2e1] transition-colors font-bold shadow-sm mt-2"
            >
              <Image src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475518/whatsapp_lrzhus.png" alt="WhatsApp" width={20} height={20} className="object-contain" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Inquire Now Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100]">
        <button 
          onClick={() => setIsEnquiryModalOpen(true)}
          className="w-full bg-[#0A192F] text-white py-3.5 font-bold text-center tracking-wider text-sm shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          Inquire Now
        </button>
      </div>

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </header>
  );
}

