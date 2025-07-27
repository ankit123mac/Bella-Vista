"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([])
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [orderId, setOrderId] = useState("")

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("restaurantCart") || "[]")
    setCart(savedCart)
  }, [])

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId)
      return
    }

    const updatedCart = cart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    setCart(updatedCart)
    localStorage.setItem("restaurantCart", JSON.stringify(updatedCart))
  }

  const removeFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId)
    setCart(updatedCart)
    localStorage.setItem("restaurantCart", JSON.stringify(updatedCart))
  }

  const placeOrder = () => {
    if (cart.length === 0) return

    const newOrderId = "BV" + Date.now().toString().slice(-6)
    setOrderId(newOrderId)
    setShowOrderModal(true)

    // Clear cart
    setCart([])
    localStorage.setItem("restaurantCart", JSON.stringify([]))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.085
  const delivery = subtotal > 0 ? 5.0 : 0
  const total = subtotal + tax + delivery

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
              <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">
                Contact
              </Link>
              <Link href="/cart" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                🛒 Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Your Cart
          </h1>
          <p className="text-lg opacity-90">Review your order before checkout</p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Delicious+Food+Awaits"
                      alt="Delicious food awaits"
                      width={300}
                      height={200}
                      className="mx-auto rounded-lg shadow-lg mb-4"
                    />
                  </div>
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Your cart is empty</h3>
                  <p className="text-gray-600 mb-8">Add some delicious items from our menu!</p>
                  <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                    <Image
                      src="/placeholder.svg?height=120&width=180&text=Popular+Dishes"
                      alt="Popular dishes"
                      width={180}
                      height={120}
                      className="rounded-lg shadow-md"
                    />
                    <Image
                      src="/placeholder.svg?height=120&width=180&text=Fresh+Ingredients"
                      alt="Fresh ingredients"
                      width={180}
                      height={120}
                      className="rounded-lg shadow-md"
                    />
                    <Image
                      src="/placeholder.svg?height=120&width=180&text=Chef+Specials"
                      alt="Chef specials"
                      width={180}
                      height={120}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <Link
                    href="/menu"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Browse Menu
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                          <p className="text-yellow-500 font-bold">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors"
                          >
                            -
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              {/* Promotional Banner */}
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?height=150&width=400&text=Special+Offer+Banner"
                  alt="Special offers"
                  width={400}
                  height={150}
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8.5%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>${delivery.toFixed(2)}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={placeOrder}
                  disabled={cart.length === 0}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors mb-3"
                >
                  Place Order
                </button>
                <Link
                  href="/menu"
                  className="w-full block text-center border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Success Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Order Placed Successfully!</h3>
              <p className="text-gray-600 mb-4">
                Your order has been placed successfully. You will receive a confirmation email shortly.
              </p>
              <p className="mb-2">
                <strong>Order ID:</strong> {orderId}
              </p>
              <p className="mb-6">
                <strong>Estimated Delivery:</strong> 30-45 minutes
              </p>
              <button
                onClick={() => setShowOrderModal(false)}
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
