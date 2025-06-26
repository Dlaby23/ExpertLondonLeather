import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative bg-brand-light py-20 lg:py-32" style={{background: 'linear-gradient(to bottom right, #f1e4d4, #ece7dd)'}}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Exquisite
              <span className="text-brand-primary block">Leather Craftsmanship</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our collection of premium handcrafted leather goods, meticulously created 
              by skilled artisans in the heart of London. Each piece tells a story of tradition, 
              quality, and timeless elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-center">
                Explore Collection
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                Our Story
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary">100%</div>
                <div className="text-sm text-gray-600">Handcrafted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-lg">
              <div className="absolute inset-0 rounded-2xl transform rotate-3" style={{background: 'linear-gradient(to right, #a5765b, #8d5c4b)'}}></div>
              <div className="relative bg-white rounded-2xl p-10 shadow-xl">
                <div className="aspect-square bg-brand-neutral rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Premium Leather Bag"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-serif font-semibold">Premium Collection</h3>
                <p className="text-gray-600 mt-2">Handcrafted with the finest materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero