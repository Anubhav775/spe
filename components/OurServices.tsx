import { Wrench, Settings, RefreshCw } from "lucide-react";

const services = [
  {
    title: "Installation of New Lift",
    description: "Expert installation of modern, safe, and efficient elevators tailored to your building's requirements.",
    icon: <Wrench size={32} className="text-[#10958C]" />
  },
  {
    title: "Lift Maintenance",
    description: "Regular check-ups and prompt servicing to ensure optimal performance and safety of your elevators.",
    icon: <Settings size={32} className="text-[#10958C]" />
  },
  {
    title: "Modification of Old Lift",
    description: "Upgrade and modernize your existing elevators with advanced technology and fresh aesthetics.",
    icon: <RefreshCw size={32} className="text-[#10958C]" />
  }
];

export default function OurServices() {
  return (
    <section id="services" className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B44] uppercase tracking-wide">
            Our Services
          </h2>
          <div className="w-16 h-[3px] bg-[#0D2B44] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#10958C]/10 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0D2B44] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
