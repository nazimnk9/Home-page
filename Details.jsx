import Image from "next/image"

const Details = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <p className="text-blue-500 uppercase tracking-wider text-sm font-medium">MORE DETAILS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2472] mt-2">Get Your Answers</h2>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6 bg-[#0a2472] flex justify-center items-center">
              <div className="w-32 h-32 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="8" fill="none" />
                  <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="8" fill="none" />
                  <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="8" fill="none" />
                  <circle cx="100" cy="100" r="15" fill="#ff6b35" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0a2472] mb-1">Why Chose Envobyte</h3>
              <p className="text-blue-500 text-sm mb-4">Experienced & trustworthy</p>
              <p className="text-gray-700 text-sm">
                We're experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering
                everything you need for success.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6 bg-white flex justify-center items-center">
              <div className="w-40 h-32 relative">
                <Image
                  src="/placeholder.svg?height=128&width=160"
                  alt="Multitasking person with laptop"
                  width={160}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0a2472] mb-1">What's Your Benefit</h3>
              <p className="text-blue-500 text-sm mb-4">No hassle with best price</p>
              <p className="text-gray-700 text-sm">
                A hassle-free process that saves you time, with everything you need in one seamless package at an
                incredibly attractive price.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6 bg-white flex justify-center items-center">
              <div className="w-32 h-32 relative">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-[#0a2472] rounded-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <span className="text-4xl font-bold">9</span>
                      <span className="text-xl">in</span>
                      <span className="text-4xl font-bold">1</span>
                      <span className="text-4xl font-bold text-[#ff6b35]">?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0a2472] mb-1">What is Combo Offer</h3>
              <p className="text-blue-500 text-sm mb-4">Get 9 services in one package</p>
              <p className="text-gray-700 text-sm">
                You're getting web design, development, content writing, social media kit, custom graphics, and business
                consultation—all in one combo package!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#ff6b35] hover:bg-[#e85d2a] text-white font-medium py-3 px-8 rounded-md transition duration-300">
            See Pricing
          </button>
        </div>

        {/* Portfolio Section Header */}
        <div className="mt-20">
          <p className="text-blue-500 uppercase tracking-wider text-sm font-medium">UI/UX PORTFOLIO</p>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2472] mt-2">Check Our Previous Work</h2>
            <button className="bg-[#ff6b35] hover:bg-[#e85d2a] text-white font-medium py-2 px-4 rounded-md transition duration-300">
              All Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Background Wave Images */}
      <div className="absolute bottom-0 left-0 w-full z-[-1]">
        <Image src="/group.png" alt="Wave background" width={1920} height={300} className="w-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-full z-[-2]">
        <Image src="/group-1.png" alt="Wave background" width={1920} height={300} className="w-full" />
      </div>
    </div>
  )
}

export default Details

