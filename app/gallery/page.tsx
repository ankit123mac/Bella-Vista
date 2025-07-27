"use client"

import Link from "next/link"
import ImageGallery from "../components/image-gallery"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🍽️</span>
              <span className="text-xl font-bold text-yellow-500" style={{ fontFamily: "Playfair Display, serif" }}>
                Bella Vista
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-white hover:text-yellow-400 transition-colors">
                Menu
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">
                About Us
              </Link>
              <Link href="/gallery" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                Gallery
              </Link>
              <Link href="/reservation" className="text-white hover:text-yellow-400 transition-colors">
                Reservation
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">
                Contact
              </Link>
              <Link href="/cart" className="text-white hover:text-yellow-400 transition-colors">
                🛒
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Gallery
          </h1>
          <p className="text-lg opacity-90">Explore our culinary world through images</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageGallery className="w-full" showControls={true} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🍽️</span>
                <span className="text-xl font-bold text-yellow-500" style={{ fontFamily: "Playfair Display, serif" }}>
                  Bella Vista
                </span>
              </div>
              <p className="text-gray-300">
                Experience fine dining at its best with our exquisite menu and exceptional service.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4">Contact Info</h5>
              <p className="text-gray-300 mb-2">📍 123 Gourmet Street, Food District</p>
              <p className="text-gray-300 mb-2">📞 +1 (555) 123-4567</p>
              <p className="text-gray-300">✉️ info@bellavista.com</p>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4">Opening Hours</h5>
              <p className="text-gray-300 mb-2">Monday - Thursday: 5:00 PM - 10:00 PM</p>
              <p className="text-gray-300 mb-2">Friday - Saturday: 5:00 PM - 11:00 PM</p>
              <p className="text-gray-300">Sunday: 4:00 PM - 9:00 PM</p>
            </div>
          </div>

          <hr className="border-gray-800 my-8" />
          <div className="text-center text-gray-300">
            <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
