import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ContractPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-brand-cream">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services or purchasing our products.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom max-w-4xl">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    1. General Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These terms and conditions outline the rules and regulations for the use of Expert London Leather&apos;s 
                    website and services. By accessing this website and purchasing our products, you accept these terms 
                    and conditions in full.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Expert London reserves the right to modify these terms at any time. Changes will be effective 
                    immediately upon posting on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    2. Product Information & Pricing
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We strive to provide accurate product descriptions and pricing. However, we do not warrant that 
                    product descriptions, colors, or other content is accurate, complete, reliable, current, or error-free.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>All prices are listed in British Pounds (£) and include VAT where applicable</li>
                    <li>Prices are subject to change without notice</li>
                    <li>Product availability is subject to stock levels</li>
                    <li>We reserve the right to limit quantities purchased</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    3. Orders & Payment
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    By placing an order, you are making an offer to purchase products subject to these terms. 
                    We reserve the right to accept or decline any order.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Payment must be made in full at the time of order</li>
                    <li>We accept major credit cards and PayPal</li>
                    <li>Orders are processed within 1-2 business days</li>
                    <li>You will receive email confirmation of your order</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    4. Shipping & Delivery
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We offer worldwide shipping with various delivery options. Delivery times and costs vary by location 
                    and shipping method selected.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>UK delivery: 2-5 business days</li>
                    <li>International delivery: 5-14 business days</li>
                    <li>Shipping costs calculated at checkout</li>
                    <li>Risk of loss passes to customer upon delivery</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    5. Returns & Exchanges
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We want you to be completely satisfied with your purchase. Returns and exchanges are accepted 
                    within 30 days of delivery for unused items in original condition.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Items must be unused and in original packaging</li>
                    <li>Customer responsible for return shipping costs</li>
                    <li>Refunds processed within 5-10 business days</li>
                    <li>Custom or personalized items are non-returnable</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    6. Warranty & Care
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    All Expert London products come with our lifetime warranty against manufacturing defects. 
                    This warranty does not cover normal wear and tear or damage from misuse.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Lifetime warranty against manufacturing defects</li>
                    <li>Free repair service for warranty claims</li>
                    <li>Proper care instructions provided with each product</li>
                    <li>Warranty void if product is altered or repaired by third parties</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    7. Privacy & Data Protection
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We are committed to protecting your privacy and personal data in accordance with GDPR and UK data 
                    protection laws. Please refer to our Privacy Policy for detailed information.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Personal data collected only for order processing and communication</li>
                    <li>Data not shared with third parties without consent</li>
                    <li>Secure payment processing</li>
                    <li>Right to access, modify, or delete personal data</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    8. Limitation of Liability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Expert London&apos;s liability is limited to the purchase price of the product. We are not liable for 
                    any indirect, incidental, special, or consequential damages arising from the use of our products 
                    or services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    9. Governing Law
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    These terms are governed by and construed in accordance with English law. Any disputes arising 
                    from these terms will be subject to the exclusive jurisdiction of the English courts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    10. Contact Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about these terms and conditions, please contact us:
                  </p>
                  <div className="bg-brand-light rounded-lg p-6">
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Expert London Leather</strong></p>
                      <p>123 Leather Lane, London EC1N 7DR</p>
                      <p>Phone: +44 20 7123 4567</p>
                      <p>Email: legal@expertlondonstore.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Last updated: March 2024<br />
                    These terms and conditions are effective as of the date last updated.
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

export default ContractPage