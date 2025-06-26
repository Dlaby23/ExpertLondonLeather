'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const WomenPage = () => {
  const womenProducts = [
    {
      id: 1,
      name: 'Designer Handbag',
      category: 'Casual',
      price: '£395',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant designer handbag with gold hardware and premium leather finish.',
    },
    {
      id: 2,
      name: 'Classic Tote',
      category: 'Casual',
      price: '£280',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spacious tote bag perfect for work, shopping, and daily essentials.',
    },
    {
      id: 3,
      name: 'Evening Clutch',
      category: 'Formal',
      price: '£215',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Sophisticated evening clutch with detachable chain strap and silk lining.',
    },
    {
      id: 4,
      name: 'Crossbody Bag',
      category: 'Casual',
      price: '£185',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Compact crossbody bag perfect for hands-free daily adventures.',
    },
    {
      id: 5,
      name: 'Vintage Satchel',
      category: 'Business',
      price: '£345',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional satchel with laptop compartment and organized interior.',
    },
    {
      id: 6,
      name: 'Mini Backpack',
      category: 'Casual',
      price: '£225',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Stylish mini backpack combining fashion with everyday functionality.',
    },
    {
      id: 7,
      name: 'Travel Purse',
      category: 'Travel',
      price: '£165',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Secure travel purse with RFID protection and multiple compartments.',
    },
    {
      id: 8,
      name: 'Statement Wallet',
      category: 'Accessories',
      price: '£125',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant wallet with premium card slots and zippered coin compartment.',
    },
    {
      id: 9,
      name: 'Shoulder Bag',
      category: 'Business',
      price: '£285',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional shoulder bag with adjustable strap and organized pockets.',
    },
  ]

  const categories = ['All', 'Business', 'Casual', 'Travel', 'Accessories', 'Formal']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All' 
    ? womenProducts 
    : womenProducts.filter(product => product.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Women&apos;s Collection
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Discover our elegant selection of premium leather goods designed for the contemporary woman. 
              Each piece embodies sophistication, functionality, and timeless style.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Elegance Meets Functionality
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our women&apos;s collection celebrates the modern woman&apos;s lifestyle, offering pieces that seamlessly 
                  transition from professional settings to personal moments. Each bag and accessory is thoughtfully 
                  designed to complement your individual style while providing the functionality you need.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From sophisticated handbags for the boardroom to elegant evening clutches for special occasions, 
                  every piece is meticulously crafted using the finest leathers and traditional techniques, 
                  ensuring beauty that lasts for generations.
                </p>
              </div>
              <div className="aspect-square bg-brand-light rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Elegant women's leather handbag"
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
                      e.target.style.backgroundColor = '#8d5c4b'
                      e.target.style.color = 'white'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.backgroundColor = 'transparent'
                      e.target.style.color = '#8d5c4b'
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
                      <button className="text-white px-6 py-2 rounded-lg font-medium transition-colors" style={{backgroundColor: '#8d5c4b'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#7a4f3e'} onMouseLeave={(e) => e.target.style.backgroundColor = '#8d5c4b'}>
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
              Why Women Choose Expert London
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Thoughtful Design
                </h3>
                <p className="text-gray-600">
                  Every piece is designed with a woman&apos;s lifestyle in mind, balancing 
                  beauty with practical functionality for modern living.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Versatile Elegance
                </h3>
                <p className="text-gray-600">
                  Timeless designs that transition seamlessly from day to night, 
                  office to social events, adapting to your dynamic lifestyle.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  The finest leathers and impeccable craftsmanship ensure each piece 
                  becomes more beautiful with age, just like you.
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

export default WomenPage