// Restaurant Website JavaScript

// Sample menu data
const menuData = [
  // Starters
  {
    id: 1,
    name: "Bruschetta Trio",
    category: "starters",
    price: 14.99,
    description: "Three varieties of our signature bruschetta with fresh tomatoes, basil, and mozzarella",
    image: "/placeholder.svg?height=200&width=300&text=Bruschetta+Trio+with+Fresh+Tomatoes",
    dietary: ["veg"],
    tags: ["popular"],
  },
  {
    id: 2,
    name: "Seafood Carpaccio",
    category: "starters",
    price: 18.99,
    description: "Thinly sliced fresh salmon and tuna with citrus vinaigrette and capers",
    image: "/placeholder.svg?height=200&width=300&text=Fresh+Salmon+Tuna+Carpaccio",
    dietary: ["non-veg"],
    tags: ["new"],
  },
  {
    id: 3,
    name: "Truffle Arancini",
    category: "starters",
    price: 16.99,
    description: "Crispy risotto balls filled with truffle and parmesan, served with marinara sauce",
    image: "/placeholder.svg?height=200&width=300&text=Golden+Truffle+Arancini",
    dietary: ["veg"],
    tags: ["popular"],
  },
  {
    id: 14,
    name: "Burrata Caprese",
    category: "starters",
    price: 17.99,
    description: "Creamy burrata cheese with heirloom tomatoes, fresh basil, and balsamic glaze",
    image: "/placeholder.svg?height=200&width=300&text=Creamy+Burrata+Caprese",
    dietary: ["veg"],
    tags: ["new"],
  },
  {
    id: 15,
    name: "Pan-Seared Scallops",
    category: "starters",
    price: 22.99,
    description: "Perfectly seared scallops with cauliflower puree and pancetta crisps",
    image: "/placeholder.svg?height=200&width=300&text=Pan+Seared+Scallops",
    dietary: ["non-veg"],
    tags: ["popular"],
  },

  // Main Course
  {
    id: 4,
    name: "Osso Buco Milanese",
    category: "mains",
    price: 32.99,
    description: "Slow-braised veal shanks with saffron risotto and gremolata",
    image: "/placeholder.svg?height=200&width=300&text=Osso+Buco+with+Saffron+Risotto",
    dietary: ["non-veg"],
    tags: ["popular"],
  },
  {
    id: 5,
    name: "Lobster Ravioli",
    category: "mains",
    price: 28.99,
    description: "House-made pasta filled with fresh lobster in a creamy tomato bisque sauce",
    image: "/placeholder.svg?height=200&width=300&text=Lobster+Ravioli+Pasta",
    dietary: ["non-veg"],
    tags: ["new"],
  },
  {
    id: 6,
    name: "Eggplant Parmigiana",
    category: "mains",
    price: 22.99,
    description: "Layers of grilled eggplant with fresh mozzarella, basil, and marinara sauce",
    image: "/placeholder.svg?height=200&width=300&text=Eggplant+Parmigiana+Layers",
    dietary: ["veg"],
    tags: [],
  },
  {
    id: 7,
    name: "Grilled Branzino",
    category: "mains",
    price: 26.99,
    description: "Mediterranean sea bass with lemon herb crust, roasted vegetables, and olive tapenade",
    image: "/placeholder.svg?height=200&width=300&text=Grilled+Mediterranean+Branzino",
    dietary: ["non-veg"],
    tags: ["popular"],
  },
  {
    id: 16,
    name: "Ribeye Steak",
    category: "mains",
    price: 38.99,
    description: "Prime ribeye steak with roasted garlic mashed potatoes and seasonal vegetables",
    image: "/placeholder.svg?height=200&width=300&text=Prime+Ribeye+Steak",
    dietary: ["non-veg"],
    tags: ["popular"],
  },
  {
    id: 17,
    name: "Wild Mushroom Risotto",
    category: "mains",
    price: 24.99,
    description: "Creamy arborio rice with wild mushrooms, truffle oil, and parmesan",
    image: "/placeholder.svg?height=200&width=300&text=Wild+Mushroom+Risotto",
    dietary: ["veg"],
    tags: ["new"],
  },
  {
    id: 18,
    name: "Chilean Sea Bass",
    category: "mains",
    price: 34.99,
    description: "Miso-glazed Chilean sea bass with bok choy and jasmine rice",
    image: "/placeholder.svg?height=200&width=300&text=Miso+Glazed+Sea+Bass",
    dietary: ["non-veg"],
    tags: ["popular"],
  },

  // Desserts
  {
    id: 8,
    name: "Tiramisu",
    category: "desserts",
    price: 9.99,
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream",
    image: "/placeholder.svg?height=200&width=300&text=Classic+Italian+Tiramisu",
    dietary: ["veg"],
    tags: ["popular"],
  },
  {
    id: 9,
    name: "Chocolate Lava Cake",
    category: "desserts",
    price: 11.99,
    description: "Warm chocolate cake with molten center, served with vanilla gelato",
    image: "/placeholder.svg?height=200&width=300&text=Chocolate+Lava+Cake+Molten",
    dietary: ["veg"],
    tags: ["new"],
  },
  {
    id: 10,
    name: "Panna Cotta",
    category: "desserts",
    price: 8.99,
    description: "Silky vanilla custard with seasonal berry compote",
    image: "/placeholder.svg?height=200&width=300&text=Vanilla+Panna+Cotta+Berries",
    dietary: ["veg"],
    tags: [],
  },
  {
    id: 19,
    name: "Crème Brûlée",
    category: "desserts",
    price: 10.99,
    description: "Classic French custard with caramelized sugar crust and fresh berries",
    image: "/placeholder.svg?height=200&width=300&text=Creme+Brulee+Caramelized",
    dietary: ["veg"],
    tags: ["popular"],
  },
  {
    id: 20,
    name: "Gelato Trio",
    category: "desserts",
    price: 12.99,
    description: "Three scoops of house-made gelato: pistachio, stracciatella, and limoncello",
    image: "/placeholder.svg?height=200&width=300&text=Artisan+Gelato+Trio",
    dietary: ["veg"],
    tags: ["new"],
  },

  // Beverages
  {
    id: 11,
    name: "Chianti Classico",
    category: "beverages",
    price: 12.99,
    description: "Full-bodied red wine from Tuscany with notes of cherry and spice",
    image: "/placeholder.svg?height=200&width=300&text=Chianti+Wine+Bottle+Glass",
    dietary: ["veg"],
    tags: ["popular"],
  },
  {
    id: 12,
    name: "Limoncello Spritz",
    category: "beverages",
    price: 10.99,
    description: "Refreshing cocktail with limoncello, prosecco, and fresh lemon",
    image: "/placeholder.svg?height=200&width=300&text=Limoncello+Spritz+Cocktail",
    dietary: ["veg"],
    tags: ["new"],
  },
  {
    id: 13,
    name: "Espresso Romano",
    category: "beverages",
    price: 4.99,
    description: "Traditional Italian espresso served with a twist of lemon peel",
    image: "/placeholder.svg?height=200&width=300&text=Italian+Espresso+Romano",
    dietary: ["veg"],
    tags: [],
  },
  {
    id: 21,
    name: "Craft Beer Selection",
    category: "beverages",
    price: 8.99,
    description: "Rotating selection of local craft beers on tap",
    image: "/placeholder.svg?height=200&width=300&text=Craft+Beer+Selection+Tap",
    dietary: ["veg"],
    tags: ["popular"],
  },
  {
    id: 22,
    name: "House Sangria",
    category: "beverages",
    price: 11.99,
    description: "Red wine sangria with fresh fruits and brandy",
    image: "/placeholder.svg?height=200&width=300&text=Fresh+Fruit+Sangria",
    dietary: ["veg"],
    tags: ["new"],
  },
  {
    id: 23,
    name: "Artisan Coffee",
    category: "beverages",
    price: 5.99,
    description: "Single-origin coffee beans, expertly roasted and brewed",
    image: "/placeholder.svg?height=200&width=300&text=Artisan+Coffee+Beans",
    dietary: ["veg"],
    tags: ["popular"],
  },
]

// Cart functionality
let cart = JSON.parse(localStorage.getItem("restaurantCart")) || []

// Update cart count in navigation
function updateCartCount() {
  const cartCount = document.querySelectorAll(".cart-count")
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.forEach((element) => {
    element.textContent = totalItems
    element.style.display = totalItems > 0 ? "inline" : "none"
  })
}

// Add item to cart
function addToCart(itemId) {
  const item = menuData.find((item) => item.id === itemId)
  if (!item) return

  const existingItem = cart.find((cartItem) => cartItem.id === itemId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      ...item,
      quantity: 1,
    })
  }

  localStorage.setItem("restaurantCart", JSON.stringify(cart))
  updateCartCount()

  // Show success message
  showNotification(`${item.name} added to cart!`, "success")
}

// Remove item from cart
function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId)
  localStorage.setItem("restaurantCart", JSON.stringify(cart))
  updateCartCount()
  if (window.location.pathname.includes("cart.html")) {
    displayCartItems()
  }
}

// Update item quantity in cart
function updateQuantity(itemId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(itemId)
    return
  }

  const item = cart.find((cartItem) => cartItem.id === itemId)
  if (item) {
    item.quantity = newQuantity
    localStorage.setItem("restaurantCart", JSON.stringify(cart))
    updateCartCount()
    if (window.location.pathname.includes("cart.html")) {
      displayCartItems()
    }
  }
}

// Show notification
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `alert alert-${type === "success" ? "success" : "info"} notification`
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInRight 0.3s ease;
    `
  notification.innerHTML = `
        <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"} me-2"></i>
        ${message}
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Display featured dishes on home page
function displayFeaturedDishes() {
  const container = document.getElementById("featured-dishes")
  if (!container) return

  const featuredItems = menuData.filter((item) => item.tags.includes("popular")).slice(0, 3)

  container.innerHTML = featuredItems
    .map(
      (item) => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="dish-card">
                <img src="${item.image}" alt="${item.name}" class="img-fluid">
                <div class="dish-card-body">
                    <div class="dish-badges">
                        ${item.dietary.includes("veg") ? '<span class="badge bg-success">Vegetarian</span>' : ""}
                        ${item.dietary.includes("non-veg") ? '<span class="badge bg-danger">Non-Vegetarian</span>' : ""}
                        ${item.tags.includes("popular") ? '<span class="badge bg-warning">Popular</span>' : ""}
                        ${item.tags.includes("new") ? '<span class="badge bg-info">New</span>' : ""}
                    </div>
                    <h4>${item.name}</h4>
                    <p class="text-muted">${item.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="dish-price">$${item.price}</span>
                        <button class="btn btn-primary" onclick="addToCart(${item.id})">
                            <i class="fas fa-plus me-1"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Display menu items
function displayMenuItems(items = menuData) {
  const container = document.getElementById("menu-container")
  if (!container) return

  if (items.length === 0) {
    container.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h3>No items found</h3>
                    <p>Try adjusting your filters to see more items.</p>
                </div>
            </div>
        `
    return
  }

  container.innerHTML = items
    .map(
      (item) => `
        <div class="col-lg-4 col-md-6 mb-4 menu-item-wrapper" data-category="${item.category}" data-dietary="${item.dietary.join(" ")}" data-tags="${item.tags.join(" ")}">
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}" class="img-fluid">
                <div class="menu-item-body">
                    <div class="dish-badges">
                        ${item.dietary.includes("veg") ? '<span class="badge bg-success">Vegetarian</span>' : ""}
                        ${item.dietary.includes("non-veg") ? '<span class="badge bg-danger">Non-Vegetarian</span>' : ""}
                        ${item.tags.includes("popular") ? '<span class="badge bg-warning">Popular</span>' : ""}
                        ${item.tags.includes("new") ? '<span class="badge bg-info">New</span>' : ""}
                    </div>
                    <h4 class="menu-item-title">${item.name}</h4>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">$${item.price}</span>
                        <button class="btn btn-primary" onclick="addToCart(${item.id})">
                            <i class="fas fa-plus me-1"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Filter menu items
function filterMenu(filterType, filterValue) {
  let filteredItems = menuData

  if (filterType === "category" && filterValue !== "all") {
    filteredItems = menuData.filter((item) => item.category === filterValue)
  } else if (filterType === "dietary") {
    filteredItems = menuData.filter((item) => item.dietary.includes(filterValue))
  } else if (filterType === "tags") {
    filteredItems = menuData.filter((item) => item.tags.includes(filterValue))
  }

  displayMenuItems(filteredItems)
}

// Display promotional images for empty cart
function displayEmptyCartImages() {
  return `
        <div class="row mb-4">
            <div class="col-md-4 mb-3">
                <img src="/placeholder.svg?height=150&width=200&text=Popular+Dishes+Await" 
                     alt="Popular dishes" class="img-fluid rounded shadow-sm">
                <p class="text-center mt-2 small text-muted">Popular Dishes</p>
            </div>
            <div class="col-md-4 mb-3">
                <img src="/placeholder.svg?height=150&width=200&text=Fresh+Daily+Specials" 
                     alt="Daily specials" class="img-fluid rounded shadow-sm">
                <p class="text-center mt-2 small text-muted">Daily Specials</p>
            </div>
            <div class="col-md-4 mb-3">
                <img src="/placeholder.svg?height=150&width=200&text=Chef+Recommendations" 
                     alt="Chef recommendations" class="img-fluid rounded shadow-sm">
                <p class="text-center mt-2 small text-muted">Chef's Choice</p>
            </div>
        </div>
    `
}

// Display cart items
function displayCartItems() {
  const container = document.getElementById("cart-items")
  if (!container) return

  if (cart.length === 0) {
    container.innerHTML = `
            <div class="empty-state text-center">
                <div class="mb-4">
                    <img src="/placeholder.svg?height=200&width=300&text=Delicious+Food+Awaits+You" 
                         alt="Delicious food awaits" class="img-fluid rounded shadow-lg mb-3" style="max-width: 300px;">
                </div>
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <h3>Your cart is empty</h3>
                <p class="text-muted mb-4">Add some delicious items from our menu!</p>
                ${displayEmptyCartImages()}
                <a href="menu.html" class="btn btn-primary btn-lg">
                    <i class="fas fa-utensils me-2"></i>Browse Menu
                </a>
            </div>
        `
    updateCartSummary()
    return
  }

  container.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item mb-3 p-3 bg-white rounded shadow-sm">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                </div>
                <div class="col-md-4">
                    <h5 class="mb-1">${item.name}</h5>
                    <p class="text-muted small mb-0">${item.description}</p>
                </div>
                <div class="col-md-2">
                    <span class="fw-bold text-success">$${item.price}</span>
                </div>
                <div class="col-md-3">
                    <div class="quantity-controls d-flex align-items-center">
                        <button class="btn btn-outline-secondary btn-sm quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="mx-3 fw-bold">${item.quantity}</span>
                        <button class="btn btn-outline-secondary btn-sm quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-1">
                    <button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${item.id})" title="Remove item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  updateCartSummary()
}

// Update cart summary
function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.085 // 8.5% tax
  const delivery = subtotal > 0 ? 5.0 : 0
  const total = subtotal + tax + delivery

  const subtotalElement = document.getElementById("subtotal")
  const taxElement = document.getElementById("tax")
  const deliveryElement = document.getElementById("delivery")
  const totalElement = document.getElementById("total")

  if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`
  if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`
  if (deliveryElement) deliveryElement.textContent = `$${delivery.toFixed(2)}`
  if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`

  // Disable place order button if cart is empty
  const placeOrderBtn = document.getElementById("place-order-btn")
  if (placeOrderBtn) {
    placeOrderBtn.disabled = cart.length === 0
  }
}

// Place order
function placeOrder() {
  if (cart.length === 0) return

  // Generate order ID
  const orderId = "BV" + Date.now().toString().slice(-6)

  // Show success modal
  const modal = document.getElementById("orderSuccessModal")
  document.getElementById("order-id").textContent = orderId
  modal.style.display = "block"

  // Clear cart
  cart = []
  localStorage.setItem("restaurantCart", JSON.stringify(cart))
  updateCartCount()

  // Refresh cart display after modal is hidden
  modal.addEventListener("hidden.bs.modal", () => {
    displayCartItems()
  })
}

// Form validation and submission
function validateForm(formId) {
  const form = document.getElementById(formId)
  if (!form) return false

  const inputs = form.querySelectorAll("input[required], select[required], textarea[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("is-invalid")
      isValid = false
    } else {
      input.classList.remove("is-invalid")
      input.classList.add("is-valid")
    }

    // Email validation
    if (input.type === "email" && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(input.value)) {
        input.classList.add("is-invalid")
        isValid = false
      }
    }

    // Phone validation
    if (input.type === "tel" && input.value) {
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
      if (!phoneRegex.test(input.value.replace(/\s/g, ""))) {
        input.classList.add("is-invalid")
        isValid = false
      }
    }

    // Date validation (must be today or future)
    if (input.type === "date" && input.value) {
      const selectedDate = new Date(input.value)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (selectedDate < today) {
        input.classList.add("is-invalid")
        isValid = false
      }
    }
  })

  return isValid
}

// Handle reservation form submission
function handleReservationSubmission(event) {
  event.preventDefault()

  if (!validateForm("reservation-form")) {
    return
  }

  // Generate reservation ID
  const reservationId = "RES" + Date.now().toString().slice(-6)

  // Get form data
  const formData = new FormData(event.target)
  const date = formData.get("date") || document.getElementById("date").value
  const time = formData.get("time") || document.getElementById("time").value
  const guests = formData.get("guests") || document.getElementById("guests").value

  // Format date and time
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

  // Show success modal
  const modal = document.getElementById("reservationSuccessModal")
  document.getElementById("reservation-id").textContent = reservationId
  document.getElementById("reservation-datetime").textContent = `${formattedDate} at ${formattedTime}`
  document.getElementById("reservation-guests").textContent = `${guests} ${guests === "1" ? "guest" : "guests"}`
  modal.style.display = "block"

  // Reset form
  event.target.reset()
  event.target.querySelectorAll(".is-valid").forEach((input) => {
    input.classList.remove("is-valid")
  })
}

// Handle contact form submission
function handleContactSubmission(event) {
  event.preventDefault()

  if (!validateForm("contact-form")) {
    return
  }

  // Show success modal
  const modal = document.getElementById("contactSuccessModal")
  modal.style.display = "block"

  // Reset form
  event.target.reset()
  event.target.querySelectorAll(".is-valid").forEach((input) => {
    input.classList.remove("is-valid")
  })
}

// Display category showcase images
function displayCategoryShowcase() {
  const showcase = document.getElementById("category-showcase")
  if (!showcase) return

  const categories = [
    {
      name: "Starters",
      image: "/placeholder.svg?height=150&width=200&text=Appetizing+Starters",
      description: "Begin your culinary journey",
    },
    {
      name: "Main Courses",
      image: "/placeholder.svg?height=150&width=200&text=Hearty+Main+Courses",
      description: "Satisfying and delicious",
    },
    {
      name: "Desserts",
      image: "/placeholder.svg?height=150&width=200&text=Sweet+Desserts",
      description: "Perfect sweet endings",
    },
    {
      name: "Beverages",
      image: "/placeholder.svg?height=150&width=200&text=Refreshing+Beverages",
      description: "Complement your meal",
    },
  ]

  showcase.innerHTML = categories
    .map(
      (category) => `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="category-card text-center">
                <img src="${category.image}" alt="${category.name}" class="img-fluid rounded shadow-sm mb-3">
                <h5 class="fw-bold">${category.name}</h5>
                <p class="text-muted small">${category.description}</p>
            </div>
        </div>
    `,
    )
    .join("")
}

// Initialize page functionality
document.addEventListener("DOMContentLoaded", () => {
  // Update cart count on page load
  updateCartCount()

  // Initialize based on current page
  const currentPage = window.location.pathname

  if (currentPage.includes("index.html") || currentPage === "/") {
    displayFeaturedDishes()
  }

  if (currentPage.includes("menu.html")) {
    displayMenuItems()
    displayCategoryShowcase()

    // Add filter event listeners
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        // Update active button
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"))
        this.classList.add("active")

        // Filter menu
        const filter = this.dataset.filter
        if (filter === "all") {
          displayMenuItems()
        } else if (["starters", "mains", "desserts", "beverages"].includes(filter)) {
          filterMenu("category", filter)
        } else if (["veg", "non-veg"].includes(filter)) {
          filterMenu("dietary", filter)
        } else if (["popular", "new"].includes(filter)) {
          filterMenu("tags", filter)
        }
      })
    })
  }

  if (currentPage.includes("cart.html")) {
    displayCartItems()

    // Add place order event listener
    const placeOrderBtn = document.getElementById("place-order-btn")
    if (placeOrderBtn) {
      placeOrderBtn.addEventListener("click", placeOrder)
    }
  }

  if (currentPage.includes("reservation.html")) {
    // Set minimum date to today
    const dateInput = document.getElementById("date")
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0]
      dateInput.min = today
    }

    // Add form submission event listener
    const reservationForm = document.getElementById("reservation-form")
    if (reservationForm) {
      reservationForm.addEventListener("submit", handleReservationSubmission)
    }
  }

  if (currentPage.includes("contact.html")) {
    // Add form submission event listener
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", handleContactSubmission)
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Navbar background change on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(26, 26, 26, 0.98)"
    } else {
      navbar.style.background = "rgba(26, 26, 26, 0.95)"
    }
  })
})

// Add CSS animations for notifications
const style = document.createElement("style")
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
