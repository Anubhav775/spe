import ImageSlider from "@/components/ImageSlider";
import HowItWorks from "@/components/HowItWorks";
import OurRangeOfProducts from "@/components/OurRangeOfProducts";
import WhyShaheenPlus from "@/components/WhyShaheenPlus";
import PremiumProducts from "@/components/PremiumProducts";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ClientsSection from "@/components/ClientsSection";
import QuerySection from "@/components/QuerySection";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <div 
      className="flex flex-col flex-1 w-full bg-cover bg-left md:bg-center bg-fixed"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475522/pexels-artbovich-6758771_id0hsu.jpg')" }}
    >
      {/* Hero Section (White Section) */}
      <section className="flex flex-col w-full bg-white pt-[5px] px-[5px]">
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[calc(100vh-64px)] gap-[5px]">
          {/* Top/Left Side: Image Slider */}
          <div className="w-full lg:w-2/3 aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:h-full relative">
            <ImageSlider />
          </div>

          {/* Bottom/Right Side: Video Section */}
          <div className="w-full lg:w-1/3 aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:h-full flex flex-row lg:flex-col bg-gray-100 rounded-b-md lg:rounded-bl-none lg:rounded-br-md">
            <div className="relative flex-1 bg-black overflow-hidden">
              <video 
                src="https://res.cloudinary.com/dxmfeilzl/video/upload/v1782475846/VN20260331_160123_fnlc4q.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="py-2 px-3 lg:py-4 lg:px-2 flex items-center justify-center shadow-[0_-4px_10px_rgba(0,0,0,0.02)] z-10 bg-gray-100">
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
                <span className="lg:hidden">Our Delivered Product</span>
              </h3>
              <h3 className="hidden lg:block text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase tracking-widest text-center">
                Our Delivered Product
              </h3>
            </div>
          </div>
        </div>

        {/* Premium Products Marquee */}
        <div className="mt-8 lg:mt-12">
          <PremiumProducts />
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Shaheen Plus Section */}
      <WhyShaheenPlus />

      {/* Our Range Of Products */}
      <OurRangeOfProducts />

      {/* Our Services Section */}
      <OurServices />

      {/* Gallery Section */}
      <GallerySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Clients and Social Media Section */}
      <ClientsSection />

      {/* Send Query Section */}
      <QuerySection />
    </div>
  );
}
