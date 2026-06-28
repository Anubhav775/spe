import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/#products" },
  { name: "About Us", href: "/#about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const socialIcons = [
  { name: "Call", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475517/telephone_ga6zif.png", href: "tel:+919891200883" },
  { name: "WhatsApp", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475518/whatsapp_lrzhus.png", href: "https://wa.me/919891200883?text=Hi%20Saheenplus%2C%20I%20am%20interested%20in%20the%20lift.%20Please%20share%20more%20details." },
  { name: "Instagram", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475514/instagram_skgkrv.png", href: "https://www.instagram.com/saheenplus?utm_source=qr" },
  { name: "Facebook", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475503/facebook_dcyype.png", href: "https://www.facebook.com/saheen.pluselevators?mibextid=wwXIfr&rdid=6kMpBlCFZ0sAarbp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EGNysB5ZN%2F%3Fmibextid%3DwwXIfr#" },
  { name: "Map", url: "https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475507/google-maps_oe0qfy.png", href: "https://www.google.com/maps?q=28.499727249145508,77.28582000732422&z=17&hl=en" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
        {/* Left: Logo & Text */}
        <div className="flex flex-col">
          <Link href="/" className="flex flex-col items-start mb-6 hover:opacity-90 transition-opacity">
            <span className="text-[22px] tracking-wide font-medium">
              <span className="text-3xl leading-none">S</span>aheenplus
            </span>
            <div className="flex items-center gap-[4px] w-[140px] mt-[3px]">
              <div className="h-[1px] bg-white/70 flex-1"></div>
              <span className="text-[10px] tracking-[0.2em] font-medium text-white/90">
                E L E V A T O R
              </span>
              <div className="h-[1px] bg-white/70 flex-1"></div>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-2">
            We believe in quality safety and service.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-col md:pl-10 lg:pl-20">
          <h3 className="text-lg font-semibold mb-6 tracking-wide border-b border-white/20 pb-2 inline-block w-max">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="text-white/40 text-[10px]">▶</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact & Social */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-6 tracking-wide border-b border-white/20 pb-2 inline-block w-max">
            Contact Information
          </h3>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-start gap-3">
              <Image 
                src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475507/google-maps_oe0qfy.png" 
                alt="Location" 
                width={20} 
                height={20} 
                className="flex-shrink-0 object-contain mt-1" 
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Regd. Off., H-150/16. Sangam Vihar<br />
                Ratiya Marg New Delhi-110080
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Image 
                src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475517/telephone_ga6zif.png" 
                alt="Telephone" 
                width={20} 
                height={20} 
                className="flex-shrink-0 object-contain mt-1" 
              />
              <div className="flex flex-col gap-1">
                <a href="tel:+911145056152" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Landline: +91 11 4505 6152
                </a>
                <a href="tel:+919891200883" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Mobile: 9891200883
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image 
                src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475502/email_brzmfp.png" 
                alt="Email" 
                width={20} 
                height={20} 
                className="flex-shrink-0 object-contain" 
              />
              <a href="mailto:saheenplus73@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                saheenplus73@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialIcons.map((icon, index) => (
              <a 
                key={index} 
                href={icon.href} 
                className="hover:scale-110 transition-transform bg-white/10 p-2.5 rounded-full hover:bg-white/20"
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
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Saheenplus Elevator. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
