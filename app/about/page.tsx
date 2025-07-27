"use client"

import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const timelineItems = [
    {
      year: "2001",
      title: "The Beginning",
      description:
        "Bella Vista opened its doors with a vision to serve exceptional Italian cuisine in an elegant setting.",
    },
    {
      year: "2005",
      title: "First Award",
      description: 'Received "Best New Restaurant" award from the City Culinary Association.',
    },
    {
      year: "2010",
      title: "Expansion",
      description: "Expanded our dining room and added a private event space for special occasions.",
    },
    {
      year: "2015",
      title: "Michelin Recognition",
      description: "Earned our first Michelin star, recognizing our commitment to culinary excellence.",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched online ordering and delivery services while maintaining our quality standards.",
    },
    {
      year: "2024",
      title: "Sustainability Focus",
      description: "Implemented farm-to-table practices and achieved carbon-neutral operations.",
    },
  ]

  const teamMembers = [
    {
      name: "Chef Marco Rossi",
      role: "Executive Chef",
      description:
        "With over 20 years of experience in fine dining, Chef Marco brings authentic Italian flavors with a modern twist to every dish.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Chef Sofia Martinez",
      role: "Pastry Chef",
      description:
        "Sofia's creative desserts and pastries have earned numerous awards and are the perfect ending to any meal at Bella Vista.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Antonio Benedetti",
      role: "Restaurant Manager",
      description:
        "Antonio ensures every guest receives exceptional service and has a memorable dining experience at Bella Vista.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
  ]

  const values = [
    {
      icon: "❤️",
      title: "Passion",
      description: "We pour our heart into every dish, creating culinary experiences that delight and inspire.",
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "We strive for perfection in every aspect, from ingredients to service to ambiance.",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We're committed to sustainable practices and supporting local farmers and producers.",
    },
    {
      icon: "👥",
      title: "Community",
      description: "We believe in bringing people together and being an integral part of our local community.",
    },
  ]

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
              <Link href="/about" className="text-yellow-500 hover:text-yellow-400 transition-colors">
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
            About Bella Vista
          </h1>
          <p className="text-lg opacity-90">Our story of culinary excellence and passion</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800" style={{ fontFamily: "Playfair Display, serif" }}>
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2001, Bella Vista began as a dream to create an extraordinary dining experience that
                celebrates the art of fine cuisine.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What started as a small family restaurant has grown into one of the city's most beloved dining
                destinations. Our commitment to using the finest ingredients, innovative cooking techniques, and
                providing exceptional service has remained unchanged throughout our journey.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every dish we serve tells a story of passion, creativity, and dedication to culinary excellence. We
                believe that great food brings people together and creates lasting memories.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&h=400&fit=crop&crop=center"
                alt="Restaurant founder"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center"
                alt="Original restaurant location"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: "Playfair Display, serif" }}>
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">Milestones that shaped our restaurant</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-lg min-w-[100px] text-center mr-8">
                  {item.year}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <h4 className="text-xl font-bold text-yellow-500 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: "Playfair Display, serif" }}>
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">The talented individuals behind our culinary excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-6 shadow-lg"
                />
                <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-yellow-500 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: "Playfair Display, serif" }}>
              Our Culinary Philosophy
            </h2>
            <p className="text-lg text-gray-600">Where tradition meets innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=250&fit=crop&crop=center"
                alt="Farm fresh ingredients"
                width={300}
                height={250}
                className="rounded-lg shadow-lg mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-4">Farm to Table</h4>
              <p className="text-gray-600">
                We source the finest ingredients directly from local farms to ensure freshness and quality in every
                dish.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=250&fit=crop&crop=center"
                alt="Traditional cooking techniques"
                width={300}
                height={250}
                className="rounded-lg shadow-lg mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-4">Time-Honored Techniques</h4>
              <p className="text-gray-600">
                Our chefs master traditional cooking methods passed down through generations of culinary excellence.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=250&fit=crop&crop=center"
                alt="Modern culinary innovation"
                width={300}
                height={250}
                className="rounded-lg shadow-lg mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-4">Modern Innovation</h4>
              <p className="text-gray-600">
                We blend classic flavors with contemporary presentation and innovative cooking techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: "Playfair Display, serif" }}>
              Our Values
            </h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
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
