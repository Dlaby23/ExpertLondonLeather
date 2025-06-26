import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lifetime Warranty - Expert London Leather',
  description: 'Our comprehensive lifetime warranty covers all handcrafted leather goods. Quality guaranteed for life.',
}

const WarrantyPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Lifetime Warranty
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              We stand behind every piece we create. Our lifetime warranty ensures your investment 
              in quality craftsmanship is protected for years to come.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  What&apos;s Covered
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Manufacturing Defects</h3>
                      <p className="text-gray-600 text-sm">Any defects in materials or workmanship</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hardware Issues</h3>
                      <p className="text-gray-600 text-sm">Broken zippers, clasps, or buckles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Stitching Problems</h3>
                      <p className="text-gray-600 text-sm">Loose or broken stitching under normal use</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Leather Quality</h3>
                      <p className="text-gray-600 text-sm">Premature cracking or splitting of leather</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  What&apos;s Not Covered
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Normal Wear</h3>
                      <p className="text-gray-600 text-sm">Natural aging, patina development, minor scuffs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Misuse or Abuse</h3>
                      <p className="text-gray-600 text-sm">Damage from improper use or care</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Accidents</h3>
                      <p className="text-gray-600 text-sm">Cuts, burns, stains, or water damage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Modifications</h3>
                      <p className="text-gray-600 text-sm">Alterations made by third parties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-light rounded-2xl p-8 lg:p-12 mb-16">
              <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-8">
                Warranty Process
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600 text-sm">Email our warranty team with photos of the issue</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
                  <p className="text-gray-600 text-sm">We evaluate your claim and provide a solution</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Repair/Replace</h3>
                  <p className="text-gray-600 text-sm">We repair or replace your item at no charge</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Return</h3>
                  <p className="text-gray-600 text-sm">Your restored item is returned with free shipping</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-cream rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
                Contact Warranty Service
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">warranty@expertlondonleather.com</p>
                  <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">+44 20 7123 4567</p>
                  <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9:00 AM - 6:00 PM</p>
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

export default WarrantyPage