import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop All Products - Expert London Leather',
  description: 'Browse our complete collection of handcrafted leather goods. Premium bags, wallets, accessories and more, all made with traditional craftsmanship.',
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}