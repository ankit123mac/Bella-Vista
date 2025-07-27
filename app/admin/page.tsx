"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"

interface ImageFile {
  id: string
  file: File
  preview: string
  name: string
  size: number
  type: string
  category: string
  caption: string
  alt: string
  uploadDate: Date
  dimensions?: { width: number; height: number }
}

interface CropSettings {
  x: number
  y: number
  width: number
  height: number
}

export default function AdminImageManager() {
  const [images, setImages] = useState<ImageFile[]>([])
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [currentCategory, setCurrentCategory] = useState("all")
  const [isUploading, setIsUploading] = useState(false)
  const [editingImage, setEditingImage] = useState<ImageFile | null>(null)
  const [cropSettings, setCropSettings] = useState<CropSettings>({ x: 0, y: 0, width: 100, height: 100 })
  const [showCropModal, setShowCropModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const categories = [
    { value: "all", label: "All Images" },
    { value: "menu", label: "Menu Items" },
    { value: "restaurant", label: "Restaurant" },
    { value: "events", label: "Events" },
    { value: "team", label: "Team" },
    { value: "gallery", label: "Gallery" },
  ]

  // Image optimization and compression
  const compressImage = useCallback((file: File, quality = 0.8): Promise<File> => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const img = new window.Image()

      img.onload = () => {
        // Calculate optimal dimensions
        const maxWidth = 1920
        const maxHeight = 1080
        let { width, height } = img

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height)
          width *= ratio
          height *= ratio
        }

        canvas.width = width
        canvas.height = height

        // Draw and compress
        ctx?.drawImage(img, 0, 0, width, height)
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const compressedFile = new File([blob], file.name, {
                type: "image/jpeg",
                lastModified: Date.now(),
              })
              resolve(compressedFile)
            }
          },
          "image/jpeg",
          quality,
        )
      }

      img.src = URL.createObjectURL(file)
    })
  }, [])

  // Generate responsive image sizes
  const generateResponsiveSizes = useCallback((file: File): Promise<{ [key: string]: string }> => {
    return new Promise((resolve) => {
      const sizes = { thumbnail: 150, small: 300, medium: 600, large: 1200 }
      const results: { [key: string]: string } = {}
      let completed = 0

      Object.entries(sizes).forEach(([sizeName, maxSize]) => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        const img = new window.Image()

        img.onload = () => {
          const ratio = Math.min(maxSize / img.width, maxSize / img.height)
          const width = img.width * ratio
          const height = img.height * ratio

          canvas.width = width
          canvas.height = height
          ctx?.drawImage(img, 0, 0, width, height)

          results[sizeName] = canvas.toDataURL("image/jpeg", 0.8)
          completed++

          if (completed === Object.keys(sizes).length) {
            resolve(results)
          }
        }

        img.src = URL.createObjectURL(file)
      })
    })
  }, [])

  // Handle file upload
  const handleFileUpload = useCallback(
    async (files: FileList) => {
      setIsUploading(true)
      const newImages: ImageFile[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]

        // Validate file type
        if (!file.type.startsWith("image/")) {
          alert(`${file.name} is not a valid image file`)
          continue
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
          alert(`${file.name} is too large. Maximum size is 10MB`)
          continue
        }

        try {
          // Compress image
          const compressedFile = await compressImage(file)

          // Get image dimensions
          const img = new window.Image()
          const dimensions = await new Promise<{ width: number; height: number }>((resolve) => {
            img.onload = () => resolve({ width: img.width, height: img.height })
            img.src = URL.createObjectURL(compressedFile)
          })

          const imageFile: ImageFile = {
            id: `img_${Date.now()}_${i}`,
            file: compressedFile,
            preview: URL.createObjectURL(compressedFile),
            name: file.name,
            size: compressedFile.size,
            type: compressedFile.type,
            category: "gallery",
            caption: "",
            alt: file.name.replace(/\.[^/.]+$/, ""),
            uploadDate: new Date(),
            dimensions,
          }

          newImages.push(imageFile)
        } catch (error) {
          console.error(`Error processing ${file.name}:`, error)
        }
      }

      setImages((prev) => [...prev, ...newImages])
      setIsUploading(false)
    },
    [compressImage],
  )

  // Handle drag and drop
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const files = e.dataTransfer.files
      if (files.length > 0) {
        handleFileUpload(files)
      }
    },
    [handleFileUpload],
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  // Crop image
  const cropImage = useCallback((imageFile: ImageFile, cropSettings: CropSettings): Promise<File> => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const img = new window.Image()

      img.onload = () => {
        canvas.width = cropSettings.width
        canvas.height = cropSettings.height

        ctx?.drawImage(
          img,
          cropSettings.x,
          cropSettings.y,
          cropSettings.width,
          cropSettings.height,
          0,
          0,
          cropSettings.width,
          cropSettings.height,
        )

        canvas.toBlob((blob) => {
          if (blob) {
            const croppedFile = new File([blob], `cropped_${imageFile.name}`, {
              type: "image/jpeg",
              lastModified: Date.now(),
            })
            resolve(croppedFile)
          }
        }, "image/jpeg")
      }

      img.src = imageFile.preview
    })
  }, [])

  // Filter images
  const filteredImages = images.filter((img) => {
    const matchesCategory = currentCategory === "all" || img.category === currentCategory
    const matchesSearch =
      img.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.caption.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Delete selected images
  const deleteSelectedImages = useCallback(() => {
    if (selectedImages.length === 0) return

    if (confirm(`Delete ${selectedImages.length} selected image(s)?`)) {
      setImages((prev) => prev.filter((img) => !selectedImages.includes(img.id)))
      setSelectedImages([])
    }
  }, [selectedImages])

  // Update image details
  const updateImageDetails = useCallback((imageId: string, updates: Partial<ImageFile>) => {
    setImages((prev) => prev.map((img) => (img.id === imageId ? { ...img, ...updates } : img)))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🍽️</span>
              <span className="text-xl font-bold text-yellow-500">Bella Vista Admin</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-yellow-500">
                Back to Website
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Image Management</h1>
          <p className="text-gray-600">Upload, organize, and manage your restaurant images</p>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yellow-500 transition-colors"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl font-semibold mb-2">Upload Images</h3>
            <p className="text-gray-600 mb-4">Drag and drop images here or click to browse</p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              {isUploading ? "Uploading..." : "Choose Files"}
            </button>
            <p className="text-sm text-gray-500 mt-2">Supported formats: JPG, PNG, GIF, WebP (Max 10MB per file)</p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <select
                value={currentCategory}
                onChange={(e) => setCurrentCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{selectedImages.length} selected</span>
              {selectedImages.length > 0 && (
                <button
                  onClick={deleteSelectedImages}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Delete Selected
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <Image
                  src={image.preview || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <input
                    type="checkbox"
                    checked={selectedImages.includes(image.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedImages((prev) => [...prev, image.id])
                      } else {
                        setSelectedImages((prev) => prev.filter((id) => id !== image.id))
                      }
                    }}
                    className="w-4 h-4 text-yellow-500 rounded focus:ring-yellow-500"
                  />
                </div>
                <div className="absolute top-2 right-2 flex space-x-1">
                  <button
                    onClick={() => {
                      setEditingImage(image)
                      setShowCropModal(true)
                    }}
                    className="bg-black bg-opacity-50 text-white p-1 rounded hover:bg-opacity-70"
                    title="Crop Image"
                  >
                    ✂️
                  </button>
                </div>
              </div>

              <div className="p-4">
                <input
                  type="text"
                  value={image.caption}
                  onChange={(e) => updateImageDetails(image.id, { caption: e.target.value })}
                  placeholder="Add caption..."
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded mb-2 focus:ring-1 focus:ring-yellow-500"
                />

                <select
                  value={image.category}
                  onChange={(e) => updateImageDetails(image.id, { category: e.target.value })}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded mb-2 focus:ring-1 focus:ring-yellow-500"
                >
                  {categories.slice(1).map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>

                <div className="text-xs text-gray-500 space-y-1">
                  <div>Size: {(image.size / 1024).toFixed(1)} KB</div>
                  <div>
                    Dimensions: {image.dimensions?.width} × {image.dimensions?.height}
                  </div>
                  <div>Type: {image.type}</div>
                </div>

                <div className="mt-3 flex justify-between items-center">
                  <button
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = image.preview
                      link.download = image.name
                      link.click()
                    }}
                    className="text-yellow-500 hover:text-yellow-600 text-sm"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => {
                      if (confirm("Delete this image?")) {
                        setImages((prev) => prev.filter((img) => img.id !== image.id))
                      }
                    }}
                    className="text-red-500 hover:text-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🖼️</div>
            <h3 className="text-xl font-semibold mb-2">No images found</h3>
            <p className="text-gray-600">
              {images.length === 0 ? "Upload some images to get started" : "Try adjusting your filters"}
            </p>
          </div>
        )}
      </div>

      {/* Crop Modal */}
      {showCropModal && editingImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Crop Image</h3>

            <div className="mb-4">
              <Image
                src={editingImage.preview || "/placeholder.svg"}
                alt={editingImage.alt}
                width={600}
                height={400}
                className="w-full max-h-96 object-contain border rounded"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">X Position</label>
                <input
                  type="number"
                  value={cropSettings.x}
                  onChange={(e) => setCropSettings((prev) => ({ ...prev, x: Number.parseInt(e.target.value) || 0 }))}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Y Position</label>
                <input
                  type="number"
                  value={cropSettings.y}
                  onChange={(e) => setCropSettings((prev) => ({ ...prev, y: Number.parseInt(e.target.value) || 0 }))}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Width</label>
                <input
                  type="number"
                  value={cropSettings.width}
                  onChange={(e) =>
                    setCropSettings((prev) => ({ ...prev, width: Number.parseInt(e.target.value) || 100 }))
                  }
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Height</label>
                <input
                  type="number"
                  value={cropSettings.height}
                  onChange={(e) =>
                    setCropSettings((prev) => ({ ...prev, height: Number.parseInt(e.target.value) || 100 }))
                  }
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowCropModal(false)
                  setEditingImage(null)
                }}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  if (editingImage) {
                    try {
                      const croppedFile = await cropImage(editingImage, cropSettings)
                      const croppedPreview = URL.createObjectURL(croppedFile)

                      updateImageDetails(editingImage.id, {
                        file: croppedFile,
                        preview: croppedPreview,
                        name: `cropped_${editingImage.name}`,
                        size: croppedFile.size,
                      })

                      setShowCropModal(false)
                      setEditingImage(null)
                    } catch (error) {
                      console.error("Error cropping image:", error)
                      alert("Error cropping image. Please try again.")
                    }
                  }
                }}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Apply Crop
              </button>
            </div>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
