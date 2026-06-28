"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475513/hi2_dyfcb7.png",
    title: "Passenger Elevators",
    subtitle: "Smooth, silent rides—elevating comfort, safety, and style",
  },
  {
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475513/hi6_jkyqb3.png",
    title: "Commercial Lifts",
    subtitle: "Robust performance for high-traffic business environments",
  },
  {
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475513/hi1_mb92gz.png",
    title: "Modern Aesthetics",
    subtitle: "Sleek, premium designs matching your architecture perfectly",
  },
  {
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475513/hi5_xaorov.png",
    title: "Advanced Safety",
    subtitle: "Next-gen safety features for complete peace of mind",
  },
  {
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475511/hi3_b23ldq.png",
    title: "Eco-Friendly Operations",
    subtitle: "Energy-efficient solutions for sustainable, green buildings",
  },
  {
    image: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475511/hi4_jmujpt.png",
    title: "Customized Solutions",
    subtitle: "Tailor-made elevator systems for unique spatial requirements",
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // 4 seconds per slide to give time to read

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent w-1/2 md:w-3/4"></div>

          {/* Text Content */}
          <div className="absolute inset-y-0 left-4 sm:left-12 md:left-24 flex flex-col justify-center max-w-[45%] sm:max-w-[45%] pr-2">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-[#3B1712] mb-1 md:mb-2 drop-shadow-sm leading-tight">
              {slide.title}
            </h2>
            <p className="text-[10px] sm:text-sm md:text-lg font-medium text-gray-900 leading-snug drop-shadow-sm">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

    </div>
  );
}
