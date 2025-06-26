'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const GiftCardPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedDesign, setSelectedDesign] = useState('classic')
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    senderEmail: '',
    message: '',
    deliveryDate: '',
  })

  const predefinedAmounts = [50, 100, 200, 500]
  
  const designs = [
    {
      id: 'classic',
      name: 'Classic Leather',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'workshop',
      name: 'Workshop Scene',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'products',
      name: 'Product Collection',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'heritage',
      name: 'Heritage Style',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCustomAmount(value)
    if (value) {
      setSelectedAmount(parseInt(value) || 0)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const giftCardData = {
      amount: selectedAmount,
      design: selectedDesign,
      ...formData
    }
    console.log('Gift card order:', giftCardData)
  }

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Gift Cards
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Give the gift of exceptional craftsmanship. Our gift cards allow your loved ones to choose 
              from our complete collection of premium leather goods.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Gift Card Preview */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                    Gift Card Preview
                  </h2>
                  <div className="relative aspect-[3/2] bg-gradient-to-br from-brand-primary to-brand-medium rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src={designs.find(d => d.id === selectedDesign)?.image || designs[0].image}
                        alt="Gift card design"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative p-8 h-full flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-2xl font-serif font-bold mb-2">Expert London Leather</h3>
                        <p className="text-brand-cream">Premium Leather Goods</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold mb-2">£{finalAmount}</div>
                        <div className="text-brand-cream">Gift Card</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-brand-light rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Gift Card Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Valid for 3 years from purchase date</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Can be used online and in-store</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Redeemable for any product or service</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Balance can be checked online anytime</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Free delivery via email or post</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Gift Card Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Amount Selection */}
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                      Select Amount
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`p-4 rounded-lg border-2 font-semibold transition-colors ${
                            selectedAmount === amount && !customAmount
                              ? 'border-brand-primary bg-brand-primary text-white'
                              : 'border-gray-300 text-gray-700 hover:border-brand-primary'
                          }`}
                        >
                          £{amount}
                        </button>
                      ))}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Or enter custom amount (£25 - £1000)
                      </label>
                      <input
                        type="number"
                        min="25"
                        max="1000"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter amount"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Design Selection */}
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                      Choose Design
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {designs.map((design) => (
                        <button
                          key={design.id}
                          type="button"
                          onClick={() => setSelectedDesign(design.id)}
                          className={`relative aspect-[3/2] rounded-lg overflow-hidden border-2 transition-colors ${
                            selectedDesign === design.id
                              ? 'border-brand-primary'
                              : 'border-gray-300 hover:border-brand-primary'
                          }`}
                        >
                          <Image
                            src={design.image}
                            alt={design.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white font-medium text-sm">{design.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recipient Information */}
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                      Recipient Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Recipient Name
                        </label>
                        <input
                          type="text"
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Recipient Email
                        </label>
                        <input
                          type="email"
                          name="recipientEmail"
                          value={formData.recipientEmail}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sender Information */}
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                      Your Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="senderName"
                          value={formData.senderName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="senderEmail"
                          value={formData.senderEmail}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message and Delivery */}
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Personal Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        placeholder="Write a personal message for the recipient..."
                      ></textarea>
                      <p className="text-sm text-gray-500 mt-1">
                        {formData.message.length}/500 characters
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Date (Optional)
                      </label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Leave blank to send immediately
                      </p>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-brand-light rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Gift Card Amount:</span>
                        <span className="font-semibold">£{finalAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Design:</span>
                        <span>{designs.find(d => d.id === selectedDesign)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery:</span>
                        <span>Free via Email</span>
                      </div>
                      <div className="border-t border-gray-300 pt-2 mt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-brand-primary">£{finalAmount}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={finalAmount < 25}
                    className="w-full py-4 bg-brand-primary text-white rounded-lg font-semibold text-lg hover:bg-brand-primary/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Purchase Gift Card - £{finalAmount}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-cream">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How long are gift cards valid?</h3>
                <p className="text-gray-600">Our gift cards are valid for 3 years from the date of purchase, giving recipients plenty of time to find their perfect leather goods.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can gift cards be used for custom orders?</h3>
                <p className="text-gray-600">Yes, gift cards can be used for any product or service, including our bespoke and customization services.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What if the order total is more than the gift card value?</h3>
                <p className="text-gray-600">The recipient can pay the difference using any accepted payment method. Multiple gift cards can also be combined.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I get a refund on a gift card?</h3>
                <p className="text-gray-600">Gift cards are non-refundable, but unused balances never expire and can always be used for future purchases.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default GiftCardPage