import Link from "next/link"

const Navbar = () => {
  return (
    <div className="min-h-screen bg-[#050a47]">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-white text-2xl font-bold">
              <span className="text-white">Env</span>
              <span className="text-[#ff6347]">o</span>
              <span className="text-white">byte</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#ff6347] font-medium">
            HOME
          </Link>
          <Link href="/service" className="text-white font-medium">
            SERVICE
          </Link>
          <Link href="/combo-sales" className="text-white font-medium">
            COMBO SALES
          </Link>
          <Link href="/portfolio" className="text-white font-medium">
            PORTFOLIO
          </Link>
          <Link href="/about-us" className="text-white font-medium">
            ABOUT US
          </Link>
          <Link href="/blogs" className="text-white font-medium">
            BLOGS
          </Link>
        </div>

        <div>
          <button className="bg-[#ff6347] text-white px-6 py-2 rounded-md">See Pricing</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-2">DIGITAL SERVICES</h1>
        <p className="text-white text-xl mb-10">BUILDING YOUR EMPIRE DIGITALLY</p>

        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <button className="bg-[#ff6347] text-white px-8 py-3 rounded">SEE PRICING</button>
          <button className="border border-white text-white px-8 py-3 rounded">BOOK AN APPOINTMENT</button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 w-full max-w-5xl">
          <div className="flex items-center justify-center gap-3">
            <div className="border border-white p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white text-2xl font-bold">2k+</p>
              <p className="text-white text-sm">Websites build</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="border border-white p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white text-2xl font-bold">97%</p>
              <p className="text-white text-sm">Client satisfaction</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="border border-white p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white text-2xl font-bold">25+</p>
              <p className="text-white text-sm">Team members</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="border border-white p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white text-2xl font-bold">500+</p>
              <p className="text-white text-sm">Amazing clients</p>
            </div>
          </div>
        </div>

        {/* Team Image */}
        <div className="w-full max-w-5xl rounded-lg overflow-hidden">
          <img
            src="/team.png"
            alt="Envobyte Team"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar

