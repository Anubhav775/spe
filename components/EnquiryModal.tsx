"use client";

import { X, Clock, UserCheck, Settings, Shield, Mail, Phone, MessageCircle, Send } from "lucide-react";
import Image from "next/image";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="flex min-h-full items-start justify-center p-4 pt-20 sm:p-6 sm:pt-24 pb-10 text-gray-800">
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        ></div>
        
        <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left Side - Info */}
        <div className="w-full md:w-5/12 bg-[#F8FAFC] p-8 lg:p-12 flex flex-col justify-center border-r border-gray-100 relative">
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10958C] to-teal-200"></div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#10958C]"></div>
            <span className="text-[#10958C] font-semibold tracking-widest text-xs uppercase">
              Enquire Now
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B44] mb-6 leading-tight">
            Let's Build Better Together
          </h2>
          
          <p className="text-gray-600 mb-10 leading-relaxed text-sm">
            Have a project in mind or need more information? Fill out the form and our team will get back to you promptly with the best solution.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 border border-teal-100">
                <Clock size={22} className="text-[#10958C]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Quick Response</h4>
                <p className="text-xs text-gray-500 leading-relaxed">We value your time and ensure a prompt response.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 border border-teal-100">
                <UserCheck size={22} className="text-[#10958C]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Expert Guidance</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Get the right solution with advice from our lift experts.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 border border-teal-100">
                <Settings size={22} className="text-[#10958C]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Customized Solutions</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Tailored lift solutions to match your project needs.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 border border-teal-100">
                <Shield size={22} className="text-[#10958C]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">End-to-End Support</h4>
                <p className="text-xs text-gray-500 leading-relaxed">From consultation to installation, we've got you covered.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-7/12 p-8 lg:p-12 bg-white flex flex-col justify-center">
          
          {/* Quick Contact Buttons */}
          <div className="bg-gray-50 p-4 sm:p-5 rounded-xl mb-8 flex flex-col gap-4 border border-gray-100">
            <div className="text-center w-full">
              <h4 className="text-[#10958C] font-semibold text-sm mb-1 uppercase tracking-wide">Prefer to Talk?</h4>
              <p className="text-xs text-gray-500">Reach out directly through your preferred channel.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <a href="mailto:saheenplus73@gmail.com" className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 px-3 py-3 rounded-xl hover:border-[#10958C] hover:shadow-sm transition-all group overflow-hidden">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Image src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475502/email_brzmfp.png" alt="Email" width={24} height={24} className="object-contain" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-bold text-gray-700 leading-tight">Email Us</span>
                  <span className="text-[10px] text-gray-500 leading-tight group-hover:text-[#10958C] transition-colors break-all">saheenplus73@gmail.com</span>
                </div>
              </a>
              <a href="tel:+919891200883" className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 px-3 py-3 rounded-xl hover:border-[#10958C] hover:shadow-sm transition-all group overflow-hidden">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Image src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475517/telephone_ga6zif.png" alt="Call" width={24} height={24} className="object-contain" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-bold text-gray-700 leading-tight">Call Us</span>
                  <span className="text-[10px] text-gray-500 leading-tight group-hover:text-[#10958C] transition-colors truncate">+91 9891200883</span>
                </div>
              </a>
              <a href="https://wa.me/919891200883?text=Hi%20Saheenplus%2C%20I%20am%20interested%20in%20the%20lift.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 px-3 py-3 rounded-xl hover:border-[#10958C] hover:shadow-sm transition-all group overflow-hidden">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Image src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782475518/whatsapp_lrzhus.png" alt="WhatsApp" width={24} height={24} className="object-contain" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-bold text-gray-700 leading-tight">WhatsApp</span>
                  <span className="text-[10px] text-gray-500 leading-tight group-hover:text-[#10958C] transition-colors truncate">Chat with us</span>
                </div>
              </a>
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <UserCheck size={16} className="text-gray-400" />
                  </div>
                  <input type="text" placeholder="Enter your full name" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10958C]/20 focus:border-[#10958C] transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Mail size={16} className="text-gray-400" />
                  </div>
                  <input type="email" placeholder="Enter your email" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10958C]/20 focus:border-[#10958C] transition-all" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Phone size={16} className="text-gray-400" />
                  </div>
                  <input type="tel" placeholder="Enter your phone number" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10958C]/20 focus:border-[#10958C] transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Project Type</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10958C]/20 focus:border-[#10958C] transition-all appearance-none text-gray-600">
                    <option value="">Select project type</option>
                    <option value="residential">Residential Elevator</option>
                    <option value="commercial">Commercial Elevator</option>
                    <option value="hospital">Hospital Elevator</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-700">Subject</label>
              <div className="relative">
                <input type="text" placeholder="Enter subject" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10958C]/20 focus:border-[#10958C] transition-all" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-700">Message</label>
              <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10958C]/20 focus:border-[#10958C] transition-all resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-[#10958C] hover:bg-[#0D7F77] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2 shadow-md hover:shadow-lg">
              <Send size={18} />
              SUBMIT ENQUIRY
            </button>

            <div className="flex items-center justify-center gap-2 mt-2">
              <Shield size={14} className="text-gray-400" />
              <p className="text-[11px] text-gray-500">Your information is safe with us. We respect your privacy.</p>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
  );
}
