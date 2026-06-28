import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "Precision Performance",
  "future-ready control systems",
  "Smart & Safe",
  "premium build quality",
  "Custom Comfort",
  "whisper-quiet rides",
  "Modern Interface",
  "Affordability",
  "On-time delivery"
];

export default function WhyShaheenPlus() {
  return (
    <section id="about" className="w-full bg-white py-8 md:py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Image */}
        <div className="relative w-full lg:col-span-3 aspect-[16/9] lg:aspect-[2/1] overflow-hidden">
          <Image 
            src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475506/f_u5hztq.png"
            alt="Saheenplus Elevators"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center lg:col-span-2">
          <div className="mb-4">
            <span className="uppercase tracking-widest text-xs font-bold text-[#B89B6D] bg-[#B89B6D]/10 px-4 py-1.5 rounded-full inline-block">
              Since 2012
            </span>
          </div>
          <h2 className="text-2xl lg:text-[1.65rem] xl:text-[1.9rem] font-bold text-gray-900 mb-1 leading-tight uppercase whitespace-nowrap">
            Why Saheenplus Elevator?
          </h2>
          <span className="text-gray-500 text-xs md:text-sm mb-6 block uppercase tracking-wide font-medium">
            Because you deserve more than just a lift.
          </span>
          
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            At Saheenplus Elevators, we don't just move people — we elevate their experience. 
            Our passenger lifts are thoughtfully engineered for seamless vertical transportation 
            blending safety, sophistication, and smart technology in every ride. Whether it's 
            a residential tower, corporate complex, hospital, or shopping mall — Saheenplus 
            Elevators are built to adapt, perform, and impress.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1A4F31] flex items-center justify-center">
                  <Check className="text-white" size={12} strokeWidth={3} />
                </div>
                <span className="text-gray-600 text-sm font-medium capitalize">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
