"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function QuerySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "Query Section (Home)", ...formData }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="w-full relative min-h-[400px] md:min-h-[500px] flex items-center">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dxmfeilzl/image/upload/v1782551744/have_a_ques_czacos.png"
          alt="Elevator Lifts Background"
          fill
          className="object-cover"
        />
        {/* Subtle overlay for better contrast if needed */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Form Container */}
      <div className="w-full flex items-center justify-center md:justify-end p-6 md:p-8 lg:p-12 z-10 mx-auto max-w-7xl">
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-[480px] border border-gray-100">
          <h2 className="text-[22px] md:text-2xl font-semibold text-gray-800 mb-6 text-center">
            Have Questions? We Have the Answers!
          </h2>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 text-center h-full">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Request Submitted!</h3>
              <p className="text-gray-600 text-sm max-w-xs mb-4">
                We have submitted your request. Our team will respond to it quickly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
              />
              <input
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
              />
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your query here.."
                rows={3}
                className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors resize-none"
              ></textarea>

              {status === "error" && (
                <p className="text-red-500 text-xs text-center font-medium">Failed to submit. Please try again.</p>
              )}

              <button
                disabled={status === "loading"}
                type="submit"
                className="bg-[#5a5c60] hover:bg-[#4a4c50] disabled:opacity-70 text-white text-sm py-2.5 px-6 rounded w-max mx-auto mt-2 transition-colors shadow-sm font-medium flex items-center gap-2"
              >
                {status === "loading" ? "Sending..." : "Send Query"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
