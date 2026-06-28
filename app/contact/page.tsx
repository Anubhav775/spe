import QuerySection from "@/components/QuerySection";

export const metadata = {
  title: "Contact Us - Saheenplus Elevator",
  description: "Get in touch with Saheenplus Elevator for any queries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="w-full bg-[#0D2B44] py-16 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0D2B44] mb-4 border-b pb-2">Head Office / Registered Office</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              H. 150/16, Sangam Vihar<br/>
              Ratiya Marg, New Delhi 110080
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0D2B44] mb-4 border-b pb-2">Office</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              G-17, Vishwakarma Colony<br/>
              MB Road, New Delhi 110044
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0D2B44] mb-4 border-b pb-2">Our Branches</h2>
            <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
              <li>Lucknow, Uttar Pradesh</li>
              <li>Ayodhya, Uttar Pradesh</li>
              <li>Gorakhpur, Uttar Pradesh</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <a href="https://www.google.com/maps?q=28.499727249145508,77.28582000732422&z=17&hl=en" target="_blank" rel="noopener noreferrer" className="block w-full h-full min-h-[400px] relative group">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10"></div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
               <div className="bg-[#0D2B44] text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 whitespace-nowrap md:opacity-90 md:group-hover:opacity-100 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 Open in Google Maps
               </div>
            </div>

            <iframe 
              src="https://maps.google.com/maps?q=28.499727249145508,77.28582000732422&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0 pointer-events-none"
            ></iframe>
          </a>
        </div>
      </div>

      <QuerySection />
    </div>
  );
}
