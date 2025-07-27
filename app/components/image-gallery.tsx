"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface GalleryImage {
  id: string
  src: string
  alt: string
  caption?: string
  category: string
  thumbnail: string
  sizes: {
    small: string
    medium: string
    large: string
  }
}

interface ImageGalleryProps {
  category?: string
  limit?: number
  showControls?: boolean
  className?: string
}

export default function ImageGallery({
  category = "all",
  limit,
  showControls = true,
  className = "",
}: ImageGalleryProps) {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentFilter, setCurrentFilter] = useState(category)
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")

  // Real gallery images from Unsplash (no copyright)
  const sampleImages: GalleryImage[] = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center",
      alt: "Elegant dining room",
      caption: "Our elegant main dining room with ambient lighting",
      category: "restaurant",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop&crop=center",
      sizes: {
        small: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center",
        medium: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center",
        large: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=1200&fit=crop&crop=center",
      },
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop&crop=center",
      alt: "Chef preparing signature dish",
      caption: "Our head chef preparing the signature osso buco",
      category: "team",
      thumbnail: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=200&fit=crop&crop=center",
      sizes: {
        small: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=300&fit=crop&crop=center",
        medium: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop&crop=center",
        large: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1600&h=1200&fit=crop&crop=center",
      },
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop&crop=center",
      alt: "Gourmet pasta dish",
      caption: "House-made lobster ravioli with tomato bisque",
      category: "menu",
      thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop&crop=center",
      sizes: {
        small: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center",
        medium: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop&crop=center",
        large: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=1600&h=1200&fit=crop&crop=center",
      },
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop&crop=center",
      alt: "Wine cellar",
      caption: "Our extensive wine collection from around the world",
      category: "restaurant",
      thumbnail: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop&crop=center",
      sizes: {
        small: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop&crop=center",
        medium: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop&crop=center",
        large: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=1200&fit=crop&crop=center",
      },
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop&crop=center",
      alt: "Private event",
      caption: "Anniversary celebration in our private dining room",
      category: "events",
      thumbnail: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop&crop=center",
      sizes: {
        small: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&crop=center",
        medium: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop&crop=center",
        large: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600&h=1200&fit=crop&crop=center",
      },
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop&crop=center",
      alt: "Tiramisu dessert",
      caption: "Our signature tiramisu with artistic presentation",
      category: "menu",
      thumbnail: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop&crop=center",
      sizes: {
        small: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&crop=center",
        medium: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop&crop=center",
        large: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1600&h=1200&fit=crop&crop=center",
      },
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
      alt: "Kitchen in action",
      caption: "Our professional kitchen during dinner service",
      category: "team",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop&crop=center",
      sizes: {
        small: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
        medium: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
        large: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=1200&fit=crop&crop=center",
      },
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop&crop=center",
      alt: "Outdoor terrace",
      caption: "Beautiful outdoor dining terrace with city views",
      category: "restaurant",
      thumbnail: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=300&h=200&fit=crop&crop=center",
      sizes: {
        small: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop&crop=center",
        medium: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop&crop=center",
        large: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&h=1200&fit=crop&crop=center",
      },
    },
    {
      id: "9",
      src: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=800&h=600&fit=crop&crop=center",
      alt: "Bar area",
      caption: "Sophisticated bar area with craft cocktails",
      category: "restaurant",
      thumbnail: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=300&h=200&fit=crop&crop=center",
      sizes: {
        small: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=400&h=300&fit=crop&crop=center",
        medium: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=800&h=600&fit=crop&crop=center",
        large: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=1600&h=1200&fit=crop&crop=center",
      },
    },
  ]

  useEffect(() => {
    // Simulate loading images
    setLoading(true)
    setTimeout(() => {
      setImages(sampleImages)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredImages = images
    .filter((img) => currentFilter === "all" || img.category === currentFilter)
    .slice(0, limit)

  const categories = [
    { value: "all", label: "All" },
    { value: "restaurant", label: "Restaurant" },
    { value: "menu", label: "Menu" },
    { value: "team", label: "Team" },
    { value: "events", label: "Events" },
  ]

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
              <div className="bg-gray-300 h-4 rounded mb-2"></div>
              <div className="bg-gray-300 h-3 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      {showControls && (
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div className="flex items-center space-x-4">
            <select
              value={currentFilter}
              onChange={(e) => setCurrentFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
              >
                ⊞
              </button>
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-2 rounded ${viewMode === "masonry" ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
              >
                ⊟
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            {filteredImages.length} image{filteredImages.length !== 1 ? "s" : ""}
          </div>
        </div>
      )}

      <div
        className={`grid gap-6 ${
          viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "columns-1 md:columns-2 lg:columns-3"
        }`}
      >
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className={`group cursor-pointer ${viewMode === "masonry" ? "break-inside-avoid mb-6" : ""}`}
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={image.thumbnail || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {image.caption && <p className="mt-2 text-sm text-gray-600 line-clamp-2">{image.caption}</p>}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <Image
              src={selectedImage.sizes.large || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {selectedImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                <p className="text-center">{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
