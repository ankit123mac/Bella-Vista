"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    setShowSuccessModal(true)

    // Reset form
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/reservation" className="text-white hover:text-yellow-400 transition-colors">
                Reservation
              </Link>
              <Link href="/contact" className="text-yellow-500 hover:text-yellow-400 transition-colors">
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
            Contact Us
          </h1>
          <p className="text-lg opacity-90">Get in touch with us for any inquiries</p>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=300&width=1200&text=Restaurant+Exterior+Night"
              alt="Restaurant exterior at night"
              width={1200}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                  Visit Us Today
                </h2>
                <p className="text-lg opacity-90">We're here to make your dining experience unforgettable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=100&width=100&text=Location+Icon"
                alt="Location"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-full"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h4>
              <p className="text-gray-600">
                123 Gourmet Street
                <br />
                Food District, City 12345
              </p>
            </div>

            <div className="text-center p-8">
              <div className="text-6xl mb-4">📞</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Call Us</h4>
              <p className="text-gray-600">
                +1 (555) 123-4567
                <br />
                +1 (555) 123-4568
              </p>
            </div>

            <div className="text-center p-8">
              <div className="text-6xl mb-4">✉️</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Email Us</h4>
              <p className="text-gray-600">
                info@bellavista.com
                <br />
                reservations@bellavista.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    >
                      <option value="">Select subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation</option>
                      <option value="catering">Catering Services</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Please share your message with us..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Hours */}
            <div>
              <div className="bg-gray-200 rounded-lg h-96 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Interactive Map</p>
                  <p className="text-sm">Google Maps integration would go here</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <h5 className="text-lg font-bold mb-4 text-gray-800 flex items-center">🕒 Opening Hours</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-800">Monday - Thursday</p>
                    <p className="text-gray-600">5:00 PM - 10:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Friday - Saturday</p>
                    <p className="text-gray-600">5:00 PM - 11:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Sunday</p>
                    <p className="text-gray-600">4:00 PM - 9:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Kitchen Closes</p>
                    <p className="text-gray-600">30 minutes before closing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-4">
                Your message has been sent successfully. We will get back to you within 24 hours.
              </p>
              <p className="text-gray-500 text-sm mb-6">We appreciate your interest in Bella Vista!</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

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
