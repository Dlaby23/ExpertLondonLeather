import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Expert London Leather - Premium Leather Goods',
  description: 'Discover exquisite handcrafted leather goods from Expert London. Premium quality leather bags, accessories, and bespoke items made in London.',
  keywords: 'leather goods, handcrafted leather, London leather, premium bags, leather accessories',
  openGraph: {
    title: 'Expert London Leather - Premium Leather Goods',
    description: 'Discover exquisite handcrafted leather goods from Expert London.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}