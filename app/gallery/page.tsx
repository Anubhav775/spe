import Image from "next/image";

export const metadata = {
  title: "Gallery - Saheenplus Elevator",
  description: "Explore our delivered products and elevator installations.",
};

const galleryItems = [
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475516/od6_kiwau1.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475516/od7_gqh28t.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475515/od4_znnnvt.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475515/od5_l3hpvm.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475515/od3_nzabau.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475514/od2_ur2uab.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475514/od1_kiq866.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782622805/IMG-20260611-WA0003.jpg_vvg246.jpg",
  "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782622832/IMG-20260611-WA0012.jpg_blewai.jpg",
  "https://res.cloudinary.com/dxmfeilzl/video/upload/v1782475987/VN20260403_193900_1_dobuxe.mp4",
  "https://res.cloudinary.com/dxmfeilzl/video/upload/v1782475899/lv_0_20260405154754_eyg9pt.mp4",
  "https://res.cloudinary.com/dxmfeilzl/video/upload/v1782475846/VN20260331_160123_fnlc4q.mp4"
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <div className="w-full bg-[#0D2B44] py-16 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Take a look at some of our successfully delivered products and installations.
        </p>
      </div>

      {/* Gallery Grid */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, index) => {
              const isVideo = item.endsWith(".mp4");
              return (
                <div 
                  key={index} 
                  className="relative w-full rounded-xl overflow-hidden shadow-lg group break-inside-avoid"
                >
                  {isVideo ? (
                    <video
                      src={item}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={item}
                      alt={`Gallery item ${index + 1}`}
                      loading="lazy"
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
