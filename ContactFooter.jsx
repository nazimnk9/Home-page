import { Mail, ArrowRight, ExternalLink } from "lucide-react"

const ContactFooter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      {/* Top Section with Contact Form and Info */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <div className="border border-blue-700/50 rounded-lg p-6 bg-blue-950/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-2 rounded bg-blue-950 border border-blue-800 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="support@envobyte.com"
                  className="w-full p-2 rounded bg-blue-950 border border-blue-800 text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (667) 777 2477"
                  className="w-full p-2 rounded bg-blue-950 border border-blue-800 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Envobyte"
                  className="w-full p-2 rounded bg-blue-950 border border-blue-800 text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message here..."
                className="w-full p-2 rounded bg-blue-950 border border-blue-800 text-white placeholder-gray-400"
              ></textarea>
            </div>

            <button className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center gap-2 transition-colors">
              Send message
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Let us know what you think!</h2>
          <p className="mb-6">
            Got something on your mind? Share it with us! Drop a message, and we'll respond quickly to assist you
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-800/50 p-2 rounded">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Business</p>
                <div className="flex items-center gap-1">
                  <a href="mailto:support@envobyte.com" className="text-white hover:underline">
                    support@envobyte.com
                  </a>
                  <ExternalLink size={14} className="text-blue-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-800/50 p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-300">Whatsapp</p>
                <div className="flex items-center gap-1">
                  <a href="tel:+16677772477" className="text-white hover:underline">
                    +1 (667) 777 2477
                  </a>
                  <ExternalLink size={14} className="text-blue-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-800/50 p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-300">LinkedIn</p>
                <div className="flex items-center gap-1">
                  <a
                    href="https://www.linkedin.com/company/envobyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    www.linkedin.com/company/envobyte
                  </a>
                  <ExternalLink size={14} className="text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-blue-800 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-25">
              {/* Company Info */}
              <div>
                <div className="mb-4">
                  <svg width="150" height="32" viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 6H4C2.89543 6 2 6.89543 2 8V24C2 25.1046 2.89543 26 4 26H20C21.1046 26 22 25.1046 22 24V8C22 6.89543 21.1046 6 20 6Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26 10H30C30.5304 10 31.0391 10.2107 31.4142 10.5858C31.7893 10.9609 32 11.4696 32 12V22C32 22.5304 31.7893 23.0391 31.4142 23.4142C31.0391 23.7893 30.5304 24 30 24H28"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <text x="40" y="20" fontFamily="Arial" fontSize="18" fill="white" fontWeight="bold">
                      Envobyte
                    </text>
                  </svg>
                </div>
                <h3 className="text-sm text-gray-300 mb-4 w-[250px] h-[72px]">
                  We are an IT Company. We help businesses to bring ideas to life easily and affordably.
                </h3>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Learn More Links */}
              <div>
                <h3 className="font-bold mb-4">Learn More</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Combo Offer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Service Industries
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Envobyte Apps
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="font-bold mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Get in Touch</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-amber-500" />
                    <a href="mailto:support@envobyte.com" className="text-gray-300 hover:text-white">
                      support@envobyte.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="tel:+16677772477" className="text-gray-300 hover:text-white">
                      +1 (667) 777 2477
                    </a>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a href="#" className="text-white hover:text-blue-400">
                      <img src="/fac.png" alt="Facebook" width="20" height="20" />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400">
                      <img src="/lin.png" alt="LinkedIn" width="20" height="20" />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400">
                      <img src="/ins.png" alt="Instagram" width="20" height="20" />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400">
                      <img src="/twi.png" alt="Twitter" width="20" height="20" />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400">
                      <img src="/pin.png" alt="Pinterest" width="20" height="20" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 my-8">
        {/* Copyright */}
        <div className="text-center mt-12 pb-12 text-sm text-gray-400">©2025 - ENVOBYTE, All rights are reserved.</div>
      </div>
    </div>
  )
}

export default ContactFooter