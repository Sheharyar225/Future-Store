// components/PaymentSection.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Smartphone, Building, CheckCircle, Shield } from 'lucide-react'

const PaymentSection = ({ onPaymentSuccess, onBack, totalAmount }) => {
  const [selectedMethod, setSelectedMethod] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay with your credit or debit card'
    },
    {
      id: 'jazzcash',
      name: 'JazzCash',
      icon: Smartphone,
      description: 'Pay using your JazzCash wallet'
    },
    {
      id: 'easypaisa',
      name: 'EasyPaisa',
      icon: Smartphone,
      description: 'Pay using your EasyPaisa account'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building,
      description: 'Direct bank transfer'
    }
  ]

  const handlePayment = async () => {
    if (!selectedMethod) return

    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      
      // Call success callback after showing success message
      setTimeout(() => {
        onPaymentSuccess()
      }, 2000)
    }, 3000)
  }

  if (isSuccess) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6"
        >
          <CheckCircle size={80} className="text-green-500 mx-auto" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-800 mb-4"
        >
          Payment Successful!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-2"
        >
          Thank you for confirming your order
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600"
        >
          Your order is on the way!
        </motion.p>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Payment Method</h2>
        <p className="text-gray-600 text-sm mt-1">Choose your preferred payment method</p>
      </div>

      {/* Total Amount */}
      <div className="p-4 bg-blue-50 border-b">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Total Amount:</span>
          <span className="text-2xl font-bold text-blue-600">
            PKR {totalAmount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon
            return (
              <motion.div
                key={method.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedMethod === method.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    selectedMethod === method.id ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <Icon 
                      size={24} 
                      className={selectedMethod === method.id ? 'text-blue-600' : 'text-gray-600'} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{method.name}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === method.id
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedMethod === method.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Shield size={20} className="text-green-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-green-800">Secure Payment</p>
              <p className="text-xs text-green-600 mt-1">
                Your payment information is encrypted and secure. We don't store your card details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Footer */}
      <div className="border-t p-4 space-y-3">
        <button
          onClick={handlePayment}
          disabled={!selectedMethod || isProcessing}
          className={`w-full py-4 px-6 rounded-lg font-semibold transition-all ${
            !selectedMethod || isProcessing
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processing Payment...
            </div>
          ) : (
            `Pay PKR ${totalAmount.toLocaleString()}`
          )}
        </button>
        
        <button
          onClick={onBack}
          disabled={isProcessing}
          className="w-full py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          Back to Cart
        </button>
      </div>
    </div>
  )
}

export default PaymentSection