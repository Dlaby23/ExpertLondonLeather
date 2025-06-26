import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Expert London Leather',
  description: 'Learn about our story, craftsmanship, and commitment to creating the finest leather goods in London.',
}

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              For over 25 years, Expert London has been crafting exceptional leather goods 
              that blend traditional techniques with contemporary design.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Heritage & Craftsmanship
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 1998 in the heart of London, Expert London was born from a passion 
                  for exceptional leather craftsmanship. Our founder, James Mitchell, learned 
                  traditional leatherworking techniques from master craftsmen across Europe.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Today, we continue this legacy by combining time-honored methods with modern 
                  design sensibilities. Each piece is carefully handcrafted in our London 
                  workshop using only the finest materials sourced from ethical suppliers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to quality means that every item undergoes rigorous inspection 
                  before leaving our workshop, ensuring you receive a product that will last 
                  for generations.
                </p>
              </div>
              <div className="bg-brand-light rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="w-48 h-48 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Master Craftsman at work"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Master Craftsmen
                </h3>
                <p className="text-gray-600">
                  Over 25 years of experience in traditional leatherworking
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg mx-auto mb-4 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Sustainable Leather Materials"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  Sustainable Practices
                </h3>
                <p className="text-gray-600">
                  We source materials responsibly and create products designed to last a lifetime.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg mx-auto mb-4 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Custom Leather Crafting"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  Bespoke Design
                </h3>
                <p className="text-gray-600">
                  Custom designs and personalization services to make each piece uniquely yours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg mx-auto mb-4 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Award-Winning Leather Goods"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  Award Winning
                </h3>
                <p className="text-gray-600">
                  Recognized for excellence in craftsmanship and design by industry experts.
                </p>
              </div>
            </div>

            <div className="bg-brand-cream rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-brand-primary rounded-full"></div>
                <div className="absolute top-8 right-12 w-8 h-8 border border-brand-primary rounded-full"></div>
                <div className="absolute bottom-6 left-16 w-12 h-12 border border-brand-primary rounded-full"></div>
                <div className="absolute bottom-12 right-8 w-6 h-6 bg-brand-primary rounded-full"></div>
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12 relative z-10">
                Our Commitment
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-brand-primary/20 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900">Quality Assurance</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Every product comes with our lifetime warranty and repair service, 
                    demonstrating our confidence in the quality of our craftsmanship.
                  </p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-brand-primary/20 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900">Customer Service</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our dedicated team is here to help you find the perfect leather goods 
                    and provide ongoing support throughout your ownership experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage