import Image from "next/image";

export default function QuerySection() {
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

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
            />
            <textarea
              placeholder="Write your query here.."
              rows={3}
              className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors resize-none"
            ></textarea>

            <button
              type="button"
              className="bg-[#5a5c60] hover:bg-[#4a4c50] text-white text-sm py-2.5 px-6 rounded w-max mx-auto mt-2 transition-colors shadow-sm font-medium"
            >
              Send Query
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
