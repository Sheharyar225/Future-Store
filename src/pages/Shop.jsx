// pages/Shop.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Grid, List, Search, X, ChevronDown, Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'

// Extended products data
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    image: "https://rmgtraders.pk/wp-content/uploads/2025/04/d5b13bfc651162254a9da275269013e0.webp",
    rating: 4.5,
    reviews: 124,
    category: "electronics",
    tags: ["wireless", "audio", "premium"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking with heart rate monitor and GPS functionality.",
    price: 21999,
    originalPrice: 25999,
    discount: 15,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 89,
    category: "electronics",
    tags: ["fitness", "smart", "health"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "4K Ultra HD Smart TV",
    description: "55-inch 4K Smart TV with HDR and built-in streaming apps.",
    price: 85999,
    originalPrice: 99999,
    discount: 14,
    image: "https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/product/tv/c/c645/id-image/2.jpg",
    rating: 4.7,
    reviews: 203,
    category: "electronics",
    tags: ["tv", "entertainment", "smart"],
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Gaming Laptop Pro",
    description: "High-performance gaming laptop with RTX graphics and 144Hz display.",
    price: 189999,
    image: "https://laptopmall.pk/storage/media/pSg56fVTSIoEFACf70fAICLgK9Nig9KN5Ej89qgF.jpg",
    rating: 4.8,
    reviews: 156,
    category: "computers",
    tags: ["gaming", "laptop", "performance"],
    inStock: false,
    featured: true
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 67,
    category: "accessories",
    tags: ["charging", "wireless", "accessories"],
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium sound quality.",
    price: 12999,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 98,
    category: "electronics",
    tags: ["smart", "audio", "home"],
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Professional Camera",
    description: "DSLR camera with 24MP sensor and 4K video recording.",
    price: 124999,
    originalPrice: 149999,
    discount: 17,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 78,
    category: "electronics",
    tags: ["camera", "photography", "professional"],
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with customizable keys and fast response.",
    price: 8999,
    originalPrice: 11999,
    discount: 25,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 145,
    category: "accessories",
    tags: ["keyboard", "gaming", "mechanical"],
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking and long battery.",
    price: 4599,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    rating: 4.1,
    reviews: 92,
    category: "accessories",
    tags: ["mouse", "wireless", "ergonomic"],
    inStock: true,
    featured: false
  }
]

const categories = [
  { value: 'all', label: 'All Categories', count: products.length },
  { value: 'electronics', label: 'Electronics', count: products.filter(p => p.category === 'electronics').length },
  { value: 'computers', label: 'Computers', count: products.filter(p => p.category === 'computers').length },
  { value: 'accessories', label: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
]

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-5000', label: 'Under PKR 5,000' },
  { value: '5000-15000', label: 'PKR 5,000 - 15,000' },
  { value: '15000-50000', label: 'PKR 15,000 - 50,000' },
  { value: '50000+', label: 'Over PKR 50,000' }
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'name', label: 'Name: A to Z' },
  { value: 'newest', label: 'Newest First' }
]

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [showInStock, setShowInStock] = useState(false)
  const [showFeatured, setShowFeatured] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Filter and sort products
  useEffect(() => {
    let result = [...products]

    // Search filter
    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory)
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      switch (selectedPriceRange) {
        case '0-5000':
          result = result.filter(product => product.price <= 5000)
          break
        case '5000-15000':
          result = result.filter(product => product.price > 5000 && product.price <= 15000)
          break
        case '15000-50000':
          result = result.filter(product => product.price > 15000 && product.price <= 50000)
          break
        case '50000+':
          result = result.filter(product => product.price > 50000)
          break
      }
    }

    // In stock filter
    if (showInStock) {
      result = result.filter(product => product.inStock)
    }

    // Featured filter
    if (showFeatured) {
      result = result.filter(product => product.featured)
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      case 'featured':
      default:
        result.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? -1 : 1)
        break
    }

    setFilteredProducts(result)
  }, [searchQuery, selectedCategory, selectedPriceRange, showInStock, showFeatured, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedPriceRange('all')
    setShowInStock(false)
    setShowFeatured(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Shop</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of premium products with the latest technology
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products by name, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <Filter className="w-5 h-5" />
              Filters
              {(selectedCategory !== 'all' || selectedPriceRange !== 'all' || showInStock || showFeatured) && (
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              )}
            </button>

            {/* View Mode Toggle */}
            <div className="flex bg-white rounded-xl shadow-sm p-1 border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Results Count */}
            <div className="flex items-center px-4 py-3 text-gray-600 bg-white rounded-xl border border-gray-200">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="flex gap-4 w-full lg:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:w-auto"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Clear Filters */}
            {(selectedCategory !== 'all' || selectedPriceRange !== 'all' || showInStock || showFeatured || searchQuery) && (
              <button
                onClick={clearFilters}
                className="bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900 whitespace-nowrap"
              >
                Clear Filters
              </button>
            )}
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block w-80 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                {(selectedCategory !== 'all' || selectedPriceRange !== 'all' || showInStock || showFeatured) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <span>{category.label}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setSelectedPriceRange(range.value)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                        selectedPriceRange === range.value
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Filters */}
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showInStock}
                    onChange={(e) => setShowInStock(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">In Stock Only</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showFeatured}
                    onChange={(e) => setShowFeatured(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Featured Products</span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid grid-cols-1'
              } gap-6`}
            >
              <AnimatePresence>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl z-50 flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                          selectedCategory === category.value
                            ? 'bg-blue-50 text-blue-600 border border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                        }`}
                      >
                        <span>{category.label}</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <button
                        key={range.value}
                        onClick={() => setSelectedPriceRange(range.value)}
                        className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                          selectedPriceRange === range.value
                            ? 'bg-blue-50 text-blue-600 border border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showInStock}
                      onChange={(e) => setShowInStock(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">In Stock Only</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showFeatured}
                      onChange={(e) => setShowFeatured(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Featured Products</span>
                  </label>
                </div>
              </div>

              <div className="border-t p-4">
                <div className="flex gap-3">
                  <button
                    onClick={clearFilters}
                    className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Shop