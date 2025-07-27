"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ReservationPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [reservationId, setReservationId] = useState("")
  const [reservationDetails, setReservationDetails] = useState({
    date: "",
    time: "",
    guests: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const guests = formData.get("guests") as string

    // Basic validation
    if (!name || !email || !phone || !date || !time || !guests) {
      alert("Please fill in all required fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Date validation (must be today or future)
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      alert("Please select a date that is today or in the future.")
      return
    }

    // Generate reservation ID
    const newReservationId = "RES" + Date.now().toString().slice(-6)
    setReservationId(newReservationId)

    // Format date and time for display
    const dateObj = new Date(date)
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    const formattedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })

    setReservationDetails({
      date: formattedDate,
      time: formattedTime,
      guests: `${guests} ${guests === "1" ? "guest" : "guests"}`,
    })

    setShowSuccessModal(true)

    // Reset form
    e.currentTarget.reset()
  }

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0]

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
              <Link href="/reservation" className="text-yellow-500 hover:text-yellow-400 transition-colors">
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
            Make a Reservation
          </h1>
          <p className="text-lg opacity-90">Book your table for an unforgettable dining experience</p>
        </div>
      </section>

      {/* Reservation Ambiance */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Romantic+Dinner+Setting"
                alt="Romantic dinner setting"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Romantic Dining</h3>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Business+Meeting+Setup"
                alt="Business meeting setup"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Business Meetings</h3>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Family+Celebration"
                alt="Family celebration"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Family Celebrations</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
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

                  <div>
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

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests</option>
                      <option value="more">More than 8</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Reservation Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={today}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    >
                      <option value="">Select time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Occasion
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Select occasion (optional)</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="date">Date Night</option>
                    <option value="celebration">Celebration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label htmlFor="special-requests" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="special-requests"
                    name="special-requests"
                    rows={3}
                    placeholder="Any dietary restrictions, seating preferences, or special requests..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Book Table
                  </button>
                </div>
              </form>
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
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Reservation Confirmed!</h3>
              <p className="text-gray-600 mb-4">
                Your table reservation has been confirmed. We look forward to serving you!
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="mb-2">
                  <strong>Reservation ID:</strong> {reservationId}
                </p>
                <p className="mb-2">
                  <strong>Date & Time:</strong> {reservationDetails.date} at {reservationDetails.time}
                </p>
                <p>
                  <strong>Guests:</strong> {reservationDetails.guests}
                </p>
              </div>
              <p className="text-gray-500 text-sm mb-6">A confirmation email has been sent to your email address.</p>
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
