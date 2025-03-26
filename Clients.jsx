import { ChevronLeft, ChevronRight } from "lucide-react"

const Clients = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat ornare"',
      name: "Stephanie Powell",
      avatar: "/IMG_55PP.jpg",
      platform: "fiverr",
      verified: true,
    },
    {
      id: 2,
      text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat ornare"',
      name: "Brian Clark",
      avatar: "/IMG_55PP.jpg",
      platform: "upwork",
      verified: true,
    },
    {
      id: 3,
      text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat ornare"',
      name: "Christopher White",
      avatar: "/IMG_55PP.jpg",
      platform: "upwork",
      verified: true,
    },
    {
      id: 4,
      text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat ornare"',
      name: "Brian Clark",
      avatar: "/IMG_55PP.jpg",
      platform: "fiverr",
      verified: true,
    },
    {
      id: 5,
      text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat ornare"',
      name: "Christopher White",
      avatar: "/IMG_55PP.jpg",
      platform: "upwork",
      verified: true,
    },
    {
      id: 6,
      text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat ornare"',
      name: "Stephanie Powell",
      avatar: "/IMG_55PP.jpg",
      platform: "fiverr",
      verified: true,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-blue-500 font-medium text-sm tracking-wider uppercase mb-2">CLIENT REVIEWS</h3>
        <h2 className="text-navy-900 text-4xl font-bold">Our Proud Clients</h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-blue-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">{testimonial.text}</p>

            {/* Client Info */}
            <div className="flex items-center">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Platform */}
              <div>
                <h4 className="text-blue-700 font-medium">{testimonial.name}</h4>
                <div className="flex items-center text-xs text-gray-500">
                  {/* Verified Badge */}
                  {testimonial.verified && (
                    <span className="inline-flex items-center mr-1">
                      <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center mr-1">
                        <svg
                          className="w-2 h-2 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                    </span>
                  )}
                  <span>From {testimonial.platform}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-8 gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-orange-500 text-white hover:bg-orange-600">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default Clients

