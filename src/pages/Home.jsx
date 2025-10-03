// pages/Home.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Zap, Shield, Truck } from 'lucide-react'
import ProductCard from '../components/ProductCard'

// Sample products data with Unsplash images
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
    reviews: 124
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
    reviews: 89
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
    reviews: 203
  },
  {
    id: 4,
    name: "Gaming Laptop Pro",
    description: "High-performance gaming laptop with RTX graphics and 144Hz display.",
    price: 189999,
    image: "https://laptopmall.pk/storage/media/pSg56fVTSIoEFACf70fAICLgK9Nig9KN5Ej89qgF.jpg",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    image: "https://images.unsplash.com/photo-1591290619618-904f6dd935e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.2,
    reviews: 67
  },
  {
    id: 6,
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium sound quality.",
    price: 12999,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 98
  }
]

const categories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
    count: "125+ Products"
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    count: "89+ Products"
  },
  {
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    count: "67+ Products"
  },
  {
    name: "Sports",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    count: "42+ Products"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    content: "The shopping experience was seamless and the product quality exceeded my expectations!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Frequent Shopper",
    content: "Fast delivery and excellent customer service. Will definitely shop here again!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Interior Designer",
    content: "Great selection of modern products with competitive prices. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 4
  }
]

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
          >
            Welcome to the
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent mt-2 sm:mt-4">
              Future of Shopping
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
          >
            Discover cutting-edge products with immersive shopping experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Link to="/shop" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center w-full sm:w-auto"
              >
                Start Shopping
                <ArrowRight size={18} className="sm:w-5" />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors w-full sm:w-auto"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-20 right-4 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full opacity-50"
        />
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Shop by Category</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Explore our wide range of categories and find exactly what you're looking for
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer h-48 sm:h-56 lg:h-64"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{category.name}</h3>
                  <p className="text-blue-200 text-sm sm:text-base">{category.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Zap className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Deal of the Day</h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-600">Don't miss out on today's exclusive offers</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur-lg opacity-25"></div>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=500&fit=crop"
                alt="Deal of the Day"
                className="relative rounded-xl sm:rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                <Zap size={14} className="sm:w-4" />
                24 Hours Only!
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Wireless Bluetooth Headphones</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Premium sound quality with active noise cancellation. Experience music like never before with 30-hour battery life.
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">PKR 12,999</span>
                <span className="text-xl sm:text-2xl text-gray-500 line-through">PKR 15,999</span>
                <span className="bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                  19% OFF
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-base sm:text-lg"
                >
                  Add to Cart
                </motion.button>
                <Link to="/product/1" className="sm:flex-1">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors w-full text-base sm:text-lg"
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck size={16} className="sm:w-5" />
                  Free Shipping
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={16} className="sm:w-5" />
                  2 Years Warranty
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trending Items */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Trending Now</h2>
            <p className="text-lg sm:text-xl text-gray-600">Most popular products this week</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto text-base sm:text-lg"
              >
                View All Products
                <ArrowRight size={18} className="sm:w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What Our Customers Say</h2>
            <p className="text-lg sm:text-xl text-gray-600">Join thousands of satisfied customers worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`sm:w-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home