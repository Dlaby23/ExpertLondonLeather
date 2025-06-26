import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leather Care Guide - Expert London Leather',
  description: 'Learn how to properly care for your leather goods to ensure they last a lifetime. Expert tips from our master craftsmen.',
}

const CareGuidePage = () => {
  const careSteps = [
    {
      title: 'Regular Cleaning',
      description: 'Wipe with a clean, dry cloth after each use. Remove dust and dirt before they settle.',
      tips: ['Use a soft microfiber cloth', 'Always wipe in the direction of the grain', 'Never use harsh chemicals']
    },
    {
      title: 'Conditioning',
      description: 'Apply leather conditioner every 3-6 months to keep the leather supple and prevent cracking.',
      tips: ['Use high-quality leather conditioner', 'Test on a hidden area first', 'Apply thin, even coats']
    },
    {
      title: 'Storage',
      description: 'Store in a cool, dry place away from direct sunlight and heat sources.',
      tips: ['Use dust bags when not in use', 'Stuff bags with tissue paper to maintain shape', 'Avoid plastic bags']
    },
    {
      title: 'Water Protection',
      description: 'Protect from water damage by applying leather protector and avoiding exposure to rain.',
      tips: ['Blot, don\'t rub wet leather', 'Let dry naturally, away from heat', 'Use leather protector spray']
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Leather Care Guide
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Proper care ensures your leather goods will last for generations. Follow our expert guidelines 
              to maintain the beauty and durability of your investment.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {careSteps.map((step, index) => (
                <div key={index} className="bg-brand-light rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <span className="text-brand-primary mr-2">•</span>
                        <span className="text-sm text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-brand-cream rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-8">
                Professional Care Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Cleaning</h3>
                  <p className="text-gray-600">Professional deep cleaning service to restore your leather goods.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Restoration</h3>
                  <p className="text-gray-600">Expert restoration for vintage and damaged leather items.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Annual Service</h3>
                  <p className="text-gray-600">Comprehensive annual maintenance to extend product life.</p>
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

export default CareGuidePage