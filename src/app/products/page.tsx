'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Executive Briefcase',
      category: 'Business',
      price: '£450',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional leather briefcase perfect for business meetings and daily office use.',
    },
    {
      id: 2,
      name: 'Vintage Messenger',
      category: 'Casual',
      price: '£320',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Stylish messenger bag crafted from premium leather for everyday adventures.',
    },
    {
      id: 3,
      name: 'Luxury Wallet',
      category: 'Accessories',
      price: '£95',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Handcrafted wallet with premium card slots and RFID protection.',
    },
    {
      id: 4,
      name: 'Travel Duffle',
      category: 'Travel',
      price: '£580',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spacious duffle bag designed for weekend getaways and business trips.',
    },
    {
      id: 5,
      name: 'Classic Tote',
      category: 'Casual',
      price: '£280',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant tote bag perfect for shopping and daily essentials.',
    },
    {
      id: 6,
      name: 'Document Portfolio',
      category: 'Business',
      price: '£195',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional portfolio for documents and presentations.',
    },
    {
      id: 7,
      name: 'Designer Handbag',
      category: 'Casual',
      price: '£395',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant designer handbag with gold hardware and premium leather finish.',
    },
    {
      id: 8,
      name: 'Card Holder',
      category: 'Accessories',
      price: '£45',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Minimalist card holder with space for 6 cards and cash compartment.',
    },
    {
      id: 9,
      name: 'Weekend Holdall',
      category: 'Travel',
      price: '£525',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spacious holdall perfect for weekend trips with reinforced handles.',
    },
    {
      id: 10,
      name: 'Laptop Bag',
      category: 'Business',
      price: '£225',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Protective laptop bag with padded compartments for 15-inch laptops.',
    },
    {
      id: 11,
      name: 'Phone Case',
      category: 'Accessories',
      price: '£65',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium leather phone case with card slots and magnetic closure.',
    },
    {
      id: 12,
      name: 'Crossbody Bag',
      category: 'Casual',
      price: '£185',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Compact crossbody bag perfect for hands-free daily adventures.',
    },
    {
      id: 13,
      name: 'Rolling Suitcase',
      category: 'Travel',
      price: '£750',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium leather rolling suitcase with brass hardware and fabric lining.',
    },
    {
      id: 14,
      name: 'Money Clip',
      category: 'Accessories',
      price: '£85',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Sleek money clip with leather backing and stainless steel clip.',
    },
    {
      id: 15,
      name: 'Office Organizer',
      category: 'Business',
      price: '£145',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Desktop organizer with compartments for pens, cards, and documents.',
    },
    {
      id: 16,
      name: 'Belt',
      category: 'Accessories',
      price: '£125',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Classic leather belt with solid brass buckle and edge stitching.',
    },
    {
      id: 17,
      name: 'Backpack',
      category: 'Casual',
      price: '£425',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Vintage-style leather backpack with laptop compartment and side pockets.',
    },
    {
      id: 18,
      name: 'Toiletry Bag',
      category: 'Travel',
      price: '£165',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Water-resistant toiletry bag with multiple compartments and hanging hook.',
    },
    {
      id: 19,
      name: 'Key Fob',
      category: 'Accessories',
      price: '£35',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Hand-stitched key fob with solid brass ring and personalization option.',
    },
    {
      id: 20,
      name: 'Conference Folder',
      category: 'Business',
      price: '£175',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional conference folder with notepad holder and pen loop.',
    },
    {
      id: 21,
      name: 'Evening Clutch',
      category: 'Casual',
      price: '£215',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant evening clutch with detachable chain strap and silk lining.',
    },
  ]

  const categories = ['All', 'Business', 'Casual', 'Travel', 'Accessories']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Explore our complete collection of handcrafted leather goods, each piece representing 
              the finest in British craftsmanship and design.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
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
      </main>
      <Footer />
    </>
  )
}

export default ProductsPage