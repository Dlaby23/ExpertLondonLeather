'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ReferFriendsPage = () => {
  const [referralCode, setReferralCode] = useState('LEATHER2024')
  const [friends, setFriends] = useState([
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', status: 'pending', reward: '£25' },
    { id: 2, name: 'Michael Brown', email: 'michael@example.com', status: 'completed', reward: '£25' },
    { id: 3, name: 'Emma Wilson', email: 'emma@example.com', status: 'completed', reward: '£25' },
  ])
  const [formData, setFormData] = useState({
    friendName: '',
    friendEmail: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Referral sent:', formData)
    setFormData({ friendName: '', friendEmail: '', message: '' })
  }

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode)
  }

  const totalEarnings = friends
    .filter(friend => friend.status === 'completed')
    .reduce((sum, friend) => sum + parseInt(friend.reward.replace('£', '')), 0)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Refer Friends & Earn Rewards
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Share the love of premium leather craftsmanship with your friends and earn exclusive rewards when they make their first purchase.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  How It Works
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Your Code</h3>
                      <p className="text-gray-600">Send your unique referral code to friends who appreciate quality leather goods.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Friend Makes Purchase</h3>
                      <p className="text-gray-600">Your friend gets 15% off their first order using your referral code.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">You Earn Rewards</h3>
                      <p className="text-gray-600">Receive £25 store credit for each successful referral to spend on future purchases.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-square bg-brand-light rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Friends sharing leather goods"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Referral Dashboard */}
              <div className="bg-brand-light rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Your Referral Dashboard</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-brand-primary mb-2">{friends.length}</div>
                    <div className="text-sm text-gray-600">Friends Referred</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">£{totalEarnings}</div>
                    <div className="text-sm text-gray-600">Total Earned</div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Referral Code</label>
                  <div className="flex">
                    <input
                      type="text"
                      value={referralCode}
                      readOnly
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg bg-gray-50"
                    />
                    <button
                      onClick={copyReferralCode}
                      className="px-6 py-3 bg-brand-primary text-white rounded-r-lg hover:bg-brand-primary/90 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Referral History</h4>
                  <div className="space-y-3">
                    {friends.map((friend) => (
                      <div key={friend.id} className="flex items-center justify-between bg-white rounded-lg p-4">
                        <div>
                          <div className="font-medium text-gray-900">{friend.name}</div>
                          <div className="text-sm text-gray-600">{friend.email}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${
                            friend.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                          }`}>
                            {friend.status === 'completed' ? 'Completed' : 'Pending'}
                          </div>
                          <div className="text-sm text-gray-600">{friend.reward}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Refer New Friend */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Refer a Friend</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Friend&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="friendName"
                      value={formData.friendName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Enter your friend's name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Friend&apos;s Email
                    </label>
                    <input
                      type="email"
                      name="friendEmail"
                      value={formData.friendEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Enter your friend's email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Add a personal message to your invitation..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors"
                  >
                    Send Invitation
                  </button>
                </form>

                <div className="mt-8 p-4 bg-brand-cream rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Share</h4>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg text-sm hover:bg-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-cream">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h2>
            <div className="max-w-3xl mx-auto text-left space-y-4 text-gray-600">
              <p>• Referral rewards are credited to your account after your friend&apos;s first purchase is completed and the return period has passed.</p>
              <p>• The friend must be a new customer who has never purchased from Expert London before.</p>
              <p>• Referral credits have no expiry date and can be used on any future purchase.</p>
              <p>• Credits cannot be transferred or exchanged for cash.</p>
              <p>• Expert London reserves the right to modify or terminate the referral program at any time.</p>
              <p>• Maximum of one referral reward per new customer.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ReferFriendsPage