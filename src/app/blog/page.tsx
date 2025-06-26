'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Leather Craftsmanship: A Journey Through Time',
      excerpt: 'Discover the ancient techniques and modern innovations that go into creating our premium leather goods. From selecting the finest hides to the final finishing touches.',
      author: 'James Mitchell',
      date: 'March 15, 2024',
      category: 'Craftsmanship',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'How to Care for Your Leather Goods: A Complete Guide',
      excerpt: 'Learn the essential tips and techniques to maintain your leather products and ensure they age beautifully over time. Proper care extends the life of your investment.',
      author: 'Sarah Thompson',
      date: 'March 10, 2024',
      category: 'Care Guide',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Sustainable Leather: Our Commitment to the Environment',
      excerpt: 'Explore our sustainable practices and commitment to responsible sourcing. Learn how we balance traditional craftsmanship with environmental consciousness.',
      author: 'David Green',
      date: 'March 5, 2024',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'The Perfect Business Bag: A Gentleman\'s Guide',
      excerpt: 'Navigate the world of professional leather goods with confidence. Find the perfect briefcase or laptop bag that complements your business style.',
      author: 'Michael Roberts',
      date: 'February 28, 2024',
      category: 'Style Guide',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Behind the Scenes: A Day in Our London Workshop',
      excerpt: 'Take an exclusive look inside our London workshop and meet the master craftsmen who bring our leather goods to life through traditional techniques.',
      author: 'Emma Clarke',
      date: 'February 20, 2024',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Travel in Style: Essential Leather Accessories for the Modern Traveler',
      excerpt: 'Discover the must-have leather accessories that combine functionality with elegance for your next adventure, whether business or leisure.',
      author: 'Alexander Hayes',
      date: 'February 15, 2024',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      readTime: '9 min read',
    },
  ]

  const categories = ['All', 'Craftsmanship', 'Care Guide', 'Sustainability', 'Style Guide', 'Workshop', 'Travel']

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              The Leather Journal
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Insights, stories, and expertise from the world of premium leather craftsmanship. 
              Discover the artistry behind every piece and learn to care for your treasured goods.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm border transition-all duration-200"
                  style={{
                    border: '1px solid #a5765b',
                    color: '#8d5c4b'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#8d5c4b'
                    e.target.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#8d5c4b'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="px-3 py-1 bg-brand-light rounded-full text-brand-primary font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <div className="font-medium">{post.author}</div>
                        <div>{post.date}</div>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-brand-primary font-medium text-sm hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter and be the first to read our latest articles, 
                learn about new products, and receive exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
                <button className="px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default BlogPage