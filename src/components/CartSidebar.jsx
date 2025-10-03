// components/CartSidebar.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import PaymentSection from './PaymentSection'

const CartSidebar = () => {
  const { cart, toggleCart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()
  const [showPayment, setShowPayment] = useState(false)

  const handleCheckout = () => {
    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    setShowPayment(false)
    clearCart()
  }

  const handleBackToCart = () => {
    setShowPayment(false)
  }

  return (
    <AnimatePresence>
      {cart.isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              {showPayment ? (
                <button
                  onClick={handleBackToCart}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
              ) : (
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <ShoppingBag size={20} />
                  Shopping Cart ({cart.items.length})
                </h2>
              )}
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {showPayment ? (
                <PaymentSection 
                  onPaymentSuccess={handlePaymentSuccess}
                  onBack={handleBackToCart}
                  totalAmount={getCartTotal()}
                />
              ) : (
                <CartContent
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  getCartTotal={getCartTotal}
                  clearCart={clearCart}
                  onCheckout={handleCheckout}
                />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Separate component for cart content
const CartContent = ({ cart, removeFromCart, updateQuantity, getCartTotal, clearCart, onCheckout }) => (
  <>
    {/* Cart Items */}
    <div className="flex-1 overflow-y-auto p-4">
      {cart.items.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium text-sm">{item.name}</h3>
                <p className="text-blue-600 font-semibold">PKR {item.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-1 hover:bg-red-100 text-red-600 rounded"
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>

    {/* Footer */}
    {cart.items.length > 0 && (
      <div className="border-t p-4 space-y-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>PKR {getCartTotal().toLocaleString()}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={clearCart}
            className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Clear Cart
          </button>
          <button 
            onClick={onCheckout}
            className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    )}
  </>
)

export default CartSidebar