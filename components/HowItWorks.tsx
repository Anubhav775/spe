import { 
  ShieldCheck, 
  Award, 
  Wrench, 
  Headset, 
  Settings, 
  Clock, 
  Tag, 
  TrendingUp,
  Building2,
  Users,
  Settings2,
  PhoneCall
} from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "SAFETY FIRST",
    description: "All our lifts are built with international safety standards and advanced protection systems."
  },
  {
    icon: Award,
    title: "PREMIUM QUALITY",
    description: "We use high-grade materials and the latest technology for smooth, durable and reliable lifts."
  },
  {
    icon: Wrench,
    title: "EXPERT ENGINEERS",
    description: "Our experienced team ensures precision installation, testing and seamless performance."
  },
  {
    icon: Headset,
    title: "24/7 SUPPORT",
    description: "Round-the-clock customer support and quick response for complete peace of mind."
  },
  {
    icon: Settings,
    title: "CUSTOM SOLUTIONS",
    description: "We offer tailored lift solutions as per your building design, space and requirements."
  },
  {
    icon: Clock,
    title: "ON-TIME DELIVERY",
    description: "We value your time and ensure on-time delivery and installation without compromising quality."
  },
  {
    icon: Tag,
    title: "COMPETITIVE PRICING",
    description: "Best-in-class lift solutions at transparent and competitive prices with no hidden costs."
  },
  {
    icon: TrendingUp,
    title: "PROVEN EXPERIENCE",
    description: "Years of industry expertise and successful projects across residential, commercial & industrial sectors."
  }
];

const stats = [
  {
    icon: Building2,
    number: "1000+",
    text: "Successful Installations"
  },
  {
    icon: Users,
    number: "500+",
    text: "Happy Customers"
  },
  {
    icon: Settings2,
    number: "15+",
    text: "Years of Experience"
  },
  {
    icon: PhoneCall,
    number: "24/7",
    text: "Customer Support"
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-transparent py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0D2B44] tracking-tight">WHY CHOOSE US</h2>
        <div className="w-16 h-[3px] bg-[#0D2B44] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index} 
              className="bg-[var(--color-primary-light)] rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border border-[var(--color-primary-light)]"
            >
              <div className="w-20 h-20 rounded-full border-2 border-white bg-[var(--color-primary)] flex items-center justify-center mb-6 text-white shadow-md">
                <Icon size={32} strokeWidth={2} />
              </div>
              <h3 className="font-bold text-gray-900 mb-4 tracking-wide text-sm">{card.title}</h3>
              <div className="h-[2px] w-12 bg-[#B89B6D] mb-4"></div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Stats Bar */}
      <div className="bg-[#1C2B39] rounded-2xl py-12 px-6 flex flex-wrap items-center justify-between text-white md:px-16 shadow-xl">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex flex-col items-center w-1/2 md:w-1/4 mb-8 md:mb-0">
              <Icon size={36} className="text-[#B89B6D] mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold mb-2 tracking-tight">{stat.number}</div>
              <div className="text-gray-300 text-sm font-medium">{stat.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
