'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Shop1Page = () => {
  const [viewMode, setViewMode] = useState('list')

  const products = [
    {
      id: 1,
      name: 'Executive Briefcase',
      category: 'Business',
      price: '£450',
      rating: 4.8,
      reviews: 24,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional leather briefcase crafted for the modern businessman. Features multiple compartments, padded laptop section, and premium brass hardware.',
      features: ['Full-grain leather', 'Laptop compartment', 'Multiple pockets', 'Brass hardware'],
      inStock: true,
    },
    {
      id: 2,
      name: 'Vintage Messenger',
      category: 'Casual',
      price: '£320',
      rating: 4.6,
      reviews: 18,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Classic messenger bag perfect for everyday adventures. Handcrafted with vegetable-tanned leather and adjustable strap.',
      features: ['Vegetable-tanned leather', 'Adjustable strap', 'Vintage styling', 'Magnetic closure'],
      inStock: true,
    },
    {
      id: 3,
      name: 'Luxury Wallet',
      category: 'Accessories',
      price: '£95',
      rating: 4.9,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Handcrafted wallet with RFID protection and premium card slots. Made from the finest Italian leather.',
      features: ['RFID protection', '8 card slots', 'Italian leather', 'Coin pocket'],
      inStock: false,
    },
    {
      id: 4,
      name: 'Travel Duffle',
      category: 'Travel',
      price: '£580',
      rating: 4.7,
      reviews: 15,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spacious duffle bag designed for weekend getaways. Features reinforced handles and premium leather construction.',
      features: ['Large capacity', 'Reinforced handles', 'Side pockets', 'Detachable strap'],
      inStock: true,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Premium Collection
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Explore our curated selection of premium leather goods with detailed specifications and customer reviews.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">View:</span>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-brand-primary text-white' : 'bg-white text-gray-600'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-brand-primary text-white' : 'bg-white text-gray-600'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-gray-600">Showing {products.length} products</p>
            </div>

            {/* Products */}
            {viewMode === 'list' ? (
              <div className="space-y-8">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-8 p-8">
                      <div className="lg:col-span-1">
                        <div className="aspect-square bg-brand-light rounded-xl overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2 flex flex-col">
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-brand-light text-brand-primary text-sm font-medium rounded-full">
                              {product.category}
                            </span>
                            {!product.inStock && (
                              <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full">
                                Out of Stock
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                            {product.name}
                          </h3>
                          
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {product.description}
                          </p>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                            <ul className="grid grid-cols-2 gap-2">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span className="text-3xl font-bold text-brand-primary">
                            {product.price}
                          </span>
                          <div className="flex gap-3">
                            <Link
                              href={`/product/${product.id}`}
                              className="px-6 py-3 border border-brand-primary text-brand-primary rounded-lg font-medium hover:bg-brand-primary hover:text-white transition-colors"
                            >
                              View Details
                            </Link>
                            <button
                              disabled={!product.inStock}
                              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                product.inStock
                                  ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
                                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              }`}
                            >
                              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="relative aspect-square bg-brand-light overflow-hidden">
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                          <span className="text-white font-semibold">Out of Stock</span>
                        </div>
                      )}
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-brand-light text-brand-primary text-xs font-medium rounded">
                          {product.category}
                        </span>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-brand-primary">
                          {product.price}
                        </span>
                        <button
                          disabled={!product.inStock}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            product.inStock
                              ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Shop1Page