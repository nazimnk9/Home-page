import { ChevronLeft, ChevronRight } from "lucide-react"

const Members = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-10">
        <p className="text-cyan-500 font-medium uppercase tracking-wide mb-2">EXPERIENCED TEAM</p>
        <h2 className="text-4xl font-bold text-navy-900">Our Team Members</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {/* Team Member 1 */}
        <div className="border border-white">
          <div className="relative h-80">
            <img src="/IMG_55PP.jpg" alt="Mr Anik" className="w-full h-full object-cover" />
          </div>
          <div className="bg-blue-900 text-white p-4">
            <h3 className="font-medium text-lg">Mr Anik</h3>
            <p className="text-sm">Backend Developer</p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="border border-white">
          <div className="relative h-80">
            <img src="/IMG_55PP.jpg" alt="Mr Shahed" className="w-full h-full object-cover" />
          </div>
          <div className="bg-blue-900 text-white p-4">
            <h3 className="font-medium text-lg">Mr Shahed</h3>
            <p className="text-sm">Frontend Developer</p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="border border-white">
          <div className="relative h-80">
            <img
              src="/IMG_55PP.jpg"
              alt="Mr Mainul Islam"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-blue-900 text-white p-4">
            <h3 className="font-medium text-lg">Mr Mainul Islam</h3>
            <p className="text-sm">SEO Expert</p>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="border border-white">
          <div className="relative h-80">
            <img src="/IMG_55PP.jpg" alt="Mr Hasib" className="w-full h-full object-cover" />
          </div>
          <div className="bg-blue-900 text-white p-4">
            <h3 className="font-medium text-lg">Mr Hasib</h3>
            <p className="text-sm">Content Writer</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-8 space-x-2">
        <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
          <ChevronLeft size={18} />
        </button>
        <button className="w-8 h-8 bg-orange-500 text-white rounded flex items-center justify-center">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default Members

