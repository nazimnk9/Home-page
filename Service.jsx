import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Service() {
  return (
    <div className="bg-[#001045] text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-[#FF5722] text-sm font-medium tracking-wider">DIGITAL SERVICES</p>
            <h2 className="text-4xl font-bold mt-1">Check Our Available Services</h2>
          </div>
          <button className="bg-[#FF5722] text-white px-6 py-2 rounded">All Services</button>
        </div>

        {/* Navigation Menu */}
        <div className="flex space-x-8 mb-10 border-b border-[#1a2a5e] pb-4">
          <a href="#" className="text-[#0088FF] font-medium">
            WEBSITE
          </a>
          <a href="#" className="text-white font-medium">
            UI/UX
          </a>
          <a href="#" className="text-white font-medium">
            SEO
          </a>
          <a href="#" className="text-white font-medium">
            LOGO DESIGN
          </a>
          <a href="#" className="text-white font-medium">
            BANNER DESIGN
          </a>
          <a href="#" className="text-white font-medium">
            GOOGLE ADS
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* WordPress Website Card */}
          <div className="bg-[#001c6b] rounded-lg p-8 flex flex-col items-center">
            <div className="mb-4">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="10" fill="#001c6b" />
                <rect x="20" y="20" width="80" height="60" rx="2" fill="#0055AA" />
                <rect x="25" y="25" width="70" height="5" fill="#0088FF" />
                <rect x="30" y="35" width="40" height="5" fill="#FF5722" />
                <rect x="30" y="45" width="60" height="5" fill="#0088FF" />
                <rect x="30" y="55" width="50" height="5" fill="#0088FF" />
                <circle cx="70" cy="70" r="20" fill="#FFFFFF" fillOpacity="0.2" />
                <circle cx="70" cy="70" r="15" fill="#FFFFFF" fillOpacity="0.3" />
                <path d="M65 60L80 70L65 80V60Z" fill="#FFFFFF" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">WordPress Website</h3>
            <p className="text-sm text-gray-300 mb-6">Design & Development</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#0088FF] text-white px-6 py-2 rounded-full text-sm">
                Portfolio
              </a>
              <a href="#" className="border border-[#0088FF] text-[#0088FF] px-6 py-2 rounded-full text-sm">
                Order
              </a>
            </div>
          </div>

          {/* Content Writing Card */}
          <div className="bg-[#001c6b] rounded-lg p-8 flex flex-col items-center">
            <div className="mb-4">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="10" fill="#001c6b" />
                <rect x="40" y="20" width="40" height="60" rx="2" fill="#FFFFFF" fillOpacity="0.2" />
                <rect x="45" y="25" width="30" height="50" fill="#FFFFFF" fillOpacity="0.1" />
                <rect x="50" y="30" width="20" height="2" fill="#FFFFFF" />
                <rect x="50" y="35" width="20" height="2" fill="#FFFFFF" />
                <rect x="50" y="40" width="20" height="2" fill="#FFFFFF" />
                <rect x="50" y="45" width="20" height="2" fill="#FFFFFF" />
                <rect x="50" y="50" width="20" height="2" fill="#FFFFFF" />
                <rect x="50" y="55" width="20" height="2" fill="#FFFFFF" />
                <rect x="50" y="60" width="20" height="2" fill="#FFFFFF" />
                <rect x="50" y="65" width="20" height="2" fill="#FFFFFF" />
                <path d="M60 15L60 85" stroke="#0088FF" strokeWidth="4" />
                <path d="M50 20L70 20" stroke="#0088FF" strokeWidth="4" />
                <path d="M55 80L65 80" stroke="#0088FF" strokeWidth="4" />
                <path d="M45 25L55 15" stroke="#0088FF" strokeWidth="4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Content Writing</h3>
            <p className="text-sm text-gray-300 mb-6">For entire project</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#0088FF] text-white px-6 py-2 rounded-full text-sm">
                Portfolio
              </a>
              <a href="#" className="border border-[#0088FF] text-[#0088FF] px-6 py-2 rounded-full text-sm">
                Order
              </a>
            </div>
          </div>

          {/* Monthly SEO Card */}
          <div className="bg-[#001c6b] rounded-lg p-8 flex flex-col items-center">
            <div className="mb-4">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="10" fill="#001c6b" />
                <rect x="30" y="30" width="60" height="60" rx="2" fill="#0055AA" />
                <rect x="35" y="35" width="50" height="5" fill="#0088FF" />
                <rect x="35" y="45" width="50" height="5" fill="#0088FF" />
                <rect x="35" y="55" width="50" height="5" fill="#0088FF" />
                <rect x="35" y="65" width="50" height="5" fill="#0088FF" />
                <rect x="35" y="75" width="50" height="5" fill="#0088FF" />
                <path d="M75 20L95 40L75 60L55 40L75 20Z" fill="#FF5722" />
                <path d="M75 25L90 40L75 55L60 40L75 25Z" fill="#FFAA00" />
                <path d="M75 30L85 40L75 50L65 40L75 30Z" fill="#FFDD00" />
                <rect x="70" y="40" width="10" height="40" fill="#FF5722" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Monthly SEO</h3>
            <p className="text-sm text-gray-300 mb-6">Rank #1 on google</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#0088FF] text-white px-6 py-2 rounded-full text-sm">
                Portfolio
              </a>
              <a href="#" className="border border-[#0088FF] text-[#0088FF] px-6 py-2 rounded-full text-sm">
                Order
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-2 mb-8">
          <button className="bg-[#001c6b] p-2 rounded">
            <ChevronLeft size={20} />
          </button>
          <button className="bg-[#FF5722] p-2 rounded">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Footer Text */}
        <div className="flex justify-end">
          <p className="text-sm tracking-widest pt-2 relative">
            CREATIVE SOLUTION
            <span className="absolute -right-12 top-4.5 h-px w-10 bg-[#1a2a5e]"></span>
          </p>
        </div>
      </div>
    </div>
  )
}