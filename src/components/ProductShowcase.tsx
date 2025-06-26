'use client'

import Link from 'next/link'
import Image from 'next/image'

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Executive Briefcase',
      category: 'Business',
      price: '£450',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional leather briefcase perfect for business meetings',
    },
    {
      id: 2,
      name: 'Vintage Messenger',
      category: 'Casual',
      price: '£320',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Stylish messenger bag for everyday adventures',
    },
    {
      id: 3,
      name: 'Luxury Wallet',
      category: 'Accessories',
      price: '£95',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Handcrafted wallet with premium card slots',
    },
    {
      id: 4,
      name: 'Travel Duffle',
      category: 'Travel',
      price: '£580',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spacious duffle bag for weekend getaways',
    },
  ]

  return (
    <section className="py-20 bg-brand-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular handcrafted leather goods, each piece a testament to quality and style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
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
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-brand-primary">
                    {product.price}
                  </span>
                  <button className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" style={{backgroundColor: '#8d5c4b'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#7a4f3e'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#8d5c4b'}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase