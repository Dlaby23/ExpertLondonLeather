'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const GroupsPage = () => {
  const [activeTab, setActiveTab] = useState('discover')

  const groups = [
    {
      id: 1,
      name: 'London Leather Enthusiasts',
      description: 'A community for leather craft lovers in London to share experiences, tips, and meet fellow enthusiasts.',
      members: 342,
      posts: 1250,
      category: 'Local Community',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isJoined: true,
      privacy: 'Public',
    },
    {
      id: 2,
      name: 'Business Bag Collectors',
      description: 'Dedicated to professionals who appreciate fine business leather goods. Share your collection and get advice.',
      members: 189,
      posts: 856,
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isJoined: false,
      privacy: 'Public',
    },
    {
      id: 3,
      name: 'Leather Care & Maintenance',
      description: 'Learn how to properly care for your leather goods. Tips, tricks, and product recommendations from experts.',
      members: 567,
      posts: 2341,
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isJoined: true,
      privacy: 'Public',
    },
    {
      id: 4,
      name: 'VIP Members Circle',
      description: 'Exclusive group for Expert London VIP customers. Early access to new products and special events.',
      members: 94,
      posts: 412,
      category: 'VIP',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isJoined: false,
      privacy: 'Private',
    },
    {
      id: 5,
      name: 'Travel Gear Community',
      description: 'For travelers who demand the best in leather travel accessories. Share your adventures and gear reviews.',
      members: 278,
      posts: 934,
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isJoined: false,
      privacy: 'Public',
    },
    {
      id: 6,
      name: 'Sustainable Leather Advocates',
      description: 'Promoting ethical and sustainable practices in leather production. Discuss eco-friendly options and brands.',
      members: 431,
      posts: 1567,
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isJoined: true,
      privacy: 'Public',
    },
  ]

  const recentActivity = [
    {
      id: 1,
      user: 'Sarah Mitchell',
      action: 'shared a photo',
      group: 'London Leather Enthusiasts',
      time: '2 hours ago',
      content: 'Just picked up my new Expert London briefcase! The craftsmanship is incredible.',
    },
    {
      id: 2,
      user: 'David Thompson',
      action: 'asked a question',
      group: 'Leather Care & Maintenance',
      time: '4 hours ago',
      content: 'What\'s the best way to condition a new leather wallet?',
    },
    {
      id: 3,
      user: 'Emma Clarke',
      action: 'posted an update',
      group: 'Sustainable Leather Advocates',
      time: '6 hours ago',
      content: 'Great article about vegetable-tanned leather processes. Worth a read!',
    },
    {
      id: 4,
      user: 'Michael Roberts',
      action: 'shared a review',
      group: 'Business Bag Collectors',
      time: '1 day ago',
      content: 'After 6 months of daily use, my Executive Briefcase still looks brand new.',
    },
  ]

  const myGroups = groups.filter(group => group.isJoined)
  const allGroups = groups

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Leather Community Groups
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Connect with fellow leather enthusiasts, share your passion, and learn from experts in our vibrant community groups.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            {/* Navigation Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('discover')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'discover'
                    ? 'border-b-2 border-brand-primary text-brand-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Discover Groups
              </button>
              <button
                onClick={() => setActiveTab('my-groups')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'my-groups'
                    ? 'border-b-2 border-brand-primary text-brand-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                My Groups ({myGroups.length})
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'activity'
                    ? 'border-b-2 border-brand-primary text-brand-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Recent Activity
              </button>
            </div>

            {/* Discover Groups Tab */}
            {activeTab === 'discover' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">
                    Discover New Groups
                  </h2>
                  <button className="px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors">
                    Create New Group
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allGroups.map((group) => (
                    <div
                      key={group.id}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={group.image}
                          alt={group.name}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-brand-light text-brand-primary text-sm font-medium rounded-full">
                            {group.category}
                          </span>
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                            group.privacy === 'Public' 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-orange-100 text-orange-600'
                          }`}>
                            {group.privacy}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                          {group.name}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                          {group.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{group.members} members</span>
                          <span>{group.posts} posts</span>
                        </div>
                        
                        <button
                          className={`w-full py-2 rounded-lg font-medium transition-colors ${
                            group.isJoined
                              ? 'bg-gray-100 text-gray-600 cursor-default'
                              : 'bg-brand-primary text-white hover:bg-brand-primary/90'
                          }`}
                          disabled={group.isJoined}
                        >
                          {group.isJoined ? 'Joined' : 'Join Group'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* My Groups Tab */}
            {activeTab === 'my-groups' && (
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                  Your Groups
                </h2>

                {myGroups.length > 0 ? (
                  <div className="space-y-6">
                    {myGroups.map((group) => (
                      <div
                        key={group.id}
                        className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center gap-6"
                      >
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={group.image}
                            alt={group.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                            {group.name}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {group.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{group.members} members</span>
                            <span>{group.posts} posts</span>
                            <span className="px-2 py-1 bg-brand-light text-brand-primary rounded">
                              {group.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                            View Group
                          </button>
                          <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                            Leave
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Groups Yet</h3>
                    <p className="text-gray-600 mb-4">You haven't joined any groups yet. Discover communities that match your interests!</p>
                    <button
                      onClick={() => setActiveTab('discover')}
                      className="px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors"
                    >
                      Discover Groups
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Recent Activity Tab */}
            {activeTab === 'activity' && (
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                  Recent Activity
                </h2>

                <div className="space-y-6">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white rounded-2xl border border-gray-100 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-brand-primary font-semibold">
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-gray-900">{activity.user}</span>
                            <span className="text-gray-600">{activity.action} in</span>
                            <span className="text-brand-primary font-medium">{activity.group}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400 text-sm">{activity.time}</span>
                          </div>
                          
                          <p className="text-gray-600">
                            {activity.content}
                          </p>
                          
                          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                            <button className="hover:text-brand-primary transition-colors">Like</button>
                            <button className="hover:text-brand-primary transition-colors">Comment</button>
                            <button className="hover:text-brand-primary transition-colors">Share</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                    Load More Activity
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-brand-cream">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Why Join Our Community?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Connect with Experts
                </h3>
                <p className="text-gray-600">
                  Learn from master craftsmen and experienced leather enthusiasts who share their knowledge freely.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Exclusive Content
                </h3>
                <p className="text-gray-600">
                  Access exclusive tutorials, care guides, and early previews of new products before general release.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Special Offers
                </h3>
                <p className="text-gray-600">
                  Community members receive exclusive discounts, early access to sales, and special group pricing.
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

export default GroupsPage