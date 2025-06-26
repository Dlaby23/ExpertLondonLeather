import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Returns & Exchanges - Expert London Leather',
  description: 'Our returns and exchange policy for handcrafted leather goods. Easy returns within 30 days.',
}

const ReturnsPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Returns & Exchanges
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              We want you to be completely satisfied with your purchase. Our flexible return policy 
              ensures you can shop with confidence.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Return Policy
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-gray-900">30-Day Return Window:</strong> You may return any item 
                    within 30 days of purchase for a full refund or exchange.
                  </p>
                  <p>
                    <strong className="text-gray-900">Condition Requirements:</strong> Items must be in original 
                    condition, unused, and with all tags attached.
                  </p>
                  <p>
                    <strong className="text-gray-900">Original Packaging:</strong> Please return items in their 
                    original packaging, including dust bags and boxes.
                  </p>
                  <p>
                    <strong className="text-gray-900">Proof of Purchase:</strong> A receipt or order confirmation 
                    is required for all returns.
                  </p>
                </div>
              </div>

              <div className="bg-brand-light rounded-2xl p-8">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                  How to Return
                </h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-brand-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    Contact our customer service team
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    Receive your return authorization number
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    Package your item securely
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    Ship using our prepaid return label
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    Receive your refund within 5-7 business days
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xs">
                  FREE
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Returns</h3>
                <p className="text-gray-600 text-sm">We provide prepaid return labels for all UK orders</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xs">
                  FAST
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Processing</h3>
                <p className="text-gray-600 text-sm">Refunds processed within 5-7 business days</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xs">
                  EASY
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Exchanges</h3>
                <p className="text-gray-600 text-sm">Simple size or color exchanges available</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Important Notes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Custom and personalized items cannot be returned unless defective</li>
                <li>• Sale items are final sale and cannot be returned</li>
                <li>• International returns may incur additional shipping charges</li>
                <li>• Items showing signs of wear or damage cannot be accepted</li>
                <li>• Gift cards and digital products are non-refundable</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ReturnsPage