import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Work() {
  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201000006073-6GUXVUAn58ARoEZaPfsqyKvNkz9ahQ.png",
      alt: "Portfolio showcase grid with multiple website designs",
    },
    {
      id: 2,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201000006073-6GUXVUAn58ARoEZaPfsqyKvNkz9ahQ.png",
      alt: "Second portfolio showcase grid with website designs",
    },
  ]

  // Static display - only showing the first item
  const currentPage = 0

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Portfolio Grid */}
        <div className="relative">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-opacity duration-500 ${currentPage === index ? "opacity-100" : "opacity-0 absolute inset-0"}`}
            >
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.alt}
                width={1200}
                height={800}
                className="w-full h-auto"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center mt-8 space-x-2">
          <button
            className="flex items-center justify-center w-8 h-8 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="flex items-center justify-center w-8 h-8 rounded bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Portfolio Heading */}
        <div className="flex items-center justify-end">
          <h2 className="text-sm tracking-widest uppercase text-gray-600 font-medium">Creative Portfolio</h2>
          <div className="ml-4 h-px bg-gray-300 w-24"></div>
        </div>
      </div>
    </section>
  )
}