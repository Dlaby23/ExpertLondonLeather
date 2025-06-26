'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Get in touch with our team. We're here to help you find the perfect leather goods 
              or answer any questions about our craftsmanship.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center text-white text-2xl">
                      📍
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Our Workshop</h3>
                      <p className="text-gray-600">
                        123 Leather Street<br />
                        London, SW1A 1AA<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center text-white text-2xl">
                      📞
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+442071234567" className="text-brand-primary hover:underline font-medium">
                          +44 20 7123 4567
                        </a><br />
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center text-white text-2xl">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@expertlondonleather.com" className="text-brand-primary hover:underline font-medium">
                          info@expertlondonleather.com
                        </a><br />
                        <a href="mailto:orders@expertlondonleather.com" className="text-brand-primary hover:underline font-medium">
                          orders@expertlondonleather.com
                        </a><br />
                        <a href="mailto:support@expertlondonleather.com" className="text-brand-primary hover:underline font-medium">
                          support@expertlondonleather.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                    Workshop Hours
                  </h3>
                  <div className="bg-brand-light rounded-xl p-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Mon - Fri</div>
                        <div className="text-gray-600">9:00 AM - 6:00 PM</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Saturday</div>
                        <div className="text-gray-600">10:00 AM - 4:00 PM</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Sunday</div>
                        <div className="text-red-600 font-medium">Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-light rounded-2xl p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="repair-service">Repair Service</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="general">General Question</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Visit Our London Workshop
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience our craftsmanship firsthand. Book an appointment to visit our workshop 
                and see our artisans at work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  onClick={() => window.open('https://maps.google.com/maps?q=123+Leather+Street,+London,+SW1A+1AA', '_blank')}
                  className="btn-primary"
                >
                  📍 Get Directions
                </button>
                <button 
                  onClick={() => window.open('tel:+442071234567', '_self')}
                  className="btn-secondary"
                >
                  📞 Call Workshop
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2851482164315!2d-0.12768908442284889!3d51.50735197963597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slondon%20leather%20workshop!5e0!3m2!1sen!2suk!4v1640995200000!5m2!1sen!2suk"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Expert London Leather Workshop Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage