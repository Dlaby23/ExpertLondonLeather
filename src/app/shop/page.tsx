'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ShopPage = () => {
  const allProducts = [
    // Men's Products
    {
      id: 1,
      name: 'Executive Briefcase',
      category: 'Business',
      gender: 'Men',
      price: '£450',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional leather briefcase crafted for the modern businessman.',
      featured: true,
    },
    {
      id: 2,
      name: 'Vintage Messenger',
      category: 'Casual',
      gender: 'Unisex',
      price: '£320',
      originalPrice: '£380',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Classic messenger bag perfect for everyday adventures.',
      featured: false,
    },
    {
      id: 3,
      name: 'Gentleman\'s Wallet',
      category: 'Accessories',
      gender: 'Men',
      price: '£95',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Handcrafted wallet with RFID protection and premium card slots.',
      featured: false,
    },
    {
      id: 4,
      name: 'Travel Duffle',
      category: 'Travel',
      gender: 'Unisex',
      price: '£580',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spacious duffle bag designed for weekend getaways.',
      featured: true,
    },
    {
      id: 5,
      name: 'Designer Handbag',
      category: 'Casual',
      gender: 'Women',
      price: '£395',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant designer handbag with gold hardware and premium leather finish.',
      featured: true,
    },
    {
      id: 6,
      name: 'Classic Tote',
      category: 'Casual',
      gender: 'Women',
      price: '£280',
      originalPrice: '£320',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant tote bag perfect for shopping and daily essentials.',
      featured: false,
    },
    {
      id: 7,
      name: 'Laptop Portfolio',
      category: 'Business',
      gender: 'Unisex',
      price: '£295',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Sleek portfolio with padded laptop compartment.',
      featured: false,
    },
    {
      id: 8,
      name: 'Evening Clutch',
      category: 'Formal',
      gender: 'Women',
      price: '£215',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant evening clutch with detachable chain strap and silk lining.',
      featured: false,
    },
    {
      id: 9,
      name: 'Crossbody Bag',
      category: 'Casual',
      gender: 'Women',
      price: '£185',
      originalPrice: '£225',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Compact crossbody bag perfect for hands-free daily adventures.',
      featured: false,
    },
    {
      id: 10,
      name: 'Money Clip',
      category: 'Accessories',
      gender: 'Men',
      price: '£85',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Minimalist money clip with premium leather backing.',
      featured: false,
    },
    {
      id: 11,
      name: 'Weekend Holdall',
      category: 'Travel',
      gender: 'Men',
      price: '£525',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Perfect companion for short trips and adventures.',
      featured: false,
    },
    {
      id: 12,
      name: 'Classic Belt',
      category: 'Accessories',
      gender: 'Unisex',
      price: '£125',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Timeless leather belt with solid brass buckle.',
      featured: false,
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedGender, setSelectedGender] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['All', 'Business', 'Casual', 'Travel', 'Accessories', 'Formal']
  const genders = ['All', 'Men', 'Women', 'Unisex']

  let filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
    const genderMatch = selectedGender === 'All' || product.gender === selectedGender
    return categoryMatch && genderMatch
  })

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => parseFloat(a.price.replace('£', '')) - parseFloat(b.price.replace('£', '')))
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => parseFloat(b.price.replace('£', '')) - parseFloat(a.price.replace('£', '')))
  } else if (sortBy === 'featured') {
    filteredProducts.sort((a, b) => b.featured - a.featured)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Our Complete Collection
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Explore our entire range of handcrafted leather goods. From business essentials to casual accessories, 
              find the perfect piece that combines traditional craftsmanship with contemporary style.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            {/* Filters */}
            <div className="bg-brand-light rounded-xl p-6 mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    {genders.map(gender => (
                      <option key={gender} value={gender}>{gender}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              <div className="flex gap-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
                >
                  <div className="relative aspect-square bg-brand-light overflow-hidden">
                    {product.featured && (
                      <div className="absolute top-3 left-3 z-10 bg-brand-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                    {product.originalPrice && (
                      <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        Sale
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
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span className="px-2 py-1 bg-brand-light rounded text-brand-primary font-medium">
                        {product.category}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {product.gender}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-brand-primary">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" style={{backgroundColor: '#8d5c4b'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#7a4f3e'} onMouseLeave={(e) => e.target.style.backgroundColor = '#8d5c4b'}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedGender('All')
                  }}
                  className="mt-4 px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ShopPage