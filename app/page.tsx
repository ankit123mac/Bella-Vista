"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // Update cart count from localStorage
    const cart = JSON.parse(localStorage.getItem("restaurantCart") || "[]")
    const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0)
    setCartCount(totalItems)
  }, [])

  const featuredDishes = [
    {
      id: 1,
      name: "Bruschetta Trio",
      price: 14.99,
      description: "Three varieties of our signature bruschetta with fresh tomatoes, basil, and mozzarella",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=250&fit=crop&crop=center",
      tags: ["popular", "veg"],
    },
    {
      id: 4,
      name: "Osso Buco Milanese",
      price: 32.99,
      description: "Slow-braised veal shanks with saffron risotto and gremolata",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop&crop=center",
      tags: ["popular", "non-veg"],
    },
    {
      id: 8,
      name: "Tiramisu",
      price: 9.99,
      description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=250&fit=crop&crop=center",
      tags: ["popular", "veg"],
    },
  ]

  const addToCart = (dish: any) => {
    const cart = JSON.parse(localStorage.getItem("restaurantCart") || "[]")
    const existingItem = cart.find((item: any) => item.id === dish.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...dish, quantity: 1 })
    }

    localStorage.setItem("restaurantCart", JSON.stringify(cart))
    const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0)
    setCartCount(totalItems)

    // Show notification
    alert(`${dish.name} added to cart!`)
  }

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
              <Link href="/" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-white hover:text-yellow-400 transition-colors">
                Menu
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">
                About Us
              </Link>
              <Link href="/gallery" className="text-white hover:text-yellow-400 transition-colors">
                Gallery
              </Link>
              <Link href="/reservation" className="text-white hover:text-yellow-400 transition-colors">
                Reservation
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">
                Contact
              </Link>
              <Link href="/cart" className="text-white hover:text-yellow-400 transition-colors relative">
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&crop=center')`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Experience Fine Dining at Its Best
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Indulge in exquisite flavors crafted with passion and served with elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Order Now
            </Link>
            <Link
              href="/reservation"
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800" style={{ fontFamily: "Playfair Display, serif" }}>
                Welcome to Bella Vista
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Where culinary artistry meets exceptional service. Our restaurant has been serving the finest dishes for
                over two decades, creating memorable dining experiences for our guests.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From farm-fresh ingredients to innovative cooking techniques, every dish tells a story of passion,
                tradition, and excellence. Join us for an unforgettable culinary journey.
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Learn More
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&crop=center"
                alt="Restaurant Interior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop&crop=center"
                alt="Chef preparing dishes"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: "Playfair Display, serif" }}>
              Featured Dishes
            </h2>
            <p className="text-lg text-gray-600">Discover our chef's signature creations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {dish.tags.includes("popular") && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Popular</span>
                    )}
                    {dish.tags.includes("veg") && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Vegetarian</span>
                    )}
                    {dish.tags.includes("non-veg") && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">Non-Vegetarian</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-500">${dish.price}</span>
                    <button
                      onClick={() => addToCart(dish)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: "Playfair Display, serif" }}>
              Restaurant Gallery
            </h2>
            <p className="text-lg text-gray-600">A glimpse into our culinary world</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center"
                alt="Elegant dining room"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=250&fit=crop&crop=center"
                alt="Wine cellar"
                width={400}
                height={250}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=center"
                alt="Kitchen in action"
                width={400}
                height={250}
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop&crop=center"
                alt="Outdoor terrace"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=400&h=280&fit=crop&crop=center"
                alt="Bar area"
                width={400}
                height={280}
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=270&fit=crop&crop=center"
                alt="Private dining room"
                width={400}
                height={270}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: "Playfair Display, serif" }}>
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">Real experiences from our valued guests</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Food Blogger",
                review:
                  "Absolutely incredible dining experience! The food was exceptional and the service was impeccable. Will definitely be returning.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Michael Chen",
                role: "Regular Customer",
                review:
                  "The ambiance is perfect for special occasions. Every dish was a masterpiece. Highly recommend the chef's tasting menu!",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Emily Rodriguez",
                role: "Local Resident",
                review:
                  "Outstanding service and incredible flavors. This restaurant never fails to impress. A true gem in the city!",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-yellow-500 text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Special Weekend Offer
              </h2>
              <p className="text-lg">
                Enjoy 20% off on all main courses this weekend. Book your table now and experience our finest dishes at
                special prices!
              </p>
            </div>
            <Link
              href="/reservation"
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book Now
            </Link>
          </div>
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
              <p className="text-gray-300 mb-4">
                Experience fine dining at its best with our exquisite menu and exceptional service.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  📘
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  📷
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  🐦
                </a>
              </div>
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
