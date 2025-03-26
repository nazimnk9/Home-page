const Process = () => {
    return (
      <div
        className="relative w-full bg-navy-900 text-white py-16 px-4 overflow-hidden"
        style={{ backgroundColor: "#00205B" }}
      >
        {/* Background overlay with silhouettes - this would typically be an image */}
        <div className="absolute inset-0 bg-[#00205B] opacity-90 z-0">
          {/* This would be where you'd place the background image */}
        </div>
  
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Vertical text on the right */}
          <div className="absolute right-30 top-1/3 transform -translate-y-1/3 hidden md:block">
        <div className="flex flex-col items-center">
          <div className="transform rotate-90 origin-center whitespace-nowrap tracking-widest text-xs">
            PROJECT IN STEPS
          </div>
          <div className="h-10 w-px bg-white mt-16"></div>
        </div>
      </div>
  
          {/* Main content */}
          <div className="text-center mb-16">
            <h3 className="text-sm uppercase tracking-wider mb-2">HOW WE WORK</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Process For Delivering <br /> Results
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever.
            </p>
          </div>
  
          {/* Process steps */}
          <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto mb-12">
            {/* The wavy dashed line connecting the circles */}
            <div className="absolute top-1/2 left-0 right-0 hidden md:block">
              <svg className="w-full" height="80" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0,40 Q100,0 200,40 T400,40 T600,40 T800,40"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  fill="none"
                />
              </svg>
            </div>
  
            {/* Step 1 */}
            <div className="relative mb-8 md:mb-0">
              <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-500 to-purple-600">
                <h3 className="text-2xl font-bold">01.</h3>
                <p className="text-sm px-2">Make An Appointment</p>
              </div>
            </div>
  
            {/* Step 2 */}
            <div className="relative mb-8 md:mb-0 md:mt-16">
              <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-500 to-purple-600">
                <h3 className="text-2xl font-bold">02.</h3>
                <p className="text-sm px-2">Meet Our Team</p>
              </div>
            </div>
  
            {/* Step 3 */}
            <div className="relative mb-8 md:mb-0">
              <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-500 to-purple-600">
                <h3 className="text-2xl font-bold">03.</h3>
                <p className="text-sm px-2">Get Consultation</p>
              </div>
            </div>
  
            {/* Step 4 */}
            <div className="relative mb-8 md:mb-0 md:mt-16">
              <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-500 to-purple-600">
                <h3 className="text-2xl font-bold">04.</h3>
                <p className="text-sm px-2">Start Project</p>
              </div>
            </div>
          </div>
  
          {/* Contact button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-8 rounded transition-all duration-300">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Process
  
  