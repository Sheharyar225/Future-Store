// components/PaymentSuccess.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const PaymentSuccess = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const { clearCart, getCartTotal } = useCart()

  // Simulate payment success - in real app, this would be triggered by payment confirmation
  const simulatePayment = () => {
    if (getCartTotal() > 0) {
      setShowSuccess(true)
      clearCart()
      setTimeout(() => setShowSuccess(false), 5000)
    }
  }

  return (
    <>
      {/* Payment Button - You can move this to cart sidebar */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={simulatePayment}
        className="fixed bottom-6 right-6 z-30 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center gap-2"
      >
        <Check size={20} />
        Test Payment
      </motion.button>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="text-green-600" size={40} />
                </motion.div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Payment Successful!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSuccess(false)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
                >
                  <X size={20} />
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default PaymentSuccess