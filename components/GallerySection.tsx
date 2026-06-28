import Image from "next/image";
import Link from "next/link";

const images = [
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475516/od6_kiwau1.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475516/od7_gqh28t.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475515/od4_znnnvt.jpg"
];

export default function GallerySection() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B44] uppercase tracking-wide">
            Our Delivered Product
          </h2>
          <div className="w-16 h-[3px] bg-[#0D2B44] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link href="/gallery" className="px-8 py-3 bg-[#10958C] text-white font-semibold rounded-full hover:bg-[#0D7F77] transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
            View More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
