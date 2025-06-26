'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const MenPage = () => {
  const menProducts = [
    {
      id: 1,
      name: 'Executive Briefcase',
      category: 'Business',
      price: '£450',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional leather briefcase crafted for the modern businessman.',
    },
    {
      id: 2,
      name: 'Vintage Messenger',
      category: 'Casual',
      price: '£320',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Classic messenger bag perfect for everyday adventures.',
    },
    {
      id: 3,
      name: 'Gentleman\'s Wallet',
      category: 'Accessories',
      price: '£95',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Handcrafted wallet with RFID protection and premium card slots.',
    },
    {
      id: 4,
      name: 'Travel Duffle',
      category: 'Travel',
      price: '£580',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spacious duffle bag designed for weekend getaways.',
    },
    {
      id: 5,
      name: 'Laptop Portfolio',
      category: 'Business',
      price: '£295',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Sleek portfolio with padded laptop compartment.',
    },
    {
      id: 6,
      name: 'Money Clip',
      category: 'Accessories',
      price: '£85',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Minimalist money clip with premium leather backing.',
    },
    {
      id: 7,
      name: 'Weekender Holdall',
      category: 'Travel',
      price: '£525',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Perfect companion for short trips and adventures.',
    },
    {
      id: 8,
      name: 'Classic Belt',
      category: 'Accessories',
      price: '£125',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Timeless leather belt with solid brass buckle.',
    },
    {
      id: 9,
      name: 'Office Organizer',
      category: 'Business',
      price: '£145',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Desktop organizer for the professional workspace.',
    },
  ]

  const categories = ['All', 'Business', 'Casual', 'Travel', 'Accessories']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All' 
    ? menProducts 
    : menProducts.filter(product => product.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Men&apos;s Collection
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Discover our curated selection of premium leather goods designed specifically for the modern gentleman. 
              Each piece combines traditional craftsmanship with contemporary style.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Crafted for the Modern Gentleman
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our men&apos;s collection represents the pinnacle of leather craftsmanship, designed for those who 
                  appreciate quality and attention to detail. From boardroom briefcases to weekend travel bags, 
                  each piece is carefully constructed to meet the demands of contemporary life.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every item in our men&apos;s range is handcrafted using traditional techniques passed down through 
                  generations, ensuring that your leather goods will age beautifully and serve you for years to come.
                </p>
              </div>
              <div className="aspect-square bg-brand-light rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Master craftsman working on leather"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-6 py-2 rounded-full transition-all duration-200"
                  style={{
                    border: '1px solid #a5765b',
                    backgroundColor: selectedCategory === category ? '#8d5c4b' : 'transparent',
                    color: selectedCategory === category ? 'white' : '#8d5c4b'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      const target = e.target as HTMLButtonElement
                      target.style.backgroundColor = '#8d5c4b'
                      target.style.color = 'white'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      const target = e.target as HTMLButtonElement
                      target.style.backgroundColor = 'transparent'
                      target.style.color = '#8d5c4b'
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
                >
                  <div className="aspect-square bg-brand-light overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-sm text-brand-primary font-medium mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl font-bold text-brand-primary">
                        {product.price}
                      </span>
                      <button className="text-white px-6 py-2 rounded-lg font-medium transition-colors" style={{backgroundColor: '#8d5c4b'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#7a4f3e'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#8d5c4b'}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-cream">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Why Men Choose Expert London
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Professional Quality
                </h3>
                <p className="text-gray-600">
                  Every piece is designed to meet the high standards of professional life, 
                  from business meetings to international travel.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Timeless Style
                </h3>
                <p className="text-gray-600">
                  Classic designs that never go out of fashion, ensuring your investment 
                  remains stylish for decades to come.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Lifetime Durability
                </h3>
                <p className="text-gray-600">
                  Built to last a lifetime with proper care, our leather goods improve 
                  with age and use, developing a unique patina.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default MenPage