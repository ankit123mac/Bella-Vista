"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const menuData = [
  // Starters
  {
    id: 1,
    name: "Bruschetta Trio",
    category: "starters",
    price: 14.99,
    description: "Three varieties of our signature bruschetta with fresh tomatoes, basil, and mozzarella",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop&crop=center",
    dietary: ["veg"],
    tags: ["popular"],
  },
  {
    id: 2,
    name: "Seafood Carpaccio",
    category: "starters",
    price: 18.99,
    description: "Thinly sliced fresh salmon and tuna with citrus vinaigrette and capers",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center",
    dietary: ["non-veg"],
    tags: ["new"],
  },
  {
    id: 3,
    name: "Truffle Arancini",
    category: "starters",
    price: 16.99,
    description: "Crispy risotto balls filled with truffle and parmesan, served with marinara sauce",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop&crop=center",
    dietary: ["veg"],
    tags: ["popular"],
  },
  // Main Course
  {
    id: 4,
    name: "Osso Buco Milanese",
    category: "mains",
    price: 32.99,
    description: "Slow-braised veal shanks with saffron risotto and gremolata",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&crop=center",
    dietary: ["non-veg"],
    tags: ["popular"],
  },
  {
    id: 5,
    name: "Lobster Ravioli",
    category: "mains",
    price: 28.99,
    description: "House-made pasta filled with fresh lobster in a creamy tomato bisque sauce",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop&crop=center",
    dietary: ["non-veg"],
    tags: ["new"],
  },
  {
    id: 6,
    name: "Eggplant Parmigiana",
    category: "mains",
    price: 22.99,
    description: "Layers of grilled eggplant with fresh mozzarella, basil, and marinara sauce",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop&crop=center",
    dietary: ["veg"],
    tags: [],
  },
  // Desserts
  {
    id: 7,
    name: "Tiramisu",
    category: "desserts",
    price: 9.99,
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop&crop=center",
    dietary: ["veg"],
    tags: ["popular"],
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    category: "desserts",
    price: 11.99,
    description: "Warm chocolate cake with molten center, served with vanilla gelato",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop&crop=center",
    dietary: ["veg"],
    tags: ["new"],
  },
  // Beverages
  {
    id: 9,
    name: "Chianti Classico",
    category: "beverages",
    price: 12.99,
    description: "Full-bodied red wine from Tuscany with notes of cherry and spice",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop&crop=center",
    dietary: ["veg"],
    tags: ["popular"],
  },
]

export default function MenuPage() {
  const [cartCount, setCartCount] = useState(0)
  const [filteredItems, setFilteredItems] = useState(menuData)
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("restaurantCart") || "[]")
    const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0)
    setCartCount(totalItems)
  }, [])

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

    alert(`${dish.name} added to cart!`)
  }

  const filterMenu = (filter: string) => {
    setActiveFilter(filter)

    if (filter === "all") {
      setFilteredItems(menuData)
    } else if (["starters", "mains", "desserts", "beverages"].includes(filter)) {
      setFilteredItems(menuData.filter((item) => item.category === filter))
    } else if (["veg", "non-veg"].includes(filter)) {
      setFilteredItems(menuData.filter((item) => item.dietary.includes(filter)))
    } else if (["popular", "new"].includes(filter)) {
      setFilteredItems(menuData.filter((item) => item.tags.includes(filter)))
    }
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
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-yellow-500 hover:text-yellow-400 transition-colors">
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

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Our Menu
          </h1>
          <p className="text-lg opacity-90">Discover our exquisite culinary offerings</p>
        </div>
      </section>

      {/* Menu Hero Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop&crop=center"
              alt="Fresh ingredients display"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                  Fresh Ingredients, Exceptional Flavors
                </h2>
                <p className="text-lg opacity-90">Every dish crafted with passion and precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=200&h=150&fit=crop&crop=center"
                alt="Appetizers"
                width={200}
                height={150}
                className="rounded-lg shadow-md mx-auto mb-3"
              />
              <h4 className="font-semibold text-gray-800">Starters</h4>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=150&fit=crop&crop=center"
                alt="Main courses"
                width={200}
                height={150}
                className="rounded-lg shadow-md mx-auto mb-3"
              />
              <h4 className="font-semibold text-gray-800">Main Courses</h4>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=150&fit=crop&crop=center"
                alt="Desserts"
                width={200}
                height={150}
                className="rounded-lg shadow-md mx-auto mb-3"
              />
              <h4 className="font-semibold text-gray-800">Desserts</h4>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=150&fit=crop&crop=center"
                alt="Beverages"
                width={200}
                height={150}
                className="rounded-lg shadow-md mx-auto mb-3"
              />
              <h4 className="font-semibold text-gray-800">Beverages</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { key: "all", label: "All Items" },
              { key: "starters", label: "Starters" },
              { key: "mains", label: "Main Course" },
              { key: "desserts", label: "Desserts" },
              { key: "beverages", label: "Beverages" },
              { key: "veg", label: "Vegetarian" },
              { key: "non-veg", label: "Non-Vegetarian" },
              { key: "popular", label: "Popular" },
              { key: "new", label: "New" },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => filterMenu(filter.key)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.key
                    ? "bg-yellow-500 text-black"
                    : "bg-white text-gray-700 hover:bg-yellow-100 border border-gray-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {item.tags.includes("popular") && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Popular</span>
                    )}
                    {item.tags.includes("new") && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">New</span>
                    )}
                    {item.dietary.includes("veg") && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Vegetarian</span>
                    )}
                    {item.dietary.includes("non-veg") && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">Non-Vegetarian</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-500">${item.price}</span>
                    <button
                      onClick={() => addToCart(item)}
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
