"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of elevators do you offer?",
    answer: "We offer a comprehensive range of solutions including Power Plant Lifts, Passenger Lifts, Hydraulic Lifts, Hospital Lifts, Dumb Waiter Lifts, Capsule Lifts, Car Lifts, and Goods Lifts."
  },
  {
    question: "How often should elevators be serviced?",
    answer: "For optimal safety and smooth operation, we recommend monthly standard servicing. Our dedicated maintenance team also provides 24/7 support for any urgent requirements."
  },
  {
    question: "How reliable and safe are your elevators?",
    answer: "Safety is our highest priority. All our elevators are manufactured using premium build quality, feature-ready control systems, and strictly adhere to international safety standards for reliable, whisper-quiet rides."
  },
  {
    question: "What is the lifespan of your elevators?",
    answer: "With our recommended regular maintenance, our premium elevators are engineered to provide exceptional performance for 20 to 25 years or more."
  },
  {
    question: "Do you provide customized installation services?",
    answer: "Yes, we specialize in custom comfort and tailored lift solutions that perfectly match your building's design, space requirements, and aesthetic preferences."
  },
  {
    question: "What is your typical delivery and installation timeline?",
    answer: "While timelines depend on the specific elevator type and site conditions, we are committed to on-time delivery and efficient, precision-driven installation without compromising quality."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-8 md:py-12 pl-4 pr-6 md:pl-8 md:pr-12 lg:pl-12 lg:pr-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Left Side: Image (No Border Radius) */}
        <div className="relative w-full aspect-video lg:aspect-[4/5] xl:aspect-square overflow-hidden shadow-lg lg:col-span-7">
          <Image
            src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475507/fgg_itsbot.png"
            alt="Saheenplus Elevator Setup"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Side: FAQs */}
        <div className="flex flex-col lg:col-span-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 uppercase tracking-wide">
            FREQUENTLY <span className="border-b-4 border-gray-600 pb-1">ASKED</span> QUESTIONS
          </h2>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#F3F4F6] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-800 text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
                    size={20} 
                  />
                </button>
                
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
