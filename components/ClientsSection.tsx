import Image from "next/image";

const clients = [
  { name: "The Great Palace", logo: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782623756/logo_ozslot.jpg" },
  { name: "SS Builder", logo: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782623665/images_rcxvzy.jpg" },
  { name: "I Saw Industries", logo: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782623654/1773248812716_fvm2be.png" },
  { name: "The Great Palace", logo: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782623756/logo_ozslot.jpg" },
  { name: "SS Builder", logo: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782623665/images_rcxvzy.jpg" },
  { name: "I Saw Industries", logo: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782623654/1773248812716_fvm2be.png" },
  { name: "The Great Palace", logo: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782623756/logo_ozslot.jpg" },
  { name: "SS Builder", logo: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782623665/images_rcxvzy.jpg" },
  { name: "I Saw Industries", logo: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782623654/1773248812716_fvm2be.png" }
];

const socialIcons = [
  { name: "Facebook", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475503/facebook_dcyype.png", href: "https://www.facebook.com/saheen.pluselevators?mibextid=wwXIfr&rdid=6kMpBlCFZ0sAarbp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EGNysB5ZN%2F%3Fmibextid%3DwwXIfr#" },
  { name: "Instagram", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475514/instagram_skgkrv.png", href: "https://www.instagram.com/saheenplus?utm_source=qr" },
  { name: "WhatsApp", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475518/whatsapp_lrzhus.png", href: "https://wa.me/919891200883?text=Hi%20Saheenplus%2C%20I%20am%20interested%20in%20the%20lift.%20Please%20share%20more%20details." },
  { name: "Email", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475502/email_brzmfp.png", href: "mailto:saheenplus73@gmail.com" },
  { name: "Call", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475517/telephone_ga6zif.png", href: "tel:+919891200883" },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
      {/* Clients Marquee */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center uppercase tracking-wide mb-10">
          Our Prestigious Client
        </h2>
        
        <div className="w-full overflow-hidden relative flex hover:[&>div]:[animation-play-state:paused] bg-white group">
          {/* First Marquee Track (Moving Left to Right) */}
          <div className="flex animate-[marquee_30s_linear_infinite_reverse] gap-8 px-4 shrink-0 min-w-max">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-64 h-36 bg-white border border-gray-100 rounded-lg shadow-sm flex flex-col items-center justify-center p-4 gap-3 hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-16 flex-shrink-0">
                  <Image 
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
                <span className="text-[#0D2B44] font-extrabold text-center text-xs md:text-sm uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#0D2B44] to-[#10958C]">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
          {/* Second Marquee Track */}
          <div className="flex animate-[marquee_30s_linear_infinite_reverse] gap-8 px-4 shrink-0 min-w-max" aria-hidden="true">
            {clients.map((client, index) => (
              <div 
                key={`dup-${index}`} 
                className="flex-shrink-0 w-64 h-36 bg-white border border-gray-100 rounded-lg shadow-sm flex flex-col items-center justify-center p-4 gap-3 hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-16 flex-shrink-0">
                  <Image 
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
                <span className="text-[#0D2B44] font-extrabold text-center text-xs md:text-sm uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#0D2B44] to-[#10958C]">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.3em] mb-6">
          Our Social Media
        </h3>
        <div className="flex items-center justify-center gap-6">
          {socialIcons.map((icon, index) => (
            <a 
              key={index}
              href={icon.href}
              className="hover:-translate-y-1 transition-transform bg-white border border-gray-100 p-3.5 rounded-full hover:shadow-md shadow-sm flex items-center justify-center"
              title={icon.name}
            >
              <Image 
                src={icon.url}
                alt={icon.name}
                width={22}
                height={22}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
