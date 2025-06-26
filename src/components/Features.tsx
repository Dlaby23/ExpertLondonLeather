'use client'

import Image from 'next/image'

const Features = () => {
  const features = [
    {
      iconImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      title: 'Artisan Crafted',
      description: 'Each piece is meticulously handcrafted by skilled artisans with decades of experience in leatherworking.',
    },
    {
      iconImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      title: 'Premium Materials',
      description: 'We source only the finest full-grain leather from ethical suppliers, ensuring durability and beauty.',
    },
    {
      iconImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      title: 'Made in London',
      description: 'Proudly crafted in our London workshop, maintaining traditional techniques passed down through generations.',
    },
    {
      iconImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      title: 'Sustainable',
      description: 'Committed to sustainable practices, we create products that last a lifetime, reducing environmental impact.',
    },
    {
      iconImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      title: 'Bespoke Service',
      description: 'Personalize your leather goods with custom engraving, colors, and designs to make them uniquely yours.',
    },
    {
      iconImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      title: 'Lifetime Warranty',
      description: 'We stand behind our craftsmanship with a comprehensive warranty and repair service for life.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Why Choose Expert London
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence sets us apart in the world of luxury leather goods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl transition-colors duration-300 h-full flex flex-col" style={{backgroundColor: '#f1e4d4'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#fcece4'} onMouseLeave={(e) => e.target.style.backgroundColor = '#f1e4d4'}
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden mb-6">
                <Image
                  src={feature.iconImage}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features